import { useState } from 'react';
import { Lock } from 'lucide-react';
import styles from '../../styles/components/Slider.module.css';
import features from '../../../config/features.json';
import copy from '../../../config/copy.json';

/**
 * Compact slider for results page editing
 * Smaller variant used in EditPanel components
 * Tracks drag state to maintain consistent ratios during slider adjustments
 */
const CompactSlider = ({
  label,
  value,
  onChange,
  color,
  credences,
  sliderKey,
  lockedKey,
  setLockedKey,
}) => {
  // Track the credences snapshot when drag starts
  const [dragBaseCredences, setDragBaseCredences] = useState(null);
  const [isDragging, setIsDragging] = useState(false);

  const isLocked = lockedKey === sliderKey;

  // Calculate max allowed value when another slider is locked
  const hasLockedSibling = lockedKey && lockedKey !== sliderKey;
  const lockedValue = hasLockedSibling ? credences[lockedKey] : 0;
  const maxAllowed = hasLockedSibling ? 100 - lockedValue : 100;

  // Adjust position to account for thumb width (16px thumb assumed)
  const thumbOffset = hasLockedSibling
    ? `calc(${maxAllowed}% + ${(50 - maxAllowed) * 0.16}px)`
    : null;

  const handleDragStart = () => {
    if (isLocked) return;
    setIsDragging(true);
    setDragBaseCredences({ ...credences });
  };

  const handleDragEnd = (e) => {
    if (isLocked) return;
    if (!isDragging) return; // Only process if we were actually dragging
    setIsDragging(false);
    // On drag end, trigger one final change with rounding
    const finalValue = parseFloat(e.target.value);
    onChange(finalValue, dragBaseCredences, true, lockedKey); // true = shouldRound
    setDragBaseCredences(null);
  };

  const handleChange = (e) => {
    if (isLocked) return;
    const newValue = parseFloat(e.target.value);
    onChange(newValue, dragBaseCredences, false, lockedKey);
  };

  const handleLockClick = () => {
    if (!features.ui?.sliderLock) return;
    setLockedKey(lockedKey === sliderKey ? null : sliderKey);
  };

  return (
    <div className={styles.compactSlider}>
      <div className={styles.header}>
        <span className={styles.label}>{label}</span>
        <span className={styles.value} style={{ color }}>
          {Math.round(value)}%
        </span>
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
                ? `linear-gradient(to right, ${color} 0%, ${color} ${value}%, rgb(51,65,85) ${value}%, rgb(51,65,85) ${thumbOffset}, rgb(30,41,59) ${thumbOffset}, rgb(30,41,59) 100%)`
                : `linear-gradient(to right, ${color} 0%, ${color} ${value}%, rgb(51,65,85) ${value}%, rgb(51,65,85) 100%)`,
              cursor: isLocked ? 'not-allowed' : 'pointer',
            }}
          />
          {hasLockedSibling && <div className={styles.lockLimit} style={{ left: thumbOffset }} />}
        </div>
        {features.ui?.sliderLock && (
          <button
            className={`${styles.lockButton} ${isLocked ? styles.locked : ''}`}
            onClick={handleLockClick}
            title={isLocked ? copy.sliders.unlockTooltip : copy.sliders.lockTooltip}
            type="button"
          >
            <Lock size={14} />
          </button>
        )}
      </div>
    </div>
  );
};

export default CompactSlider;
