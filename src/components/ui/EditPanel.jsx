import { useState, useRef, useEffect } from 'react';
import { ChevronDown, ChevronUp, RotateCcw } from 'lucide-react';
import CompactSlider from './CompactSlider';
import CompactSelection from './CompactSelection';
import { adjustCredences, roundCredences } from '../../utils/calculations';
import { QUESTION_TYPES } from '../../constants/config';
import features from '../../../config/features.json';
import styles from '../../styles/components/EditPanel.module.css';
import copy from '../../../config/copy.json';

/**
 * Collapsible panel for editing credences in results screen.
 * Shows "modified" badge when values differ from original.
 * Includes individual reset button and inline preview when collapsed.
 */
const CUSTOM_PRESET_ID = 'custom';

function EditPanel({
  title,
  icon,
  credences,
  setCredences,
  originalCredences,
  configs,
  isExpanded,
  onToggle,
  lockedKeys = [],
  setLockedKeys,
  questionType = QUESTION_TYPES.DEFAULT,
  selectedPreset,
  setSelectedPreset,
}) {
  // Local state for smooth slider display during drag
  const [localCredences, setLocalCredences] = useState(null);
  const syncTimeoutRef = useRef(null);

  // Clean up on unmount
  useEffect(() => {
    return () => {
      if (syncTimeoutRef.current) clearTimeout(syncTimeoutRef.current);
    };
  }, []);

  // Use local values for display if set, otherwise actual credences
  const displayCredences = localCredences || credences;

  const panelChanged =
    originalCredences && JSON.stringify(credences) !== JSON.stringify(originalCredences);

  // When questionTypes feature is enabled and type is selection, use button mode
  const isSelectionType =
    features.ui?.questionTypes !== false && questionType === QUESTION_TYPES.SELECTION;

  const handleSelectionClick = (selectedKey) => {
    const newCredences = {};
    configs.forEach((config) => {
      newCredences[config.key] = config.key === selectedKey ? 100 : 0;
    });
    setCredences(newCredences);
  };

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
            <span className={styles.modifiedBadge}>{copy.editPanel.modifiedBadge}</span>
          )}
        </div>
        <span className={styles.chevron}>
          {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </span>
      </button>

      {isExpanded && (
        <div className={styles.content}>
          {isSelectionType ? (
            <>
              <div className={styles.selectionRow}>
                {configs.map((config) => (
                  <CompactSelection
                    key={config.key}
                    label={config.label}
                    color={config.color}
                    isSelected={credences[config.key] === 100}
                    onSelect={() => handleSelectionClick(config.key)}
                  />
                ))}
              </div>
              <div className={styles.footer}>
                <span className={styles.footerNote}>
                  {copy.editPanel.selectionNote || 'Pick one option'}
                </span>
                {panelChanged && (
                  <button onClick={handleReset} className={styles.resetButton}>
                    <RotateCcw size={10} /> {copy.editPanel.resetButton}
                  </button>
                )}
              </div>
            </>
          ) : (
            <>
              {configs.map((config) => (
                <CompactSlider
                  key={config.key}
                  label={config.label}
                  value={displayCredences[config.key]}
                  onChange={(val, baseCredences, shouldRound, currentLockedKeys) => {
                    const sourceCredences = baseCredences || localCredences || credences;
                    const adjusted = adjustCredences(
                      config.key,
                      val,
                      sourceCredences,
                      baseCredences,
                      currentLockedKeys
                    );
                    const newCredences = shouldRound ? roundCredences(adjusted) : adjusted;

                    // Update local state immediately for smooth slider
                    setLocalCredences(newCredences);

                    // Switch to Custom preset when modifying credences
                    if (setSelectedPreset && selectedPreset !== CUSTOM_PRESET_ID) {
                      setSelectedPreset(CUSTOM_PRESET_ID);
                    }

                    // Debounce sync to context
                    if (syncTimeoutRef.current) clearTimeout(syncTimeoutRef.current);

                    if (shouldRound) {
                      // On drag end, sync immediately
                      setCredences(newCredences);
                      syncTimeoutRef.current = setTimeout(() => setLocalCredences(null), 50);
                    } else {
                      // During drag, debounce context sync
                      syncTimeoutRef.current = setTimeout(() => {
                        setCredences(newCredences);
                      }, 100);
                    }
                  }}
                  color={config.color}
                  credences={displayCredences}
                  sliderKey={config.key}
                  lockedKeys={lockedKeys}
                  setLockedKeys={setLockedKeys}
                />
              ))}
              <div className={styles.footer}>
                <span className={styles.footerNote}>{copy.editPanel.sliderNote}</span>
                {panelChanged && (
                  <button onClick={handleReset} className={styles.resetButton}>
                    <RotateCcw size={10} /> {copy.editPanel.resetButton}
                  </button>
                )}
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
}

export default EditPanel;
