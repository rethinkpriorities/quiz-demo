import styles from '../../styles/components/Slider.module.css';

/**
 * Compact slider for results page editing
 * Smaller variant used in EditPanel components
 */
const CompactSlider = ({ label, value, onChange, color }) => {
  return (
    <div className={styles.compactSlider}>
      <div className={styles.header}>
        <span className={styles.label}>{label}</span>
        <span className={styles.value} style={{ color }}>
          {value}%
        </span>
      </div>
      <input
        type="range"
        min="0"
        max="100"
        value={value}
        onChange={(e) => onChange(parseInt(e.target.value))}
        style={{
          background: `linear-gradient(to right, ${color} 0%, ${color} ${value}%, rgb(51,65,85) ${value}%, rgb(51,65,85) 100%)`
        }}
      />
    </div>
  );
};

export default CompactSlider;
