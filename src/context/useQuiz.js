import { useContext } from 'react';
import { QuizContext } from './QuizContext';

/**
 * Custom hook to access the quiz context
 * @returns {Object} Quiz context value
 * @throws {Error} If used outside of QuizProvider
 */
export function useQuiz() {
  const context = useContext(QuizContext);
  if (!context) {
    throw new Error('useQuiz must be used within a QuizProvider');
  }
  return context;
}

/**
 * Hook to get question-specific state and actions
 * @param {string} questionId - The question ID
 * @returns {Object} Question state and actions
 */
export function useQuestion(questionId) {
  const context = useQuiz();
  const questionState = context.questions[questionId];

  if (!questionState) {
    throw new Error(`Question "${questionId}" not found in quiz context`);
  }

  return {
    credences: questionState.credences,
    setCredences: (credences) => context.setCredences(questionId, credences),
    originalCredences: questionState.originalCredences,
    inputMode: questionState.inputMode,
    setInputMode: (mode) => context.setInputMode(questionId, mode),
    lockedKey: questionState.lockedKey,
    setLockedKey: (key) => context.setLockedKey(questionId, key),
    adjustCredences: context.adjustCredences,
    roundCredences: context.roundCredences,
  };
}

/**
 * Hook to get navigation-related state and actions
 * @returns {Object} Navigation state and actions
 */
export function useNavigation() {
  const context = useQuiz();

  return {
    currentStep: context.currentStep,
    goToStep: context.goToStep,
    getPrevStep: context.getPrevStep,
    getNextStep: context.getNextStep,
    currentQuestion: context.currentQuestion,
    currentQuestionIndex: context.currentQuestionIndex,
    totalQuestions: context.totalQuestions,
    progressPercentage: context.progressPercentage,
    questionNumber: context.questionNumber,
    questionsConfig: context.questionsConfig,
  };
}

/**
 * Hook to get calculation results
 * @returns {Object} Calculation results
 */
export function useCalculations() {
  const context = useQuiz();

  return {
    results: context.calculationResults,
    originalResults: context.originalCalculationResults,
    hasChanged: context.hasChanged,
    resetToOriginal: context.resetToOriginal,
  };
}

export default useQuiz;
