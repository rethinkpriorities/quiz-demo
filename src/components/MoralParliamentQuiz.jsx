import { useState } from 'react';
import WelcomeScreen from './WelcomeScreen';
import QuestionScreen from './QuestionScreen';
import ResultsScreen from './ResultsScreen';
import { calculateMaxEV, calculateVarianceVoting, adjustCredences } from '../utils/calculations';
import {
  ANIMAL_QUESTION_OPTIONS,
  FUTURE_QUESTION_OPTIONS,
  DEFAULT_CREDENCES,
  STEPS,
  INPUT_MODES,
} from '../constants/config';

/**
 * Main quiz orchestrator component
 * Manages all state and navigation between screens
 */
const MoralParliamentQuiz = () => {
  // Step navigation
  const [currentStep, setCurrentStep] = useState(STEPS.WELCOME);

  // Credence state
  const [animalCredences, setAnimalCredences] = useState({ ...DEFAULT_CREDENCES });
  const [futureCredences, setFutureCredences] = useState({ ...DEFAULT_CREDENCES });

  // Original credences for reset functionality
  const [originalAnimalCredences, setOriginalAnimalCredences] = useState(null);
  const [originalFutureCredences, setOriginalFutureCredences] = useState(null);

  // UI state
  const [expandedPanel, setExpandedPanel] = useState(null);
  const [animalInputMode, setAnimalInputMode] = useState(INPUT_MODES.OPTIONS);
  const [futureInputMode, setFutureInputMode] = useState(INPUT_MODES.OPTIONS);

  // Calculate results
  const maxEVResults = calculateMaxEV(animalCredences, futureCredences);
  const parliamentResults = calculateVarianceVoting(animalCredences, futureCredences);
  const originalMaxEV = originalAnimalCredences
    ? calculateMaxEV(originalAnimalCredences, originalFutureCredences)
    : null;
  const originalParliament = originalAnimalCredences
    ? calculateVarianceVoting(originalAnimalCredences, originalFutureCredences)
    : null;

  // Check if credences have changed
  const hasChanged =
    originalAnimalCredences &&
    (JSON.stringify(animalCredences) !== JSON.stringify(originalAnimalCredences) ||
      JSON.stringify(futureCredences) !== JSON.stringify(originalFutureCredences));

  // Reset to original credences
  const resetToOriginal = () => {
    setAnimalCredences({ ...originalAnimalCredences });
    setFutureCredences({ ...originalFutureCredences });
  };

  // Save original credences when entering results
  const handleContinueToResults = () => {
    if (!originalAnimalCredences) {
      setOriginalAnimalCredences({ ...animalCredences });
      setOriginalFutureCredences({ ...futureCredences });
    }
    setCurrentStep(STEPS.RESULTS);
  };

  // Render appropriate screen
  if (currentStep === STEPS.WELCOME) {
    return <WelcomeScreen onStart={() => setCurrentStep(STEPS.ANIMALS)} />;
  }

  if (currentStep === STEPS.ANIMALS) {
    return (
      <QuestionScreen
        categoryLabel="Moral Weights"
        categoryColor="#81B29A"
        questionNumber="Question 1 of 2"
        progressPercentage={50}
        heading="How do you value animal welfare relative to human welfare?"
        instructionsOptions='Choose the view that best represents your position, or use "Custom Mix" to split your credence.'
        instructionsSliders="Distribute your credence (confidence) across these views. Sliders auto-balance to 100%."
        options={ANIMAL_QUESTION_OPTIONS}
        credences={animalCredences}
        setCredences={setAnimalCredences}
        inputMode={animalInputMode}
        setInputMode={setAnimalInputMode}
        onBack={() => setCurrentStep(STEPS.WELCOME)}
        onContinue={() => setCurrentStep(STEPS.FUTURE)}
        adjustCredences={adjustCredences}
      />
    );
  }

  if (currentStep === STEPS.FUTURE) {
    return (
      <QuestionScreen
        categoryLabel="Time Preference"
        categoryColor="#81B29A"
        questionNumber="Question 2 of 2"
        progressPercentage={100}
        heading="How do you value future human welfare relative to current human welfare?"
        instructionsOptions='Choose the view that best represents your position, or use "Custom Mix" to split your credence.'
        instructionsSliders="Distribute your credence across these views. Sliders auto-balance to 100%."
        options={FUTURE_QUESTION_OPTIONS}
        credences={futureCredences}
        setCredences={setFutureCredences}
        inputMode={futureInputMode}
        setInputMode={setFutureInputMode}
        onBack={() => setCurrentStep(STEPS.ANIMALS)}
        onContinue={handleContinueToResults}
        adjustCredences={adjustCredences}
      />
    );
  }

  if (currentStep === STEPS.RESULTS) {
    return (
      <ResultsScreen
        animalCredences={animalCredences}
        setAnimalCredences={setAnimalCredences}
        futureCredences={futureCredences}
        setFutureCredences={setFutureCredences}
        originalAnimalCredences={originalAnimalCredences}
        originalFutureCredences={originalFutureCredences}
        expandedPanel={expandedPanel}
        setExpandedPanel={setExpandedPanel}
        maxEVResults={maxEVResults}
        parliamentResults={parliamentResults}
        originalMaxEV={originalMaxEV}
        originalParliament={originalParliament}
        hasChanged={hasChanged}
        onResetAll={resetToOriginal}
        onBack={() => setCurrentStep(STEPS.FUTURE)}
      />
    );
  }

  return null;
};

export default MoralParliamentQuiz;
