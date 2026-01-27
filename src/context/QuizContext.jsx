import {
  createContext,
  useReducer,
  useMemo,
  useCallback,
  useEffect,
  useState,
  useRef,
} from 'react';
import questionsConfig from '../../config/questions.json';
import causesConfig from '../../config/causes.json';
import features from '../../config/features.json';
import { detectShareUrl, parseShareUrlAsync, clearShareHash } from '../utils/shareUrl';
import {
  getOrCreateSessionId,
  saveQuizState,
  loadQuizState,
  clearQuizState,
  hasSavedState,
  checkAndClearSkipConflict,
  setSkipConflict,
} from '../utils/session';
import {
  OPTION_COLORS,
  QUESTION_TYPE_COLORS,
  INPUT_MODES,
  QUESTION_TYPES,
} from '../constants/config';
import SessionConflictModal from '../components/ui/SessionConflictModal';
import {
  calculateMaxEV,
  calculateVarianceVoting,
  calculateMergedFavorites,
  calculateMaximin,
} from '../utils/calculations';

const { questions: rawQuestions } = questionsConfig;
const { causes: CAUSES, defaultCredences } = causesConfig;

// Feature flag check - used to filter intermission questions
const isQuestionTypesEnabled = features.ui?.questionTypes !== false;

/**
 * Check if a question should be included in the quiz.
 * Excludes: disabled types (starting with _), and intermissions when questionTypes is off.
 */
function isValidQuestion(question) {
  // Skip disabled questions (type starts with underscore)
  if (question.type?.startsWith('_')) return false;
  // Skip intermissions when questionTypes is disabled
  if (!isQuestionTypesEnabled && question.type === QUESTION_TYPES.INTERMISSION) return false;
  return true;
}

// Filter out disabled and conditionally excluded questions
const questions = rawQuestions.filter(isValidQuestion);

/**
 * Check if a question is an intermission type.
 */
function isIntermission(question) {
  return question?.type === QUESTION_TYPES.INTERMISSION;
}

/**
 * Count non-intermission questions up to (but not including) a given index.
 */
function countNonIntermissionsBefore(questionList, endIndex) {
  let count = 0;
  for (let i = 0; i < endIndex; i++) {
    if (!isIntermission(questionList[i])) count++;
  }
  return count;
}

/**
 * Get colors for a question based on its type.
 */
function getColorsForQuestion(question) {
  if (isQuestionTypesEnabled) {
    const questionType = question.type || QUESTION_TYPES.DEFAULT;
    return QUESTION_TYPE_COLORS[questionType] || QUESTION_TYPE_COLORS[QUESTION_TYPES.DEFAULT];
  }
  return OPTION_COLORS;
}

// Get questions that count toward progress (excludes intermissions)
const progressQuestions = questions.filter((q) => !isIntermission(q));
const totalQuestions = progressQuestions.length;

// Add color and normalized type to each question
const questionsWithColors = questions.map((question) => {
  if (isIntermission(question)) {
    return { ...question, type: QUESTION_TYPES.INTERMISSION };
  }

  const colors = getColorsForQuestion(question);
  return {
    ...question,
    type: question.type || QUESTION_TYPES.DEFAULT,
    options: question.options.map((opt, index) => ({
      ...opt,
      color: colors[index] || colors[0],
    })),
  };
});

/**
 * Create initial state for a single question.
 */
function createQuestionState() {
  return {
    credences: { ...defaultCredences },
    originalCredences: null,
    inputMode: INPUT_MODES.OPTIONS,
    lockedKey: null,
  };
}

/**
 * Create initial state for all questions (excluding intermissions).
 */
function createInitialQuestionsState() {
  return Object.fromEntries(
    questions.filter((q) => !isIntermission(q)).map((q) => [q.id, createQuestionState()])
  );
}

const initialState = {
  currentStep: 'welcome',
  questions: createInitialQuestionsState(),
  expandedPanel: null,
  debugConfig: null,
};

const ACTIONS = {
  GO_TO_STEP: 'GO_TO_STEP',
  UPDATE_QUESTION: 'UPDATE_QUESTION',
  SET_EXPANDED_PANEL: 'SET_EXPANDED_PANEL',
  SAVE_ORIGINALS: 'SAVE_ORIGINALS',
  RESET_TO_ORIGINAL: 'RESET_TO_ORIGINAL',
  RESET_QUIZ: 'RESET_QUIZ',
  SET_DEBUG_CONFIG: 'SET_DEBUG_CONFIG',
  RESTORE_FROM_URL: 'RESTORE_FROM_URL',
  RESTORE_FROM_SESSION: 'RESTORE_FROM_SESSION',
};

