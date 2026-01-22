import Header from './layout/Header';
import { useQuiz } from '../context/useQuiz';
import { QUESTION_TYPES } from '../constants/config';
import styles from '../styles/components/WelcomeScreen.module.css';
import copy from '../../config/copy.json';

/**
 * Welcome/landing screen.
 * Introduces the quiz and provides a start button.
 */
function WelcomeScreen() {
  const { questionsConfig, startQuiz } = useQuiz();

  // Filter out intermission questions from preview
  const previewQuestions = questionsConfig.filter((q) => q.type !== QUESTION_TYPES.INTERMISSION);

  return (
    <div className="screen">
      <Header subtitle={copy.welcome.timeEstimate} />

      <main className="screen-main">
        <div className={styles.container}>
          <h1 className={styles.heading}>
            {copy.welcome.headingLine1}
            <br />
            <span className={styles.headingEmphasis}>{copy.welcome.headingLine2}</span>
          </h1>

          <p className={styles.intro}>{copy.welcome.intro}</p>

          <button onClick={startQuiz} className="btn btn-primary">
            {copy.welcome.startButton}
          </button>

          <div className={styles.infoBox}>
            <div className={styles.infoBoxLabel}>{copy.welcome.previewLabel}</div>
            <div className={styles.infoBoxGrid}>
              {previewQuestions.map((question) => (
                <div key={question.id} className={styles.infoBoxItem}>
                  {question.emoji} {question.previewText}
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default WelcomeScreen;
