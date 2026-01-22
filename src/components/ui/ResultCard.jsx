import CauseBar from './CauseBar';
import styles from '../../styles/components/Results.module.css';
import copy from '../../../config/copy.json';

/**
 * Displays a single calculation result card with cause bars
 * Used by both ResultsScreen and IntermissionScreen
 */
const ResultCard = ({
  methodKey,
  results,
  evs = null,
  originalResults = null,
  causeEntries,
  hasChanged = false,
  simpleMode = false,
}) => {
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
      {causeEntries.map(([causeKey, cause]) => (
        <CauseBar
          key={causeKey}
          name={cause.name}
          percentage={results[causeKey]}
          originalPercentage={originalResults?.[causeKey]}
          color={cause.color}
          hasChanged={!simpleMode && hasChanged}
          simpleMode={simpleMode}
        />
      ))}
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

export default ResultCard;
