import { useState } from 'react';
import { isValidEmail, submitEmailSignup } from '../../utils/emailSignup';
import copy from '../../../config/copy.json';
import styles from '../../styles/components/EmailCaptureModal.module.css';

function EmailCaptureModal({ quizState, onClose }) {
  const c = copy.emailCapture || {};
  const [email, setEmail] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (submitting) return;
    setError(null);

    if (!isValidEmail(email)) {
      setError(c.errorEmail || 'Please enter a valid email address.');
      return;
    }

    setSubmitting(true);
    try {
      await submitEmailSignup({ email, quizState });
      setSuccess(true);
    } catch (err) {
      console.error('Email signup failed:', err);
      setError(c.errorGeneric || 'Something went wrong — please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className={styles.overlay} role="dialog" aria-modal="true">
      <div className={styles.modal}>
        {success ? (
          <>
            <h2 className={styles.successTitle}>{c.successTitle || 'Thanks!'}</h2>
            <p className={styles.successBody}>{c.successBody || "We'll be in touch."}</p>
            <div className={styles.actions}>
              <button type="button" className="btn btn-primary btn-sm" onClick={onClose}>
                {c.continueAfterSuccess || 'See your results →'}
              </button>
            </div>
          </>
        ) : (
          <>
            <h2 className={styles.title}>{c.title || 'Stay in the loop'}</h2>
            <p className={styles.body}>{c.body || ''}</p>
            <form className={styles.form} onSubmit={handleSubmit}>
              <input
                type="email"
                className={styles.input}
                placeholder={c.placeholder || 'you@example.com'}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={submitting}
                autoFocus
              />
              {error && <p className={styles.error}>{error}</p>}
              <div className={styles.actions}>
                <button
                  type="button"
                  className={`btn btn-sm ${styles.skipButton}`}
                  onClick={onClose}
                  disabled={submitting}
                >
                  {c.skipLabel || 'No thanks'}
                </button>
                <button type="submit" className="btn btn-primary btn-sm" disabled={submitting}>
                  {c.submitLabel || 'Sign me up'}
                </button>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
}

export default EmailCaptureModal;
