/**
 * Copy text to clipboard with automatic fallback for older browsers.
 *
 * Tries navigator.clipboard.writeText first, falls back to a temporary
 * textarea + execCommand('copy') if the Clipboard API is unavailable
 * or throws (e.g. in non-secure contexts).
 *
 * @param {string} text - The text to copy
 * @returns {Promise<void>}
 */
export async function copyToClipboard(text) {
  try {
    if (navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(text);
      return;
    }
  } catch {
    // Clipboard API failed — fall through to execCommand fallback
  }

  const textArea = document.createElement('textarea');
  textArea.value = text;
  document.body.appendChild(textArea);
  textArea.select();
  document.execCommand('copy');
  document.body.removeChild(textArea);
}
