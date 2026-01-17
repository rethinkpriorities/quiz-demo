/**
 * Calculation Utilities for Moral Parliament Quiz
 *
 * This module contains all calculation logic for determining optimal resource allocation
 * based on moral credences (confidence levels in different ethical positions).
 *
 * ALGORITHM OVERVIEW:
 *
 * 1. Worldview Combinations:
 *    With 3 options × 4 questions = 81 total worldview combinations
 *    Each combination has a probability = product of individual credences
 *
 * 2. Cause Values:
 *    Each cause starts with base points (100)
 *    - Global Health: baseline (no multipliers applied)
 *    - Animal Welfare: affected by animal and scale multipliers
 *    - GCR (Future): affected by future, scale, and certainty multipliers
 *
 * 3. Max Expected Value (MaxEV):
 *    For each cause, calculate EV across all worldview combinations:
 *      EV(cause) = Σ [P(worldview) × value(cause, worldview)]
 *    Allocate 100% to the cause with highest EV
 *
 * 4. Variance Voting (Moral Parliament):
 *    Each worldview votes for its preferred cause(s)
 *    Vote weight = P(worldview)
 *    If multiple causes tied for best in a worldview, vote splits equally
 *    Final allocation = proportion of total votes each cause received
 *
 * All functions are pure (no side effects) and fully testable.
 */

import {
  CAUSES,
  ANIMAL_MULTIPLIERS,
  FUTURE_MULTIPLIERS,
  SCALE_MULTIPLIERS,
  CERTAINTY_MULTIPLIERS,
} from '../constants/config.js';

/**
 * Calculate the value of a cause given all four credence dimensions
 * @param {Object} cause - Cause object from CAUSES
 * @param {number} animalMult - Multiplier from ANIMAL_MULTIPLIERS
 * @param {number} futureMult - Multiplier from FUTURE_MULTIPLIERS
 * @param {number} scaleExp - Exponent from SCALE_MULTIPLIERS (0, 0.5, or 1)
 * @param {number} certaintyMult - Multiplier from CERTAINTY_MULTIPLIERS
 * @returns {number} The calculated value for the cause
 */
export const calculateCauseValue = (cause, animalMult, futureMult, scaleExp, certaintyMult) => {
  let value = cause.points;

  // Apply animal discount (if cause helps animals)
  if (cause.helpsAnimals) {
    value *= animalMult;
  }

  // Apply future discount (if cause helps future humans)
  if (cause.helpsFutureHumans) {
    value *= futureMult;
  }

  // Apply scale boost (all causes, based on their scaleFactor)
  // scaleFactor^exponent: when exp=0, all get 1; when exp=1, full scaleFactor
  value *= Math.pow(cause.scaleFactor, scaleExp);

  // Apply certainty discount (if cause is speculative)
  if (cause.isSpeculative) {
    value *= certaintyMult;
  }

  return value;
};

/**
 * Calculate max expected value allocation across all causes
 * Determines which cause has highest EV and allocates 100% to it
 * @param {Object} animalCreds - Animal credences { equal, 10x, 100x }
 * @param {Object} futureCreds - Future credences { equal, 10x, 100x }
 * @param {Object} scaleCreds - Scale credences { equal, 10x, 100x }
 * @param {Object} certaintyCreds - Certainty credences { equal, 10x, 100x }
 * @returns {Object} Allocation percentages and EVs for each cause
 */
export const calculateMaxEV = (animalCreds, futureCreds, scaleCreds, certaintyCreds) => {
  const causeEVs = {};

  // Calculate expected value for each cause across all worldview combinations
  Object.entries(CAUSES).forEach(([causeKey, cause]) => {
    let ev = 0;

    Object.entries(animalCreds).forEach(([animalKey, animalProb]) => {
      Object.entries(futureCreds).forEach(([futureKey, futureProb]) => {
        Object.entries(scaleCreds).forEach(([scaleKey, scaleProb]) => {
          Object.entries(certaintyCreds).forEach(([certaintyKey, certaintyProb]) => {
            const animalMult = ANIMAL_MULTIPLIERS[animalKey];
            const futureMult = FUTURE_MULTIPLIERS[futureKey];
            const scaleExp = SCALE_MULTIPLIERS[scaleKey];
            const certaintyMult = CERTAINTY_MULTIPLIERS[certaintyKey];

            const worldviewProb =
              (animalProb / 100) * (futureProb / 100) * (scaleProb / 100) * (certaintyProb / 100);

            const causeValue = calculateCauseValue(
              cause,
              animalMult,
              futureMult,
              scaleExp,
              certaintyMult
            );
            ev += worldviewProb * causeValue;
          });
        });
      });
    });

    causeEVs[causeKey] = ev;
  });

  // Find cause with maximum EV
  const maxEVCause = Object.keys(causeEVs).reduce((a, b) => (causeEVs[a] > causeEVs[b] ? a : b));

  return {
    globalHealth: maxEVCause === 'globalHealth' ? 100 : 0,
    animalWelfare: maxEVCause === 'animalWelfare' ? 100 : 0,
    gcr: maxEVCause === 'gcr' ? 100 : 0,
    evs: causeEVs,
  };
};

