import { ChevronDown, ChevronUp, RotateCcw } from 'lucide-react';
import CompactSlider from './CompactSlider';
import styles from '../../styles/components/EditPanel.module.css';

/**
 * Collapsible panel for editing credences in results screen
 * Shows "modified" badge when values differ from original
 * Includes individual reset button and inline preview when collapsed
 */
const EditPanel = ({
  title,
  icon,
  credences,
  setCredences,
  originalCredences,
  configs,
  isExpanded,
  onToggle
}) => {
  const panelChanged = originalCredences && JSON.stringify(credences) !== JSON.stringify(originalCredences);

  const handleReset = (e) => {
    e.stopPropagation();
    setCredences({ ...originalCredences });
  };

  return (
    <div className={`${styles.editPanel} ${isExpanded ? styles.expanded : ''}`}>
      <button onClick={onToggle} className={styles.toggleButton}>
        <div className={styles.buttonContent}>
          <span className={styles.icon}>{icon}</span>
          <span className={styles.title}>{title}</span>
          {panelChanged && (
            <span className={styles.modifiedBadge}>modified</span>
          )}
          {!isExpanded && (
            <span className={styles.preview}>
              {configs.map(c => `${c.short}:${credences[c.key]}%`).join(' ')}
            </span>
          )}
        </div>
        <span className={styles.chevron}>
          {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </span>
      </button>

      {isExpanded && (
        <div className={styles.content}>
          {configs.map(config => (
            <CompactSlider
              key={config.key}
              label={config.label}
              value={credences[config.key]}
              onChange={(val) => {
                // Auto-balance credences
                const changedKey = config.key;
                const newValue = Math.max(0, Math.min(100, val));
                const otherKeys = Object.keys(credences).filter(k => k !== changedKey);
                const currentOtherSum = otherKeys.reduce((sum, k) => sum + credences[k], 0);
                const targetOtherSum = 100 - newValue;

                const result = { [changedKey]: newValue };

                if (currentOtherSum === 0) {
                  const each = Math.floor(targetOtherSum / otherKeys.length);
                  let remainder = targetOtherSum - (each * otherKeys.length);
                  otherKeys.forEach((k, i) => {
                    result[k] = each + (i < remainder ? 1 : 0);
                  });
                } else {
                  let allocated = 0;
                  otherKeys.forEach((k, i) => {
                    if (i === otherKeys.length - 1) {
                      result[k] = Math.max(0, targetOtherSum - allocated);
                    } else {
                      const proportion = credences[k] / currentOtherSum;
                      const value = Math.round(targetOtherSum * proportion);
                      result[k] = Math.max(0, value);
                      allocated += result[k];
                    }
                  });
                }

                setCredences(result);
              }}
              color={config.color}
            />
          ))}
          <div className={styles.footer}>
            <span className={styles.footerNote}>
              Sliders auto-balance to 100%
            </span>
            {panelChanged && (
              <button onClick={handleReset} className={styles.resetButton}>
                <RotateCcw size={10} /> Reset
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default EditPanel;
