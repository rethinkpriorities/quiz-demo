import WorldviewColumn from './WorldviewColumn';
import marcusConfig from '../../../config/marcusMode.json';
import styles from '../../styles/components/MarcusModeV2.module.css';

/**
 * Build the flat list of row descriptors. Both the label column and
 * each data column render this same list so heights stay in sync.
 */
function buildRows() {
  const rows = [];

  rows.push({ type: 'sectionTitle', label: 'Credence' });
  rows.push({ type: 'data', field: 'credence', label: 'Weight' });

  rows.push({ type: 'sectionTitle', label: 'Moral Weights' });
  for (const mw of marcusConfig.moralWeightKeys) {
    rows.push({ type: 'data', field: `moral_weights.${mw.key}`, label: mw.label });
  }

  rows.push({ type: 'sectionTitle', label: 'Discount Factors' });
  for (let i = 0; i < marcusConfig.discountFactorLabels.length; i++) {
    rows.push({
      type: 'data',
      field: `discount_factor.${i}`,
      label: marcusConfig.discountFactorLabels[i],
    });
  }

  rows.push({ type: 'sectionTitle', label: 'Risk' });
  rows.push({ type: 'data', field: 'risk_profile', label: 'Risk Profile' });
  rows.push({ type: 'data', field: 'p_extinction', label: 'Non-xrisk discount' });

  return rows;
}

const ROWS = buildRows();

export { ROWS };

function SpreadsheetInput({
  worldviews,
  credences,
  lockedKeys,
  setLockedKeys,
  onCredenceChange,
  onUpdate,
  onUpdateDiscount,
  onApplyPreset,
  onAdd,
  onRemove,
}) {
  return (
    <div className={styles.spreadsheet}>
      <div className={styles.spreadsheetScroll}>
        {/* Row labels column */}
        <div className={styles.rowLabels}>
          <div className={styles.labelHeader} />
          {ROWS.map((row, i) =>
            row.type === 'sectionTitle' ? (
              <div key={i} className={styles.sectionTitle}>
                {row.label}
              </div>
            ) : (
              <div key={i} className={styles.rowLabel}>
                {row.label}
              </div>
            )
          )}
        </div>

        {/* Worldview columns */}
        {worldviews.map((wv, i) => (
          <WorldviewColumn
            key={i}
            worldview={wv}
            index={i}
            rows={ROWS}
            columnIndex={i}
            totalColumns={worldviews.length}
            credences={credences}
            lockedKeys={lockedKeys}
            setLockedKeys={setLockedKeys}
            onCredenceChange={onCredenceChange}
            onUpdate={onUpdate}
            onUpdateDiscount={onUpdateDiscount}
            onApplyPreset={onApplyPreset}
            onRemove={onRemove}
            canRemove={worldviews.length > 1}
          />
        ))}

        {/* Add column button */}
        <div className={styles.addColumn}>
          <button type="button" className={styles.addButton} onClick={onAdd}>
            +
          </button>
        </div>
      </div>
    </div>
  );
}

export default SpreadsheetInput;
