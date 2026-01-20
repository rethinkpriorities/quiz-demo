import { createContext, useReducer, useMemo, useCallback } from 'react';
import questionsConfig from '../../config/questions.json';
import { OPTION_COLORS, INPUT_MODES } from '../constants/config';
import {
  calculateMaxEV,
  calculateVarianceVoting,
  calculateMergedFavorites,
  calculateMaximin,
  adjustCredences,
  roundCredences,
} from '../utils/calculations';

const { questions, defaultCredences } = questionsConfig;

// Add color to each option based on index
const questionsWithColors = questions.map((question) => ({
  ...question,
  options: question.options.map((opt, index) => ({
    ...opt,
    color: OPTION_COLORS[index] || OPTION_COLORS[0],
  })),
}));

// Initial state for each question
const createQuestionState = () => ({
  credences: { ...defaultCredences },
  originalCredences: null,
  inputMode: INPUT_MODES.OPTIONS,
  lockedKey: null,
});

// Initial state
const initialState = {
  currentStep: 'welcome',
  questions: Object.fromEntries(questions.map((q) => [q.id, createQuestionState()])),
  expandedPanel: null,
  debugConfig: null,
};

// Action types
const ACTIONS = {
  GO_TO_STEP: 'GO_TO_STEP',
  SET_CREDENCES: 'SET_CREDENCES',
  SET_INPUT_MODE: 'SET_INPUT_MODE',
  SET_LOCKED_KEY: 'SET_LOCKED_KEY',
  SET_EXPANDED_PANEL: 'SET_EXPANDED_PANEL',
  SAVE_ORIGINALS: 'SAVE_ORIGINALS',
  RESET_TO_ORIGINAL: 'RESET_TO_ORIGINAL',
  RESET_QUIZ: 'RESET_QUIZ',
  SET_DEBUG_CONFIG: 'SET_DEBUG_CONFIG',
};

// Reducer
function quizReducer(state, action) {
  switch (action.type) {
    case ACTIONS.GO_TO_STEP:
      return { ...state, currentStep: action.payload };

    case ACTIONS.SET_CREDENCES:
      return {
        ...state,
        questions: {
          ...state.questions,
          [action.payload.questionId]: {
            ...state.questions[action.payload.questionId],
            credences: action.payload.credences,
          },
        },
      };

    case ACTIONS.SET_INPUT_MODE:
      return {
        ...state,
        questions: {
          ...state.questions,
          [action.payload.questionId]: {
            ...state.questions[action.payload.questionId],
            inputMode: action.payload.inputMode,
          },
        },
      };

    case ACTIONS.SET_LOCKED_KEY:
      return {
        ...state,
        questions: {
          ...state.questions,
          [action.payload.questionId]: {
            ...state.questions[action.payload.questionId],
            lockedKey: action.payload.lockedKey,
          },
        },
      };

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
      return {
        ...initialState,
        questions: Object.fromEntries(questions.map((q) => [q.id, createQuestionState()])),
      };

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

  const setCredences = useCallback((questionId, credences) => {
    dispatch({ type: ACTIONS.SET_CREDENCES, payload: { questionId, credences } });
  }, []);

  const setInputMode = useCallback((questionId, inputMode) => {
    dispatch({ type: ACTIONS.SET_INPUT_MODE, payload: { questionId, inputMode } });
  }, []);

  const setLockedKey = useCallback((questionId, lockedKey) => {
    dispatch({ type: ACTIONS.SET_LOCKED_KEY, payload: { questionId, lockedKey } });
  }, []);

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

  // Extract credences for calculation functions (adapter for existing 4-argument signatures)
  const getCredencesForCalculations = useCallback(() => {
    return {
      animalCredences: state.questions.animal?.credences || defaultCredences,
      futureCredences: state.questions.future?.credences || defaultCredences,
      scaleCredences: state.questions.scale?.credences || defaultCredences,
      certaintyCredences: state.questions.certainty?.credences || defaultCredences,
    };
  }, [state.questions]);

  const getOriginalCredencesForCalculations = useCallback(() => {
    const animal = state.questions.animal;
    if (!animal?.originalCredences) return null;
    return {
      animalCredences: animal.originalCredences,
      futureCredences: state.questions.future?.originalCredences || defaultCredences,
      scaleCredences: state.questions.scale?.originalCredences || defaultCredences,
      certaintyCredences: state.questions.certainty?.originalCredences || defaultCredences,
    };
  }, [state.questions]);

  // Calculation results (memoized)
  const calculationResults = useMemo(() => {
    const creds = getCredencesForCalculations();
    const { animalCredences, futureCredences, scaleCredences, certaintyCredences } = creds;

    return {
      maxEV: calculateMaxEV(
        animalCredences,
        futureCredences,
        scaleCredences,
        certaintyCredences,
        state.debugConfig
      ),
      parliament: calculateVarianceVoting(
        animalCredences,
        futureCredences,
        scaleCredences,
        certaintyCredences,
        state.debugConfig
      ),
      mergedFavorites: calculateMergedFavorites(
        animalCredences,
        futureCredences,
        scaleCredences,
        certaintyCredences,
        state.debugConfig
      ),
      maximin: calculateMaximin(
        animalCredences,
        futureCredences,
        scaleCredences,
        certaintyCredences,
        state.debugConfig
      ),
    };
  }, [getCredencesForCalculations, state.debugConfig]);

  const originalCalculationResults = useMemo(() => {
    const origCreds = getOriginalCredencesForCalculations();
    if (!origCreds) return null;

    const { animalCredences, futureCredences, scaleCredences, certaintyCredences } = origCreds;

    return {
      maxEV: calculateMaxEV(
        animalCredences,
        futureCredences,
        scaleCredences,
        certaintyCredences,
        state.debugConfig
      ),
      parliament: calculateVarianceVoting(
        animalCredences,
        futureCredences,
        scaleCredences,
        certaintyCredences,
        state.debugConfig
      ),
      mergedFavorites: calculateMergedFavorites(
        animalCredences,
        futureCredences,
        scaleCredences,
        certaintyCredences,
        state.debugConfig
      ),
      maximin: calculateMaximin(
        animalCredences,
        futureCredences,
        scaleCredences,
        certaintyCredences,
        state.debugConfig
      ),
    };
  }, [getOriginalCredencesForCalculations, state.debugConfig]);

  // Check if any credences have changed from originals
  const hasChanged = useMemo(() => {
    const origCreds = getOriginalCredencesForCalculations();
    if (!origCreds) return false;

    return Object.entries(state.questions).some(
      ([, q]) =>
        q.originalCredences && JSON.stringify(q.credences) !== JSON.stringify(q.originalCredences)
    );
  }, [state.questions, getOriginalCredencesForCalculations]);

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
      adjustCredences,
      roundCredences,
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
