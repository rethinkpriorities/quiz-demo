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
import { detectShareUrl, parseShareUrl, clearShareHash } from '../utils/shareUrl';
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
 * Get default credences for a question.
 * Uses question-specific defaults if provided, otherwise splits evenly across options.
 */
function getDefaultCredencesForQuestion(question) {
  if (question.defaultCredences) {
    return { ...question.defaultCredences };
  }
  // Generate equal split from options
  const optionKeys = question.options.map((opt) => opt.key);
  const equalShare = Math.floor(100 / optionKeys.length);
  const remainder = 100 - equalShare * optionKeys.length;
  return Object.fromEntries(
    optionKeys.map((key, i) => [key, equalShare + (i === 0 ? remainder : 0)])
  );
}

/**
 * Create initial state for a single question.
 */
function createQuestionState(question) {
  return {
    credences: getDefaultCredencesForQuestion(question),
    originalCredences: null,
    inputMode: INPUT_MODES.OPTIONS,
    lockedKeys: [], // Array of locked slider keys (supports n-2 locks)
    selectedPreset: null, // null | 'preset-id' | 'custom'
  };
}

/**
 * Create initial state for all questions (excluding intermissions).
 */
function createInitialQuestionsState() {
  return Object.fromEntries(
    questions.filter((q) => !isIntermission(q)).map((q) => [q.id, createQuestionState(q)])
  );
}

/**
 * Worldview IDs - fixed slots for storing quiz states.
 */
const WORLDVIEW_IDS = ['1', '2', '3'];

/**
 * Create initial worldviews structure with all slots.
 */
function createInitialWorldviews() {
  return Object.fromEntries(
    WORLDVIEW_IDS.map((id) => [id, { questions: createInitialQuestionsState() }])
  );
}

/**
 * Check if a worldview has any progress (any question with non-default credences).
 */
function worldviewHasProgress(worldview) {
  if (!worldview?.questions) return false;
  return Object.entries(worldview.questions).some(([questionId, q]) => {
    if (!q.credences) return false;
    const question = questions.find((qu) => qu.id === questionId);
    if (!question) return false;
    const questionDefaults = getDefaultCredencesForQuestion(question);
    // Compare credences to defaults
    return Object.entries(q.credences).some(
      ([key, value]) => value !== (questionDefaults[key] ?? 0)
    );
  });
}

/**
 * Create initial worldview names (e.g., "Worldview 1", "Worldview 2", "Worldview 3")
 */
function createInitialWorldviewNames() {
  return Object.fromEntries(WORLDVIEW_IDS.map((id) => [id, `Worldview ${id}`]));
}

const DEFAULT_MARKETPLACE_BUDGET = 10_000_000;

// Determine initial step based on disclaimer feature flag
const getInitialStep = () => {
  return features.ui?.disclaimerPage ? 'disclaimer' : 'welcome';
};

const initialState = {
  currentStep: getInitialStep(),
  worldviews: createInitialWorldviews(),
  worldviewNames: createInitialWorldviewNames(),
  activeWorldviewId: '1',
  expandedPanel: null,
  debugConfig: null,
  selectedCalculations: { left: null, right: null },
  marketplaceBudget: DEFAULT_MARKETPLACE_BUDGET,
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
  SWITCH_WORLDVIEW: 'SWITCH_WORLDVIEW',
  SET_SELECTED_CALCULATIONS: 'SET_SELECTED_CALCULATIONS',
  SET_WORLDVIEW_NAME: 'SET_WORLDVIEW_NAME',
  SET_MARKETPLACE_BUDGET: 'SET_MARKETPLACE_BUDGET',
  SET_SELECTED_PRESET: 'SET_SELECTED_PRESET',
};

/**
 * Get questions from the active worldview.
 */
function getActiveQuestions(state) {
  return state.worldviews[state.activeWorldviewId].questions;
}

/**
 * Helper to update a single question's state in the active worldview immutably.
 */
