/**
 * Session management utilities for quiz state persistence.
 * Uses sessionStorage for tab-scoped persistence.
 */

const STORAGE_KEYS = {
  SESSION_ID: 'quiz_session_id',
  QUIZ_STATE: 'quiz_state',
  SKIP_CONFLICT: 'quiz_skip_conflict',
};

const STATE_VERSION = 1;

/**
 * Get or create a session ID for this browser tab.
 * @returns {string} UUID session ID
 */
export function getOrCreateSessionId() {
  let sessionId = sessionStorage.getItem(STORAGE_KEYS.SESSION_ID);
  if (!sessionId) {
    sessionId = crypto.randomUUID();
    sessionStorage.setItem(STORAGE_KEYS.SESSION_ID, sessionId);
  }
  return sessionId;
}

/**
 * Get the current session ID without creating one.
 * @returns {string|null} Session ID or null if none exists
 */
export function getSessionId() {
  return sessionStorage.getItem(STORAGE_KEYS.SESSION_ID);
}

/**
 * Save quiz state to sessionStorage.
 * @param {Object} state - Quiz state to save
 * @param {string} state.currentStep - Current step ID
 * @param {Object} state.questions - Question states keyed by ID
 */
export function saveQuizState(state) {
  const { currentStep, questions } = state;

  // Only save relevant question data (not originalCredences)
  const questionData = {};
  for (const [questionId, qState] of Object.entries(questions)) {
    questionData[questionId] = {
      credences: qState.credences,
      inputMode: qState.inputMode,
      lockedKey: qState.lockedKey,
    };
  }

  const payload = {
    version: STATE_VERSION,
    timestamp: Date.now(),
    state: {
      currentStep,
      questions: questionData,
    },
  };

  sessionStorage.setItem(STORAGE_KEYS.QUIZ_STATE, JSON.stringify(payload));
}

/**
 * Load quiz state from sessionStorage.
 * @returns {Object|null} Saved state or null if none/invalid
 */
export function loadQuizState() {
  const stored = sessionStorage.getItem(STORAGE_KEYS.QUIZ_STATE);
  if (!stored) return null;

  try {
    const parsed = JSON.parse(stored);

    // Version check for future migrations
    if (parsed.version !== STATE_VERSION) {
      // For now, reject incompatible versions
      clearQuizState();
      return null;
    }

    return parsed.state;
  } catch {
    clearQuizState();
    return null;
  }
}

/**
 * Check if there's saved quiz state (without loading it).
 * @returns {boolean} True if saved state exists
 */
export function hasSavedState() {
  return sessionStorage.getItem(STORAGE_KEYS.QUIZ_STATE) !== null;
}

/**
 * Clear saved quiz state from sessionStorage.
 */
export function clearQuizState() {
  sessionStorage.removeItem(STORAGE_KEYS.QUIZ_STATE);
}

/**
 * Clear all session data (for full reset).
 */
export function clearAllSessionData() {
  sessionStorage.removeItem(STORAGE_KEYS.SESSION_ID);
  sessionStorage.removeItem(STORAGE_KEYS.QUIZ_STATE);
  sessionStorage.removeItem(STORAGE_KEYS.SKIP_CONFLICT);
}

/**
 * Set flag to skip conflict detection on next load.
 * Used when opening share URL in new tab.
 */
export function setSkipConflict() {
  sessionStorage.setItem(STORAGE_KEYS.SKIP_CONFLICT, 'true');
}

/**
 * Check and clear the skip conflict flag.
 * Returns true if flag was set (and clears it).
 */
export function checkAndClearSkipConflict() {
  const shouldSkip = sessionStorage.getItem(STORAGE_KEYS.SKIP_CONFLICT) === 'true';
  if (shouldSkip) {
    sessionStorage.removeItem(STORAGE_KEYS.SKIP_CONFLICT);
  }
  return shouldSkip;
}
