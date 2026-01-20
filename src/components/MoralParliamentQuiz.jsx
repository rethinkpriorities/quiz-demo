import { useState } from 'react';
import WelcomeScreen from './WelcomeScreen';
import QuestionScreen from './QuestionScreen';
import ResultsScreen from './ResultsScreen';
import {
  calculateMaxEV,
  calculateVarianceVoting,
  calculateMergedFavorites,
  calculateMaximin,
  adjustCredences,
} from '../utils/calculations';
import {
  ANIMAL_QUESTION_OPTIONS,
  FUTURE_QUESTION_OPTIONS,
  SCALE_QUESTION_OPTIONS,
  CERTAINTY_QUESTION_OPTIONS,
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
  const [scaleCredences, setScaleCredences] = useState({ ...DEFAULT_CREDENCES });
  const [certaintyCredences, setCertaintyCredences] = useState({ ...DEFAULT_CREDENCES });

  // Original credences for reset functionality
  const [originalAnimalCredences, setOriginalAnimalCredences] = useState(null);
  const [originalFutureCredences, setOriginalFutureCredences] = useState(null);
  const [originalScaleCredences, setOriginalScaleCredences] = useState(null);
  const [originalCertaintyCredences, setOriginalCertaintyCredences] = useState(null);

  // UI state
  const [expandedPanel, setExpandedPanel] = useState(null);
  const [animalInputMode, setAnimalInputMode] = useState(INPUT_MODES.OPTIONS);
  const [futureInputMode, setFutureInputMode] = useState(INPUT_MODES.OPTIONS);
  const [scaleInputMode, setScaleInputMode] = useState(INPUT_MODES.OPTIONS);
  const [certaintyInputMode, setCertaintyInputMode] = useState(INPUT_MODES.OPTIONS);

  // Locked slider state (null = none locked, otherwise key name of locked slider)
  const [animalLockedKey, setAnimalLockedKey] = useState(null);
  const [futureLockedKey, setFutureLockedKey] = useState(null);
  const [scaleLockedKey, setScaleLockedKey] = useState(null);
  const [certaintyLockedKey, setCertaintyLockedKey] = useState(null);

  // Calculate results
  const maxEVResults = calculateMaxEV(
    animalCredences,
    futureCredences,
    scaleCredences,
    certaintyCredences
  );
  const parliamentResults = calculateVarianceVoting(
    animalCredences,
    futureCredences,
    scaleCredences,
    certaintyCredences
  );
  const mergedFavoritesResults = calculateMergedFavorites(
    animalCredences,
    futureCredences,
    scaleCredences,
    certaintyCredences
  );
  const maximinResults = calculateMaximin(
    animalCredences,
    futureCredences,
    scaleCredences,
    certaintyCredences
  );

  const originalMaxEV = originalAnimalCredences
    ? calculateMaxEV(
        originalAnimalCredences,
        originalFutureCredences,
        originalScaleCredences,
        originalCertaintyCredences
      )
    : null;
  const originalParliament = originalAnimalCredences
    ? calculateVarianceVoting(
        originalAnimalCredences,
        originalFutureCredences,
        originalScaleCredences,
        originalCertaintyCredences
      )
    : null;
  const originalMergedFavorites = originalAnimalCredences
    ? calculateMergedFavorites(
        originalAnimalCredences,
        originalFutureCredences,
        originalScaleCredences,
        originalCertaintyCredences
      )
    : null;
  const originalMaximin = originalAnimalCredences
    ? calculateMaximin(
        originalAnimalCredences,
        originalFutureCredences,
        originalScaleCredences,
        originalCertaintyCredences
      )
    : null;

  // Check if credences have changed
  const hasChanged =
    originalAnimalCredences &&
    (JSON.stringify(animalCredences) !== JSON.stringify(originalAnimalCredences) ||
      JSON.stringify(futureCredences) !== JSON.stringify(originalFutureCredences) ||
      JSON.stringify(scaleCredences) !== JSON.stringify(originalScaleCredences) ||
      JSON.stringify(certaintyCredences) !== JSON.stringify(originalCertaintyCredences));

  // Reset to original credences
  const resetToOriginal = () => {
    setAnimalCredences({ ...originalAnimalCredences });
    setFutureCredences({ ...originalFutureCredences });
    setScaleCredences({ ...originalScaleCredences });
    setCertaintyCredences({ ...originalCertaintyCredences });
  };

  // Full quiz reset - returns to welcome screen
  const handleResetQuiz = () => {
    setAnimalCredences({ ...DEFAULT_CREDENCES });
    setFutureCredences({ ...DEFAULT_CREDENCES });
    setScaleCredences({ ...DEFAULT_CREDENCES });
    setCertaintyCredences({ ...DEFAULT_CREDENCES });
    setOriginalAnimalCredences(null);
    setOriginalFutureCredences(null);
    setOriginalScaleCredences(null);
    setOriginalCertaintyCredences(null);
    setAnimalInputMode(INPUT_MODES.OPTIONS);
    setFutureInputMode(INPUT_MODES.OPTIONS);
    setScaleInputMode(INPUT_MODES.OPTIONS);
    setCertaintyInputMode(INPUT_MODES.OPTIONS);
    setAnimalLockedKey(null);
    setFutureLockedKey(null);
    setScaleLockedKey(null);
    setCertaintyLockedKey(null);
    setExpandedPanel(null);
    setCurrentStep(STEPS.WELCOME);
  };

  // Save original credences when entering results
  const handleContinueToResults = () => {
    if (!originalAnimalCredences) {
      setOriginalAnimalCredences({ ...animalCredences });
      setOriginalFutureCredences({ ...futureCredences });
      setOriginalScaleCredences({ ...scaleCredences });
      setOriginalCertaintyCredences({ ...certaintyCredences });
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
        questionNumber="Question 1 of 4"
        progressPercentage={25}
        heading="How do you value animal welfare relative to human welfare?"
        instructionsOptions='Choose the view that best represents your position, or use "Custom Mix" to split your credence.'
        instructionsSliders="Distribute your credence (confidence) across these views. Sliders auto-balance to 100%."
        options={ANIMAL_QUESTION_OPTIONS}
        credences={animalCredences}
        setCredences={setAnimalCredences}
        inputMode={animalInputMode}
        setInputMode={setAnimalInputMode}
        lockedKey={animalLockedKey}
        setLockedKey={setAnimalLockedKey}
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
        questionNumber="Question 2 of 4"
        progressPercentage={50}
        heading="How do you value future human welfare relative to current human welfare?"
        instructionsOptions='Choose the view that best represents your position, or use "Custom Mix" to split your credence.'
        instructionsSliders="Distribute your credence across these views. Sliders auto-balance to 100%."
        options={FUTURE_QUESTION_OPTIONS}
        credences={futureCredences}
        setCredences={setFutureCredences}
        inputMode={futureInputMode}
        setInputMode={setFutureInputMode}
        lockedKey={futureLockedKey}
        setLockedKey={setFutureLockedKey}
        onBack={() => setCurrentStep(STEPS.ANIMALS)}
        onContinue={() => setCurrentStep(STEPS.SCALE)}
        adjustCredences={adjustCredences}
      />
    );
  }

  if (currentStep === STEPS.SCALE) {
    return (
      <QuestionScreen
        categoryLabel="Scale Sensitivity"
        categoryColor="#98C1D9"
        questionNumber="Question 3 of 4"
        progressPercentage={75}
        heading="How much does the scale of impact matter?"
        instructionsOptions='Choose the view that best represents your position, or use "Custom Mix" to split your credence.'
        instructionsSliders="Distribute your credence across these views. Sliders auto-balance to 100%."
        options={SCALE_QUESTION_OPTIONS}
        credences={scaleCredences}
        setCredences={setScaleCredences}
        inputMode={scaleInputMode}
        setInputMode={setScaleInputMode}
        lockedKey={scaleLockedKey}
        setLockedKey={setScaleLockedKey}
        onBack={() => setCurrentStep(STEPS.FUTURE)}
        onContinue={() => setCurrentStep(STEPS.CERTAINTY)}
        adjustCredences={adjustCredences}
      />
    );
  }

  if (currentStep === STEPS.CERTAINTY) {
    return (
      <QuestionScreen
        categoryLabel="Evidence Preference"
        categoryColor="#E07A5F"
        questionNumber="Question 4 of 4"
        progressPercentage={100}
        heading="How much do you value proven interventions over speculative ones?"
        instructionsOptions='Choose the view that best represents your position, or use "Custom Mix" to split your credence.'
        instructionsSliders="Distribute your credence across these views. Sliders auto-balance to 100%."
        options={CERTAINTY_QUESTION_OPTIONS}
        credences={certaintyCredences}
        setCredences={setCertaintyCredences}
        inputMode={certaintyInputMode}
        setInputMode={setCertaintyInputMode}
        lockedKey={certaintyLockedKey}
        setLockedKey={setCertaintyLockedKey}
        onBack={() => setCurrentStep(STEPS.SCALE)}
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
        scaleCredences={scaleCredences}
        setScaleCredences={setScaleCredences}
        certaintyCredences={certaintyCredences}
        setCertaintyCredences={setCertaintyCredences}
        originalAnimalCredences={originalAnimalCredences}
        originalFutureCredences={originalFutureCredences}
        originalScaleCredences={originalScaleCredences}
        originalCertaintyCredences={originalCertaintyCredences}
        animalLockedKey={animalLockedKey}
        setAnimalLockedKey={setAnimalLockedKey}
        futureLockedKey={futureLockedKey}
        setFutureLockedKey={setFutureLockedKey}
        scaleLockedKey={scaleLockedKey}
        setScaleLockedKey={setScaleLockedKey}
        certaintyLockedKey={certaintyLockedKey}
        setCertaintyLockedKey={setCertaintyLockedKey}
        expandedPanel={expandedPanel}
        setExpandedPanel={setExpandedPanel}
        maxEVResults={maxEVResults}
        parliamentResults={parliamentResults}
        mergedFavoritesResults={mergedFavoritesResults}
        maximinResults={maximinResults}
        originalMaxEV={originalMaxEV}
        originalParliament={originalParliament}
        originalMergedFavorites={originalMergedFavorites}
        originalMaximin={originalMaximin}
        hasChanged={hasChanged}
        onResetAll={resetToOriginal}
        onResetQuiz={handleResetQuiz}
        onBack={() => setCurrentStep(STEPS.CERTAINTY)}
      />
    );
  }

  return null;
};

export default MoralParliamentQuiz;
