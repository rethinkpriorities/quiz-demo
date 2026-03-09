import { X } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import styles from '../../styles/components/ExplanationModal.module.css';
import copy from '../../../config/copy.json';

function ExplanationModal({ loading, explanation, error, onRetry, onClose }) {
  const aiCopy = copy.results.aiExplanation;

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <div className={styles.header}>
          <h2 className={styles.title}>{aiCopy.modalTitle}</h2>
          <button className={styles.closeButton} onClick={onClose}>
            <X size={16} />
          </button>
        </div>
        <div className={styles.content}>
          {loading && (
            <div className={styles.loadingContainer}>
              <div className={styles.spinner} />
              <span className={styles.loadingText}>{aiCopy.loadingText}</span>
            </div>
          )}
          {error && (
            <div className={styles.errorContainer}>
              <span className={styles.errorText}>{aiCopy.errorText}</span>
              <button className={styles.retryButton} onClick={onRetry}>
                {aiCopy.retryButton}
              </button>
            </div>
          )}
          {!loading && !error && explanation && (
            <div className={styles.explanation}>
              <ReactMarkdown>{explanation}</ReactMarkdown>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ExplanationModal;
