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
            <CauseBar
              name="Global Health"
              percentage={maxEV.globalHealth}
              originalPercentage={originalCalculationResults?.maxEV?.globalHealth}
              color="var(--color-global-health)"
              hasChanged={hasChanged}
            />
            <CauseBar
              name="Animal Welfare"
              percentage={maxEV.animalWelfare}
              originalPercentage={originalCalculationResults?.maxEV?.animalWelfare}
              color="var(--color-animal-welfare)"
              hasChanged={hasChanged}
            />
            <CauseBar
              name="GCR (Future)"
              percentage={maxEV.gcr}
              originalPercentage={originalCalculationResults?.maxEV?.gcr}
              color="var(--color-gcr)"
              hasChanged={hasChanged}
            />
            <div className={styles.cardFooter}>
              EVs: GH {maxEV.evs.globalHealth.toFixed(0)} · AW {maxEV.evs.animalWelfare.toFixed(0)}{' '}
              · GCR {maxEV.evs.gcr.toFixed(0)}
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
            <CauseBar
              name="Global Health"
              percentage={parliament.globalHealth}
              originalPercentage={originalCalculationResults?.parliament?.globalHealth}
              color="var(--color-global-health)"
              hasChanged={hasChanged}
            />
            <CauseBar
              name="Animal Welfare"
              percentage={parliament.animalWelfare}
              originalPercentage={originalCalculationResults?.parliament?.animalWelfare}
              color="var(--color-animal-welfare)"
              hasChanged={hasChanged}
            />
            <CauseBar
              name="GCR (Future)"
              percentage={parliament.gcr}
              originalPercentage={originalCalculationResults?.parliament?.gcr}
              color="var(--color-gcr)"
              hasChanged={hasChanged}
            />
            <div className={styles.cardFooter}>81 worldviews vote for preferred cause</div>
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
            <CauseBar
              name="Global Health"
              percentage={mergedFavorites.globalHealth}
              originalPercentage={originalCalculationResults?.mergedFavorites?.globalHealth}
              color="var(--color-global-health)"
              hasChanged={hasChanged}
            />
            <CauseBar
              name="Animal Welfare"
              percentage={mergedFavorites.animalWelfare}
              originalPercentage={originalCalculationResults?.mergedFavorites?.animalWelfare}
              color="var(--color-animal-welfare)"
              hasChanged={hasChanged}
            />
            <CauseBar
              name="GCR (Future)"
              percentage={mergedFavorites.gcr}
              originalPercentage={originalCalculationResults?.mergedFavorites?.gcr}
              color="var(--color-gcr)"
              hasChanged={hasChanged}
            />
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
            <CauseBar
              name="Global Health"
              percentage={maximin.globalHealth}
              originalPercentage={originalCalculationResults?.maximin?.globalHealth}
              color="var(--color-global-health)"
              hasChanged={hasChanged}
            />
            <CauseBar
              name="Animal Welfare"
              percentage={maximin.animalWelfare}
              originalPercentage={originalCalculationResults?.maximin?.animalWelfare}
              color="var(--color-animal-welfare)"
              hasChanged={hasChanged}
            />
            <CauseBar
              name="GCR (Future)"
              percentage={maximin.gcr}
              originalPercentage={originalCalculationResults?.maximin?.gcr}
              color="var(--color-gcr)"
              hasChanged={hasChanged}
            />
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
