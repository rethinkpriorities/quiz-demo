import { useState, useEffect } from 'react';
import { RotateCcw, Share2, Check, Loader2, Layers } from 'lucide-react';
import Header from './layout/Header';
import ProgressBar from './layout/ProgressBar';
import EditPanel from './ui/EditPanel';
import ResultCard from './ui/ResultCard';
import QuestionIcon from './ui/QuestionIcon';
import WorldviewSwitchModal from './ui/WorldviewSwitchModal';
import { useQuiz } from '../context/useQuiz';
import { QUESTION_TYPES } from '../constants/config';
import { generateShareUrl } from '../utils/shareUrl';
import styles from '../styles/components/Results.module.css';
import features from '../../config/features.json';
import copy from '../../config/copy.json';

const isMultipleWorldviewsEnabled = features.ui?.multipleWorldviews === true;
const isCalculationSelectEnabled = features.ui?.calculationSelect === true;

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
    goToStep,
    worldviews,
    worldviewNames,
    activeWorldviewId,
    switchWorldview,
    worldviewIds,
    hasProgressMap,
    startQuiz,
    selectedCalculations,
    setSelectedCalculations,
    setWorldviewName,
    marketplaceBudget,
  } = useQuiz();

  const [copied, setCopied] = useState(false);
  const [shareLoading, setShareLoading] = useState(false);
  const [shareError, setShareError] = useState(null);
  const [showWorldviewModal, setShowWorldviewModal] = useState(false);

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
    // Methods not in order array go to the end
    if (aIndex === -1 && bIndex === -1) return 0;
    if (aIndex === -1) return 1;
    if (bIndex === -1) return -1;
    return aIndex - bIndex;
  });

  const enabledMethods = sortedMethods.filter((m) => features.calculations?.[m.flag] === true);

  // Initialize selected calculations to first enabled method if not set or invalid
  useEffect(() => {
    if (!isCalculationSelectEnabled || enabledMethods.length === 0) return;

    const firstKey = enabledMethods[0].key;
    const isLeftValid =
      selectedCalculations.left && enabledMethods.some((m) => m.key === selectedCalculations.left);
    const isRightValid =
      selectedCalculations.right &&
      enabledMethods.some((m) => m.key === selectedCalculations.right);

    if (!isLeftValid || !isRightValid) {
      setSelectedCalculations({
        left: isLeftValid ? selectedCalculations.left : firstKey,
        right: isRightValid ? selectedCalculations.right : firstKey,
      });
    }
  }, [
    enabledMethods,
    selectedCalculations.left,
    selectedCalculations.right,
    setSelectedCalculations,
  ]);

  const handleCalculationChange = (side, methodKey) => {
    setSelectedCalculations({ [side]: methodKey });
  };

  const handleResetClick = () => {
    if (window.confirm(copy.results.resetConfirmation)) {
      resetQuiz();
    }
  };

  const handleWorldviewSwitch = (id) => {
    setShowWorldviewModal(false);
    switchWorldview(id);
    // If the target worldview has no progress, start the quiz
    if (!hasProgressMap[id]) {
      startQuiz();
    }
  };

  const handleMarketplace = () => {
    setShowWorldviewModal(false);
    goToStep('marketplace');
  };

  const handleShareClick = async () => {
    setShareError(null);

    const showCopiedFeedback = () => {
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    };

    const copyToClipboardFallback = (text) => {
      const textArea = document.createElement('textarea');
      textArea.value = text;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
    };

    // Build worldviews state for backend
    const worldviewsForShare = {};
    for (const [worldviewId, worldview] of Object.entries(worldviews)) {
      const questionStates = {};
      for (const [questionId, qState] of Object.entries(worldview.questions)) {
        questionStates[questionId] = {
          credences: qState.credences,
          inputMode: qState.inputMode,
          lockedKey: qState.lockedKey,
          originalCredences: qState.originalCredences,
        };
      }
      worldviewsForShare[worldviewId] = { questions: questionStates };
    }

    setShareLoading(true);

    // Create the URL promise before any async work
    const shareOptions = {
      selectedCalculations: isCalculationSelectEnabled ? selectedCalculations : null,
      worldviewNames,
      marketplaceBudget,
    };
    const urlPromise = generateShareUrl(worldviewsForShare, activeWorldviewId, shareOptions).then(
      ({ url }) => url
    );

    try {
      // Safari requires ClipboardItem with a Promise to maintain user gesture context
      if (navigator.clipboard?.write && typeof ClipboardItem !== 'undefined') {
        const blobPromise = urlPromise.then((url) => new Blob([url], { type: 'text/plain' }));
        await navigator.clipboard.write([new ClipboardItem({ 'text/plain': blobPromise })]);
      } else {
        // Fallback for browsers without ClipboardItem
        const url = await urlPromise;
        try {
          await navigator.clipboard.writeText(url);
        } catch {
          copyToClipboardFallback(url);
        }
      }
      showCopiedFeedback();
    } catch (err) {
      setShareError(err.message || 'Failed to create share link');
      window.setTimeout(() => setShareError(null), 5000);
    } finally {
      setShareLoading(false);
    }
  };

  const getPanelConfigs = (question) =>
    question.options.map((opt) => ({
      key: opt.key,
      label: opt.panelLabel,
      short: opt.panelShort,
      color: opt.color,
    }));

  const useSideBySide = features.calculations?.sideBySideComparison === true;

  const getShareButtonIcon = () => {
    if (shareLoading) return <Loader2 size={16} className={styles.spinning} />;
    if (copied) return <Check size={16} />;
    return <Share2 size={16} />;
  };

  const getShareButtonText = () => {
    if (shareLoading) return 'Creating link...';
    if (shareError) return shareError;
    if (copied) return copy.results.shareCopied;
    return copy.results.shareButton;
  };

  // Filter out intermission questions for edit panels
  const editableQuestions = questionsConfig.filter((q) => q.type !== QUESTION_TYPES.INTERMISSION);

  const renderCalculationSelect = (side) => (
    <select
      className={styles.calculationSelect}
      value={selectedCalculations[side] || ''}
      onChange={(e) => handleCalculationChange(side, e.target.value)}
    >
      {enabledMethods.map((method) => (
        <option key={method.key} value={method.key}>
          {copy.results.methods[method.key].title}
        </option>
      ))}
    </select>
  );

  const renderSelectedCalculationCard = (resultsObj, side, simpleMode = true) => {
    const selectedKey = selectedCalculations[side];
    const method = enabledMethods.find((m) => m.key === selectedKey);
    if (!method) return null;
    const results = resultsObj?.[method.key];
    if (!results) return null;

    return (
      <ResultCard
        methodKey={method.key}
        results={results}
        evs={method.hasEvs ? results.evs : null}
        causeEntries={causeEntries}
        simpleMode={simpleMode}
      />
    );
  };

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
      <Header />
      <ProgressBar percentage={100} />
      <div className={styles.inner}>
        <div className={styles.resultsHeader}>
          <h1 className={styles.title}>
            {copy.results.heading}
            {isMultipleWorldviewsEnabled && (
              <span className={styles.worldviewLabel}>
                {' '}
                ({worldviewNames?.[activeWorldviewId] || `Worldview ${activeWorldviewId}`})
              </span>
            )}
            {hasChanged && (
              <span className={styles.modifiedIndicator}>{copy.results.modifiedIndicator}</span>
            )}
          </h1>
        </div>

        {isCalculationSelectEnabled ? (
          <div className={styles.calculationSelectContainer}>
            {useSideBySide && hasChanged ? (
              <div className={styles.comparisonContainer}>
                <div className={styles.originalResults}>
                  <div className={styles.sideLabel}>Original</div>
                  {renderCalculationSelect('left')}
                  {renderSelectedCalculationCard(originalCalculationResults, 'left')}
                </div>
                <div className={styles.comparisonDivider}>
                  <div className={styles.dividerLine} />
                  <div className={styles.dividerArrow}>→</div>
                  <div className={styles.dividerLine} />
                </div>
                <div className={styles.newResults}>
                  <div className={styles.sideLabel}>Modified</div>
                  {renderCalculationSelect('right')}
                  {renderSelectedCalculationCard(calculationResults, 'right')}
                </div>
              </div>
            ) : (
              <>
                {renderCalculationSelect('left')}
                <div className={styles.singleResultCard}>
                  {renderSelectedCalculationCard(
                    originalCalculationResults || calculationResults,
                    'left'
                  )}
                </div>
              </>
            )}
          </div>
        ) : useSideBySide && hasChanged ? (
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
                  icon={<QuestionIcon name={question.icon} size={16} />}
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
          <button onClick={goBack} className="btn btn-secondary">
            {copy.navigation.backToQuiz}
          </button>
          {isMultipleWorldviewsEnabled && (
            <button onClick={() => setShowWorldviewModal(true)} className="btn btn-secondary">
              <Layers size={16} />
              Switch Worldview
            </button>
          )}
          {features.ui?.shareResults && (
            <button
              onClick={handleShareClick}
              disabled={shareLoading}
              className={`btn btn-secondary ${copied ? styles.copied : ''} ${shareError ? styles.error : ''}`}
            >
              {getShareButtonIcon()}
              {getShareButtonText()}
            </button>
          )}
          {features.ui?.resetButton && (
            <button
              onClick={handleResetClick}
              className={`btn btn-secondary ${styles.resetDanger}`}
            >
              {copy.navigation.startOver}
            </button>
          )}
        </div>
      </div>

      {showWorldviewModal && (
        <WorldviewSwitchModal
          worldviewIds={worldviewIds}
          activeWorldviewId={activeWorldviewId}
          hasProgressMap={hasProgressMap}
          worldviewNames={worldviewNames}
          onSwitch={handleWorldviewSwitch}
          onClose={() => setShowWorldviewModal(false)}
          onMarketplace={handleMarketplace}
          onRename={setWorldviewName}
        />
      )}
    </div>
  );
}

export default ResultsScreen;
