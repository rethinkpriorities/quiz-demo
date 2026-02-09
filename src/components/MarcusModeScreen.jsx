import { useState, useRef, useEffect } from 'react';
import { Lock } from 'lucide-react';
import ResultCard from './ui/ResultCard';
import InfoTooltip from './ui/InfoTooltip';
import { useQuiz } from '../context/useQuiz';
import { QUESTION_TYPES } from '../constants/config';
import { getEnabledMethods } from '../constants/calculationMethods';
import {
  adjustCredences,
  roundCredences,
  buildDimensionsFromQuestions,
  DIMINISHING_RETURNS_POWER,
} from '../utils/calculations';
import { useSliderDrag } from '../hooks/useSliderDrag';
import { useLockedSlider } from '../hooks/useLockedSlider';
import causesConfigFile from '../../config/causes.json';
import styles from '../styles/components/MarcusMode.module.css';
import marketplaceStyles from '../styles/components/Marketplace.module.css';
import copy from '../../config/copy.json';
import features from '../../config/features.json';

/**
 * Marcus Mode: dense single-page view with all inputs and outputs visible.
 * Left column shows all question sliders/selections, right column shows live results.
 */
function MarcusModeScreen() {
  const {
    questionsConfig,
    causesConfig,
    stateMap,
    calculationResults,
    marketplaceBudget,
    setMarketplaceBudget,
    setDebugConfig,
    debugConfig,
  } = useQuiz();

  const DEFAULT_BUDGET = 10_000_000;
  const budget = marketplaceBudget ?? DEFAULT_BUDGET;
  const [budgetInput, setBudgetInput] = useState(budget.toLocaleString());
  const [expandedQuestion, setExpandedQuestion] = useState(null);

  // Settings state - initialized from config, applied live via debugConfig
  const [settingsState, setSettingsState] = useState(() => ({
    causes: JSON.parse(JSON.stringify(causesConfigFile.causes)),
    dimensions: buildDimensionsFromQuestions(true),
    diminishingReturns:
      debugConfig?.diminishingReturns || causesConfigFile.diminishingReturns || 'sqrt',
  }));

  // Track which settings section is expanded (separate from questions)
  const [expandedSetting, setExpandedSetting] = useState(null);

  const handleSettingToggle = (id) => {
    setExpandedSetting(expandedSetting === id ? null : id);
  };

  // Apply settings changes live
  const applySettings = (newState) => {
    setSettingsState(newState);
    setDebugConfig(newState);
  };

  const causeEntries = Object.entries(causesConfig);
  const enabledMethods = getEnabledMethods();

  const editableQuestions = questionsConfig.filter((q) => q.type !== QUESTION_TYPES.INTERMISSION);

  const handleBudgetChange = (e) => setBudgetInput(e.target.value);

  const handleBudgetBlur = () => {
    const parsed = parseInt(budgetInput.replace(/[^0-9]/g, ''), 10);
    if (!isNaN(parsed) && parsed > 0) {
      setMarketplaceBudget(parsed);
      setBudgetInput(parsed.toLocaleString());
    } else {
      setBudgetInput(budget.toLocaleString());
    }
  };

  const handleBudgetKeyDown = (e) => {
    if (e.key === 'Enter') e.target.blur();
  };

  const getPanelConfigs = (question) =>
    question.options.map((opt) => ({
      key: opt.key,
      label: opt.panelLabel || opt.label,
      short: opt.panelShort || opt.panelLabel || opt.label,
      color: opt.color,
    }));

  const handleToggle = (questionId) => {
    setExpandedQuestion(expandedQuestion === questionId ? null : questionId);
  };

  return (
    <div className={styles.container}>
      <div className={styles.layout}>
        <div className={styles.inputsColumn}>
          {editableQuestions.map((question) => {
            const state = stateMap[question.id];
            if (!state) return null;

            const isSelectionType =
              features.ui?.questionTypes !== false && question.type === QUESTION_TYPES.SELECTION;

            return (
              <QuestionInputSection
                key={question.id}
                question={question}
                state={state}
                isSelectionType={isSelectionType}
                configs={getPanelConfigs(question)}
                isExpanded={expandedQuestion === question.id}
                onToggle={() => handleToggle(question.id)}
              />
            );
          })}

          <div className={styles.settingsDivider}>Settings</div>

          {/* Diminishing Returns */}
          <div
            className={`${styles.questionSection} ${expandedSetting === 'dr' ? styles.expanded : ''}`}
          >
            <button
              type="button"
              className={styles.questionHeader}
              onClick={() => handleSettingToggle('dr')}
            >
              <span className={styles.questionTitle}>Diminishing Returns</span>
              {expandedSetting !== 'dr' && (
                <span className={styles.questionSummary}>{settingsState.diminishingReturns}</span>
              )}
              <span className={styles.chevron}>{expandedSetting === 'dr' ? '−' : '+'}</span>
            </button>
            {expandedSetting === 'dr' && (
              <div className={styles.questionContent}>
                <div className={styles.settingsRow}>
                  {Object.keys(DIMINISHING_RETURNS_POWER).map((mode) => (
                    <button
                      key={mode}
                      type="button"
                      className={`${styles.selectionButton} ${settingsState.diminishingReturns === mode ? styles.selected : ''}`}
                      onClick={() => applySettings({ ...settingsState, diminishingReturns: mode })}
                    >
                      {mode} ({DIMINISHING_RETURNS_POWER[mode]})
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Causes */}
          {Object.entries(settingsState.causes).map(([causeKey, cause]) => (
            <div
              key={causeKey}
              className={`${styles.questionSection} ${expandedSetting === causeKey ? styles.expanded : ''}`}
            >
              <button
                type="button"
                className={styles.questionHeader}
                onClick={() => handleSettingToggle(causeKey)}
              >
                <span className={styles.questionTitle}>{cause.name}</span>
                {expandedSetting !== causeKey && (
                  <span className={styles.questionSummary}>
                    pts:{cause.points} sf:{cause.scaleFactor}
                  </span>
                )}
                <span className={styles.chevron}>{expandedSetting === causeKey ? '−' : '+'}</span>
              </button>
              {expandedSetting === causeKey && (
                <div className={styles.questionContent}>
                  <div className={styles.settingsGrid}>
                    <label className={styles.fieldLabel}>
                      Points
                      <input
                        type="number"
                        className={styles.fieldInput}
                        value={cause.points}
                        onChange={(e) => {
                          const updated = {
                            ...settingsState,
                            causes: {
                              ...settingsState.causes,
                              [causeKey]: { ...cause, points: Number(e.target.value) },
                            },
                          };
                          applySettings(updated);
                        }}
                      />
                    </label>
                    <label className={styles.fieldLabel}>
                      Scale
                      <input
                        type="number"
                        className={styles.fieldInput}
                        value={cause.scaleFactor}
                        onChange={(e) => {
                          const updated = {
                            ...settingsState,
                            causes: {
                              ...settingsState.causes,
                              [causeKey]: { ...cause, scaleFactor: Number(e.target.value) },
                            },
                          };
                          applySettings(updated);
                        }}
                      />
                    </label>
                  </div>
                  <div className={styles.checkboxRow}>
                    {[
                      'preventsDisability',
                      'increasesIncome',
                      'helpsAnimals',
                      'helpsInvertebrates',
                      'isNonXRisk',
                      'isDummyRisk',
                    ].map(
                      (flag) =>
                        cause[flag] !== undefined && (
                          <label key={flag} className={styles.checkboxLabel}>
                            <input
                              type="checkbox"
                              checked={!!cause[flag]}
                              onChange={(e) => {
                                const updated = {
                                  ...settingsState,
                                  causes: {
                                    ...settingsState.causes,
                                    [causeKey]: { ...cause, [flag]: e.target.checked },
                                  },
                                };
                                applySettings(updated);
                              }}
                            />
                            {flag}
                          </label>
                        )
                    )}
                  </div>
                </div>
              )}
            </div>
          ))}

          {/* Dimensions */}
          {Object.entries(settingsState.dimensions).map(([dimKey, dimension]) => (
            <div
              key={dimKey}
              className={`${styles.questionSection} ${expandedSetting === `dim-${dimKey}` ? styles.expanded : ''}`}
            >
              <button
                type="button"
                className={styles.questionHeader}
                onClick={() => handleSettingToggle(`dim-${dimKey}`)}
              >
                <span className={styles.questionTitle}>{dimension.name}</span>
                {expandedSetting !== `dim-${dimKey}` && (
                  <span className={styles.questionSummary}>
                    {dimension.appliesWhen || dimension.appliesTo}
                  </span>
                )}
                <span className={styles.chevron}>
                  {expandedSetting === `dim-${dimKey}` ? '−' : '+'}
                </span>
              </button>
              {expandedSetting === `dim-${dimKey}` && (
                <div className={styles.questionContent}>
                  <div className={styles.settingsGrid}>
                    {Object.entries(dimension.options).map(([optKey, optValue]) => (
                      <label key={optKey} className={styles.fieldLabel}>
                        {optKey}
                        {typeof optValue === 'object' ? (
                          Object.entries(optValue).map(([subKey, subVal]) => (
                            <div key={subKey} className={styles.subField}>
                              <span className={styles.subFieldLabel}>{subKey}</span>
                              <input
                                type="number"
                                step="0.01"
                                className={styles.fieldInput}
                                value={subVal}
                                onChange={(e) => {
                                  const newOpts = {
                                    ...dimension.options,
                                    [optKey]: { ...optValue, [subKey]: Number(e.target.value) },
                                  };
                                  const updated = {
                                    ...settingsState,
                                    dimensions: {
                                      ...settingsState.dimensions,
                                      [dimKey]: { ...dimension, options: newOpts },
                                    },
                                  };
                                  applySettings(updated);
                                }}
                              />
                            </div>
                          ))
                        ) : (
                          <input
                            type="number"
                            step="0.01"
                            className={styles.fieldInput}
                            value={optValue}
                            onChange={(e) => {
                              const newOpts = {
                                ...dimension.options,
                                [optKey]: Number(e.target.value),
                              };
                              const updated = {
                                ...settingsState,
                                dimensions: {
                                  ...settingsState.dimensions,
                                  [dimKey]: { ...dimension, options: newOpts },
                                },
                              };
                              applySettings(updated);
                            }}
                          />
                        )}
                      </label>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className={styles.resultsColumn}>
          <div className={styles.budgetRow}>
            <label className={marketplaceStyles.settingsLabel}>
              {copy.results.budgetLabel}
              {copy.results.budgetInfo && <InfoTooltip content={copy.results.budgetInfo} />}
              <div className={marketplaceStyles.budgetInputWrapper}>
                <span className={marketplaceStyles.currencyPrefix}>$</span>
                <input
                  type="text"
                  value={budgetInput}
                  onChange={handleBudgetChange}
                  onBlur={handleBudgetBlur}
                  onKeyDown={handleBudgetKeyDown}
                  className={marketplaceStyles.budgetInput}
                />
              </div>
            </label>
          </div>
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
                  causeEntries={causeEntries}
                  budget={budget}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * Inline slider: label | [====track====] | value% | lock
 * All on one row for maximum density.
 */
function InlineSlider({
  label,
  value,
  onChange,
  color,
  credences,
  sliderKey,
  lockedKeys,
  setLockedKeys,
}) {
  const { isLocked, hasLockedSibling, thumbOffset, canLockMore, featureEnabled } = useLockedSlider({
    sliderKey,
    lockedKeys,
    credences,
  });

  const { isDragging, dragHandlers } = useSliderDrag({
    credences,
    isLocked,
    lockedKeys,
    onChange,
  });

  const handleLockClick = () => {
    if (!featureEnabled) return;
    if (isLocked) {
      setLockedKeys(lockedKeys.filter((k) => k !== sliderKey));
    } else if (canLockMore) {
      setLockedKeys([...lockedKeys, sliderKey]);
    }
  };

  const sliderBackground = hasLockedSibling
    ? `linear-gradient(to right, ${color} 0%, ${color} ${value}%, rgba(255,255,255,0.15) ${value}%, rgba(255,255,255,0.15) ${thumbOffset}, rgba(255,255,255,0.06) ${thumbOffset}, rgba(255,255,255,0.06) 100%)`
    : `linear-gradient(to right, ${color} 0%, ${color} ${value}%, rgba(255,255,255,0.1) ${value}%, rgba(255,255,255,0.1) 100%)`;

  return (
    <div className={styles.sliderRow}>
      <span className={styles.sliderLabel}>{label}</span>
      <div className={styles.sliderTrack}>
        <input
          type="range"
          min="0"
          max="100"
          step="any"
          value={value}
          {...dragHandlers}
          data-dragging={isDragging}
          disabled={isLocked}
          style={{
            background: sliderBackground,
            cursor: isLocked ? 'not-allowed' : 'pointer',
          }}
        />
        {hasLockedSibling && <div className={styles.lockLimit} style={{ left: thumbOffset }} />}
      </div>
      <span className={styles.sliderValue} style={{ color }}>
        {Math.round(value)}%
      </span>
      {featureEnabled && (
        <button
          className={`${styles.lockButton} ${isLocked ? styles.locked : ''} ${!isLocked && !canLockMore ? styles.lockDisabled : ''}`}
          onClick={handleLockClick}
          type="button"
          disabled={!isLocked && !canLockMore}
        >
          <Lock size={12} />
        </button>
      )}
    </div>
  );
}

/**
 * Build a compact summary string for the collapsed state.
 * Selection: shows selected option label. Sliders: "Short 75% · Equal 25%"
 */
function getSummary(state, configs, isSelectionType) {
  if (isSelectionType) {
    const selected = configs.find((c) => state.credences[c.key] === 100);
    return selected ? selected.label : '';
  }
  return configs
    .filter((c) => Math.round(state.credences[c.key]) > 0)
    .map((c) => `${c.short} ${Math.round(state.credences[c.key])}%`)
    .join(' · ');
}

/**
 * A single question's inputs with accordion behavior.
 * Shows compact summary when collapsed, full controls when expanded.
 */
function QuestionInputSection({ question, state, isSelectionType, configs, isExpanded, onToggle }) {
  const [localCredences, setLocalCredences] = useState(null);
  const syncTimeoutRef = useRef(null);

  useEffect(() => {
    return () => {
      if (syncTimeoutRef.current) clearTimeout(syncTimeoutRef.current);
    };
  }, []);

  const displayCredences = localCredences || state.credences;

  const handleSelectionClick = (selectedKey) => {
    const newCredences = {};
    configs.forEach((config) => {
      newCredences[config.key] = config.key === selectedKey ? 100 : 0;
    });
    state.setCredences(newCredences);
  };

  const summary = getSummary(state, configs, isSelectionType);

  return (
    <div className={`${styles.questionSection} ${isExpanded ? styles.expanded : ''}`}>
      <button type="button" className={styles.questionHeader} onClick={onToggle}>
        <span className={styles.questionTitle}>{question.editPanelTitle}</span>
        {!isExpanded && <span className={styles.questionSummary}>{summary}</span>}
        <span className={styles.chevron}>{isExpanded ? '−' : '+'}</span>
      </button>
      {isExpanded && (
        <div className={styles.questionContent}>
          {isSelectionType ? (
            <div className={styles.selectionRow}>
              {configs.map((config) => (
                <button
                  key={config.key}
                  type="button"
                  className={`${styles.selectionButton} ${state.credences[config.key] === 100 ? styles.selected : ''}`}
                  onClick={() => handleSelectionClick(config.key)}
                >
                  {config.label}
                </button>
              ))}
            </div>
          ) : (
            configs.map((config) => (
              <InlineSlider
                key={config.key}
                label={config.label}
                value={displayCredences[config.key]}
                onChange={(val, baseCredences, shouldRound, currentLockedKeys) => {
                  const sourceCredences = baseCredences || localCredences || state.credences;
                  const adjusted = adjustCredences(
                    config.key,
                    val,
                    sourceCredences,
                    baseCredences,
                    currentLockedKeys
                  );
                  const newCredences = shouldRound ? roundCredences(adjusted) : adjusted;

                  setLocalCredences(newCredences);

                  if (syncTimeoutRef.current) clearTimeout(syncTimeoutRef.current);

                  if (shouldRound) {
                    state.setCredences(newCredences);
                    syncTimeoutRef.current = setTimeout(() => setLocalCredences(null), 50);
                  } else {
                    syncTimeoutRef.current = setTimeout(() => {
                      state.setCredences(newCredences);
                    }, 100);
                  }
                }}
                color={config.color}
                credences={displayCredences}
                sliderKey={config.key}
                lockedKeys={state.lockedKeys}
                setLockedKeys={state.setLockedKeys}
              />
            ))
          )}
        </div>
      )}
    </div>
  );
}

export default MarcusModeScreen;
