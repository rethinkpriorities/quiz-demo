import { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import Header from './layout/Header';
import { useQuiz } from '../context/useQuiz';
import styles from '../styles/components/DisclaimerScreen.module.css';
import copy from '../../config/copy.json';

/**
 * Disclaimer screen shown before the welcome page.
 * Displays markdown content with a clickable email that copies to clipboard.
 */
function DisclaimerScreen() {
  const { goToStep } = useQuiz();
  const [emailCopied, setEmailCopied] = useState(false);

  // Build email from array parts (anti-spam pattern)
  const [user, domain, tld] = copy.disclaimer?.email || [];
  const email = user ? `${user}@${domain}.${tld}` : null;

  const handleEmailClick = (e) => {
    e.preventDefault();
    if (email) {
      navigator.clipboard.writeText(email);
      setEmailCopied(true);
      setTimeout(() => setEmailCopied(false), 2000);
    }
  };

  const handleContinue = () => {
    goToStep('welcome');
  };

  // Replace {{EMAIL}} placeholder with clickable link
  const processedContent = email
    ? copy.disclaimer.content.replace(
        '{{EMAIL}}',
        `[${emailCopied ? 'Copied!' : email}](#copy-email)`
      )
    : copy.disclaimer.content;

  return (
    <div className="screen">
      <Header />

      <main className="screen-main">
        <div className={styles.container}>
          <h1 className={styles.heading}>{copy.disclaimer.heading}</h1>

          <div className={styles.content}>
            <ReactMarkdown
              components={{
                a: ({ href, children }) =>
                  href === '#copy-email' ? (
                    <span onClick={handleEmailClick} className={styles.emailCopy}>
                      {children}
                    </span>
                  ) : (
                    <a href={href} target="_blank" rel="noopener noreferrer">
                      {children}
                    </a>
                  ),
              }}
            >
              {processedContent}
            </ReactMarkdown>
          </div>

          <button onClick={handleContinue} className="btn btn-primary">
            {copy.disclaimer.continueButton}
          </button>
        </div>
      </main>
    </div>
  );
}

export default DisclaimerScreen;
