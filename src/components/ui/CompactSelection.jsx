import { Check } from 'lucide-react';
import styles from '../../styles/components/Slider.module.css';

/**
 * Compact selection button for results page editing.
 * Used in EditPanel for selection-type questions.
 */
function CompactSelection({ label, color, isSelected, onSelect }) {
  return (
    <button
      type="button"
      onClick={onSelect}
      className={`${styles.compactSelection} ${isSelected ? styles.selected : ''}`}
      style={{ '--selection-color': color }}
    >
      <span className={styles.selectionLabel}>{label}</span>
      <span
        className={styles.selectionIndicator}
        style={{
          borderColor: isSelected ? color : undefined,
          backgroundColor: isSelected ? color : undefined,
        }}
      >
        {isSelected && <Check size={12} strokeWidth={3} />}
      </span>
    </button>
  );
}

export default CompactSelection;
