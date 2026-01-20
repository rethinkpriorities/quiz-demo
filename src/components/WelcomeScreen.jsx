import Header from './layout/Header';
import { useQuiz } from '../context/useQuiz';
import styles from '../styles/components/WelcomeScreen.module.css';

/**
 * Welcome/landing screen
 * Introduces the quiz and provides a start button
 */
const WelcomeScreen = () => {
  const { questionsConfig, startQuiz } = useQuiz();

  return (
    <div className="screen">
      <Header subtitle="~3 minutes" />

      <main className="screen-main">
        <div className={styles.container}>
          <h1 className={styles.heading}>
            Where Should Your
            <br />
            <span className={styles.headingEmphasis}>Giving Go?</span>
          </h1>

          <p className={styles.intro}>
            Uncertain about your ethical views? This tool helps you allocate resources across
            different causes based on your moral credences—the probabilities you assign to different
            ethical perspectives.
          </p>

          <button onClick={startQuiz} className="btn btn-primary">
            Start Quiz →
          </button>

          <div className={styles.infoBox}>
            <div className={styles.infoBoxLabel}>You'll be asked about:</div>
            <div className={styles.infoBoxGrid}>
              {questionsConfig.map((question) => (
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
};

export default WelcomeScreen;
