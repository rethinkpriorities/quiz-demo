import Header from './layout/Header';
import ProgressBar from './layout/ProgressBar';
import ResultCard from './ui/ResultCard';
import { useQuiz } from '../context/useQuiz';
import styles from '../styles/components/Intermission.module.css';
import resultStyles from '../styles/components/Results.module.css';
import features from '../../config/features.json';
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
  } = useQuiz();

  if (!currentQuestion) return null;

  const causeEntries = Object.entries(causesConfig);

  // Map feature flags to calculation result keys
  const CALC_METHODS = [
    { flag: 'showMaxEV', key: 'maxEV', hasEvs: true },
    { flag: 'showParliament', key: 'parliament', hasEvs: false },
    { flag: 'showMergedFavorites', key: 'mergedFavorites', hasEvs: false },
    { flag: 'showMaximin', key: 'maximin', hasEvs: false },
  ];

  // Sort by config order if provided, otherwise use default order
  const configOrder = features.calculations?.order || [];
  const sortedMethods = [...CALC_METHODS].sort((a, b) => {
    const aIndex = configOrder.indexOf(a.key);
    const bIndex = configOrder.indexOf(b.key);
    if (aIndex === -1 && bIndex === -1) return 0;
    if (aIndex === -1) return 1;
    if (bIndex === -1) return -1;
    return aIndex - bIndex;
  });

  const enabledMethods = sortedMethods.filter((m) => features.calculations?.[m.flag] === true);

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
