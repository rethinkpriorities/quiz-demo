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
 * Calculate merged favorites allocation
 * Each worldview allocates its probability share to its favorite cause
 * @param {Object} animalCreds - Animal credences { equal, 10x, 100x }
 * @param {Object} futureCreds - Future credences { equal, 10x, 100x }
 * @param {Object} scaleCreds - Scale credences { equal, 10x, 100x }
 * @param {Object} certaintyCreds - Certainty credences { equal, 10x, 100x }
 * @returns {Object} Allocation percentages for each cause
 */
export const calculateMergedFavorites = (animalCreds, futureCreds, scaleCreds, certaintyCreds) => {
  const allocation = { globalHealth: 0, animalWelfare: 0, gcr: 0 };

  // Each worldview combination allocates its share
  Object.entries(animalCreds).forEach(([animalKey, animalProb]) => {
    Object.entries(futureCreds).forEach(([futureKey, futureProb]) => {
      Object.entries(scaleCreds).forEach(([scaleKey, scaleProb]) => {
        Object.entries(certaintyCreds).forEach(([certaintyKey, certaintyProb]) => {
          // This worldview gets (probability * 100) percent of the budget
          const worldviewShare =
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

          // Find favorite cause(s) for this worldview
          const maxValue = Math.max(...Object.values(values));
          const favoriteCauses = Object.keys(values).filter(
            (causeKey) => Math.abs(values[causeKey] - maxValue) < 0.0001
          );

          // Allocate worldview's share equally among favorites
          const allocPerCause = (worldviewShare * 100) / favoriteCauses.length;
          favoriteCauses.forEach((causeKey) => {
            allocation[causeKey] += allocPerCause;
          });
        });
      });
    });
  });

  return {
    globalHealth: allocation.globalHealth,
    animalWelfare: allocation.animalWelfare,
    gcr: allocation.gcr,
  };
};

/**
 * Calculate maximin allocation
 * Find allocation that maximizes the minimum utility any worldview receives
 * @param {Object} animalCreds - Animal credences { equal, 10x, 100x }
 * @param {Object} futureCreds - Future credences { equal, 10x, 100x }
 * @param {Object} scaleCreds - Scale credences { equal, 10x, 100x }
 * @param {Object} certaintyCreds - Certainty credences { equal, 10x, 100x }
 * @returns {Object} Allocation percentages for each cause
 */
export const calculateMaximin = (animalCreds, futureCreds, scaleCreds, certaintyCreds) => {
  // Generate candidate allocations (discrete options)
  const candidateAllocations = [
    { globalHealth: 100, animalWelfare: 0, gcr: 0 },
    { globalHealth: 0, animalWelfare: 100, gcr: 0 },
    { globalHealth: 0, animalWelfare: 0, gcr: 100 },
    { globalHealth: 50, animalWelfare: 50, gcr: 0 },
    { globalHealth: 50, animalWelfare: 0, gcr: 50 },
    { globalHealth: 0, animalWelfare: 50, gcr: 50 },
    { globalHealth: 34, animalWelfare: 33, gcr: 33 },
    { globalHealth: 60, animalWelfare: 20, gcr: 20 },
    { globalHealth: 20, animalWelfare: 60, gcr: 20 },
    { globalHealth: 20, animalWelfare: 20, gcr: 60 },
    { globalHealth: 70, animalWelfare: 15, gcr: 15 },
    { globalHealth: 15, animalWelfare: 70, gcr: 15 },
    { globalHealth: 15, animalWelfare: 15, gcr: 70 },
    { globalHealth: 80, animalWelfare: 10, gcr: 10 },
    { globalHealth: 10, animalWelfare: 80, gcr: 10 },
    { globalHealth: 10, animalWelfare: 10, gcr: 80 },
  ];

  let bestAllocation = candidateAllocations[0];
  let bestMinUtility = -Infinity;

  for (const allocation of candidateAllocations) {
    let minUtility = Infinity;

    // Check minimum utility across all worldviews
    Object.entries(animalCreds).forEach(([animalKey, animalProb]) => {
      Object.entries(futureCreds).forEach(([futureKey, futureProb]) => {
        Object.entries(scaleCreds).forEach(([scaleKey, scaleProb]) => {
          Object.entries(certaintyCreds).forEach(([certaintyKey, certaintyProb]) => {
            const probability =
              (animalProb / 100) * (futureProb / 100) * (scaleProb / 100) * (certaintyProb / 100);

            // Skip very unlikely worldviews
            if (probability < 0.001) return;

            const animalMult = ANIMAL_MULTIPLIERS[animalKey];
            const futureMult = FUTURE_MULTIPLIERS[futureKey];
            const scaleExp = SCALE_MULTIPLIERS[scaleKey];
            const certaintyMult = CERTAINTY_MULTIPLIERS[certaintyKey];

            // Calculate utility this worldview gets from the allocation
            let utility = 0;
            Object.entries(CAUSES).forEach(([causeKey, cause]) => {
              const causeValue = calculateCauseValue(
                cause,
                animalMult,
                futureMult,
                scaleExp,
                certaintyMult
              );
              utility += causeValue * (allocation[causeKey] / 100);
            });

            minUtility = Math.min(minUtility, utility);
          });
        });
      });
    });

    // Is this allocation better (higher minimum)?
    if (minUtility > bestMinUtility) {
      bestMinUtility = minUtility;
      bestAllocation = { ...allocation };
    }
  }

  return {
    globalHealth: bestAllocation.globalHealth,
    animalWelfare: bestAllocation.animalWelfare,
    gcr: bestAllocation.gcr,
  };
};

