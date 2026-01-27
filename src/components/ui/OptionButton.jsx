import styles from '../../styles/components/OptionButton.module.css';

/**
 * Option button for quick selection of a single credence option.
 * Sets the selected option to 100% and others to 0%.
 */
function OptionButton({
  label,
  description,
  optionKey,
  credences,
  setCredences,
  color,
  setInputMode,
  setLockedKey,
}) {
  const isSelected = credences[optionKey] === 100;

  const handleClick = () => {
    // Build new credences dynamically from existing keys
    const newCredences = Object.fromEntries(
      Object.keys(credences).map((key) => [key, key === optionKey ? 100 : 0])
    );
    setCredences(newCredences);
    setInputMode('options');
    // Clear any slider lock when selecting an option
    if (setLockedKey) {
      setLockedKey(null);
    }
  };

  return (
    <button
      onClick={handleClick}
      className={`${styles.optionButton} ${isSelected ? styles.selected : styles.default}`}
      style={{ '--option-color': color }}
    >
      <div className={styles.content}>
        <div className={styles.textContent}>
          <div className={`${styles.label} ${isSelected ? styles.selected : ''}`}>{label}</div>
          <div className={styles.description}>{description}</div>
        </div>
        {isSelected && <div className={styles.checkmark}>✓</div>}
      </div>
    </button>
  );
}

export default OptionButton;
