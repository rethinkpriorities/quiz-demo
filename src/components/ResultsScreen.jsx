import { RotateCcw } from 'lucide-react';
import CauseBar from './ui/CauseBar';
import EditPanel from './ui/EditPanel';
import { useQuiz } from '../context/useQuiz';
import styles from '../styles/components/Results.module.css';
import features from '../../config/features.json';
import copy from '../../config/copy.json';

/**
 * Results screen showing all 4 allocation methods
 * Allows editing credences and seeing live recalculation
 */
const ResultsScreen = () => {
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

  const { maxEV, parliament, mergedFavorites, maximin } = calculationResults;
  const causeEntries = Object.entries(causesConfig);

  const handleResetClick = () => {
    if (window.confirm(copy.results.resetConfirmation)) {
      resetQuiz();
    }
  };

  // Build panel configs from question options
  const getPanelConfigs = (question) =>
    question.options.map((opt) => ({
      key: opt.key,
      label: opt.panelLabel,
      short: opt.panelShort,
      color: opt.color,
    }));

  const useSideBySide = features.calculations?.sideBySideComparison === true;

  // Render cause bars for a given result set
  // simpleMode: compact version for side-by-side comparison (no inline change indicators)
  // When not in simpleMode, shows original percentage ghost bar and change arrows
  const renderCauseBars = (results, originalResults = null, simpleMode = false) =>
    causeEntries.map(([causeKey, cause]) => (
      <CauseBar
        key={causeKey}
        name={cause.name}
        percentage={results[causeKey]}
        originalPercentage={originalResults?.[causeKey]}
        color={cause.color}
        hasChanged={!simpleMode && hasChanged}
        simpleMode={simpleMode}
      />
    ));

  // Render a single result card
  // originalResults: for inline comparison mode (ghost bars + arrows)
  // simpleMode: for side-by-side comparison mode (compact, no inline comparison)
  const renderResultCard = (
    methodKey,
    results,
    evs = null,
    originalResults = null,
    simpleMode = false
  ) => {
    const method = copy.results.methods[methodKey];
    const iconClass = methodKey === 'mergedFavorites' ? 'merged' : methodKey;

    return (
      <div className={`${styles.resultCard} ${simpleMode ? styles.compactCard : ''}`}>
        <div className={styles.cardHeader}>
          <div className={`${styles.cardIcon} ${styles[iconClass]}`}>{method.icon}</div>
          <div>
            <h3 className={styles.cardTitle}>{method.title}</h3>
            {!simpleMode && <p className={styles.cardSubtitle}>{method.subtitle}</p>}
          </div>
        </div>
        {renderCauseBars(results, originalResults, simpleMode)}
        {!simpleMode && (
          <div className={styles.cardFooter}>
            {evs
              ? `${method.footerLabel} ${causeEntries.map(([key, cause]) => `${cause.name.slice(0, 2)} ${evs[key].toFixed(0)}`).join(' · ')}`
              : method.footerText}
          </div>
        )}
      </div>
    );
  };

  // Render the results grid for side-by-side comparison mode
  const renderCompactResultsGrid = (results) => (
    <div className={`${styles.resultsGrid} ${styles.compactGrid}`}>
      {features.calculations?.showMaxEV === true &&
        renderResultCard('maxEV', results.maxEV, results.maxEV.evs, null, true)}
      {features.calculations?.showMergedFavorites === true &&
        renderResultCard('mergedFavorites', results.mergedFavorites, null, null, true)}
    </div>
  );

  // Render the standard results grid with inline comparison
  const renderStandardResultsGrid = () => (
    <div className={styles.resultsGrid}>
      {features.calculations?.showMaxEV === true &&
        renderResultCard('maxEV', maxEV, maxEV.evs, originalCalculationResults?.maxEV)}
      {features.calculations?.showMergedFavorites === true &&
        renderResultCard(
          'mergedFavorites',
          mergedFavorites,
          null,
          originalCalculationResults?.mergedFavorites
        )}
    </div>
  );

  return (
    <div className={styles.resultsContainer}>
      <div className={styles.inner}>
        {/* Header */}
        <div className={styles.header}>
          <h1 className={styles.title}>
            {copy.results.heading}
            {hasChanged && (
              <span className={styles.modifiedIndicator}>{copy.results.modifiedIndicator}</span>
            )}
          </h1>
        </div>

        {/* Results display - side-by-side comparison when flag enabled and changed */}
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

        {/* Edit controls */}
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
            {questionsConfig.map((question) => {
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

        {/* Back button */}
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
};

export default ResultsScreen;
