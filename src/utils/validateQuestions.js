/**
 * Validation function for questions.json configuration
 * Runs on app initialization in development mode to catch config errors early
 */

const REQUIRED_QUESTION_FIELDS = [
  'id',
  'categoryLabel',
  'emoji',
  'previewText',
  'heading',
  'instructionsOptions',
  'instructionsSliders',
  'editPanelTitle',
  'options',
];

const REQUIRED_OPTION_FIELDS = [
  'key',
  'label',
  'description',
  'panelLabel',
  'panelShort',
  'multiplier',
];

/**
 * Checks for missing required fields in an object
 * @param {Object} obj - Object to check
 * @param {string[]} requiredFields - Array of required field names
 * @param {string} prefix - Prefix for error messages
 * @returns {string[]} Array of error messages
 */
function checkRequiredFields(obj, requiredFields, prefix) {
  return requiredFields
    .filter((field) => obj[field] === undefined || obj[field] === null)
    .map((field) => `${prefix}: Missing required field '${field}'`);
}

/**
 * Validates the questions configuration
 * @param {Object} config - The questions configuration object
 * @throws {Error} If validation fails
 */
export function validateQuestionsConfig(config) {
  const errors = [];

  // Check top-level structure
  if (!config) {
    throw new Error('Questions config is missing or null');
  }

  if (!config.defaultCredences) {
    errors.push('Missing defaultCredences object');
  } else {
    const credenceKeys = Object.keys(config.defaultCredences);
    const total = Object.values(config.defaultCredences).reduce((sum, val) => sum + val, 0);
    if (total !== 100) {
      errors.push(`defaultCredences must sum to 100, got ${total}`);
    }
    if (credenceKeys.length < 2) {
      errors.push('defaultCredences must have at least 2 keys');
    }
  }

  if (!config.questions || !Array.isArray(config.questions)) {
    errors.push('Missing or invalid questions array');
  } else if (config.questions.length === 0) {
    errors.push('Questions array cannot be empty');
  } else {
    // Validate each question
    const questionIds = new Set();

    config.questions.forEach((question, qIndex) => {
      const qPrefix = `Question[${qIndex}]`;

      // Check required fields
      errors.push(...checkRequiredFields(question, REQUIRED_QUESTION_FIELDS, qPrefix));

      // Check unique ID
      if (question.id) {
        if (questionIds.has(question.id)) {
          errors.push(`${qPrefix}: Duplicate question ID '${question.id}'`);
        }
        questionIds.add(question.id);

        // Check ID format (should be valid for use as state key)
        if (!/^[a-zA-Z][a-zA-Z0-9]*$/.test(question.id)) {
          errors.push(
            `${qPrefix}: Question ID '${question.id}' must start with a letter and contain only alphanumeric characters`
          );
        }
      }

      // Validate options
      if (question.options) {
        if (!Array.isArray(question.options)) {
          errors.push(`${qPrefix}: 'options' must be an array`);
        } else if (question.options.length < 2) {
          errors.push(`${qPrefix}: Must have at least 2 options`);
        } else {
          const optionKeys = new Set();

          question.options.forEach((option, oIndex) => {
            const oPrefix = `${qPrefix}.options[${oIndex}]`;

            // Check required option fields
            errors.push(...checkRequiredFields(option, REQUIRED_OPTION_FIELDS, oPrefix));

            // Check unique option key within question
            if (option.key) {
              if (optionKeys.has(option.key)) {
                errors.push(`${oPrefix}: Duplicate option key '${option.key}'`);
              }
              optionKeys.add(option.key);
            }

            // Validate multiplier is a number
            if (option.multiplier !== undefined && typeof option.multiplier !== 'number') {
              errors.push(`${oPrefix}: 'multiplier' must be a number`);
            }
          });

          // Check that option keys match defaultCredences keys
          if (config.defaultCredences) {
            const credenceKeys = new Set(Object.keys(config.defaultCredences));
            const missingKeys = [...optionKeys].filter((k) => !credenceKeys.has(k));
            const extraKeys = [...credenceKeys].filter((k) => !optionKeys.has(k));

            if (missingKeys.length > 0) {
              errors.push(
                `${qPrefix}: Option keys [${missingKeys.join(', ')}] not found in defaultCredences`
              );
            }
            if (extraKeys.length > 0) {
              errors.push(
                `${qPrefix}: defaultCredences keys [${extraKeys.join(', ')}] not found in options`
              );
            }
          }
        }
      }
    });
  }

  if (errors.length > 0) {
    const errorMessage = `Questions config validation failed:\n${errors.map((e) => `  - ${e}`).join('\n')}`;
    throw new Error(errorMessage);
  }

  return true;
}

export default validateQuestionsConfig;
