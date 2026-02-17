import { useMarcusState } from '../../hooks/useMarcusState';
import SpreadsheetInput from './SpreadsheetInput';
import ResultsPanel from './ResultsPanel';
import styles from '../../styles/components/MarcusModeV2.module.css';

function MarcusModeScreen() {
  const {
    worldviews,
    credences,
    lockedKeys,
    setLockedKeys,
    selectedMethod,
    results,
    addWorldview,
    removeWorldview,
    updateCredence,
    updateWorldview,
    updateDiscountFactor,
    applyPreset,
    setSelectedMethod,
    totalBudget,
    setTotalBudget,
    methodOptions,
    setMethodOptions,
  } = useMarcusState();

  return (
    <div className={styles.container}>
      <div className={styles.layout}>
        <div className={styles.spreadsheetSide}>
          <SpreadsheetInput
            worldviews={worldviews}
            credences={credences}
            lockedKeys={lockedKeys}
            setLockedKeys={setLockedKeys}
            onCredenceChange={updateCredence}
            onUpdate={updateWorldview}
            onUpdateDiscount={updateDiscountFactor}
            onApplyPreset={applyPreset}
            onAdd={addWorldview}
            onRemove={removeWorldview}
          />
        </div>
        <div className={styles.resultsSide}>
          <ResultsPanel
            selectedMethod={selectedMethod}
            onMethodChange={setSelectedMethod}
            totalBudget={totalBudget}
            onBudgetChange={setTotalBudget}
            methodOptions={methodOptions}
            onMethodOptionsChange={setMethodOptions}
            results={results}
          />
        </div>
      </div>
    </div>
  );
}

export default MarcusModeScreen;
