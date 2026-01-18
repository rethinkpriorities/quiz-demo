import { useState } from 'react';
import styles from '../../styles/components/Slider.module.css';

/**
 * Full-size slider for quiz questions with auto-balancing
 * Used in question screens for distributing credences
 * Tracks drag state to maintain consistent ratios during slider adjustments
 */
const CredenceSlider = ({ label, description, value, onChange, color, credences }) => {
  // Track the credences snapshot when drag starts
  // This lets us maintain original ratios throughout the entire drag
  const [dragBaseCredences, setDragBaseCredences] = useState(null);

  // Track if we're currently dragging (for disabling transitions on active slider)
  const [isDragging, setIsDragging] = useState(false);

  const handleDragStart = () => {
    setIsDragging(true);
    // Capture current state as the reference point for this drag
    setDragBaseCredences({ ...credences });
  };

  const handleDragEnd = (e) => {
    setIsDragging(false);
    // On drag end, trigger one final change with rounding
    const finalValue = parseFloat(e.target.value);
    onChange(finalValue, dragBaseCredences, true); // true = shouldRound
    // Clear the snapshot - next drag will use fresh values
    setDragBaseCredences(null);
  };

  const handleChange = (e) => {
    const newValue = parseFloat(e.target.value);
    // Pass the snapshot (if we're dragging) to onChange
    // Parent will forward this to adjustCredences
    onChange(newValue, dragBaseCredences);
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
        style={{
          background: `linear-gradient(to right, ${color} 0%, ${color} ${value}%, rgba(255,255,255,0.15) ${value}%, rgba(255,255,255,0.15) 100%)`,
        }}
      />
    </div>
  );
};

export default CredenceSlider;
