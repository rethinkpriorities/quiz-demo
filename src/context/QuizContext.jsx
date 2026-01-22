import { createContext, useReducer, useMemo, useCallback } from 'react';
import questionsConfig from '../../config/questions.json';
import causesConfig from '../../config/causes.json';
import features from '../../config/features.json';
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

const { questions } = questionsConfig;
const { causes: CAUSES, defaultCredences } = causesConfig;

// Get colors for a question based on its type (when feature enabled)
function getColorsForQuestion(question) {
  if (features.ui?.questionTypes !== false) {
    const questionType = question.type || QUESTION_TYPES.DEFAULT;
    return QUESTION_TYPE_COLORS[questionType] || QUESTION_TYPE_COLORS[QUESTION_TYPES.DEFAULT];
  }
  return OPTION_COLORS;
}

// Add color and normalized type to each question
const questionsWithColors = questions.map((question) => {
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

// Initial state for each question
function createQuestionState() {
  return {
    credences: { ...defaultCredences },
    originalCredences: null,
    inputMode: INPUT_MODES.OPTIONS,
    lockedKey: null,
  };
}

function createInitialQuestionsState() {
  return Object.fromEntries(questions.map((q) => [q.id, createQuestionState()]));
}

// Initial state
const initialState = {
  currentStep: 'welcome',
  questions: createInitialQuestionsState(),
  expandedPanel: null,
  debugConfig: null,
};

// Action types
const ACTIONS = {
  GO_TO_STEP: 'GO_TO_STEP',
  UPDATE_QUESTION: 'UPDATE_QUESTION',
  SET_EXPANDED_PANEL: 'SET_EXPANDED_PANEL',
  SAVE_ORIGINALS: 'SAVE_ORIGINALS',
  RESET_TO_ORIGINAL: 'RESET_TO_ORIGINAL',
  RESET_QUIZ: 'RESET_QUIZ',
  SET_DEBUG_CONFIG: 'SET_DEBUG_CONFIG',
};

// Helper to update a single question's state
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

// Reducer
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
            {
              ...q,
              originalCredences: q.originalCredences || { ...q.credences },
            },
          ])
        ),
      };

    case ACTIONS.RESET_TO_ORIGINAL:
      return {
        ...state,
        questions: Object.fromEntries(
          Object.entries(state.questions).map(([id, q]) => [
            id,
            {
              ...q,
              credences: q.originalCredences ? { ...q.originalCredences } : q.credences,
            },
          ])
        ),
      };

    case ACTIONS.RESET_QUIZ:
      return { ...initialState, questions: createInitialQuestionsState() };

    case ACTIONS.SET_DEBUG_CONFIG:
      return { ...state, debugConfig: action.payload };

    default:
      return state;
  }
}

// Create context
export const QuizContext = createContext(null);

// Provider component
export function QuizProvider({ children }) {
  const [state, dispatch] = useReducer(quizReducer, initialState);

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
      if (index === 0) return 'welcome';
      return questions[index - 1].id;
    },
    [getQuestionIndex]
  );

  const getNextStep = useCallback(
    (questionId) => {
      const index = getQuestionIndex(questionId);
      if (index === questions.length - 1) return 'results';
      return questions[index + 1].id;
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
      const prevStep = getPrevStep(state.currentStep);
      goToStep(prevStep);
    }
  }, [state.currentStep, goToStep, getPrevStep]);

  const goForward = useCallback(() => {
    const nextStep = getNextStep(state.currentStep);
    if (nextStep === 'results') {
      saveOriginals();
    }
    goToStep(nextStep);
  }, [state.currentStep, goToStep, getNextStep, saveOriginals]);

  // Extract credences for calculation functions (dynamic, based on question IDs in config)
  const extractCredences = useCallback(
    (credenceType) => {
      const getter = credenceType === 'original' ? 'originalCredences' : 'credences';

      // For original credences, return null if none have been saved yet
      const firstQuestion = state.questions[questions[0]?.id];
      if (credenceType === 'original' && !firstQuestion?.originalCredences) {
        return null;
      }

      // Build credences object dynamically from question IDs
      return Object.fromEntries(
        questions.map((q) => [q.id, state.questions[q.id]?.[getter] || defaultCredences])
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

  const totalQuestions = questions.length;

  const progressPercentage = useMemo(() => {
    if (currentQuestionIndex === -1) return 0;
    return ((currentQuestionIndex + 1) / totalQuestions) * 100;
  }, [currentQuestionIndex, totalQuestions]);

  const questionNumber = useMemo(() => {
    if (currentQuestionIndex === -1) return '';
    return `Question ${currentQuestionIndex + 1} of ${totalQuestions}`;
  }, [currentQuestionIndex, totalQuestions]);

  // Build stateMap for ResultsScreen compatibility
  const stateMap = useMemo(() => {
    const map = {};
    questions.forEach((q) => {
      const questionState = state.questions[q.id];
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
      totalQuestions,
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
