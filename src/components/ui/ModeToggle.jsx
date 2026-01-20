import { Sliders } from 'lucide-react';
import styles from '../../styles/components/ModeToggle.module.css';
import copy from '../../../config/copy.json';

/**
 * Toggle between "Pick One" (options) and "Custom Mix" (sliders) input modes
 * Used in question screens to switch between exclusive selection and credence distribution
 */
const ModeToggle = ({ mode, setMode }) => {
  return (
    <div className={styles.modeToggle}>
      <button
        onClick={() => setMode('options')}
        className={`${styles.button} ${styles.options} ${mode === 'options' ? styles.active : ''}`}
      >
        {copy.questionScreen.modeToggle.pickOne}
      </button>
      <button
        onClick={() => setMode('sliders')}
        className={`${styles.button} ${styles.sliders} ${mode === 'sliders' ? styles.active : ''}`}
      >
        <Sliders size={14} />
        {copy.questionScreen.modeToggle.customMix}
      </button>
    </div>
  );
};

export default ModeToggle;
