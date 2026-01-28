import { Lock } from 'lucide-react';
import { useSliderDrag } from '../../hooks/useSliderDrag';
import { useLockedSlider } from '../../hooks/useLockedSlider';
import InfoTooltip from './InfoTooltip';
import styles from '../../styles/components/Slider.module.css';
import copy from '../../../config/copy.json';

/**
 * Full-size slider for quiz questions with auto-balancing.
 * Used in question screens for distributing credences.
 */
function CredenceSlider({
  label,
  description,
  info,
  value,
  onChange,
  color,
  credences,
  sliderKey,
  lockedKey,
  setLockedKey,
}) {
  const { isLocked, hasLockedSibling, thumbOffset, featureEnabled } = useLockedSlider({
    sliderKey,
    lockedKey,
    credences,
  });

  const { isDragging, dragHandlers } = useSliderDrag({
    credences,
    isLocked,
    lockedKey,
    onChange,
  });

  const handleLockClick = () => {
    if (!featureEnabled) return;
    setLockedKey(lockedKey === sliderKey ? null : sliderKey);
  };

  const sliderBackground = hasLockedSibling
    ? `linear-gradient(to right, ${color} 0%, ${color} ${value}%, rgba(255,255,255,0.15) ${value}%, rgba(255,255,255,0.15) ${thumbOffset}, rgba(255,255,255,0.08) ${thumbOffset}, rgba(255,255,255,0.08) 100%)`
    : `linear-gradient(to right, ${color} 0%, ${color} ${value}%, rgba(255,255,255,0.15) ${value}%, rgba(255,255,255,0.15) 100%)`;

  return (
    <div className={styles.credenceSlider}>
      <div className={styles.header}>
        <div>
          <div className={styles.label}>
            {label}
            <InfoTooltip content={info} />
          </div>
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
            {...dragHandlers}
            data-dragging={isDragging}
            disabled={isLocked}
            style={{
              background: sliderBackground,
              cursor: isLocked ? 'not-allowed' : 'pointer',
            }}
          />
          {hasLockedSibling && <div className={styles.lockLimit} style={{ left: thumbOffset }} />}
        </div>
        {featureEnabled && (
          <button
            className={`${styles.lockButton} ${isLocked ? styles.locked : ''}`}
            onClick={handleLockClick}
            title={isLocked ? copy.sliders.unlockTooltip : copy.sliders.lockTooltip}
            type="button"
          >
            <Lock size={16} />
          </button>
        )}
      </div>
    </div>
  );
}

export default CredenceSlider;
