import { useState } from 'react';
import { RotateCcw, Share2, Check } from 'lucide-react';
import EditPanel from './ui/EditPanel';
import ResultCard from './ui/ResultCard';
import { useQuiz } from '../context/useQuiz';
import { QUESTION_TYPES } from '../constants/config';
import { generateShareUrl } from '../utils/shareUrl';
import styles from '../styles/components/Results.module.css';
import features from '../../config/features.json';
import copy from '../../config/copy.json';

/**
 * Results screen showing allocation methods.
 * Allows editing credences and seeing live recalculation.
 */
function ResultsScreen() {
  const {
    questionsConfig,
    causesConfig,
    stateMap,
    expandedPanel,
    setExpandedPanel,
    calculationResults,
    originalCalculationResults,
    hasChanged,
    resetToOriginal,
    resetQuiz,
    goBack,
  } = useQuiz();

  const [copied, setCopied] = useState(false);

  const causeEntries = Object.entries(causesConfig);

  // Map feature flags to calculation result keys
  const CALC_METHODS = [
    { flag: 'showMaxEV', key: 'maxEV', hasEvs: true },
    { flag: 'showParliament', key: 'parliament', hasEvs: false },
    { flag: 'showMergedFavorites', key: 'mergedFavorites', hasEvs: false },
    { flag: 'showMaximin', key: 'maximin', hasEvs: false },
  ];

  const enabledMethods = CALC_METHODS.filter((m) => features.calculations?.[m.flag] === true);

  const handleResetClick = () => {
    if (window.confirm(copy.results.resetConfirmation)) {
      resetQuiz();
    }
  };

  const handleShareClick = async () => {
    // Build credences object from stateMap
    const credences = Object.fromEntries(
      Object.entries(stateMap).map(([questionId, state]) => [questionId, state.credences])
    );

    const url = generateShareUrl(credences);

    const showCopiedFeedback = () => {
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    };

    try {
      await navigator.clipboard.writeText(url);
    } catch {
      // Fallback for older browsers
      const textArea = document.createElement('textarea');
      textArea.value = url;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
    }

    showCopiedFeedback();
  };

  const getPanelConfigs = (question) =>
    question.options.map((opt) => ({
      key: opt.key,
      label: opt.panelLabel,
      short: opt.panelShort,
      color: opt.color,
    }));

  const useSideBySide = features.calculations?.sideBySideComparison === true;

  // Filter out intermission questions for edit panels
  const editableQuestions = questionsConfig.filter((q) => q.type !== QUESTION_TYPES.INTERMISSION);

  const renderCompactResultsGrid = (resultsObj) => (
    <div className={`${styles.resultsGrid} ${styles.compactGrid}`}>
      {enabledMethods.map((method) => {
        const results = resultsObj?.[method.key];
        if (!results) return null;
        return (
          <ResultCard
            key={method.key}
            methodKey={method.key}
            results={results}
            evs={method.hasEvs ? results.evs : null}
            causeEntries={causeEntries}
            simpleMode={true}
          />
        );
      })}
    </div>
  );

  const renderStandardResultsGrid = () => (
    <div className={styles.resultsGrid}>
      {enabledMethods.map((method) => {
        const results = calculationResults?.[method.key];
        if (!results) return null;
        return (
          <ResultCard
            key={method.key}
            methodKey={method.key}
            results={results}
            evs={method.hasEvs ? results.evs : null}
            originalResults={originalCalculationResults?.[method.key]}
            causeEntries={causeEntries}
            hasChanged={hasChanged}
          />
        );
      })}
    </div>
  );

  return (
    <div className={styles.resultsContainer}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <h1 className={styles.title}>
            {copy.results.heading}
            {hasChanged && (
              <span className={styles.modifiedIndicator}>{copy.results.modifiedIndicator}</span>
            )}
          </h1>
        </div>

        {useSideBySide && hasChanged ? (
          <div className={styles.comparisonContainer}>
            <div className={styles.originalResults}>
              {renderCompactResultsGrid(originalCalculationResults)}
            </div>
            <div className={styles.comparisonDivider}>
              <div className={styles.dividerLine} />
              <div className={styles.dividerArrow}>→</div>
              <div className={styles.dividerLine} />
            </div>
            <div className={styles.newResults}>{renderCompactResultsGrid(calculationResults)}</div>
          </div>
        ) : (
          renderStandardResultsGrid()
        )}

        <div className={styles.adjustPanel}>
          <div className={styles.adjustHeader}>
            <span className={styles.adjustTitle}>{copy.results.adjustCredencesHeading}</span>
            {hasChanged && (
              <button onClick={resetToOriginal} className={styles.resetAllButton}>
                <RotateCcw size={10} /> {copy.results.resetAllButton}
              </button>
            )}
          </div>
          <div className={styles.panelList}>
            {editableQuestions.map((question) => {
              const state = stateMap[question.id];
              if (!state) return null;

              return (
                <EditPanel
                  key={question.id}
                  title={question.editPanelTitle}
                  icon={question.emoji}
                  credences={state.credences}
                  setCredences={state.setCredences}
                  originalCredences={state.originalCredences}
                  configs={getPanelConfigs(question)}
                  isExpanded={expandedPanel === question.id}
                  onToggle={() =>
                    setExpandedPanel(expandedPanel === question.id ? null : question.id)
                  }
                  lockedKey={state.lockedKey}
                  setLockedKey={state.setLockedKey}
                  questionType={question.type}
                />
              );
            })}
          </div>
        </div>

        <div className={styles.backButtonContainer}>
          <button onClick={goBack} className={styles.backButton}>
            {copy.navigation.backToQuiz}
          </button>
          {features.ui?.shareResults && (
            <button
              onClick={handleShareClick}
              className={`${styles.shareButton} ${copied ? styles.copied : ''}`}
            >
              {copied ? <Check size={16} /> : <Share2 size={16} />}
              {copied ? copy.results.shareCopied : copy.results.shareButton}
            </button>
          )}
          {features.ui?.resetButton && (
            <button onClick={handleResetClick} className={styles.resetButton}>
              {copy.navigation.startOver}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default ResultsScreen;
