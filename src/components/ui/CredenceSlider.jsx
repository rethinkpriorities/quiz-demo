import styles from '../../styles/components/Slider.module.css';

/**
 * Full-size slider for quiz questions with auto-balancing
 * Used in question screens for distributing credences
 */
const CredenceSlider = ({ label, description, value, onChange, color }) => {
  return (
    <div className={styles.credenceSlider}>
      <div className={styles.header}>
        <div>
          <div className={styles.label}>{label}</div>
          <div className={styles.description}>{description}</div>
        </div>
        <div className={styles.value} style={{ color }}>
          {value}%
        </div>
      </div>
      <input
        type="range"
        min="0"
        max="100"
        value={value}
        onChange={(e) => onChange(parseInt(e.target.value))}
        style={{
          background: `linear-gradient(to right, ${color} 0%, ${color} ${value}%, rgba(255,255,255,0.15) ${value}%, rgba(255,255,255,0.15) 100%)`
        }}
      />
    </div>
  );
};

export default CredenceSlider;
