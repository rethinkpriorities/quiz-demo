import { RotateCcw } from 'lucide-react';
import CauseBar from './ui/CauseBar';
import EditPanel from './ui/EditPanel';
import styles from '../styles/components/Results.module.css';
import { ANIMAL_PANEL_CONFIG, FUTURE_PANEL_CONFIG } from '../constants/config';

/**
 * Results screen showing Max EV and Variance Voting allocations
 * Allows editing credences and seeing live recalculation
 */
const ResultsScreen = ({
  animalCredences,
  setAnimalCredences,
  futureCredences,
  setFutureCredences,
  originalAnimalCredences,
  originalFutureCredences,
  expandedPanel,
  setExpandedPanel,
  maxEVResults,
  parliamentResults,
  originalMaxEV,
  originalParliament,
  hasChanged,
  onResetAll,
  onBack,
}) => {
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
              percentage={maxEVResults.globalHealth}
              originalPercentage={originalMaxEV?.globalHealth}
              color="var(--color-global-health)"
              hasChanged={hasChanged}
            />
            <CauseBar
              name="Animal Welfare"
              percentage={maxEVResults.animalWelfare}
              originalPercentage={originalMaxEV?.animalWelfare}
              color="var(--color-animal-welfare)"
              hasChanged={hasChanged}
            />
            <CauseBar
              name="GCR (Future)"
              percentage={maxEVResults.gcr}
              originalPercentage={originalMaxEV?.gcr}
              color="var(--color-gcr)"
              hasChanged={hasChanged}
            />
            <div className={styles.cardFooter}>
              EVs: GH {maxEVResults.evs.globalHealth.toFixed(0)} · AW{' '}
              {maxEVResults.evs.animalWelfare.toFixed(0)} · GCR {maxEVResults.evs.gcr.toFixed(0)}
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
              percentage={parliamentResults.globalHealth}
              originalPercentage={originalParliament?.globalHealth}
              color="var(--color-global-health)"
              hasChanged={hasChanged}
            />
            <CauseBar
              name="Animal Welfare"
              percentage={parliamentResults.animalWelfare}
              originalPercentage={originalParliament?.animalWelfare}
              color="var(--color-animal-welfare)"
              hasChanged={hasChanged}
            />
            <CauseBar
              name="GCR (Future)"
              percentage={parliamentResults.gcr}
              originalPercentage={originalParliament?.gcr}
              color="var(--color-gcr)"
              hasChanged={hasChanged}
            />
            <div className={styles.cardFooter}>9 worldviews vote for preferred cause</div>
          </div>
        </div>

        {/* Edit controls */}
        <div className={styles.adjustPanel}>
          <div className={styles.adjustHeader}>
            <span className={styles.adjustTitle}>🎛️ Adjust Your Credences</span>
            {hasChanged && (
              <button onClick={onResetAll} className={styles.resetAllButton}>
                <RotateCcw size={10} /> Reset All
              </button>
            )}
          </div>
          <div className={styles.panelList}>
            <EditPanel
              title="Animal Values"
              icon="🐾"
              credences={animalCredences}
              setCredences={setAnimalCredences}
              originalCredences={originalAnimalCredences}
              configs={ANIMAL_PANEL_CONFIG}
              isExpanded={expandedPanel === 'animals'}
              onToggle={() => setExpandedPanel(expandedPanel === 'animals' ? null : 'animals')}
            />
            <EditPanel
              title="Future Values"
              icon="⏳"
              credences={futureCredences}
              setCredences={setFutureCredences}
              originalCredences={originalFutureCredences}
              configs={FUTURE_PANEL_CONFIG}
              isExpanded={expandedPanel === 'future'}
              onToggle={() => setExpandedPanel(expandedPanel === 'future' ? null : 'future')}
            />
          </div>
        </div>

        {/* Back button */}
        <div className={styles.backButtonContainer}>
          <button onClick={onBack} className={styles.backButton}>
            ← Back to Quiz
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResultsScreen;
