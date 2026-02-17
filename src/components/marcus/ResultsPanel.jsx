import AllocationBar from './AllocationBar';
import marcusConfig from '../../../config/marcusMode.json';
import styles from '../../styles/components/MarcusModeV2.module.css';

function ResultsPanel({ selectedMethod, onMethodChange, totalBudget, onBudgetChange, results }) {
  const projectEntries = Object.entries(marcusConfig.projects);
  const methodConfig = marcusConfig.votingMethods.find((m) => m.key === selectedMethod);

  const handleBudgetChange = (e) => {
    const val = e.target.value === '' ? 0 : Number(e.target.value);
    if (!isNaN(val) && val >= 0) onBudgetChange(val);
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
      {methodConfig?.ignoresCredences && (
        <p className={styles.methodDisclaimer}>
          This method does not use credence weights. Results depend only on the worldview
          parameters, not how much weight you assign to each.
        </p>
      )}
    </div>
  );
}

export default ResultsPanel;
