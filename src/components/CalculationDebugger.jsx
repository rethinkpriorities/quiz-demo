import { useState } from 'react';
import {
  CAUSES,
  ANIMAL_MULTIPLIERS,
  FUTURE_MULTIPLIERS,
  SCALE_MULTIPLIERS,
  CERTAINTY_MULTIPLIERS,
} from '../constants/config';
import styles from '../styles/components/Debugger.module.css';

/**
 * Developer tool for testing different calculation parameters
 * Allows runtime modification of multipliers, point values, and cause configurations
 */
const CalculationDebugger = ({ onConfigChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  // Form state - initialized from current constants
  const [formState, setFormState] = useState({
    causes: JSON.parse(JSON.stringify(CAUSES)),
    animalMultipliers: { ...ANIMAL_MULTIPLIERS },
    futureMultipliers: { ...FUTURE_MULTIPLIERS },
    scaleMultipliers: { ...SCALE_MULTIPLIERS },
    certaintyMultipliers: { ...CERTAINTY_MULTIPLIERS },
  });

  const handleCauseChange = (causeKey, field, value) => {
    setFormState((prev) => ({
      ...prev,
      causes: {
        ...prev.causes,
        [causeKey]: {
          ...prev.causes[causeKey],
          [field]: field === 'name' ? value : typeof value === 'boolean' ? value : Number(value),
        },
      },
    }));
  };

  const handleMultiplierChange = (multiplierType, key, value) => {
    setFormState((prev) => ({
      ...prev,
      [multiplierType]: {
        ...prev[multiplierType],
        [key]: Number(value),
      },
    }));
  };

  const handleSave = () => {
    onConfigChange(formState);
    setIsOpen(false);
  };

  return (
    <>
      <button className={styles.debugButton} onClick={() => setIsOpen(true)} title="Debug Settings">
        Settings
      </button>

      {isOpen && (
        <div className={styles.overlay} onClick={() => setIsOpen(false)}>
          <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
            <div className={styles.header}>
              <h2>Calculation Debugger</h2>
              <button className={styles.closeButton} onClick={() => setIsOpen(false)}>
                x
              </button>
            </div>

            <div className={styles.content}>
              <section className={styles.section}>
                <h3>CAUSES</h3>

                {Object.entries(formState.causes).map(([causeKey, cause]) => (
                  <div key={causeKey} className={styles.causeBlock}>
                    <h4>{cause.name}</h4>
                    <div className={styles.fieldRow}>
                      <label>
                        Points:
                        <input
                          type="number"
                          value={cause.points}
                          onChange={(e) => handleCauseChange(causeKey, 'points', e.target.value)}
                        />
                      </label>
                      <label>
                        Scale Factor:
                        <input
                          type="number"
                          value={cause.scaleFactor}
                          onChange={(e) =>
                            handleCauseChange(causeKey, 'scaleFactor', e.target.value)
                          }
                        />
                      </label>
                    </div>
                    <div className={styles.checkboxRow}>
                      <label>
                        <input
                          type="checkbox"
                          checked={cause.helpsAnimals}
                          onChange={(e) =>
                            handleCauseChange(causeKey, 'helpsAnimals', e.target.checked)
                          }
                        />
                        Helps Animals
                      </label>
                      <label>
                        <input
                          type="checkbox"
                          checked={cause.helpsFutureHumans}
                          onChange={(e) =>
                            handleCauseChange(causeKey, 'helpsFutureHumans', e.target.checked)
                          }
                        />
                        Helps Future Humans
                      </label>
                      <label>
                        <input
                          type="checkbox"
                          checked={cause.isSpeculative}
                          onChange={(e) =>
                            handleCauseChange(causeKey, 'isSpeculative', e.target.checked)
                          }
                        />
                        Is Speculative
                      </label>
                    </div>
                  </div>
                ))}
              </section>

              <section className={styles.section}>
                <h3>MULTIPLIERS</h3>

                <div className={styles.multiplierGroup}>
                  <h4>Animal</h4>
                  <div className={styles.multiplierRow}>
                    <label>
                      Equal:
                      <input
                        type="number"
                        step="0.01"
                        value={formState.animalMultipliers.equal}
                        onChange={(e) =>
                          handleMultiplierChange('animalMultipliers', 'equal', e.target.value)
                        }
                      />
                    </label>
                    <label>
                      10x:
                      <input
                        type="number"
                        step="0.01"
                        value={formState.animalMultipliers['10x']}
                        onChange={(e) =>
                          handleMultiplierChange('animalMultipliers', '10x', e.target.value)
                        }
                      />
                    </label>
                    <label>
                      100x:
                      <input
                        type="number"
                        step="0.01"
                        value={formState.animalMultipliers['100x']}
                        onChange={(e) =>
                          handleMultiplierChange('animalMultipliers', '100x', e.target.value)
                        }
                      />
                    </label>
                  </div>
                </div>

                <div className={styles.multiplierGroup}>
                  <h4>Future</h4>
                  <div className={styles.multiplierRow}>
                    <label>
                      Equal:
                      <input
                        type="number"
                        step="0.01"
                        value={formState.futureMultipliers.equal}
                        onChange={(e) =>
                          handleMultiplierChange('futureMultipliers', 'equal', e.target.value)
                        }
                      />
                    </label>
                    <label>
                      10x:
                      <input
                        type="number"
                        step="0.01"
                        value={formState.futureMultipliers['10x']}
                        onChange={(e) =>
                          handleMultiplierChange('futureMultipliers', '10x', e.target.value)
                        }
                      />
                    </label>
                    <label>
                      100x:
                      <input
                        type="number"
                        step="0.01"
                        value={formState.futureMultipliers['100x']}
                        onChange={(e) =>
                          handleMultiplierChange('futureMultipliers', '100x', e.target.value)
                        }
                      />
                    </label>
                  </div>
                </div>

                <div className={styles.multiplierGroup}>
                  <h4>Scale (exponents)</h4>
                  <div className={styles.multiplierRow}>
                    <label>
                      Equal:
                      <input
                        type="number"
                        step="0.1"
                        value={formState.scaleMultipliers.equal}
                        onChange={(e) =>
                          handleMultiplierChange('scaleMultipliers', 'equal', e.target.value)
                        }
                      />
                    </label>
                    <label>
                      10x:
                      <input
                        type="number"
                        step="0.1"
                        value={formState.scaleMultipliers['10x']}
                        onChange={(e) =>
                          handleMultiplierChange('scaleMultipliers', '10x', e.target.value)
                        }
                      />
                    </label>
                    <label>
                      100x:
                      <input
                        type="number"
                        step="0.1"
                        value={formState.scaleMultipliers['100x']}
                        onChange={(e) =>
                          handleMultiplierChange('scaleMultipliers', '100x', e.target.value)
                        }
                      />
                    </label>
                  </div>
                </div>

                <div className={styles.multiplierGroup}>
                  <h4>Certainty</h4>
                  <div className={styles.multiplierRow}>
                    <label>
                      Equal:
                      <input
                        type="number"
                        step="0.01"
                        value={formState.certaintyMultipliers.equal}
                        onChange={(e) =>
                          handleMultiplierChange('certaintyMultipliers', 'equal', e.target.value)
                        }
                      />
                    </label>
                    <label>
                      10x:
                      <input
                        type="number"
                        step="0.01"
                        value={formState.certaintyMultipliers['10x']}
                        onChange={(e) =>
                          handleMultiplierChange('certaintyMultipliers', '10x', e.target.value)
                        }
                      />
                    </label>
                    <label>
                      100x:
                      <input
                        type="number"
                        step="0.01"
                        value={formState.certaintyMultipliers['100x']}
                        onChange={(e) =>
                          handleMultiplierChange('certaintyMultipliers', '100x', e.target.value)
                        }
                      />
                    </label>
                  </div>
                </div>
              </section>
            </div>

            <div className={styles.footer}>
              <button className={styles.saveButton} onClick={handleSave}>
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CalculationDebugger;
