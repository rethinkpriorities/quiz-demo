/**
 * Set a single option to 100% and all others to 0%
 * Used when clicking an option button to select it exclusively
 * @param {string} key - The key of the option to select (equal, 10x, or 100x)
 * @param {Function} setCredences - State setter function for credences
 * @returns {void}
 */
export const selectSingleOption = (key, setCredences) => {
  const newCredences = { equal: 0, '10x': 0, '100x': 0 };
  newCredences[key] = 100;
  setCredences(newCredences);
};

/**
 * Check if a single option is selected at 100%
 * Returns the key if one option is at 100%, otherwise null
 * @param {Object} credences - Credence values { equal, 10x, 100x }
 * @returns {string|null} The key of the 100% option, or null if none
 */
export const getSelectedOption = (credences) => {
  for (const key of Object.keys(credences)) {
    if (credences[key] === 100) return key;
  }
  return null;
};
