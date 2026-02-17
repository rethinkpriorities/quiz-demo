import AllocationBar from './AllocationBar';
import marcusConfig from '../../../config/marcusMode.json';
import styles from '../../styles/components/MarcusModeV2.module.css';

function MethodOption({ optKey, optDef, currentValue, allCurrentValues, onChange }) {
  // Check showWhen condition
  if (optDef.showWhen) {
    for (const [depKey, depValue] of Object.entries(optDef.showWhen)) {
      if (allCurrentValues[depKey] !== depValue) return null;
    }
  }

  if (optDef.type === 'slider') {
    const pct = ((currentValue - optDef.min) / (optDef.max - optDef.min)) * 100;
    return (
      <div className={styles.methodSelector}>
        <label className={styles.methodLabel}>{optDef.label}</label>
        <div className={styles.optionSliderRow}>
          <input
            type="range"
            className={styles.optionSlider}
            value={currentValue}
            min={optDef.min}
            max={optDef.max}
            step={optDef.step}
            style={{
              background: `linear-gradient(to right, var(--text-gray-medium) 0%, var(--text-gray-medium) ${pct}%, rgba(255,255,255,0.1) ${pct}%, rgba(255,255,255,0.1) 100%)`,
            }}
            onChange={(e) => onChange(optKey, Number(e.target.value))}
          />
          <span className={styles.optionSliderValue}>{currentValue}</span>
        </div>
      </div>
    );
  }

  if (optDef.type === 'number') {
    return (
      <div className={styles.methodSelector}>
        <label className={styles.methodLabel}>{optDef.label}</label>
        <input
          type="number"
          className={styles.budgetInput}
          value={currentValue}
          min={optDef.min}
          max={optDef.max}
          step={optDef.step}
          onChange={(e) => {
            const val = e.target.value === '' ? optDef.default : Number(e.target.value);
            if (!isNaN(val)) onChange(optKey, val);
          }}
        />
      </div>
    );
  }

  return (
    <div className={styles.methodSelector}>
      <label className={styles.methodLabel}>{optDef.label}</label>
      <select
        className={styles.methodSelect}
        value={currentValue}
        onChange={(e) => onChange(optKey, e.target.value)}
      >
        {optDef.choices.map((c) => (
          <option key={c.value} value={c.value}>
            {c.label}
          </option>
        ))}
      </select>
    </div>
  );
}

function ResultsPanel({
  selectedMethod,
  onMethodChange,
  totalBudget,
  onBudgetChange,
  methodOptions,
  onMethodOptionsChange,
  results,
}) {
  const projectEntries = Object.entries(marcusConfig.projects);
  const methodConfig = marcusConfig.votingMethods.find((m) => m.key === selectedMethod);

  const handleBudgetChange = (e) => {
    const val = e.target.value === '' ? 0 : Number(e.target.value);
    if (!isNaN(val) && val >= 0) onBudgetChange(val);
  };

  // Resolve current values for all options of the selected method
  const currentValues = {};
  if (methodConfig?.options) {
    for (const [optKey, optDef] of Object.entries(methodConfig.options)) {
      currentValues[optKey] = methodOptions[selectedMethod]?.[optKey] ?? optDef.default;
    }
  }

  // Check if current method+options ignores credences
  const ignoresCredences = (() => {
    if (methodConfig?.ignoresCredences) return true;
    if (methodConfig?.options) {
      for (const [optKey, optDef] of Object.entries(methodConfig.options)) {
        if (!optDef.choices) continue;
        const choice = optDef.choices.find((c) => c.value === currentValues[optKey]);
        if (choice?.ignoresCredences) return true;
      }
    }
    return false;
  })();

  const handleOptionChange = (optKey, value) => {
    onMethodOptionsChange((prev) => ({
      ...prev,
      [selectedMethod]: { ...prev[selectedMethod], [optKey]: value },
    }));
  };

  return (
    <div className={styles.resultsPanel}>
      <div className={styles.methodSelector}>
        <label className={styles.methodLabel}>Total Budget ($M)</label>
        <input
          type="number"
          className={styles.budgetInput}
          value={totalBudget}
          min="0"
          step="10"
          onChange={handleBudgetChange}
        />
      </div>
      <div className={styles.methodSelector}>
        <label className={styles.methodLabel}>Voting Method</label>
        <select
          className={styles.methodSelect}
          value={selectedMethod}
          onChange={(e) => onMethodChange(e.target.value)}
        >
          {marcusConfig.votingMethods.map((m) => (
            <option key={m.key} value={m.key}>
              {m.name}
            </option>
          ))}
        </select>
      </div>
      {methodConfig?.options &&
        Object.entries(methodConfig.options).map(([optKey, optDef]) => (
          <MethodOption
            key={optKey}
            optKey={optKey}
            optDef={optDef}
            currentValue={currentValues[optKey]}
            allCurrentValues={currentValues}
            onChange={handleOptionChange}
          />
        ))}
      <div className={styles.allocationList}>
        {projectEntries.map(([id, project]) => (
          <AllocationBar
            key={id}
            name={project.name}
            percentage={results.allocations[id] || 0}
            funding={results.funding[id] || 0}
            color={project.color}
          />
        ))}
      </div>
      {ignoresCredences && (
        <p className={styles.methodDisclaimer}>
          This method does not use credence weights. Results depend only on the worldview
          parameters, not how much weight you assign to each.
        </p>
      )}
    </div>
  );
}

export default ResultsPanel;
