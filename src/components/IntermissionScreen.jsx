import Header from './layout/Header';
import ProgressBar from './layout/ProgressBar';
import ResultCard from './ui/ResultCard';
import { useQuiz } from '../context/useQuiz';
import { getEnabledMethods } from '../constants/calculationMethods';
import styles from '../styles/components/Intermission.module.css';
import resultStyles from '../styles/components/Results.module.css';
import copy from '../../config/copy.json';

/**
 * Intermission screen that displays partial results and contextual copy.
 * Does not count toward progress or store credences.
 */
function IntermissionScreen() {
  const {
    currentQuestion,
    questionNumber,
    progressPercentage,
    calculationResults,
    causesConfig,
    goBack,
    goForward,
    marketplaceBudget,
  } = useQuiz();

  if (!currentQuestion) return null;

  const causeEntries = Object.entries(causesConfig);
  const enabledMethods = getEnabledMethods();

  return (
    <div className="screen">
      <Header subtitle={questionNumber} />
      <ProgressBar percentage={progressPercentage} />

      <main className="screen-main">
        <div className={styles.container}>
          <h2 className={styles.title}>{currentQuestion.title}</h2>
          <p className={styles.body}>{currentQuestion.body}</p>

          <div className={resultStyles.resultsGrid}>
            {enabledMethods.map((method) => (
              <ResultCard
                key={method.key}
                methodKey={method.key}
                results={calculationResults[method.key]}
                evs={method.hasEvs ? calculationResults[method.key].evs : null}
                causeEntries={causeEntries}
                budget={marketplaceBudget}
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

export default IntermissionScreen;
