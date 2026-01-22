import WelcomeScreen from './WelcomeScreen';
import QuestionScreen from './QuestionScreen';
import IntermissionScreen from './IntermissionScreen';
import ResultsScreen from './ResultsScreen';
import CalculationDebugger from './CalculationDebugger';
import { useQuiz } from '../context/useQuiz';
import { QUESTION_TYPES } from '../constants/config';
import features from '../../config/features.json';

/**
 * Main quiz router component.
 * Renders the appropriate screen based on current step from context.
 */
function MoralParliamentQuiz() {
  const { currentStep, currentQuestion, setDebugConfig } = useQuiz();

  // Determine which screen to render
  function getScreenContent() {
    if (currentStep === 'welcome') return <WelcomeScreen />;
    if (currentStep === 'results') return <ResultsScreen />;
    if (!currentQuestion) return null;

    // Route intermission questions to IntermissionScreen
    if (currentQuestion.type === QUESTION_TYPES.INTERMISSION) {
      return <IntermissionScreen />;
    }
    return <QuestionScreen />;
  }

  return (
    <>
      {getScreenContent()}
      {features.developer?.calculationDebugger && (
        <CalculationDebugger onConfigChange={setDebugConfig} />
      )}
    </>
  );
}

export default MoralParliamentQuiz;
