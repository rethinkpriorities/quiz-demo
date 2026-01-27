import styles from '../../styles/components/SessionConflictModal.module.css';

/**
 * Modal for switching between worldview slots.
 * Shows three buttons, one for each worldview, with the active one highlighted.
 */
function WorldviewSwitchModal({
  worldviewIds,
  activeWorldviewId,
  hasProgressMap,
  onSwitch,
  onClose,
}) {
  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <h2 className={styles.title}>Switch Worldview</h2>
        <p className={styles.message}>
          Each worldview stores a separate set of quiz answers. Select a worldview to view or edit.
        </p>

        <div className={styles.buttons}>
          {worldviewIds.map((id) => {
            const isActive = id === activeWorldviewId;
            const hasProgress = hasProgressMap[id];
            const label = hasProgress ? `Worldview ${id}` : `Worldview ${id} (empty)`;

            return (
              <button
                key={id}
                onClick={() => onSwitch(id)}
                className={`btn ${isActive ? 'btn-primary' : 'btn-secondary'} ${styles.button}`}
                disabled={isActive}
              >
                {label}
                {isActive && ' (current)'}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default WorldviewSwitchModal;
