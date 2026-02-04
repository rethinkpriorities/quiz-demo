import ReactMarkdown from 'react-markdown';
import Header from './layout/Header';
import ProgressBar from './layout/ProgressBar';
import InfoTooltip from './ui/InfoTooltip';
import { useQuiz } from '../context/useQuiz';
import { ratioToDisplayValue } from '../utils/calculations';
import { CATEGORY_LABEL_COLOR } from '../constants/config';
import features from '../../config/features.json';
import styles from '../styles/components/RatioQuestion.module.css';
import copy from '../../config/copy.json';

/**
 * RatioQuestion component for advanced mode.
 * Renders a single slider question that captures a ratio value (0-1).
 */
function RatioQuestion() {
  const { currentQuestion, stateMap, questionNumber, progressPercentage, goBack, goForward } =
    useQuiz();

  if (!currentQuestion) return null;

  const state = stateMap[currentQuestion.id];
  if (!state) return null;

  const { credences, setCredences } = state;
  const showQuestionInfo = features.ui?.questionInfo !== false;

  // Get ratio value from credences (stored as { value: 0-1 })
  const ratioValue = credences?.value ?? currentQuestion.ratioConfig?.defaultValue ?? 0.5;
  const { minLabel, maxLabel } = currentQuestion.ratioConfig || {};

  const handleSliderChange = (e) => {
    const newValue = parseFloat(e.target.value);
    setCredences({ value: newValue });
  };

  // Calculate display value for the current ratio
  // Use displayConfig if provided (for user-friendly display), otherwise fall back to ratioConfig
  const displayConfig = currentQuestion.displayConfig || currentQuestion.ratioConfig;
  const displayValue = ratioToDisplayValue(ratioValue, displayConfig);
  const displayFormatted = formatDisplayValue(
    displayValue,
    displayConfig.scale,
    displayConfig.min,
    displayConfig.max,
    displayConfig.format,
    displayConfig.suffix
  );

  // Calculate slider progress for track fill
  const sliderProgress = ratioValue * 100;

  return (
    <div className="screen">
      <Header subtitle={questionNumber} />
      <ProgressBar percentage={progressPercentage} />

      <main className="screen-main">
        <div className={styles.container}>
          <div className={styles.categoryLabel} style={{ color: CATEGORY_LABEL_COLOR }}>
            {currentQuestion.categoryLabel}
          </div>

          <h2 className={styles.heading}>
            {currentQuestion.heading}
            {showQuestionInfo && <InfoTooltip content={currentQuestion.info} />}
          </h2>

          {currentQuestion.context && (
            <div className={styles.context}>
              <ReactMarkdown>{currentQuestion.context}</ReactMarkdown>
            </div>
          )}

          <div className={`card ${styles.sliderCard}`}>
            <div className={styles.sliderLabels}>
              <span className={styles.sliderLabelLeft}>{minLabel}</span>
              <span className={styles.sliderLabelRight}>{maxLabel}</span>
            </div>

            <div className={styles.sliderContainer}>
              <input
                type="range"
                min="0"
                max="1"
                step="0.01"
                value={ratioValue}
                onChange={handleSliderChange}
                className={styles.slider}
                style={{ '--slider-progress': `${sliderProgress}%` }}
              />
            </div>

            <div className={styles.valueDisplay}>
              Current value: <span className={styles.valueNumber}>{displayFormatted}</span>
            </div>
          </div>

          <div className={styles.buttonRow}>
            <button onClick={goBack} className="btn btn-secondary">
              {copy.navigation.back}
            </button>
            <button onClick={goForward} className="btn btn-primary">
              {copy.navigation.continue}
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}

/**
 * Format the display value based on scale type, range, and optional format string.
 * @param {number} value - The calculated display value
 * @param {string} scale - 'linear' or 'logarithmic'
 * @param {number} min - Minimum value of the range
 * @param {number} max - Maximum value of the range
 * @param {string} format - Optional format: 'multiplier', 'percentage', or custom suffix
 * @param {string} suffix - Optional suffix to append (e.g., " less than humans")
 */
function formatDisplayValue(value, scale, min, max, format, suffix = '') {
  // Handle custom format strings
  if (format === 'percentage') {
    return `${(value * 100).toFixed(0)}%${suffix}`;
  }

  if (format === 'multiplier' || scale === 'logarithmic') {
    // For logarithmic scales or explicit multiplier format, show as "Nx"
    let formatted;
    if (value >= 1000) {
      formatted = `${(value / 1000).toFixed(1)}k×`;
    } else if (value >= 100) {
      formatted = `${Math.round(value)}×`;
    } else if (value >= 10) {
      formatted = `${value.toFixed(1)}×`;
    } else if (value >= 1) {
      formatted = `${value.toFixed(1)}×`;
    } else {
      formatted = `${value.toFixed(2)}×`;
    }
    return `${formatted}${suffix}`;
  }

  // For linear scales (0-1), show as percentage
  if (min === 0 && max === 1) {
    return `${(value * 100).toFixed(0)}%${suffix}`;
  }

  // Default: show raw value with 2 decimal places
  return `${value.toFixed(2)}${suffix}`;
}

export default RatioQuestion;
