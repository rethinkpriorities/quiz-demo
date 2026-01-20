/**
 * Validation function for causes.json configuration
 * Runs on app initialization in development mode to catch config errors early
 */

const REQUIRED_CAUSE_FIELDS = ['name', 'color', 'points', 'scaleFactor'];
const CAUSE_FLAG_FIELDS = ['helpsAnimals', 'helpsFutureHumans', 'isSpeculative'];
const NUMERIC_CAUSE_FIELDS = ['points', 'scaleFactor'];

/**
 * Validates the causes configuration
 * @param {Object} config - The causes configuration object
 * @throws {Error} If validation fails
 */
export function validateCausesConfig(config) {
  const errors = [];

  if (!config) {
    throw new Error('Causes config is missing or null');
  }

  // Validate causes
  if (!config.causes || typeof config.causes !== 'object') {
    errors.push('Missing or invalid causes object');
  } else if (Object.keys(config.causes).length === 0) {
    errors.push('Causes object cannot be empty');
  } else {
    for (const [causeKey, cause] of Object.entries(config.causes)) {
      const prefix = `Cause[${causeKey}]`;

      // Check required fields
      for (const field of REQUIRED_CAUSE_FIELDS) {
        if (cause[field] === undefined || cause[field] === null) {
          errors.push(`${prefix}: Missing required field '${field}'`);
        }
      }

      // Check flag fields are booleans (if present)
      for (const field of CAUSE_FLAG_FIELDS) {
        if (cause[field] !== undefined && typeof cause[field] !== 'boolean') {
          errors.push(`${prefix}: Field '${field}' must be a boolean`);
        }
      }

      // Check numeric fields
      for (const field of NUMERIC_CAUSE_FIELDS) {
        if (cause[field] !== undefined && typeof cause[field] !== 'number') {
          errors.push(`${prefix}: '${field}' must be a number`);
        }
      }
    }
  }

  // Validate defaultCredences
  if (!config.defaultCredences || typeof config.defaultCredences !== 'object') {
    errors.push('Missing or invalid defaultCredences object');
  } else {
    const entries = Object.entries(config.defaultCredences);

    if (entries.length < 2) {
      errors.push('defaultCredences must have at least 2 keys');
    }

    let total = 0;
    for (const [key, value] of entries) {
      if (typeof value !== 'number') {
        errors.push(`defaultCredences.${key} must be a number`);
      } else {
        total += value;
      }
    }

    if (total !== 100) {
      errors.push(`defaultCredences must sum to 100, got ${total}`);
    }
  }

  if (errors.length > 0) {
    const errorMessage = `Causes config validation failed:\n${errors.map((e) => `  - ${e}`).join('\n')}`;
    throw new Error(errorMessage);
  }

  return true;
}

export default validateCausesConfig;