/**
 * Auto-balance credences to maintain 100% total
 * When one slider changes, proportionally adjusts others to keep sum at 100%
 * @param {string} changedKey - The key of the credence that was changed
 * @param {number} newValue - The new value for the changed credence (0-100)
 * @param {Object} credences - Current credence values { equal, 10x, 100x }
 * @param {Object} baseCredences - Optional: original credences when drag started (for maintaining ratios)
 * @param {string} lockedKey - Optional: key of the locked slider (will not be adjusted)
 * @returns {Object} New credence object with all values summing to 100
 */
export const adjustCredences = (
  changedKey,
  newValue,
  credences,
  baseCredences = null,
  lockedKey = null
) => {
  // If there's a locked slider, limit the max value for the changed slider
  // to ensure the remaining slider(s) don't go negative
  const lockedValue = lockedKey ? credences[lockedKey] : 0;
  const maxAllowedValue = 100 - lockedValue;

  // Clamp new value between 0 and the maximum allowed value
  newValue = Math.max(0, Math.min(maxAllowedValue, newValue));

  // Use baseCredences for ratio calculation if provided (during drag), otherwise use current
  // This preserves the ORIGINAL ratios between other sliders throughout the entire drag
  const referenceCredences = baseCredences || credences;

  // Filter out both the changed key AND the locked key
  const otherKeys = Object.keys(credences).filter((k) => k !== changedKey && k !== lockedKey);
  const referenceOtherSum = otherKeys.reduce((sum, k) => sum + referenceCredences[k], 0);

  // Calculate target sum for other sliders (excluding locked slider value)
  const targetOtherSum = 100 - newValue - lockedValue;

  const result = { [changedKey]: newValue };

  // Preserve locked slider value if exists
  if (lockedKey) {
    result[lockedKey] = credences[lockedKey];
  }

  // If other sliders are all at 0 in reference, distribute evenly
  if (referenceOtherSum === 0) {
    const each = Math.floor(targetOtherSum / otherKeys.length);
    let remainder = targetOtherSum - each * otherKeys.length;
    otherKeys.forEach((k, i) => {
      result[k] = each + (i < remainder ? 1 : 0);
    });
  } else {
    // Proportionally adjust other sliders based on ORIGINAL ratios
    let allocated = 0;
    otherKeys.forEach((k, i) => {
      if (i === otherKeys.length - 1) {
        // Last slider gets remainder to ensure exactly 100%
        result[k] = Math.max(0, targetOtherSum - allocated);
      } else {
        // KEY CHANGE: Use referenceCredences to calculate proportion
        // This preserves the starting ratio between B and C throughout the drag
        // NO ROUNDING during drag - keeps decimal precision for smooth animation
        const proportion = referenceCredences[k] / referenceOtherSum;
        const value = targetOtherSum * proportion;
        result[k] = Math.max(0, value);
        allocated += result[k];
      }
    });
  }

  return result;
};

/**
 * Round all credence values to integers and ensure they sum to 100
 * @param {Object} credences - Credence values that may have decimal places
 * @returns {Object} Rounded credences that sum to exactly 100
 */
export const roundCredences = (credences) => {
  const keys = Object.keys(credences);
  const rounded = {};
  let total = 0;

  // Round all but the last
  keys.slice(0, -1).forEach((k) => {
    rounded[k] = Math.round(credences[k]);
    total += rounded[k];
  });

  // Last key gets the remainder to ensure exactly 100
  rounded[keys[keys.length - 1]] = 100 - total;

  return rounded;
};
