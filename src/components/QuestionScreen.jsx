import Header from './layout/Header';
import ProgressBar from './layout/ProgressBar';
import ModeToggle from './ui/ModeToggle';
import OptionButton from './ui/OptionButton';
import CredenceSlider from './ui/CredenceSlider';
import { useQuiz } from '../context/useQuiz';
import { adjustCredences, roundCredences } from '../utils/calculations';
import { CATEGORY_LABEL_COLOR } from '../constants/config';
import styles from '../styles/components/QuestionScreen.module.css';
import copy from '../../config/copy.json';

/**
 * Question screen that renders the current question from context
 */
const QuestionScreen = () => {
  const { currentQuestion, stateMap, questionNumber, progressPercentage, goBack, goForward } =
    useQuiz();

  if (!currentQuestion) return null;

  const state = stateMap[currentQuestion.id];
  if (!state) return null;

  const { credences, setCredences, inputMode, setInputMode, lockedKey, setLockedKey } = state;

  return (
    <div className="screen">
      <Header subtitle={questionNumber} />
      <ProgressBar percentage={progressPercentage} />

      <main className="screen-main">
        <div className={styles.container}>
          <div className={styles.categoryLabel} style={{ color: CATEGORY_LABEL_COLOR }}>
            {currentQuestion.categoryLabel}
          </div>

          <h2 className={styles.heading}>{currentQuestion.heading}</h2>

          <p className={styles.instructions}>
            {inputMode === 'options'
              ? currentQuestion.instructionsOptions
              : currentQuestion.instructionsSliders}
          </p>

          <ModeToggle mode={inputMode} setMode={setInputMode} />

          <div className="card">
            {inputMode === 'options' ? (
              <>
                {currentQuestion.options.map((opt) => (
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
                {currentQuestion.options.map((opt) => (
                  <CredenceSlider
                    key={opt.key}
                    label={opt.label}
                    description={opt.description}
                    value={credences[opt.key]}
                    onChange={(val, baseCredences, shouldRound, currentLockedKey) => {
                      const adjusted = adjustCredences(
                        opt.key,
                        val,
                        credences,
                        baseCredences,
                        currentLockedKey
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
};

export default QuestionScreen;
