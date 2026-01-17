import styles from '../../styles/components/OptionButton.module.css';

/**
 * Option button for quick selection of a single credence option
 * Sets the selected option to 100% and others to 0%
 */
const OptionButton = ({ label, description, optionKey, credences, setCredences, color, setInputMode }) => {
  const isSelected = credences[optionKey] === 100;

  const handleClick = () => {
    const newCredences = { equal: 0, '10x': 0, '100x': 0 };
    newCredences[optionKey] = 100;
    setCredences(newCredences);
    setInputMode('options');
  };

  return (
    <button
      onClick={handleClick}
      className={`${styles.optionButton} ${isSelected ? styles.selected : styles.default}`}
      style={{ '--option-color': color }}
    >
      <div className={styles.content}>
        <div className={styles.textContent}>
          <div className={`${styles.label} ${isSelected ? styles.selected : ''}`}>
            {label}
          </div>
          <div className={styles.description}>
            {description}
          </div>
        </div>
        {isSelected && (
          <div className={styles.checkmark}>
            ✓
          </div>
        )}
      </div>
    </button>
  );
};

export default OptionButton;
