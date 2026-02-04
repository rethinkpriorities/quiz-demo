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
  const { scale, min, max, minLabel, maxLabel } = currentQuestion.ratioConfig || {};

  const handleSliderChange = (e) => {
    const newValue = parseFloat(e.target.value);
    setCredences({ value: newValue });
  };

  // Calculate display value for the current ratio
  const displayValue = ratioToDisplayValue(ratioValue, currentQuestion.ratioConfig);
  const displayFormatted = formatDisplayValue(displayValue, scale, min, max);

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
 * Format the display value based on scale type and range.
 */
function formatDisplayValue(value, scale, min, max) {
  if (scale === 'logarithmic') {
    // For logarithmic scales, show as multiplier
    if (value >= 1000) {
      return `${(value / 1000).toFixed(1)}k x`;
    }
    if (value >= 100) {
      return `${Math.round(value)}x`;
    }
    if (value >= 10) {
      return `${value.toFixed(1)}x`;
    }
    if (value >= 1) {
      return `${value.toFixed(2)}x`;
    }
    return `${value.toFixed(3)}x`;
  }

  // For linear scales (0-1), show as percentage or ratio
  if (min === 0 && max === 1) {
    return `${(value * 100).toFixed(0)}%`;
  }

  // Default: show raw value
  return value.toFixed(2);
}

export default RatioQuestion;
