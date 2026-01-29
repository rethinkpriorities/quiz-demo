import { useState } from 'react';
import { Store, Pencil, Check, X } from 'lucide-react';
import styles from '../../styles/components/SessionConflictModal.module.css';
import features from '../../../config/features.json';
import copy from '../../../config/copy.json';

const isMoralMarketplaceEnabled = features.ui?.moralMarketplace === true;
const modalCopy = copy.worldviewModal;

/**
 * Modal for switching between worldview slots.
 * Shows three buttons, one for each worldview, with the active one highlighted.
 * Allows editing worldview names inline.
 * When 2+ worldviews have progress, shows a "Moral Marketplace" button.
 */
function WorldviewSwitchModal({
  worldviewIds,
  activeWorldviewId,
  hasProgressMap,
  worldviewNames,
  onSwitch,
  onClose,
  onMarketplace,
  onRename,
}) {
  const [editingId, setEditingId] = useState(null);
  const [editValue, setEditValue] = useState('');

  const filledCount = Object.values(hasProgressMap).filter(Boolean).length;
  const showMarketplace = isMoralMarketplaceEnabled && filledCount >= 2 && onMarketplace;

  const handleStartEdit = (id, e) => {
    e.stopPropagation();
    setEditingId(id);
    setEditValue(worldviewNames?.[id] || `${modalCopy.defaultName} ${id}`);
  };

  const handleSaveEdit = (id, e) => {
    e.stopPropagation();
    const trimmedValue = editValue.trim();
    if (trimmedValue && onRename) {
      onRename(id, trimmedValue);
    }
    setEditingId(null);
    setEditValue('');
  };

  const handleCancelEdit = (e) => {
    e.stopPropagation();
    setEditingId(null);
    setEditValue('');
  };

  const handleKeyDown = (id, e) => {
    if (e.key === 'Enter') {
      handleSaveEdit(id, e);
    } else if (e.key === 'Escape') {
      handleCancelEdit(e);
    }
  };

  const getDisplayName = (id) => {
    return worldviewNames?.[id] || `${modalCopy.defaultName} ${id}`;
  };

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <h2 className={styles.title}>{modalCopy.title}</h2>
        <p className={styles.message}>{modalCopy.description}</p>

        <div className={styles.buttons}>
          {worldviewIds.map((id) => {
            const isActive = id === activeWorldviewId;
            const hasProgress = hasProgressMap[id];
            const isEditing = editingId === id;
            const displayName = getDisplayName(id);

            return (
              <div key={id} className={styles.worldviewRow}>
                {isEditing ? (
                  <div className={styles.editRow} onClick={(e) => e.stopPropagation()}>
                    <input
                      type="text"
                      value={editValue}
                      onChange={(e) => setEditValue(e.target.value)}
                      onKeyDown={(e) => handleKeyDown(id, e)}
                      className={styles.editInput}
                      autoFocus
                      maxLength={30}
                    />
                    <button
                      onClick={(e) => handleSaveEdit(id, e)}
                      className={styles.iconButton}
                      title="Save"
                    >
                      <Check size={16} />
                    </button>
                    <button onClick={handleCancelEdit} className={styles.iconButton} title="Cancel">
                      <X size={16} />
                    </button>
                  </div>
                ) : (
                  <>
                    <button
                      onClick={() => onSwitch(id)}
                      className={`btn ${isActive ? 'btn-primary' : 'btn-secondary'} ${styles.button} ${styles.worldviewButton}`}
                      disabled={isActive}
                    >
                      {displayName}
                      {!hasProgress && ` ${modalCopy.emptyLabel}`}
                      {isActive && ` ${modalCopy.currentLabel}`}
                    </button>
                    {hasProgress && onRename && (
                      <button
                        onClick={(e) => handleStartEdit(id, e)}
                        className={styles.iconButton}
                        title="Rename"
                      >
                        <Pencil size={14} />
                      </button>
                    )}
                  </>
                )}
              </div>
            );
          })}

          {showMarketplace && (
            <button
              onClick={onMarketplace}
              className={`btn btn-primary ${styles.button}`}
              style={{ marginTop: '0.5rem' }}
            >
              <Store size={16} />
              {modalCopy.marketplaceButton}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default WorldviewSwitchModal;
