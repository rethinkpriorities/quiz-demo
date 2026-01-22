import LZString from 'lz-string';
import questionsConfig from '../../config/questions.json';

const { questions } = questionsConfig;

// Get valid question IDs and their option keys (excluding intermissions)
function getValidQuestions() {
  return questions
    .filter((q) => q.type !== 'intermission' && q.options)
    .map((q) => ({
      id: q.id,
      optionKeys: q.options.map((opt) => opt.key),
    }));
}

/**
 * Encode quiz credences into a compressed URL-safe string.
 * Uses compact format: questionId:optionKey or questionId:key=val,key=val
 * Then compresses with lz-string for obfuscation.
 *
 * @param {Object} credencesByQuestion - { questionId: { optionKey: percentage, ... } }
 * @returns {string} Compressed, URL-safe string
 */
export function encodeCredences(credencesByQuestion) {
  const parts = [];

  for (const [questionId, credences] of Object.entries(credencesByQuestion)) {
    const entries = Object.entries(credences);
    const fullCredence = entries.find(([, value]) => value === 100);

    if (fullCredence) {
      // 100% on one option: questionId:optionKey
      parts.push(`${questionId}:${fullCredence[0]}`);
    } else {
      // Custom mix: questionId:key=val,key=val (only non-zero values)
      const nonZero = entries
        .filter(([, value]) => value > 0)
        .map(([key, value]) => `${key}=${value}`)
        .join(',');
      parts.push(`${questionId}:${nonZero}`);
    }
  }

  const compact = parts.join('|');
  return LZString.compressToEncodedURIComponent(compact);
}

/**
 * Decode a compressed string back into credences.
 * Parses compact format: questionId:optionKey or questionId:key=val,key=val
 *
 * @param {string} compressed - Compressed string from URL
 * @returns {Object|null} Decoded credences or null if invalid
 */
export function decodeCredences(compressed) {
  try {
    const compact = LZString.decompressFromEncodedURIComponent(compressed);
    if (!compact) return null;

    const credences = {};
    const parts = compact.split('|');

    for (const part of parts) {
      const colonIndex = part.indexOf(':');
      if (colonIndex === -1) return null;

      const questionId = part.slice(0, colonIndex);
      const valuesPart = part.slice(colonIndex + 1);

      if (valuesPart.includes('=')) {
        // Custom mix: key=val,key=val
        const pairs = valuesPart.split(',');
        credences[questionId] = {};
        for (const pair of pairs) {
          const [key, val] = pair.split('=');
          if (!key || val === undefined) return null;
          credences[questionId][key] = parseInt(val, 10);
        }
      } else {
        // 100% on one option
        credences[questionId] = { [valuesPart]: 100 };
      }
    }

    return credences;
  } catch {
    return null;
  }
}

/**
 * Validate decoded credences against current quiz configuration.
 * @param {Object} credences - Decoded credences object
 * @returns {{ valid: boolean, credences?: Object, message?: string }}
 */
export function validateCredences(credences) {
  if (!credences || typeof credences !== 'object') {
    return { valid: false, message: 'Invalid data format' };
  }

  const validQuestions = getValidQuestions();
  const validQuestionIds = new Set(validQuestions.map((q) => q.id));

  // Check if all questions in URL exist in current config
  const urlQuestionIds = Object.keys(credences);
  const missingInConfig = urlQuestionIds.filter((id) => !validQuestionIds.has(id));

  if (missingInConfig.length > 0) {
    return {
      valid: false,
      message: 'Quiz has changed since this link was created',
    };
  }

  // Check if all current questions are in URL
  const missingInUrl = validQuestions.filter((q) => !credences[q.id]);

  if (missingInUrl.length > 0) {
    return {
      valid: false,
      message: 'Quiz has changed since this link was created',
    };
  }

  // Validate option keys and credence sums for each question
  for (const question of validQuestions) {
    const questionCredences = credences[question.id];
    const validOptionKeys = new Set(question.optionKeys);
    const urlOptionKeys = Object.keys(questionCredences);

    // Check for invalid option keys
    const hasInvalidKey = urlOptionKeys.some((key) => !validOptionKeys.has(key));
    if (hasInvalidKey) {
      return {
        valid: false,
        message: 'Quiz has changed since this link was created',
      };
    }

    // Ensure credences sum to 100 (with small tolerance for rounding)
    const sum = Object.values(questionCredences).reduce((a, b) => a + b, 0);
    if (Math.abs(sum - 100) > 1) {
      return {
        valid: false,
        message: 'Invalid credence values',
      };
    }
  }

  // Normalize credences to ensure all options are present
  const normalizedCredences = {};
  for (const question of validQuestions) {
    const questionCredences = credences[question.id] || {};
    normalizedCredences[question.id] = {};

    for (const optionKey of question.optionKeys) {
      normalizedCredences[question.id][optionKey] = questionCredences[optionKey] || 0;
    }
  }

  return { valid: true, credences: normalizedCredences };
}

/**
 * Generate a shareable URL for the current quiz results.
 * @param {Object} credencesByQuestion - Current credences
 * @returns {string} Full URL with hash fragment
 */
export function generateShareUrl(credencesByQuestion) {
  const encoded = encodeCredences(credencesByQuestion);
  const baseUrl = window.location.origin + window.location.pathname;
  return `${baseUrl}#results=${encoded}`;
}

/**
 * Parse the URL hash to extract shared results.
 * @returns {Object|null} Parsed and validated credences, or null if none/invalid
 */
export function parseShareUrl() {
  const hash = window.location.hash;
  if (!hash.startsWith('#results=')) {
    return null;
  }

  const encoded = hash.slice('#results='.length);
  if (!encoded) {
    return null;
  }

  const decoded = decodeCredences(encoded);
  if (!decoded) {
    return { error: "Couldn't restore your results from this link" };
  }

  const validation = validateCredences(decoded);
  if (!validation.valid) {
    return { error: validation.message };
  }

  return { credences: validation.credences };
}

/**
 * Clear the hash from the URL without triggering navigation.
 */
export function clearShareHash() {
  if (window.location.hash) {
    window.history.replaceState(null, '', window.location.pathname + window.location.search);
  }
}
