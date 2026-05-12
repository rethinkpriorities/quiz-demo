/* global URL */
import { useState } from 'react';
import Header from '../layout/Header';
import styles from '../../styles/components/ExportPage.module.css';
import { endpoints } from '../../config/api';

function isoDate(d) {
  return d.toISOString().slice(0, 10);
}

function defaultRange() {
  const today = new Date();
  const thirtyAgo = new Date(today);
  thirtyAgo.setDate(today.getDate() - 30);
  return { from: isoDate(thirtyAgo), to: isoDate(today) };
}

export default function ExportPage() {
  const initial = defaultRange();
  const [apiKey, setApiKey] = useState('');
  const [from, setFrom] = useState(initial.from);
  const [to, setTo] = useState(initial.to);
  const [state, setState] = useState('idle'); // idle | loading | success | error
  const [error, setError] = useState('');

  function validate() {
    if (!apiKey.trim()) return 'API key is required.';
    if (!from || !to) return 'Both dates are required.';
    if (from > to) return 'From date must be on or before To date.';
    return null;
  }

  async function handleDownload(e) {
    e.preventDefault();
    const v = validate();
    if (v) {
      setState('error');
      setError(v);
      return;
    }
    setState('loading');
    setError('');

    try {
      const url = `${endpoints.export}?from=${encodeURIComponent(from)}&to=${encodeURIComponent(to)}`;
      const res = await fetch(url, {
        method: 'GET',
        headers: { 'x-api-key': apiKey.trim() },
      });

      if (!res.ok) {
        let msg;
        try {
          const data = await res.json();
          msg = data.error || `Request failed (${res.status})`;
        } catch {
          msg = `Request failed (${res.status})`;
        }
        if (res.status === 401) msg = 'Invalid or missing API key.';
        setState('error');
        setError(msg);
        return;
      }

      const blob = await res.blob();
      const disposition = res.headers.get('Content-Disposition') || '';
      const match = disposition.match(/filename="?([^"]+)"?/);
      const filename = match ? match[1] : `export-${from}_${to}.zip`;

      const objectUrl = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = objectUrl;
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(objectUrl);

      setState('success');
    } catch (err) {
      console.error('Export download failed:', err);
      setState('error');
      setError('Network error. Check your connection and try again.');
    }
  }

  return (
    <div className="screen">
      <Header />

      <main className="screen-main" style={{ alignItems: 'flex-start' }}>
        <div className={styles.pageWrap}>
          <div className={styles.intro}>
            <div className={styles.eyebrow}>Admin</div>
            <h1 className={styles.introTitle}>Data Export</h1>
            <p className={styles.introDesc}>
              Download a zip with <code>donations.csv</code> and <code>shares.csv</code> filtered by
              date range. Requires an API key.
            </p>
          </div>

          <div className={styles.divider} />

          <form className={styles.formSection} onSubmit={handleDownload}>
            <label className={styles.fieldLabel} htmlFor="export-api-key">
              API Key
            </label>
            <input
              className={styles.textInput}
              type="password"
              id="export-api-key"
              autoComplete="off"
              value={apiKey}
              onChange={(e) => setApiKey(e.target.value)}
              placeholder="Paste your API key"
            />

            <div className={styles.dateRow}>
              <div>
                <label className={styles.fieldLabel} htmlFor="export-from">
                  From
                </label>
                <input
                  className={styles.textInput}
                  type="date"
                  id="export-from"
                  value={from}
                  onChange={(e) => setFrom(e.target.value)}
                />
              </div>
              <div>
                <label className={styles.fieldLabel} htmlFor="export-to">
                  To
                </label>
                <input
                  className={styles.textInput}
                  type="date"
                  id="export-to"
                  value={to}
                  onChange={(e) => setTo(e.target.value)}
                />
              </div>
            </div>

            <div className={styles.fieldHint}>
              Inclusive bounds, UTC. Tables exceeding 10,000 rows are rejected — narrow the range.
            </div>

            <button
              type="submit"
              className="btn btn-primary"
              disabled={state === 'loading'}
              style={{ marginTop: 'var(--spacing-12)', alignSelf: 'flex-start' }}
            >
              {state === 'loading' ? 'Preparing…' : 'Download CSV'}
            </button>

            {state === 'error' && error && <div className={styles.warning}>{error}</div>}
            {state === 'success' && (
              <div className={styles.success}>Download started. Check your downloads folder.</div>
            )}
          </form>
        </div>
      </main>
    </div>
  );
}
