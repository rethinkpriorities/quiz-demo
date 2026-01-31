import { useState, useRef, useEffect, useTransition } from 'react';
import ReactMarkdown from 'react-markdown';
import Header from './layout/Header';
import ProgressBar from './layout/ProgressBar';
import CredenceSlider from './ui/CredenceSlider';
import InfoTooltip from './ui/InfoTooltip';
import { useQuiz } from '../context/useQuiz';
import { adjustCredences, roundCredences } from '../utils/calculations';
import { CATEGORY_LABEL_COLOR } from '../constants/config';
import features from '../../config/features.json';
import styles from '../styles/components/PresetQuestion.module.css';
import copy from '../../config/copy.json';

const CUSTOM_PRESET_ID = 'custom';
const ANIMATION_DURATION = 300;
const ANIMATION_STEPS = 8; // ~37ms per step for smooth but performant animation

/**
 * Preset question screen with two-card layout:
 * - Left card: Preset options + Custom option
 * - Right card: Sliders (read-only when preset selected, editable when Custom)
 */
function PresetQuestion() {
  const { currentQuestion, stateMap, questionNumber, progressPercentage, goBack, goForward } =
    useQuiz();

  const state = currentQuestion ? stateMap[currentQuestion.id] : null;

  // Local display state - used for both animation and smooth slider dragging
  const [localCredences, setLocalCredences] = useState(null);
  const animationRef = useRef(null);
  const syncTimeoutRef = useRef(null);
  const [, startTransition] = useTransition();

  // Clean up on unmount
  useEffect(() => {
    return () => {
      if (animationRef.current) clearTimeout(animationRef.current);
      if (syncTimeoutRef.current) clearTimeout(syncTimeoutRef.current);
    };
  }, []);

  if (!currentQuestion || !state) return null;

  const { credences, setCredences, lockedKeys, setLockedKeys, selectedPreset, setSelectedPreset } =
    state;

  // Use local values for display if set, otherwise actual credences
  const displayCredences = localCredences || credences;

  const presets = currentQuestion.presets || [];
  const showQuestionInfo = features.ui?.questionInfo !== false;
  const showAnswerInfo = features.ui?.answerInfo !== false;

  // Check if sliders should be read-only (preset selected, not Custom)
  const isReadOnly = selectedPreset && selectedPreset !== CUSTOM_PRESET_ID;

  // Animate credences with throttled steps (doesn't update context until end)
  const animateToPreset = (targetCredences) => {
    // Cancel any existing animation/sync
    if (animationRef.current) clearTimeout(animationRef.current);
    if (syncTimeoutRef.current) clearTimeout(syncTimeoutRef.current);

    const startCredences = { ...credences };
    const stepDuration = ANIMATION_DURATION / ANIMATION_STEPS;
    let step = 0;

    const runStep = () => {
      step++;
      const progress = step / ANIMATION_STEPS;
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);

      const interpolated = {};
      for (const key of Object.keys(targetCredences)) {
        const from = startCredences[key] || 0;
        const to = targetCredences[key] || 0;
        interpolated[key] = Math.round(from + (to - from) * eased);
      }

      if (step < ANIMATION_STEPS) {
        setLocalCredences(interpolated);
        animationRef.current = setTimeout(runStep, stepDuration);
      } else {
        // Animation complete - set final local state and sync to context
        setLocalCredences({ ...targetCredences });
        setCredences({ ...targetCredences });
        // Clear local state after context has updated
        syncTimeoutRef.current = setTimeout(() => setLocalCredences(null), 50);
      }
    };

    // Start animation immediately with current values
    setLocalCredences(startCredences);
    animationRef.current = setTimeout(runStep, stepDuration);
  };

  // Handle preset selection
  const handlePresetSelect = (presetId) => {
    // Update selection immediately for UI feedback
    setSelectedPreset(presetId);

    if (presetId === CUSTOM_PRESET_ID) {
      // Don't change credences - let user modify them
    } else {
      const preset = presets.find((p) => p.id === presetId);
      if (preset) {
        // Animate to preset credences
        animateToPreset(preset.credences);
      }
    }
    // Clear any slider locks when changing preset
    if (setLockedKeys) {
      setLockedKeys([]);
    }
  };

  // Handle slider changes
  const handleSliderChange = (optionKey, val, baseCredences, shouldRound, currentLockedKeys) => {
    // If a preset is selected (not custom), don't allow changes
    if (isReadOnly) return;

    // Auto-select Custom when user starts moving sliders
    if (selectedPreset !== CUSTOM_PRESET_ID) {
      setSelectedPreset(CUSTOM_PRESET_ID);
    }

    // Use base credences from drag start, or current local/context credences
    const sourceCredences = baseCredences || localCredences || credences;
    const adjusted = adjustCredences(
      optionKey,
      val,
      sourceCredences,
      baseCredences,
      currentLockedKeys
    );
    const newCredences = shouldRound ? roundCredences(adjusted) : adjusted;

    // Update local state immediately for smooth slider
    setLocalCredences(newCredences);

    // Debounce sync to context (triggers calculations)
    if (syncTimeoutRef.current) clearTimeout(syncTimeoutRef.current);

    if (shouldRound) {
      // On drag end, sync immediately (keep local state until context catches up)
      setCredences(newCredences);
      // Clear local state after a tick to let context update propagate
      syncTimeoutRef.current = setTimeout(() => setLocalCredences(null), 50);
    } else {
      // During drag, debounce context sync
      syncTimeoutRef.current = setTimeout(() => {
        setCredences(newCredences);
      }, 100);
    }
  };

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

          <p className={styles.instructions}>
            {currentQuestion.instructionsPreset ||
              'Select a preset or choose Custom to set your own credences.'}
          </p>

          <div className={styles.twoColumnLayout}>
            {/* Left card: Presets */}
            <div className={styles.presetCard}>
              <div className={styles.cardTitle}>Presets</div>

              {presets.map((preset) => (
                <button
                  key={preset.id}
                  onClick={() => handlePresetSelect(preset.id)}
                  className={`${styles.presetOption} ${selectedPreset === preset.id ? styles.selected : ''}`}
                >
                  <div className={styles.presetContent}>
                    <div className={styles.presetTextContent}>
                      <div className={styles.presetName}>{preset.name}</div>
                      <div className={styles.presetDescription}>{preset.description}</div>
                    </div>
                    {selectedPreset === preset.id && (
                      <div className={styles.presetCheckmark}>✓</div>
                    )}
                  </div>
                </button>
              ))}

              {/* Separator */}
              <div className={styles.customSeparator}>
                <span className={styles.customSeparatorText}>or</span>
              </div>

              {/* Custom option */}
              <button
                onClick={() => handlePresetSelect(CUSTOM_PRESET_ID)}
                className={`${styles.presetOption} ${selectedPreset === CUSTOM_PRESET_ID ? styles.selected : ''}`}
              >
                <div className={styles.presetContent}>
                  <div className={styles.presetTextContent}>
                    <div className={styles.presetName}>Custom</div>
                    <div className={styles.presetDescription}>
                      Set your own credences using the sliders
                    </div>
                  </div>
                  {selectedPreset === CUSTOM_PRESET_ID && (
                    <div className={styles.presetCheckmark}>✓</div>
                  )}
                </div>
              </button>
            </div>

            {/* Right card: Sliders */}
            <div className={styles.sliderCard}>
              <div className={styles.cardTitle}>Your Credences</div>

              <div className={`${styles.sliderList} ${isReadOnly ? styles.sliderDisabled : ''}`}>
                {currentQuestion.options.map((opt) => (
                  <CredenceSlider
                    key={opt.key}
                    label={opt.label}
                    description={opt.description}
                    info={showAnswerInfo ? opt.info : null}
                    value={displayCredences[opt.key]}
                    onChange={(val, baseCredences, shouldRound, currentLockedKeys) => {
                      handleSliderChange(
                        opt.key,
                        val,
                        baseCredences,
                        shouldRound,
                        currentLockedKeys
                      );
                    }}
                    color={opt.color}
                    credences={displayCredences}
                    sliderKey={opt.key}
                    lockedKeys={lockedKeys}
                    setLockedKeys={isReadOnly ? () => {} : setLockedKeys}
                  />
                ))}
              </div>

              {isReadOnly && (
                <div className={styles.sliderReadOnlyNote}>
                  Select &quot;Custom&quot; to adjust sliders manually
                </div>
              )}
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

export default PresetQuestion;
