import Header from './layout/Header';
import ProgressBar from './layout/ProgressBar';
import ModeToggle from './ui/ModeToggle';
import OptionButton from './ui/OptionButton';
import CredenceSlider from './ui/CredenceSlider';
import { roundCredences } from '../utils/calculations';
import { CATEGORY_LABEL_COLOR } from '../constants/config';
import styles from '../styles/components/QuestionScreen.module.css';

/**
 * Reusable question screen template
 * Used for both animal and future questions
 */
const QuestionScreen = ({
  categoryLabel,
  questionNumber,
  progressPercentage,
  heading,
  instructionsOptions,
  instructionsSliders,
  options,
  credences,
  setCredences,
  inputMode,
  setInputMode,
  lockedKey,
  setLockedKey,
  onBack,
  onContinue,
  adjustCredences,
}) => {
  return (
    <div className="screen">
      <Header subtitle={questionNumber} />
      <ProgressBar percentage={progressPercentage} />

      <main className="screen-main">
        <div className={styles.container}>
          <div className={styles.categoryLabel} style={{ color: CATEGORY_LABEL_COLOR }}>
            {categoryLabel}
          </div>

          <h2 className={styles.heading}>{heading}</h2>

          <p className={styles.instructions}>
            {inputMode === 'options' ? instructionsOptions : instructionsSliders}
          </p>

          <ModeToggle mode={inputMode} setMode={setInputMode} />

          <div className="card">
            {inputMode === 'options' ? (
              <>
                {options.map((opt) => (
                  <OptionButton
                    key={opt.key}
                    label={opt.label}
                    description={opt.description}
                    optionKey={opt.key}
                    credences={credences}
                    setCredences={setCredences}
                    color={opt.color}
                    setInputMode={setInputMode}
                  />
                ))}
              </>
            ) : (
              <>
                {options.map((opt) => (
                  <CredenceSlider
                    key={opt.key}
                    label={opt.label}
                    description={opt.description}
                    value={credences[opt.key]}
                    onChange={(val, baseCredences, shouldRound, lockedKey) => {
                      const adjusted = adjustCredences(
                        opt.key,
                        val,
                        credences,
                        baseCredences,
                        lockedKey
                      );
                      setCredences(shouldRound ? roundCredences(adjusted) : adjusted);
                    }}
                    color={opt.color}
                    credences={credences}
                    sliderKey={opt.key}
                    lockedKey={lockedKey}
                    setLockedKey={setLockedKey}
                  />
                ))}
              </>
            )}
          </div>

          <div className={styles.buttonRow}>
            <button onClick={onBack} className="btn btn-secondary">
              ← Back
            </button>
            <button onClick={onContinue} className="btn btn-primary">
              Continue →
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default QuestionScreen;
