import { useState } from 'react';
import styles from '../../styles/components/Slider.module.css';

/**
 * Compact slider for results page editing
 * Smaller variant used in EditPanel components
 * Tracks drag state to maintain consistent ratios during slider adjustments
 */
const CompactSlider = ({ label, value, onChange, color, credences }) => {
  // Track the credences snapshot when drag starts
  const [dragBaseCredences, setDragBaseCredences] = useState(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleDragStart = () => {
    setIsDragging(true);
    setDragBaseCredences({ ...credences });
  };

  const handleDragEnd = (e) => {
    setIsDragging(false);
    // On drag end, trigger one final change with rounding
    const finalValue = parseFloat(e.target.value);
    onChange(finalValue, dragBaseCredences, true); // true = shouldRound
    setDragBaseCredences(null);
  };

  const handleChange = (e) => {
    const newValue = parseFloat(e.target.value);
    onChange(newValue, dragBaseCredences);
  };

  return (
    <div className={styles.compactSlider}>
      <div className={styles.header}>
        <span className={styles.label}>{label}</span>
        <span className={styles.value} style={{ color }}>
          {Math.round(value)}%
        </span>
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
          background: `linear-gradient(to right, ${color} 0%, ${color} ${value}%, rgb(51,65,85) ${value}%, rgb(51,65,85) 100%)`,
        }}
      />
    </div>
  );
};

export default CompactSlider;