/**
 * Calculate variance voting allocation (moral parliament approach)
 * Each worldview votes for its preferred cause(s), votes weighted by credence
 * @param {Object} animalCreds - Animal credences { equal, 10x, 100x }
 * @param {Object} futureCreds - Future credences { equal, 10x, 100x }
 * @param {Object} scaleCreds - Scale credences { equal, 10x, 100x }
 * @param {Object} certaintyCreds - Certainty credences { equal, 10x, 100x }
 * @returns {Object} Allocation percentages for each cause
 */
export const calculateVarianceVoting = (animalCreds, futureCreds, scaleCreds, certaintyCreds) => {
  const votes = { globalHealth: 0, animalWelfare: 0, gcr: 0 };

  // Each worldview combination casts votes
  Object.entries(animalCreds).forEach(([animalKey, animalProb]) => {
    Object.entries(futureCreds).forEach(([futureKey, futureProb]) => {
      Object.entries(scaleCreds).forEach(([scaleKey, scaleProb]) => {
        Object.entries(certaintyCreds).forEach(([certaintyKey, certaintyProb]) => {
          const worldviewWeight =
            (animalProb / 100) * (futureProb / 100) * (scaleProb / 100) * (certaintyProb / 100);

          const animalMult = ANIMAL_MULTIPLIERS[animalKey];
          const futureMult = FUTURE_MULTIPLIERS[futureKey];
          const scaleExp = SCALE_MULTIPLIERS[scaleKey];
          const certaintyMult = CERTAINTY_MULTIPLIERS[certaintyKey];

          // Calculate values for all causes in this worldview
          const values = {};
          Object.entries(CAUSES).forEach(([causeKey, cause]) => {
            values[causeKey] = calculateCauseValue(
              cause,
              animalMult,
              futureMult,
              scaleExp,
              certaintyMult
            );
          });

          // Find max value and identify tied causes
          const maxValue = Math.max(...Object.values(values));
          const tiedCauses = Object.keys(values).filter(
            (causeKey) => Math.abs(values[causeKey] - maxValue) < 0.0001
          );

          // Split vote equally among tied causes
          const votePerCause = worldviewWeight / tiedCauses.length;
          tiedCauses.forEach((causeKey) => {
            votes[causeKey] += votePerCause;
          });
        });
      });
    });
  });

  // Convert to percentages
  return {
    globalHealth: votes.globalHealth * 100,
    animalWelfare: votes.animalWelfare * 100,
    gcr: votes.gcr * 100,
  };
};

/**
 * Auto-balance credences to maintain 100% total
 * When one slider changes, proportionally adjusts others to keep sum at 100%
 * @param {string} changedKey - The key of the credence that was changed
 * @param {number} newValue - The new value for the changed credence (0-100)
 * @param {Object} credences - Current credence values { equal, 10x, 100x }
 * @returns {Object} New credence object with all values summing to 100
 */
export const adjustCredences = (changedKey, newValue, credences) => {
  // Clamp new value between 0 and 100
  newValue = Math.max(0, Math.min(100, newValue));

  const otherKeys = Object.keys(credences).filter((k) => k !== changedKey);
  const currentOtherSum = otherKeys.reduce((sum, k) => sum + credences[k], 0);
  const targetOtherSum = 100 - newValue;

  const result = { [changedKey]: newValue };

  // If other sliders are all at 0, distribute evenly
  if (currentOtherSum === 0) {
    const each = Math.floor(targetOtherSum / otherKeys.length);
    let remainder = targetOtherSum - each * otherKeys.length;
    otherKeys.forEach((k, i) => {
      result[k] = each + (i < remainder ? 1 : 0);
    });
  } else {
    // Proportionally adjust other sliders
    let allocated = 0;
    otherKeys.forEach((k, i) => {
      if (i === otherKeys.length - 1) {
        // Last slider gets remainder to ensure exactly 100%
        result[k] = Math.max(0, targetOtherSum - allocated);
      } else {
        const proportion = credences[k] / currentOtherSum;
        const value = Math.round(targetOtherSum * proportion);
        result[k] = Math.max(0, value);
        allocated += result[k];
      }
    });
  }

  return result;
};
