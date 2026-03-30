import { useState, useMemo } from 'react';
import { X, Copy, Check } from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import AllocationBar from './AllocationBar';
import { copyToClipboard } from '../../utils/clipboard';
import styles from '../../styles/components/ResultsModal.module.css';
import tableStyles from '../../styles/components/TableMode.module.css';

function ResultsModal({ results, projectEntries, fundingCaps = {}, totalBudget, onClose }) {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState('results');

  const chartData = useMemo(() => {
    if (!results.debugTrace?.length) return [];
    const zeroPoint = { iteration: 0 };
    for (const [id] of projectEntries) zeroPoint[id] = 0;
    return [
      zeroPoint,
      ...results.debugTrace.map((entry, i) => ({
        iteration: i + 1,
        ...entry.fundingAfter,
      })),
    ];
  }, [results.debugTrace, projectEntries]);

  const projectColors = useMemo(() => {
    const map = {};
    for (const [id, project] of projectEntries) {
      map[id] = project.color;
    }
    return map;
  }, [projectEntries]);

  const allocatedIds = useMemo(() => {
    if (!results.debugTrace?.length) return [];
    return projectEntries
      .map(([id]) => id)
      .filter((id) => results.debugTrace.some((entry) => entry.fundingAfter[id] > 0));
  }, [results.debugTrace, projectEntries]);

  const handleCopy = async () => {
    const header = 'Project\tAllocation %\tFunding ($M)';
    const rows = projectEntries.map(([id, project]) => {
      const pct = (results.allocations[id] || 0).toFixed(1);
      const funding = Math.round(results.funding[id] || 0);
      return `${project.name}\t${pct}\t${funding}`;
    });
    await copyToClipboard([header, ...rows].join('\n'));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <div className={styles.header}>
          <div className={styles.tabs}>
            <button
              className={`${styles.tab} ${activeTab === 'results' ? styles.tabActive : ''}`}
              onClick={() => setActiveTab('results')}
            >
              Results
            </button>
            <button
              className={`${styles.tab} ${activeTab === 'debug' ? styles.tabActive : ''}`}
              onClick={() => setActiveTab('debug')}
            >
              Debug
            </button>
          </div>
          <button className={styles.closeButton} onClick={onClose}>
            <X size={16} />
          </button>
        </div>
        <div className={styles.content}>
          {activeTab === 'results' ? (
            <div className={tableStyles.allocationList}>
              {projectEntries.map(([id, project]) => (
                <AllocationBar
                  key={id}
                  name={project.name}
                  percentage={results.allocations[id] || 0}
                  funding={results.funding[id] || 0}
                  color={project.color}
                  cap={fundingCaps[id]}
                  totalBudget={totalBudget}
                />
              ))}
            </div>
          ) : (
            <>
              {chartData.length > 0 && (
                <div className={styles.chartContainer}>
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={chartData}>
                      <XAxis
                        dataKey="iteration"
                        tick={{ fill: 'var(--text-secondary)', fontSize: 11 }}
                        axisLine={{ stroke: 'var(--border-subtle)' }}
                        tickLine={false}
                      />
                      <YAxis
                        tick={{ fill: 'var(--text-secondary)', fontSize: 11 }}
                        axisLine={{ stroke: 'var(--border-subtle)' }}
                        tickLine={false}
                        tickFormatter={(v) => `$${v}M`}
                      />
                      <Tooltip
                        contentStyle={{
                          background: '#0a3549',
                          border: '1px solid var(--border-subtle)',
                          borderRadius: 8,
                          fontSize: 12,
                        }}
                        labelFormatter={(v) => `Iteration ${v}`}
                        formatter={(value, name) => {
                          const project = projectEntries.find(([id]) => id === name);
                          return [`$${Math.round(value)}M`, project?.[1]?.name || name];
                        }}
                      />
                      {allocatedIds.map((id) => (
                        <Area
                          key={id}
                          type="monotone"
                          dataKey={id}
                          stroke={projectColors[id]}
                          fill="none"
                          isAnimationActive={false}
                        />
                      ))}
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              )}
              <pre className={styles.debugContent}>
                {JSON.stringify(results.debugTrace, null, 2)}
              </pre>
            </>
          )}
        </div>
        {activeTab === 'results' && (
          <div className={styles.footer}>
            <button
              className={`btn btn-secondary ${styles.copyButton} ${copied ? styles.copied : ''}`}
              onClick={handleCopy}
            >
              {copied ? <Check size={16} /> : <Copy size={16} />}
              {copied ? 'Copied!' : 'Copy to Clipboard'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default ResultsModal;
