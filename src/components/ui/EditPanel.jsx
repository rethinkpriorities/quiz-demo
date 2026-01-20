import { ChevronDown, ChevronUp, RotateCcw } from 'lucide-react';
import CompactSlider from './CompactSlider';
import { adjustCredences, roundCredences } from '../../utils/calculations';
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
  onToggle,
  lockedKey,
  setLockedKey,
}) => {
  const panelChanged =
    originalCredences && JSON.stringify(credences) !== JSON.stringify(originalCredences);

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
          {panelChanged && <span className={styles.modifiedBadge}>modified</span>}
          {!isExpanded && (
            <span className={styles.preview}>
              {configs.map((c) => `${c.short}:${credences[c.key]}%`).join(' ')}
            </span>
          )}
        </div>
        <span className={styles.chevron}>
          {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </span>
      </button>

      {isExpanded && (
        <div className={styles.content}>
          {configs.map((config) => (
            <CompactSlider
              key={config.key}
              label={config.label}
              value={credences[config.key]}
              onChange={(val, baseCredences, shouldRound, lockedKey) => {
                const adjusted = adjustCredences(
                  config.key,
                  val,
                  credences,
                  baseCredences,
                  lockedKey
                );
                setCredences(shouldRound ? roundCredences(adjusted) : adjusted);
              }}
              color={config.color}
              credences={credences}
              sliderKey={config.key}
              lockedKey={lockedKey}
              setLockedKey={setLockedKey}
            />
          ))}
          <div className={styles.footer}>
            <span className={styles.footerNote}>Sliders auto-balance to 100%</span>
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
