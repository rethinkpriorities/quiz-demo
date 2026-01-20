import WelcomeScreen from './WelcomeScreen';
import QuestionScreen from './QuestionScreen';
import ResultsScreen from './ResultsScreen';
import CalculationDebugger from './CalculationDebugger';
import { useQuiz } from '../context/useQuiz';
import features from '../../config/features.json';

/**
 * Main quiz router component
 * Renders the appropriate screen based on current step from context
 */
const MoralParliamentQuiz = () => {
  const { currentStep, currentQuestion, setDebugConfig } = useQuiz();

  // Determine which screen to render
  let screenContent = null;

  if (currentStep === 'welcome') {
    screenContent = <WelcomeScreen />;
  } else if (currentStep === 'results') {
    screenContent = <ResultsScreen />;
  } else if (currentQuestion) {
    screenContent = <QuestionScreen />;
  }

  return (
    <>
      {screenContent}
      {features.developer?.calculationDebugger && (
        <CalculationDebugger onConfigChange={setDebugConfig} />
      )}
    </>
  );
};

export default MoralParliamentQuiz;
