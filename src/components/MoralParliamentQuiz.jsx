import DisclaimerScreen from './DisclaimerScreen';
import WelcomeScreen from './WelcomeScreen';
import QuestionScreen from './QuestionScreen';
import IntermissionScreen from './IntermissionScreen';
import ResultsScreen from './ResultsScreen';
import MoralMarketplaceScreen from './MoralMarketplaceScreen';
import CalculationDebugger from './CalculationDebugger';
import { useQuiz } from '../context/useQuiz';
import { QUESTION_TYPES } from '../constants/config';
import features from '../../config/features.json';

const toastStyle = {
  position: 'fixed',
  top: '1rem',
  left: '50%',
  transform: 'translateX(-50%)',
  background: 'rgba(239, 68, 68, 0.9)',
  color: 'white',
  padding: '0.75rem 1.5rem',
  borderRadius: '0.5rem',
  fontSize: '0.875rem',
  zIndex: 1000,
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.3)',
};

/**
 * Main quiz router component.
 * Renders the appropriate screen based on current step from context.
 */
function MoralParliamentQuiz() {
  const { currentStep, currentQuestion, setDebugConfig, shareUrlError, isHydrating } = useQuiz();

  // Show nothing while hydrating to avoid flash of welcome screen
  if (isHydrating) {
    return null;
  }

  // Determine which screen to render
  function getScreenContent() {
    if (currentStep === 'disclaimer') return <DisclaimerScreen />;
    if (currentStep === 'welcome') return <WelcomeScreen />;
    if (currentStep === 'results') return <ResultsScreen />;
    if (currentStep === 'marketplace') return <MoralMarketplaceScreen />;
    if (!currentQuestion) return null;

    // Route intermission questions to IntermissionScreen
    if (currentQuestion.type === QUESTION_TYPES.INTERMISSION) {
      return <IntermissionScreen />;
    }
    return <QuestionScreen />;
  }

  return (
    <>
      {shareUrlError && <div style={toastStyle}>{shareUrlError}</div>}
      {getScreenContent()}
      {features.developer?.calculationDebugger && (
        <CalculationDebugger onConfigChange={setDebugConfig} />
      )}
    </>
  );
}

export default MoralParliamentQuiz;
