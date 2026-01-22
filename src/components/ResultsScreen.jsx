import { RotateCcw } from 'lucide-react';
import EditPanel from './ui/EditPanel';
import ResultCard from './ui/ResultCard';
import { useQuiz } from '../context/useQuiz';
import { QUESTION_TYPES } from '../constants/config';
import styles from '../styles/components/Results.module.css';
import features from '../../config/features.json';
import copy from '../../config/copy.json';

/**
 * Results screen showing allocation methods.
 * Allows editing credences and seeing live recalculation.
 */
function ResultsScreen() {
  const {
    questionsConfig,
    causesConfig,
    stateMap,
    expandedPanel,
    setExpandedPanel,
    calculationResults,
    originalCalculationResults,
    hasChanged,
    resetToOriginal,
    resetQuiz,
    goBack,
  } = useQuiz();

  const { maxEV, mergedFavorites } = calculationResults;
  const causeEntries = Object.entries(causesConfig);

  const handleResetClick = () => {
    if (window.confirm(copy.results.resetConfirmation)) {
      resetQuiz();
    }
  };

  const getPanelConfigs = (question) =>
    question.options.map((opt) => ({
      key: opt.key,
      label: opt.panelLabel,
      short: opt.panelShort,
      color: opt.color,
    }));

  const useSideBySide = features.calculations?.sideBySideComparison === true;

  // Filter out intermission questions for edit panels
  const editableQuestions = questionsConfig.filter((q) => q.type !== QUESTION_TYPES.INTERMISSION);

  const renderCompactResultsGrid = (results) => (
    <div className={`${styles.resultsGrid} ${styles.compactGrid}`}>
      {features.calculations?.showMaxEV === true && (
        <ResultCard
          methodKey="maxEV"
          results={results.maxEV}
          evs={results.maxEV.evs}
          causeEntries={causeEntries}
          simpleMode={true}
        />
      )}
      {features.calculations?.showMergedFavorites === true && (
        <ResultCard
          methodKey="mergedFavorites"
          results={results.mergedFavorites}
          causeEntries={causeEntries}
          simpleMode={true}
        />
      )}
    </div>
  );

  const renderStandardResultsGrid = () => (
    <div className={styles.resultsGrid}>
      {features.calculations?.showMaxEV === true && (
        <ResultCard
          methodKey="maxEV"
          results={maxEV}
          evs={maxEV.evs}
          originalResults={originalCalculationResults?.maxEV}
          causeEntries={causeEntries}
          hasChanged={hasChanged}
        />
      )}
      {features.calculations?.showMergedFavorites === true && (
        <ResultCard
          methodKey="mergedFavorites"
          results={mergedFavorites}
          originalResults={originalCalculationResults?.mergedFavorites}
          causeEntries={causeEntries}
          hasChanged={hasChanged}
        />
      )}
    </div>
  );

  return (
    <div className={styles.resultsContainer}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <h1 className={styles.title}>
            {copy.results.heading}
            {hasChanged && (
              <span className={styles.modifiedIndicator}>{copy.results.modifiedIndicator}</span>
            )}
          </h1>
        </div>

        {useSideBySide && hasChanged ? (
          <div className={styles.comparisonContainer}>
            <div className={styles.originalResults}>
              {renderCompactResultsGrid(originalCalculationResults)}
            </div>
            <div className={styles.comparisonDivider}>
              <div className={styles.dividerLine} />
              <div className={styles.dividerArrow}>→</div>
              <div className={styles.dividerLine} />
            </div>
            <div className={styles.newResults}>{renderCompactResultsGrid(calculationResults)}</div>
          </div>
        ) : (
          renderStandardResultsGrid()
        )}

        <div className={styles.adjustPanel}>
          <div className={styles.adjustHeader}>
            <span className={styles.adjustTitle}>{copy.results.adjustCredencesHeading}</span>
            {hasChanged && (
              <button onClick={resetToOriginal} className={styles.resetAllButton}>
                <RotateCcw size={10} /> {copy.results.resetAllButton}
              </button>
            )}
          </div>
          <div className={styles.panelList}>
            {editableQuestions.map((question) => {
              const state = stateMap[question.id];
              if (!state) return null;

              return (
                <EditPanel
                  key={question.id}
                  title={question.editPanelTitle}
                  icon={question.emoji}
                  credences={state.credences}
                  setCredences={state.setCredences}
                  originalCredences={state.originalCredences}
                  configs={getPanelConfigs(question)}
                  isExpanded={expandedPanel === question.id}
                  onToggle={() =>
                    setExpandedPanel(expandedPanel === question.id ? null : question.id)
                  }
                  lockedKey={state.lockedKey}
                  setLockedKey={state.setLockedKey}
                  questionType={question.type}
                />
              );
            })}
          </div>
        </div>

        <div className={styles.backButtonContainer}>
          <button onClick={goBack} className={styles.backButton}>
            {copy.navigation.backToQuiz}
          </button>
          {features.ui?.resetButton && (
            <button onClick={handleResetClick} className={styles.resetButton}>
              {copy.navigation.startOver}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default ResultsScreen;