/**
 * Helper to update a single question's state immutably.
 */
function updateQuestion(state, questionId, updates) {
  return {
    ...state,
    questions: {
      ...state.questions,
      [questionId]: {
        ...state.questions[questionId],
        ...updates,
      },
    },
  };
}

function quizReducer(state, action) {
  switch (action.type) {
    case ACTIONS.GO_TO_STEP:
      return { ...state, currentStep: action.payload };

    case ACTIONS.UPDATE_QUESTION:
      return updateQuestion(state, action.payload.questionId, action.payload.updates);

    case ACTIONS.SET_EXPANDED_PANEL:
      return { ...state, expandedPanel: action.payload };

    case ACTIONS.SAVE_ORIGINALS:
      return {
        ...state,
        questions: Object.fromEntries(
          Object.entries(state.questions).map(([id, q]) => [
            id,
            { ...q, originalCredences: q.originalCredences || { ...q.credences } },
          ])
        ),
      };

    case ACTIONS.RESET_TO_ORIGINAL:
      return {
        ...state,
        questions: Object.fromEntries(
          Object.entries(state.questions).map(([id, q]) => [
            id,
            { ...q, credences: q.originalCredences ? { ...q.originalCredences } : q.credences },
          ])
        ),
      };

    case ACTIONS.RESET_QUIZ:
      return { ...initialState, questions: createInitialQuestionsState() };

    case ACTIONS.RESTORE_FROM_URL: {
      // Supports both legacy format (credences only) and new format (full question state)
      const { questions: urlQuestions, credences: legacyCredences } = action.payload;
      const newQuestions = {};

      if (urlQuestions) {
        // New format: full question state with inputMode and lockedKey
        for (const [questionId, qState] of Object.entries(urlQuestions)) {
          newQuestions[questionId] = {
            credences: qState.credences,
            originalCredences: { ...qState.credences },
            inputMode: qState.inputMode || INPUT_MODES.OPTIONS,
            lockedKey: qState.lockedKey || null,
          };
        }
      } else if (legacyCredences) {
        // Legacy format: credences only
        for (const [questionId, credences] of Object.entries(legacyCredences)) {
          newQuestions[questionId] = {
            ...createQuestionState(),
            credences,
            originalCredences: { ...credences },
          };
        }
      }

      return {
        ...state,
        currentStep: 'results',
        questions: newQuestions,
      };
    }

    case ACTIONS.RESTORE_FROM_SESSION: {
      const { currentStep, questions: sessionQuestions } = action.payload;
      const newQuestions = {};

      for (const [questionId, qState] of Object.entries(sessionQuestions)) {
        newQuestions[questionId] = {
          credences: qState.credences,
          originalCredences: null, // Session restore doesn't have originals
          inputMode: qState.inputMode || INPUT_MODES.OPTIONS,
          lockedKey: qState.lockedKey || null,
        };
      }

      return {
        ...state,
        currentStep,
        questions: newQuestions,
      };
    }

    case ACTIONS.SET_DEBUG_CONFIG:
      return { ...state, debugConfig: action.payload };

    default:
      return state;
  }
}

export const QuizContext = createContext(null);

