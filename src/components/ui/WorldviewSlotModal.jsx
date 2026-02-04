import { useState } from 'react';
import { useQuiz } from '../../context/useQuiz';
import styles from '../../styles/components/WorldviewSlotModal.module.css';

/**
 * Modal for managing a filled worldview slot.
 * Shows options to edit the name or edit the answers.
 */
function WorldviewSlotModal({ worldviewId, worldviewName, onEditAnswers, onClose }) {
  const { setWorldviewName } = useQuiz();
  const [name, setName] = useState(worldviewName);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleNameBlur = () => {
    if (name.trim() && name !== worldviewName) {
      setWorldviewName(worldviewId, name.trim());
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.target.blur();
    }
  };

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <h2 className={styles.title}>Edit Worldview</h2>

        <div className={styles.nameSection}>
          <label className={styles.nameLabel}>Name</label>
          <input
            type="text"
            value={name}
            onChange={handleNameChange}
            onBlur={handleNameBlur}
            onKeyDown={handleKeyDown}
            className={styles.nameInput}
            placeholder="Enter worldview name"
          />
        </div>

        <div className={styles.buttons}>
          <button onClick={onEditAnswers} className={`btn btn-primary ${styles.button}`}>
            Edit Answers
          </button>
          <button onClick={onClose} className={`btn btn-secondary ${styles.button}`}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default WorldviewSlotModal;
