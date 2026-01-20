import { RotateCcw } from 'lucide-react';
import CauseBar from './ui/CauseBar';
import EditPanel from './ui/EditPanel';
import styles from '../styles/components/Results.module.css';
import features from '../../config/features.json';
import {
  ANIMAL_PANEL_CONFIG,
  FUTURE_PANEL_CONFIG,
  SCALE_PANEL_CONFIG,
  CERTAINTY_PANEL_CONFIG,
} from '../constants/config';

/**
 * Results screen showing all 4 allocation methods
 * Allows editing credences and seeing live recalculation
 */
const ResultsScreen = ({
  animalCredences,
  setAnimalCredences,
  futureCredences,
  setFutureCredences,
  scaleCredences,
  setScaleCredences,
  certaintyCredences,
  setCertaintyCredences,
  originalAnimalCredences,
  originalFutureCredences,
  originalScaleCredences,
  originalCertaintyCredences,
  animalLockedKey,
  setAnimalLockedKey,
  futureLockedKey,
  setFutureLockedKey,
  scaleLockedKey,
  setScaleLockedKey,
  certaintyLockedKey,
  setCertaintyLockedKey,
  expandedPanel,
  setExpandedPanel,
  maxEVResults,
  parliamentResults,
  mergedFavoritesResults,
  maximinResults,
  originalMaxEV,
  originalParliament,
  originalMergedFavorites,
  originalMaximin,
  hasChanged,
  onResetAll,
  onResetQuiz,
  onBack,
}) => {
  const handleResetClick = () => {
    if (
      window.confirm('Are you sure? This will clear all your answers and return to the beginning.')
    ) {
      onResetQuiz();
    }
  };
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
              percentage={mergedFavoritesResults.globalHealth}
              originalPercentage={originalMergedFavorites?.globalHealth}
              color="var(--color-global-health)"
              hasChanged={hasChanged}
            />
            <CauseBar
              name="Animal Welfare"
              percentage={mergedFavoritesResults.animalWelfare}
              originalPercentage={originalMergedFavorites?.animalWelfare}
              color="var(--color-animal-welfare)"
              hasChanged={hasChanged}
            />
            <CauseBar
              name="GCR (Future)"
              percentage={mergedFavoritesResults.gcr}
              originalPercentage={originalMergedFavorites?.gcr}
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
              percentage={maximinResults.globalHealth}
              originalPercentage={originalMaximin?.globalHealth}
              color="var(--color-global-health)"
              hasChanged={hasChanged}
            />
            <CauseBar
              name="Animal Welfare"
              percentage={maximinResults.animalWelfare}
              originalPercentage={originalMaximin?.animalWelfare}
              color="var(--color-animal-welfare)"
              hasChanged={hasChanged}
            />
            <CauseBar
              name="GCR (Future)"
              percentage={maximinResults.gcr}
              originalPercentage={originalMaximin?.gcr}
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
              lockedKey={animalLockedKey}
              setLockedKey={setAnimalLockedKey}
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
              lockedKey={futureLockedKey}
              setLockedKey={setFutureLockedKey}
            />
            <EditPanel
              title="Scale Sensitivity"
              icon="📊"
              credences={scaleCredences}
              setCredences={setScaleCredences}
              originalCredences={originalScaleCredences}
              configs={SCALE_PANEL_CONFIG}
              isExpanded={expandedPanel === 'scale'}
              onToggle={() => setExpandedPanel(expandedPanel === 'scale' ? null : 'scale')}
              lockedKey={scaleLockedKey}
              setLockedKey={setScaleLockedKey}
            />
            <EditPanel
              title="Evidence Preference"
              icon="🔬"
              credences={certaintyCredences}
              setCredences={setCertaintyCredences}
              originalCredences={originalCertaintyCredences}
              configs={CERTAINTY_PANEL_CONFIG}
              isExpanded={expandedPanel === 'certainty'}
              onToggle={() => setExpandedPanel(expandedPanel === 'certainty' ? null : 'certainty')}
              lockedKey={certaintyLockedKey}
              setLockedKey={setCertaintyLockedKey}
            />
          </div>
        </div>

        {/* Back button */}
        <div className={styles.backButtonContainer}>
          <button onClick={onBack} className={styles.backButton}>
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