export function QuizProvider({ children }) {
  const [state, dispatch] = useReducer(quizReducer, initialState);
  const [shareUrlError, setShareUrlError] = useState(null);
  const [isHydrating, setIsHydrating] = useState(true);
  const [conflictState, setConflictState] = useState(null);
  // Initialize session ID lazily (only once on first render)
  const [sessionId] = useState(() => getOrCreateSessionId());
  const saveTimeoutRef = useRef(null);

  /* eslint-disable react-hooks/set-state-in-effect -- intentional mount-only initialization */
  // Hydration effect: check for share URL and/or session storage on mount
  useEffect(() => {
    if (!features.ui?.shareResults) {
      // No share feature, just try to restore from session
      const savedState = loadQuizState();
      if (savedState) {
        dispatch({ type: ACTIONS.RESTORE_FROM_SESSION, payload: savedState });
      }
      setIsHydrating(false);
      return;
    }

    const hydrate = async () => {
      const shareDetected = detectShareUrl();
      const hasSession = hasSavedState();

      // No share URL - just restore from session if available
      if (shareDetected.type === null) {
        if (hasSession) {
          const savedState = loadQuizState();
          if (savedState) {
            dispatch({ type: ACTIONS.RESTORE_FROM_SESSION, payload: savedState });
          }
        }
        setIsHydrating(false);
        return;
      }

      // Share URL detected - parse it
      const shareResult = await parseShareUrlAsync();

      if (!shareResult) {
        // Invalid share URL, restore from session
        clearShareHash();
        if (hasSession) {
          const savedState = loadQuizState();
          if (savedState) {
            dispatch({ type: ACTIONS.RESTORE_FROM_SESSION, payload: savedState });
          }
        }
        setIsHydrating(false);
        return;
      }

      if (shareResult.error) {
        // Share URL error
        setShareUrlError(shareResult.error);
        clearShareHash();
        window.setTimeout(() => setShareUrlError(null), 5000);

        // Still restore from session if available
        if (hasSession) {
          const savedState = loadQuizState();
          if (savedState) {
            dispatch({ type: ACTIONS.RESTORE_FROM_SESSION, payload: savedState });
          }
        }
        setIsHydrating(false);
        return;
      }

      // Valid share URL - check for conflict
      // Skip conflict check if flag is set (e.g., opened via "Open in new tab")
      const skipConflict = checkAndClearSkipConflict();

      if (hasSession && !skipConflict) {
        const savedState = loadQuizState();
        // Only show conflict if user has made progress (not just on welcome screen)
        if (savedState && savedState.currentStep !== 'welcome') {
          // Store conflict state and wait for user decision
          setConflictState({
            shareData: shareResult,
            shareUrl: window.location.href,
          });
          setIsHydrating(false);
          return;
        }
      }

      // No conflict - load share data directly
      dispatch({ type: ACTIONS.RESTORE_FROM_URL, payload: { questions: shareResult.questions } });
      clearShareHash();
      clearQuizState(); // Clear any old session data
      setIsHydrating(false);
    };

    hydrate();
  }, []);
  /* eslint-enable react-hooks/set-state-in-effect */

  // Listen for hash changes (e.g., user pastes URL while already on page)
  useEffect(() => {
    if (!features.ui?.shareResults) return;

    const handleHashChange = async () => {
      const shareDetected = detectShareUrl();
      if (shareDetected.type === null) return;

      // Parse the share URL
      const shareResult = await parseShareUrlAsync();
      if (!shareResult || shareResult.error) {
        if (shareResult?.error) {
          setShareUrlError(shareResult.error);
          window.setTimeout(() => setShareUrlError(null), 5000);
        }
        clearShareHash();
        return;
      }

      // Check for conflict with current session
      const hasSession = hasSavedState();
      const skipConflict = checkAndClearSkipConflict();

      if (hasSession && !skipConflict) {
        const savedState = loadQuizState();
        if (savedState && savedState.currentStep !== 'welcome') {
          setConflictState({
            shareData: shareResult,
            shareUrl: window.location.href,
          });
          return;
        }
      }

      // No conflict - load share data directly
      dispatch({ type: ACTIONS.RESTORE_FROM_URL, payload: { questions: shareResult.questions } });
      clearShareHash();
      clearQuizState();
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Conflict resolution handlers
  const handleKeepMine = useCallback(() => {
    const savedState = loadQuizState();
    if (savedState) {
      dispatch({ type: ACTIONS.RESTORE_FROM_SESSION, payload: savedState });
    }
    clearShareHash();
    setConflictState(null);
  }, []);

  const handleLoadShared = useCallback(() => {
    if (conflictState?.shareData?.questions) {
      dispatch({
        type: ACTIONS.RESTORE_FROM_URL,
        payload: { questions: conflictState.shareData.questions },
      });
      clearQuizState(); // Clear session since we're loading shared
    }
    clearShareHash();
    setConflictState(null);
  }, [conflictState]);

  const handleOpenNewTab = useCallback(() => {
    // Set flag so the new tab skips conflict detection
    setSkipConflict();

    // Open share URL in new tab
    if (conflictState?.shareUrl) {
      window.open(conflictState.shareUrl, '_blank');
    }

    // Restore current session in this tab
    const savedState = loadQuizState();
    if (savedState) {
      dispatch({ type: ACTIONS.RESTORE_FROM_SESSION, payload: savedState });
    }
    clearShareHash();
    setConflictState(null);
  }, [conflictState]);

  // Persistence effect: save state to sessionStorage on changes (debounced)
  useEffect(() => {
    // Don't save during hydration or if on welcome screen
    if (isHydrating || state.currentStep === 'welcome') return;

    // Clear any pending save
    if (saveTimeoutRef.current) {
      clearTimeout(saveTimeoutRef.current);
    }

    // Debounce saves by 300ms
    saveTimeoutRef.current = setTimeout(() => {
      saveQuizState({
        currentStep: state.currentStep,
        questions: state.questions,
      });
    }, 300);

    return () => {
      if (saveTimeoutRef.current) {
        clearTimeout(saveTimeoutRef.current);
      }
    };
  }, [state.currentStep, state.questions, isHydrating]);

  // Action creators
  const goToStep = useCallback((step) => {
    dispatch({ type: ACTIONS.GO_TO_STEP, payload: step });
  }, []);

  const updateQuestionState = useCallback((questionId, updates) => {
    dispatch({ type: ACTIONS.UPDATE_QUESTION, payload: { questionId, updates } });
  }, []);

  const setCredences = useCallback(
    (questionId, credences) => updateQuestionState(questionId, { credences }),
    [updateQuestionState]
  );

  const setInputMode = useCallback(
    (questionId, inputMode) => updateQuestionState(questionId, { inputMode }),
    [updateQuestionState]
  );

  const setLockedKey = useCallback(
    (questionId, lockedKey) => updateQuestionState(questionId, { lockedKey }),
    [updateQuestionState]
  );

  const setExpandedPanel = useCallback((panel) => {
    dispatch({ type: ACTIONS.SET_EXPANDED_PANEL, payload: panel });
  }, []);

  const saveOriginals = useCallback(() => {
    dispatch({ type: ACTIONS.SAVE_ORIGINALS });
  }, []);

  const resetToOriginal = useCallback(() => {
    dispatch({ type: ACTIONS.RESET_TO_ORIGINAL });
  }, []);

  const resetQuiz = useCallback(() => {
    dispatch({ type: ACTIONS.RESET_QUIZ });
    clearQuizState(); // Also clear session storage
  }, []);

  const setDebugConfig = useCallback((config) => {
    dispatch({ type: ACTIONS.SET_DEBUG_CONFIG, payload: config });
  }, []);

  // Navigation helpers
  const getQuestionIndex = useCallback(
    (questionId) => questions.findIndex((q) => q.id === questionId),
    []
  );

  const getPrevStep = useCallback(
    (questionId) => {
      const index = getQuestionIndex(questionId);
      return index === 0 ? 'welcome' : questions[index - 1].id;
    },
    [getQuestionIndex]
  );

  const getNextStep = useCallback(
    (questionId) => {
      const index = getQuestionIndex(questionId);
      return index === questions.length - 1 ? 'results' : questions[index + 1].id;
    },
    [getQuestionIndex]
  );

  // Navigation actions
  const startQuiz = useCallback(() => {
    goToStep(questions[0].id);
  }, [goToStep]);

  const goBack = useCallback(() => {
    if (state.currentStep === 'results') {
      goToStep(questions[questions.length - 1].id);
    } else {
      goToStep(getPrevStep(state.currentStep));
    }
  }, [state.currentStep, goToStep, getPrevStep]);

  const goForward = useCallback(() => {
    const nextStep = getNextStep(state.currentStep);
    if (nextStep === 'results') {
      saveOriginals();
    }
    goToStep(nextStep);
  }, [state.currentStep, goToStep, getNextStep, saveOriginals]);

  // Extract credences for calculation functions (excludes intermission questions)
  const extractCredences = useCallback(
    (credenceType) => {
      const getter = credenceType === 'original' ? 'originalCredences' : 'credences';
      const credenceQuestions = questions.filter((q) => !isIntermission(q));

      // For original credences, return null if none have been saved yet
      const firstQuestion = state.questions[credenceQuestions[0]?.id];
      if (credenceType === 'original' && !firstQuestion?.originalCredences) {
        return null;
      }

      return Object.fromEntries(
        credenceQuestions.map((q) => [q.id, state.questions[q.id]?.[getter] || defaultCredences])
      );
    },
    [state.questions]
  );

  // Helper to calculate all results from a set of credences
  const computeAllResults = useCallback((credences, debugConfig) => {
    if (!credences) return null;
    return {
      maxEV: calculateMaxEV(credences, debugConfig),
      parliament: calculateVarianceVoting(credences, debugConfig),
      mergedFavorites: calculateMergedFavorites(credences, debugConfig),
      maximin: calculateMaximin(credences, debugConfig),
    };
  }, []);

  // Calculation results (memoized)
  const calculationResults = useMemo(
    () => computeAllResults(extractCredences('current'), state.debugConfig),
    [extractCredences, computeAllResults, state.debugConfig]
  );

  const originalCalculationResults = useMemo(
    () => computeAllResults(extractCredences('original'), state.debugConfig),
    [extractCredences, computeAllResults, state.debugConfig]
  );

  // Check if any credences have changed from originals
  const hasChanged = useMemo(() => {
    return Object.values(state.questions).some(
      (q) =>
        q.originalCredences && JSON.stringify(q.credences) !== JSON.stringify(q.originalCredences)
    );
  }, [state.questions]);

  // Derived values
  const currentQuestionIndex = useMemo(() => {
    return getQuestionIndex(state.currentStep);
  }, [state.currentStep, getQuestionIndex]);

  const currentQuestion = useMemo(() => {
    if (currentQuestionIndex === -1) return null;
    return questionsWithColors[currentQuestionIndex];
  }, [currentQuestionIndex]);

  // Progress calculations using shared helper
  const currentProgressIndex = useMemo(() => {
    if (currentQuestionIndex === -1) return -1;
    const currentQ = questions[currentQuestionIndex];
    // Include current question in count only if it's not an intermission
    const countBefore = countNonIntermissionsBefore(questions, currentQuestionIndex);
    return isIntermission(currentQ) ? countBefore : countBefore + 1;
  }, [currentQuestionIndex]);

  const progressPercentage = useMemo(() => {
    if (currentQuestionIndex === -1) return 0;
    const currentQ = questions[currentQuestionIndex];
    // For intermissions, show progress based on completed questions before it
    const progressCount = isIntermission(currentQ)
      ? countNonIntermissionsBefore(questions, currentQuestionIndex)
      : currentProgressIndex;
    return (progressCount / totalQuestions) * 100;
  }, [currentQuestionIndex, currentProgressIndex]);

  const questionNumber = useMemo(() => {
    if (currentQuestionIndex === -1) return '';
    const currentQ = questions[currentQuestionIndex];
    // For intermissions, show count of questions before it
    const displayNumber = isIntermission(currentQ)
      ? countNonIntermissionsBefore(questions, currentQuestionIndex)
      : currentProgressIndex;
    return `Question ${displayNumber} of ${totalQuestions}`;
  }, [currentQuestionIndex, currentProgressIndex]);

  // Build stateMap for ResultsScreen compatibility (excludes intermission questions)
  const stateMap = useMemo(() => {
    const map = {};
    questions
      .filter((q) => !isIntermission(q))
      .forEach((q) => {
        const questionState = state.questions[q.id];
        if (!questionState) return;
        map[q.id] = {
          credences: questionState.credences,
          setCredences: (newCredences) => setCredences(q.id, newCredences),
          originalCredences: questionState.originalCredences,
          inputMode: questionState.inputMode,
          setInputMode: (mode) => setInputMode(q.id, mode),
          lockedKey: questionState.lockedKey,
          setLockedKey: (key) => setLockedKey(q.id, key),
        };
      });
    return map;
  }, [state.questions, setCredences, setInputMode, setLockedKey]);

  // Context value
  const value = useMemo(
    () => ({
      // State
      currentStep: state.currentStep,
      questions: state.questions,
      expandedPanel: state.expandedPanel,
      debugConfig: state.debugConfig,
      shareUrlError,
      isHydrating,
      sessionId,

      // Config (static)
      questionsConfig: questionsWithColors,
      causesConfig: CAUSES,
      defaultCredences,

      // Actions
      goToStep,
      setCredences,
      setInputMode,
      setLockedKey,
      setExpandedPanel,
      saveOriginals,
      resetToOriginal,
      resetQuiz,
      setDebugConfig,

      // Navigation helpers
      getQuestionIndex,
      getPrevStep,
      getNextStep,

      // Navigation actions
      startQuiz,
      goBack,
      goForward,

      // Derived values
      currentQuestion,
      currentQuestionIndex,
      totalQuestions,
      progressPercentage,
      questionNumber,
      hasChanged,

      // Calculation results
      calculationResults,
      originalCalculationResults,

      // Compatibility helpers
      stateMap,
    }),
    [
      state.currentStep,
      state.questions,
      state.expandedPanel,
      state.debugConfig,
      shareUrlError,
      isHydrating,
      sessionId,
      goToStep,
      setCredences,
      setInputMode,
      setLockedKey,
      setExpandedPanel,
      saveOriginals,
      resetToOriginal,
      resetQuiz,
      setDebugConfig,
      getQuestionIndex,
      getPrevStep,
      getNextStep,
      startQuiz,
      goBack,
      goForward,
      currentQuestion,
      currentQuestionIndex,
      progressPercentage,
      questionNumber,
      hasChanged,
      calculationResults,
      originalCalculationResults,
      stateMap,
    ]
  );

  return (
    <QuizContext.Provider value={value}>
      {children}
      {conflictState && (
        <SessionConflictModal
          onKeepMine={handleKeepMine}
          onLoadShared={handleLoadShared}
          onOpenNewTab={handleOpenNewTab}
        />
      )}
    </QuizContext.Provider>
  );
}

export default QuizContext;
