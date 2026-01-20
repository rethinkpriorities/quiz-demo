import { RotateCcw } from 'lucide-react';
import CauseBar from './ui/CauseBar';
import EditPanel from './ui/EditPanel';
import { useQuiz } from '../context/useQuiz';
import styles from '../styles/components/Results.module.css';
import features from '../../config/features.json';

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
    if (
      window.confirm('Are you sure? This will clear all your answers and return to the beginning.')
    ) {
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

  // Render cause bars for a given result set
  const renderCauseBars = (results, originalResults) =>
    causeEntries.map(([causeKey, cause]) => (
      <CauseBar
        key={causeKey}
        name={cause.name}
        percentage={results[causeKey]}
        originalPercentage={originalResults?.[causeKey]}
        color={cause.color}
        hasChanged={hasChanged}
      />
    ));

  return (
    <div className={styles.resultsContainer}>
      <div className={styles.inner}>
        {/* Header */}
        <div className={styles.header}>
          <h1 className={styles.title}>
            Recommended Allocations
            {hasChanged && <span className={styles.modifiedIndicator}>(modified)</span>}
          </h1>
        </div>

        {/* Side-by-side results */}
        <div className={styles.resultsGrid}>
          {/* Max EV */}
          <div className={styles.resultCard}>
            <div className={styles.cardHeader}>
              <div className={`${styles.cardIcon} ${styles.maxEV}`}>🎯</div>
              <div>
                <h3 className={styles.cardTitle}>Max Expected Value</h3>
                <p className={styles.cardSubtitle}>100% to highest EV</p>
              </div>
            </div>
            {renderCauseBars(maxEV, originalCalculationResults?.maxEV)}
            <div className={styles.cardFooter}>
              EVs:{' '}
              {causeEntries
                .map(([key, cause]) => `${cause.name.slice(0, 2)} ${maxEV.evs[key].toFixed(0)}`)
                .join(' · ')}
            </div>
          </div>

          {/* Variance Voting */}
          <div className={styles.resultCard}>
            <div className={styles.cardHeader}>
              <div className={`${styles.cardIcon} ${styles.parliament}`}>🏛️</div>
              <div>
                <h3 className={styles.cardTitle}>Variance Voting</h3>
                <p className={styles.cardSubtitle}>Weighted worldview votes</p>
              </div>
            </div>
            {renderCauseBars(parliament, originalCalculationResults?.parliament)}
            <div className={styles.cardFooter}>Each worldview votes for preferred cause</div>
          </div>

          {/* Merged Favorites */}
          <div className={styles.resultCard}>
            <div className={styles.cardHeader}>
              <div className={`${styles.cardIcon} ${styles.merged}`}>🤝</div>
              <div>
                <h3 className={styles.cardTitle}>Merged Favorites</h3>
                <p className={styles.cardSubtitle}>Budget shares to favorites</p>
              </div>
            </div>
            {renderCauseBars(mergedFavorites, originalCalculationResults?.mergedFavorites)}
            <div className={styles.cardFooter}>Each worldview allocates its budget share</div>
          </div>

          {/* Maximin */}
          <div className={styles.resultCard}>
            <div className={styles.cardHeader}>
              <div className={`${styles.cardIcon} ${styles.maximin}`}>⚖️</div>
              <div>
                <h3 className={styles.cardTitle}>Maximin (Egalitarian)</h3>
                <p className={styles.cardSubtitle}>Fairest to all worldviews</p>
              </div>
            </div>
            {renderCauseBars(maximin, originalCalculationResults?.maximin)}
            <div className={styles.cardFooter}>Maximizes minimum worldview utility</div>
          </div>
        </div>

        {/* Edit controls */}
        <div className={styles.adjustPanel}>
          <div className={styles.adjustHeader}>
            <span className={styles.adjustTitle}>🎛️ Adjust Your Credences</span>
            {hasChanged && (
              <button onClick={resetToOriginal} className={styles.resetAllButton}>
                <RotateCcw size={10} /> Reset All
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
                />
              );
            })}
          </div>
        </div>

        {/* Back button */}
        <div className={styles.backButtonContainer}>
          <button onClick={goBack} className={styles.backButton}>
            ← Back to Quiz
          </button>
          {features.ui?.resetButton && (
            <button onClick={handleResetClick} className={styles.resetButton}>
              Start Over
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ResultsScreen;
