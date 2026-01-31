import { useState, useCallback } from 'react';

/**
 * Hook for email copy-to-clipboard functionality.
 * Builds email from anti-spam array format and provides copy handler.
 *
 * @param {string[]} emailParts - Array of [user, domain, tld] e.g., ['contact', 'example', 'com']
 * @returns {Object} { email, copied, handleEmailClick }
 */
export function useEmailCopy(emailParts) {
  const [copied, setCopied] = useState(false);

  // Build email from array parts (anti-spam pattern)
  const [user, domain, tld] = emailParts || [];
  const email = user ? `${user}@${domain}.${tld}` : null;

  const handleEmailClick = useCallback(
    (e) => {
      e.preventDefault();
      if (email) {
        navigator.clipboard.writeText(email);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      }
    },
    [email]
  );

  return { email, copied, handleEmailClick };
}

/**
 * Process markdown content by replacing {{EMAIL}} placeholder with a clickable link.
 *
 * @param {string} content - Markdown content with {{EMAIL}} placeholder
 * @param {string} email - The email address to display
 * @param {boolean} copied - Whether the email was recently copied
 * @returns {string} Processed markdown content
 */
export function processEmailPlaceholder(content, email, copied) {
  if (!email || !content) return content;
  return content.replace('{{EMAIL}}', `[${copied ? 'Copied!' : email}](#copy-email)`);
}

/**
 * Creates ReactMarkdown link component that handles email copy links.
 *
 * @param {Function} handleEmailClick - Click handler for email links
 * @param {string} emailClassName - CSS class for email span
 * @returns {Function} Component function for ReactMarkdown
 */
export function createEmailLinkComponent(handleEmailClick, emailClassName) {
  return function EmailLink({ href, children }) {
    if (href === '#copy-email') {
      return (
        <span onClick={handleEmailClick} className={emailClassName}>
          {children}
        </span>
      );
    }
    return (
      <a href={href} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  };
}
