import styles from '../../styles/components/CauseBar.module.css';

/**
 * Horizontal bar chart showing cause allocation percentage
 * Shows original value as ghost bar when values have changed
 * Displays up/down arrows to indicate changes
 */
const CauseBar = ({ name, percentage, color, originalPercentage = null, hasChanged = false }) => {
  const showChange = hasChanged && originalPercentage !== null && percentage !== originalPercentage;
  const isIncrease = showChange && percentage > originalPercentage;
  const _isDecrease = showChange && percentage < originalPercentage; // Unused: deferred to UX designer

  return (
    <div className={styles.causeBar}>
      <div className={styles.header}>
        <span className={styles.name}>{name}</span>
        <span className={styles.percentage} style={{ color }}>
          {percentage.toFixed(0)}%
          {showChange && (
            <span className={`${styles.changeIndicator} ${isIncrease ? styles.up : styles.down}`}>
              {isIncrease ? '↑' : '↓'}
            </span>
          )}
        </span>
      </div>
      <div className={styles.barTrack}>
        {showChange && (
          <div
            className={styles.barOriginal}
            style={{
              width: `${originalPercentage}%`,
              background: color,
            }}
          />
        )}
        <div
          className={styles.barFill}
          style={{
            width: `${percentage}%`,
            background: color,
          }}
        >
          {percentage > 15 && <span className={styles.barLabel}>{percentage.toFixed(0)}%</span>}
        </div>
      </div>
    </div>
  );
};

export default CauseBar;
