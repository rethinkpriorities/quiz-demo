import { useState } from 'react';
import { Lock } from 'lucide-react';
import styles from '../../styles/components/Slider.module.css';
import features from '../../../config/features.json';

/**
 * Full-size slider for quiz questions with auto-balancing
 * Used in question screens for distributing credences
 * Tracks drag state to maintain consistent ratios during slider adjustments
 */
const CredenceSlider = ({
  label,
  description,
  value,
  onChange,
  color,
  credences,
  sliderKey,
  lockedKey,
  setLockedKey,
}) => {
  // Track the credences snapshot when drag starts
  // This lets us maintain original ratios throughout the entire drag
  const [dragBaseCredences, setDragBaseCredences] = useState(null);

  // Track if we're currently dragging (for disabling transitions on active slider)
  const [isDragging, setIsDragging] = useState(false);

  const isLocked = lockedKey === sliderKey;

  // Calculate max allowed value when another slider is locked
  const hasLockedSibling = lockedKey && lockedKey !== sliderKey;
  const lockedValue = hasLockedSibling ? credences[lockedKey] : 0;
  const maxAllowed = hasLockedSibling ? 100 - lockedValue : 100;

  // Adjust position to account for thumb width (16px thumb assumed)
  // At 0%, thumb center is ~8px from left; at 100%, ~8px from right
  const thumbOffset = hasLockedSibling
    ? `calc(${maxAllowed}% + ${(50 - maxAllowed) * 0.16}px)`
    : null;

  const handleDragStart = () => {
    if (isLocked) return;
    setIsDragging(true);
    // Capture current state as the reference point for this drag
    setDragBaseCredences({ ...credences });
  };

  const handleDragEnd = (e) => {
    if (isLocked) return;
    setIsDragging(false);
    // On drag end, trigger one final change with rounding
    const finalValue = parseFloat(e.target.value);
    onChange(finalValue, dragBaseCredences, true, lockedKey); // true = shouldRound
    // Clear the snapshot - next drag will use fresh values
    setDragBaseCredences(null);
  };

  const handleChange = (e) => {
    if (isLocked) return;
    const newValue = parseFloat(e.target.value);
    // Pass the snapshot (if we're dragging) to onChange
    // Parent will forward this to adjustCredences
    onChange(newValue, dragBaseCredences, false, lockedKey);
  };

  const handleLockClick = () => {
    if (!features.ui?.sliderLock) return;
    // If this slider is already locked, unlock it
    // Otherwise, lock this slider (unlocking any other locked slider)
    setLockedKey(lockedKey === sliderKey ? null : sliderKey);
  };

  return (
    <div className={styles.credenceSlider}>
      <div className={styles.header}>
        <div>
          <div className={styles.label}>{label}</div>
          <div className={styles.description}>{description}</div>
        </div>
        <div className={styles.value} style={{ color }}>
          {Math.round(value)}%
        </div>
      </div>
      <div className={styles.sliderRow}>
        <div className={styles.sliderContainer}>
          <input
            type="range"
            min="0"
            max="100"
            step="any"
            value={value}
            onChange={handleChange}
            onMouseDown={handleDragStart}
            onMouseUp={handleDragEnd}
            onMouseLeave={handleDragEnd}
            onTouchStart={handleDragStart}
            onTouchEnd={handleDragEnd}
            data-dragging={isDragging}
            disabled={isLocked}
            style={{
              background: hasLockedSibling
                ? `linear-gradient(to right, ${color} 0%, ${color} ${value}%, rgba(255,255,255,0.15) ${value}%, rgba(255,255,255,0.15) ${thumbOffset}, rgba(255,255,255,0.08) ${thumbOffset}, rgba(255,255,255,0.08) 100%)`
                : `linear-gradient(to right, ${color} 0%, ${color} ${value}%, rgba(255,255,255,0.15) ${value}%, rgba(255,255,255,0.15) 100%)`,
              cursor: isLocked ? 'not-allowed' : 'pointer',
            }}
          />
          {hasLockedSibling && <div className={styles.lockLimit} style={{ left: thumbOffset }} />}
        </div>
        {features.ui?.sliderLock && (
          <button
            className={`${styles.lockButton} ${isLocked ? styles.locked : ''}`}
            onClick={handleLockClick}
            title={isLocked ? 'Unlock slider' : 'Lock slider'}
            type="button"
          >
            <Lock size={16} />
          </button>
        )}
      </div>
    </div>
  );
};

export default CredenceSlider;
