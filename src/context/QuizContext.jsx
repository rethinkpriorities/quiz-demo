import { createContext, useReducer, useMemo, useCallback, useEffect, useState } from 'react';
import questionsConfig from '../../config/questions.json';
import causesConfig from '../../config/causes.json';
import features from '../../config/features.json';
import { parseShareUrl, clearShareHash } from '../utils/shareUrl';
import {
  OPTION_COLORS,
  QUESTION_TYPE_COLORS,
  INPUT_MODES,
  QUESTION_TYPES,
} from '../constants/config';
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
      const { credences: urlCredences } = action.payload;
      const newQuestions = {};
      for (const [questionId, credences] of Object.entries(urlCredences)) {
        newQuestions[questionId] = {
          ...createQuestionState(),
          credences,
          originalCredences: { ...credences },
        };
      }
      return {
        ...state,
        currentStep: 'results',
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

  // Check for shared results URL on mount
  useEffect(() => {
    if (!features.ui?.shareResults) return;

    const result = parseShareUrl();
    if (!result) return;

    if (result.error) {
      // eslint-disable-next-line react-hooks/set-state-in-effect -- intentional mount-only initialization
      setShareUrlError(result.error);
      clearShareHash();
      // Clear error after 5 seconds
      window.setTimeout(() => setShareUrlError(null), 5000);
      return;
    }

    if (result.credences) {
      dispatch({ type: ACTIONS.RESTORE_FROM_URL, payload: { credences: result.credences } });
      clearShareHash();
    }
  }, []);

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

  return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>;
}

export default QuizContext;
