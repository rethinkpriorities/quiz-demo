#!/usr/bin/env node
/**
 * Standalone config validation script for CI
 * Validates causes.json and questions.json configs
 */

import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import process from 'node:process';

// Get the project root directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const projectRoot = join(__dirname, '..');

// Import validators
const { validateCausesConfig } = await import(join(projectRoot, 'src/utils/validateCauses.js'));
const { validateQuestionsConfig } = await import(
  join(projectRoot, 'src/utils/validateQuestions.js')
);

// Load config files
const causesConfig = JSON.parse(readFileSync(join(projectRoot, 'config/causes.json'), 'utf-8'));
const questionsConfig = JSON.parse(
  readFileSync(join(projectRoot, 'config/questions.json'), 'utf-8')
);

// Run validations
let hasErrors = false;

try {
  validateCausesConfig(causesConfig);
  console.log('✓ causes.json validated successfully');
} catch (error) {
  console.error('✗ causes.json validation failed:');
  console.error(error.message);
  hasErrors = true;
}

try {
  validateQuestionsConfig(questionsConfig, causesConfig);
  console.log('✓ questions.json validated successfully');
} catch (error) {
  console.error('✗ questions.json validation failed:');
  console.error(error.message);
  hasErrors = true;
}

if (hasErrors) {
  process.exit(1);
}

console.log('\nAll config files validated successfully!');
