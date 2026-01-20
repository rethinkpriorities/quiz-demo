import WelcomeScreen from './WelcomeScreen';
import QuestionScreen from './QuestionScreen';
import ResultsScreen from './ResultsScreen';
import CalculationDebugger from './CalculationDebugger';
import { useQuiz } from '../context/useQuiz';
import features from '../../config/features.json';

/**
 * Main quiz orchestrator component
 * Manages screen routing based on context state
 */
const MoralParliamentQuiz = () => {
  const {
    currentStep,
    questionsConfig,
    stateMap,
    expandedPanel,
    setExpandedPanel,
    goToStep,
    saveOriginals,
    resetToOriginal,
    resetQuiz,
    setDebugConfig,
    getPrevStep,
    getNextStep,
    getQuestionIndex,
    progressPercentage,
    questionNumber,
    hasChanged,
    calculationResults,
    originalCalculationResults,
    adjustCredences,
  } = useQuiz();

  // Handle continuing to results (save originals first time)
  const handleContinueToResults = () => {
    saveOriginals();
    goToStep('results');
  };

  // Render question screen for a given question config
  const renderQuestionScreen = (question, index) => {
    const state = stateMap[question.id];
    if (!state) {
      console.error(`No state mapping found for question ID: ${question.id}`);
      return null;
    }

    const isLastQuestion = index === questionsConfig.length - 1;

    return (
      <QuestionScreen
        key={question.id}
        categoryLabel={question.categoryLabel}
        questionNumber={questionNumber}
        progressPercentage={progressPercentage}
        heading={question.heading}
        instructionsOptions={question.instructionsOptions}
        instructionsSliders={question.instructionsSliders}
        options={question.options}
        credences={state.credences}
        setCredences={state.setCredences}
        inputMode={state.inputMode}
        setInputMode={state.setInputMode}
        lockedKey={state.lockedKey}
        setLockedKey={state.setLockedKey}
        onBack={() => goToStep(getPrevStep(question.id))}
        onContinue={
          isLastQuestion ? handleContinueToResults : () => goToStep(getNextStep(question.id))
        }
        adjustCredences={adjustCredences}
      />
    );
  };

  // Determine which screen to render
  let screenContent = null;

  if (currentStep === 'welcome') {
    screenContent = (
      <WelcomeScreen questions={questionsConfig} onStart={() => goToStep(questionsConfig[0].id)} />
    );
  } else if (currentStep === 'results') {
    screenContent = (
      <ResultsScreen
        questions={questionsConfig}
        stateMap={stateMap}
        expandedPanel={expandedPanel}
        setExpandedPanel={setExpandedPanel}
        maxEVResults={calculationResults.maxEV}
        parliamentResults={calculationResults.parliament}
        mergedFavoritesResults={calculationResults.mergedFavorites}
        maximinResults={calculationResults.maximin}
        originalMaxEV={originalCalculationResults?.maxEV}
        originalParliament={originalCalculationResults?.parliament}
        originalMergedFavorites={originalCalculationResults?.mergedFavorites}
        originalMaximin={originalCalculationResults?.maximin}
        hasChanged={hasChanged}
        onResetAll={resetToOriginal}
        onResetQuiz={resetQuiz}
        onBack={() => goToStep(questionsConfig[questionsConfig.length - 1].id)}
      />
    );
  } else {
    // Find the question for this step
    const questionIndex = getQuestionIndex(currentStep);
    if (questionIndex !== -1) {
      screenContent = renderQuestionScreen(questionsConfig[questionIndex], questionIndex);
    }
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
