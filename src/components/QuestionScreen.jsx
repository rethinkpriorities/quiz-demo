import ReactMarkdown from 'react-markdown';
import Header from './layout/Header';
import ProgressBar from './layout/ProgressBar';
import ModeToggle from './ui/ModeToggle';
import OptionButton from './ui/OptionButton';
import CredenceSlider from './ui/CredenceSlider';
import InfoTooltip from './ui/InfoTooltip';
import { useQuiz } from '../context/useQuiz';
import { adjustCredences, roundCredences } from '../utils/calculations';
import { CATEGORY_LABEL_COLOR, QUESTION_TYPES } from '../constants/config';
import features from '../../config/features.json';
import styles from '../styles/components/QuestionScreen.module.css';
import copy from '../../config/copy.json';

/**
 * Determines the effective input mode based on question type and feature flags.
 */
function getEffectiveInputMode(questionType, inputMode, isQuestionTypesEnabled) {
  if (!isQuestionTypesEnabled) return inputMode;

  if (questionType === QUESTION_TYPES.SELECTION) return 'options';
  if (questionType === QUESTION_TYPES.CREDENCE) return 'sliders';
  return inputMode;
}

/**
 * Question screen that renders the current question from context.
 */
function QuestionScreen() {
  const { currentQuestion, stateMap, questionNumber, progressPercentage, goBack, goForward } =
    useQuiz();

  if (!currentQuestion) return null;

  const state = stateMap[currentQuestion.id];
  if (!state) return null;

  const { credences, setCredences, inputMode, setInputMode, lockedKey, setLockedKey } = state;

  const questionType = currentQuestion.type || QUESTION_TYPES.DEFAULT;
  const isQuestionTypesEnabled = features.ui?.questionTypes !== false;
  const showModeToggle = !isQuestionTypesEnabled || questionType === QUESTION_TYPES.DEFAULT;
  const effectiveInputMode = getEffectiveInputMode(questionType, inputMode, isQuestionTypesEnabled);
  const showQuestionInfo = features.ui?.questionInfo !== false;
  const showAnswerInfo = features.ui?.answerInfo !== false;

  const getInstructions = () => {
    if (questionType === QUESTION_TYPES.SELECTION) {
      return (
        currentQuestion.instructionsSelection ||
        'Choose the option that best represents your position.'
      );
    }
    return effectiveInputMode === 'options'
      ? currentQuestion.instructionsOptions
      : currentQuestion.instructionsSliders;
  };
  const instructions = getInstructions();

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

          <p className={styles.instructions}>{instructions}</p>

          {showModeToggle && <ModeToggle mode={inputMode} setMode={setInputMode} />}

          <div className="card">
            {effectiveInputMode === 'options'
              ? currentQuestion.options.map((opt) => (
                  <OptionButton
                    key={opt.key}
                    label={opt.label}
                    description={opt.description}
                    info={showAnswerInfo ? opt.info : null}
                    optionKey={opt.key}
                    credences={credences}
                    setCredences={setCredences}
                    color={opt.color}
                    setInputMode={setInputMode}
                    setLockedKey={setLockedKey}
                  />
                ))
              : currentQuestion.options.map((opt) => (
                  <CredenceSlider
                    key={opt.key}
                    label={opt.label}
                    description={opt.description}
                    info={showAnswerInfo ? opt.info : null}
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

export default QuestionScreen;