function updateQuestion(state, questionId, updates) {
  const activeQuestions = getActiveQuestions(state);
  return {
    ...state,
    worldviews: {
      ...state.worldviews,
      [state.activeWorldviewId]: {
        questions: {
          ...activeQuestions,
          [questionId]: {
            ...activeQuestions[questionId],
            ...updates,
          },
        },
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

    case ACTIONS.SAVE_ORIGINALS: {
      const activeQuestions = getActiveQuestions(state);
      return {
        ...state,
        worldviews: {
          ...state.worldviews,
          [state.activeWorldviewId]: {
            questions: Object.fromEntries(
              Object.entries(activeQuestions).map(([id, q]) => [
                id,
                { ...q, originalCredences: q.originalCredences || { ...q.credences } },
              ])
            ),
          },
        },
      };
    }

    case ACTIONS.RESET_TO_ORIGINAL: {
      const activeQuestions = getActiveQuestions(state);
      return {
        ...state,
        worldviews: {
          ...state.worldviews,
          [state.activeWorldviewId]: {
            questions: Object.fromEntries(
              Object.entries(activeQuestions).map(([id, q]) => [
                id,
                { ...q, credences: q.originalCredences ? { ...q.originalCredences } : q.credences },
              ])
            ),
          },
        },
      };
    }

    case ACTIONS.RESET_QUIZ:
      return {
        ...initialState,
        currentStep: getInitialStep(),
        worldviews: createInitialWorldviews(),
        worldviewNames: createInitialWorldviewNames(),
      };

    case ACTIONS.SWITCH_WORLDVIEW:
      if (!WORLDVIEW_IDS.includes(action.payload)) {
        return state;
      }
      return { ...state, activeWorldviewId: action.payload };

    case ACTIONS.SET_WORLDVIEW_NAME: {
      const { worldviewId, name } = action.payload;
      if (!WORLDVIEW_IDS.includes(worldviewId)) {
        return state;
      }
      return {
        ...state,
        worldviewNames: {
          ...state.worldviewNames,
          [worldviewId]: name,
        },
      };
    }

    case ACTIONS.SET_MARKETPLACE_BUDGET:
      return { ...state, marketplaceBudget: action.payload };

    case ACTIONS.RESTORE_FROM_URL:
    case ACTIONS.RESTORE_FROM_SESSION: {
      const isUrlRestore = action.type === ACTIONS.RESTORE_FROM_URL;
      const {
        worldviews: sourceWorldviews,
        worldviewNames: sourceWorldviewNames,
        activeWorldviewId: sourceActiveId,
        questions: sourceQuestions,
        credences: legacyCredences,
        currentStep: sessionStep,
        selectedCalculations: sourceSelectedCalculations,
        marketplaceBudget: sourceMarketplaceBudget,
      } = action.payload;

      // Helper to restore a single question's state
      const restoreQuestion = (qState, setOriginals) => ({
        credences: qState.credences,
        // Use stored originalCredences if present; otherwise set from credences if setOriginals
        originalCredences: qState.originalCredences
          ? { ...qState.originalCredences }
          : setOriginals
            ? { ...qState.credences }
            : null,
        inputMode: qState.inputMode || INPUT_MODES.OPTIONS,
        // Support both old lockedKey (string) and new lockedKeys (array) formats
        lockedKeys: qState.lockedKeys || (qState.lockedKey ? [qState.lockedKey] : []),
        selectedPreset: qState.selectedPreset || null,
      });

      // Helper to restore worldviews with all slots ensured
      const restoreWorldviews = (worldviewsData, setOriginals) => {
        const restored = {};
        for (const [worldviewId, worldview] of Object.entries(worldviewsData)) {
          const restoredQuestions = {};
          for (const [questionId, qState] of Object.entries(worldview.questions)) {
            restoredQuestions[questionId] = restoreQuestion(qState, setOriginals);
          }
          restored[worldviewId] = { questions: restoredQuestions };
        }
        // Ensure all worldview slots exist
        for (const id of WORLDVIEW_IDS) {
          if (!restored[id]) {
            restored[id] = { questions: createInitialQuestionsState() };
          }
        }
        return restored;
      };

      // Helper to restore worldview names with defaults for missing IDs
      const restoreWorldviewNames = (namesData) => {
        const restored = {};
        for (const id of WORLDVIEW_IDS) {
          restored[id] = namesData?.[id] || `Worldview ${id}`;
        }
        return restored;
      };

      // New worldviews format
      if (sourceWorldviews && sourceActiveId) {
        return {
          ...state,
          currentStep: isUrlRestore ? 'results' : sessionStep,
          worldviews: restoreWorldviews(sourceWorldviews, isUrlRestore),
          worldviewNames: restoreWorldviewNames(sourceWorldviewNames),
          activeWorldviewId: sourceActiveId,
          selectedCalculations: sourceSelectedCalculations || state.selectedCalculations,
          marketplaceBudget: sourceMarketplaceBudget || DEFAULT_MARKETPLACE_BUDGET,
        };
      }

      // Legacy formats: store in worldview 1
      const newQuestions = {};

      if (sourceQuestions) {
        for (const [questionId, qState] of Object.entries(sourceQuestions)) {
          newQuestions[questionId] = restoreQuestion(qState, isUrlRestore);
        }
      } else if (legacyCredences) {
        for (const [questionId, credences] of Object.entries(legacyCredences)) {
          newQuestions[questionId] = {
            ...createQuestionState(),
            credences,
            originalCredences: isUrlRestore ? { ...credences } : null,
          };
        }
      }

      return {
        ...state,
        currentStep: isUrlRestore ? 'results' : sessionStep,
        worldviews: {
          ...createInitialWorldviews(),
          1: { questions: newQuestions },
        },
        worldviewNames: createInitialWorldviewNames(),
        activeWorldviewId: '1',
        marketplaceBudget: DEFAULT_MARKETPLACE_BUDGET,
      };
    }

    case ACTIONS.SET_DEBUG_CONFIG:
      return { ...state, debugConfig: action.payload };

    case ACTIONS.SET_SELECTED_CALCULATIONS:
      return {
        ...state,
        selectedCalculations: {
          ...state.selectedCalculations,
          ...action.payload,
        },
      };

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
      if (!shareDetected.hasShare) {
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
      const shareResult = await parseShareUrl();

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
      dispatch({ type: ACTIONS.RESTORE_FROM_URL, payload: shareResult });
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
      if (!shareDetected.hasShare) return;

      // Parse the share URL
      const shareResult = await parseShareUrl();
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
      dispatch({ type: ACTIONS.RESTORE_FROM_URL, payload: shareResult });
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
    if (conflictState?.shareData) {
      dispatch({
        type: ACTIONS.RESTORE_FROM_URL,
        payload: conflictState.shareData,
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
    // Don't save during hydration or if on disclaimer/welcome screens
    if (isHydrating || state.currentStep === 'welcome' || state.currentStep === 'disclaimer')
      return;

    // Clear any pending save
    if (saveTimeoutRef.current) {
      clearTimeout(saveTimeoutRef.current);
    }

    // Debounce saves by 300ms
    saveTimeoutRef.current = setTimeout(() => {
      saveQuizState({
        currentStep: state.currentStep,
        worldviews: state.worldviews,
        worldviewNames: state.worldviewNames,
        activeWorldviewId: state.activeWorldviewId,
        selectedCalculations: state.selectedCalculations,
        marketplaceBudget: state.marketplaceBudget,
      });
    }, 300);

    return () => {
      if (saveTimeoutRef.current) {
        clearTimeout(saveTimeoutRef.current);
      }
    };
  }, [
    state.currentStep,
    state.worldviews,
    state.worldviewNames,
    state.activeWorldviewId,
    state.selectedCalculations,
    state.marketplaceBudget,
    isHydrating,
  ]);

  // Action creators
  const goToStep = useCallback((step) => {
    dispatch({ type: ACTIONS.GO_TO_STEP, payload: step });
    window.scrollTo(0, 0);
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

  const setLockedKeys = useCallback(
    (questionId, lockedKeys) => updateQuestionState(questionId, { lockedKeys }),
    [updateQuestionState]
  );

  const setSelectedPreset = useCallback(
    (questionId, selectedPreset) => updateQuestionState(questionId, { selectedPreset }),
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

  const switchWorldview = useCallback((worldviewId) => {
    dispatch({ type: ACTIONS.SWITCH_WORLDVIEW, payload: worldviewId });
  }, []);

  const setSelectedCalculations = useCallback((selections) => {
    dispatch({ type: ACTIONS.SET_SELECTED_CALCULATIONS, payload: selections });
  }, []);

  const setWorldviewName = useCallback((worldviewId, name) => {
    dispatch({ type: ACTIONS.SET_WORLDVIEW_NAME, payload: { worldviewId, name } });
  }, []);

  const setMarketplaceBudget = useCallback((budget) => {
    dispatch({ type: ACTIONS.SET_MARKETPLACE_BUDGET, payload: budget });
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

  // Derive questions from active worldview for backward compatibility
  const activeQuestions = useMemo(
    () => state.worldviews[state.activeWorldviewId].questions,
    [state.worldviews, state.activeWorldviewId]
  );

  // Extract credences for calculation functions (excludes intermission questions)
  const extractCredences = useCallback(
    (credenceType) => {
      const getter = credenceType === 'original' ? 'originalCredences' : 'credences';
      const credenceQuestions = questions.filter((q) => !isIntermission(q));

      // For original credences, return null if none have been saved yet
      const firstQuestion = activeQuestions[credenceQuestions[0]?.id];
      if (credenceType === 'original' && !firstQuestion?.originalCredences) {
        return null;
      }

      return Object.fromEntries(
        credenceQuestions.map((q) => [
          q.id,
          activeQuestions[q.id]?.[getter] || getDefaultCredencesForQuestion(q),
        ])
      );
    },
    [activeQuestions]
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
    return Object.values(activeQuestions).some(
      (q) =>
        q.originalCredences && JSON.stringify(q.credences) !== JSON.stringify(q.originalCredences)
    );
  }, [activeQuestions]);

  // Map of worldview IDs to whether they have progress
  const hasProgressMap = useMemo(() => {
    return Object.fromEntries(
      WORLDVIEW_IDS.map((id) => [id, worldviewHasProgress(state.worldviews[id])])
    );
  }, [state.worldviews]);

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
        const questionState = activeQuestions[q.id];
        if (!questionState) return;
        map[q.id] = {
          credences: questionState.credences,
          setCredences: (newCredences) => setCredences(q.id, newCredences),
          originalCredences: questionState.originalCredences,
          inputMode: questionState.inputMode,
          setInputMode: (mode) => setInputMode(q.id, mode),
          lockedKeys: questionState.lockedKeys,
          setLockedKeys: (keys) => setLockedKeys(q.id, keys),
          selectedPreset: questionState.selectedPreset,
          setSelectedPreset: (presetId) => setSelectedPreset(q.id, presetId),
        };
      });
    return map;
  }, [activeQuestions, setCredences, setInputMode, setLockedKeys, setSelectedPreset]);

  // Context value
  const value = useMemo(
    () => ({
      // State
      currentStep: state.currentStep,
      questions: activeQuestions, // Derived from active worldview for backward compatibility
      worldviews: state.worldviews,
      worldviewNames: state.worldviewNames,
      activeWorldviewId: state.activeWorldviewId,
      expandedPanel: state.expandedPanel,
      debugConfig: state.debugConfig,
      selectedCalculations: state.selectedCalculations,
      marketplaceBudget: state.marketplaceBudget,
      shareUrlError,
      isHydrating,
      sessionId,

      // Config (static)
      questionsConfig: questionsWithColors,
      causesConfig: CAUSES,
      defaultCredences,
      worldviewIds: WORLDVIEW_IDS,

      // Actions
      goToStep,
      setCredences,
      setInputMode,
      setLockedKeys,
      setSelectedPreset,
      setExpandedPanel,
      saveOriginals,
      resetToOriginal,
      resetQuiz,
      setDebugConfig,
      switchWorldview,
      setSelectedCalculations,
      setWorldviewName,
      setMarketplaceBudget,

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
      hasProgressMap,

      // Calculation results
      calculationResults,
      originalCalculationResults,

      // Compatibility helpers
      stateMap,
    }),
    [
      state.currentStep,
      activeQuestions,
      state.worldviews,
      state.worldviewNames,
      state.activeWorldviewId,
      state.expandedPanel,
      state.debugConfig,
      state.selectedCalculations,
      state.marketplaceBudget,
      shareUrlError,
      isHydrating,
      sessionId,
      goToStep,
      setCredences,
      setInputMode,
      setLockedKeys,
      setSelectedPreset,
      setExpandedPanel,
      saveOriginals,
      resetToOriginal,
      resetQuiz,
      setDebugConfig,
      switchWorldview,
      setSelectedCalculations,
      setWorldviewName,
      setMarketplaceBudget,
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
      hasProgressMap,
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
