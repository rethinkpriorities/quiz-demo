/**
 * Moral Marketplace calculation module.
 *
 * Adapted from import/calculation.js. Uses 25,600 precomputed worldview
 * combinations, effects matrices (6 time periods x 4 risk profiles),
 * per-project diminishing returns curves, and typed-array-optimized
 * parliament voting.
 *
 * Precomputation runs at module level (~27ms) and is cached as a singleton.
 */

import projectsConfig from '../../config/projects.json';
import questionsConfig from '../../config/questions.json';

const {
  projects: PROJECT_DATA,
  budget: TOTAL_BUDGET,
  incrementSize: INCREMENT_SIZE,
} = projectsConfig;

// =============================================================================
// QUESTION ORDER FOR MORAL MARKETPLACE
// =============================================================================

/**
 * The Moral Marketplace calculation requires questions in a specific order:
 * Q1=disability weights, Q2=income weights, Q3=animal weights,
 * Q4=invertebrate weights, Q5=timeframe discounts, Q6=risk profile, Q7=xrisk.
 *
 * This maps question IDs to their calculation position.
 */
const MARKETPLACE_QUESTION_ORDER = [
  'disability',
  'income',
  'animal',
  'invertebrate',
  'timeframes',
  'risk',
  'xrisk',
];

/**
 * Build ordered quiz option arrays from marketplaceValue fields on each option.
 * Returns an array of question mappings with their option values.
 */
function buildQuizOptions() {
  const questionsById = {};
  for (const question of questionsConfig.questions) {
    if (question.options) questionsById[question.id] = question;
  }

  const mappings = [];

  for (const questionId of MARKETPLACE_QUESTION_ORDER) {
    const question = questionsById[questionId];
    if (!question) continue;

    // Check that at least the first option has a marketplaceValue
    if (question.options[0].marketplaceValue === undefined) continue;

    const optionValues = question.options.map((opt) => opt.marketplaceValue);
    mappings.push({ questionId, optionValues });
  }

  return mappings;
}

const QUIZ_MAPPINGS = buildQuizOptions();
const QUIZ_OPTIONS = QUIZ_MAPPINGS.map((m) => m.optionValues);

// =============================================================================
// MORAL WEIGHTS FROM QUIZ ANSWERS
// =============================================================================

function buildMoralWeights(q1Daly, q2Income, q3ChickenMult, q4ShrimpMult) {
  const chickens = q1Daly * q3ChickenMult;
  const invertebrates = q1Daly * q4ShrimpMult;
  const fish = (invertebrates + chickens) / 2;

  return {
    human_life_years: 1.0,
    human_ylds: q1Daly,
    human_income_doublings: q2Income,
    chickens_birds: chickens,
    mammals: chickens,
    fish,
    shrimp: invertebrates,
    non_shrimp_invertebrates: invertebrates,
  };
}

// =============================================================================
// CALCULATOR FUNCTIONS
// =============================================================================

function calculateSingleEffect(effectData, moralWeight, discountFactors, riskProfile) {
  const values = effectData.values;
  let sum = 0;
  for (let t = 0; t < 6; t++) {
    sum += values[t][riskProfile] * discountFactors[t];
  }
  return moralWeight * sum;
}

function calculateProject(projectData, moralWeights, discountFactors, riskProfile) {
  let total = 0;
  for (const effectData of Object.values(projectData.effects)) {
    const mi = moralWeights[effectData.recipient_type] ?? 0;
    total += calculateSingleEffect(effectData, mi, discountFactors, riskProfile);
  }
  return total;
}

function calculateAllProjects(data, moralWeights, discountFactors, riskProfile) {
  const result = {};
  for (const [projectId, projectData] of Object.entries(data)) {
    result[projectId] = calculateProject(projectData, moralWeights, discountFactors, riskProfile);
  }
  return result;
}

function adjustForExtinctionRisk(projectValues, data, pExtinction) {
  const adjusted = {};
  for (const [projectId, value] of Object.entries(projectValues)) {
    if (data[projectId].tags.near_term_xrisk) {
      adjusted[projectId] = value;
    } else {
      adjusted[projectId] = value * (1 - pExtinction);
    }
  }
  return adjusted;
}

// =============================================================================
// DIMINISHING RETURNS
// =============================================================================

function getDiminishingReturnsFactor(data, projectId, currentFunding) {
  const idx = Math.floor(currentFunding / 10);
  const drArray = data[projectId].diminishing_returns;
  if (idx >= drArray.length) {
    return drArray[drArray.length - 1];
  }
  return drArray[idx];
}

// =============================================================================
// PRECOMPUTATION (runs once at module level)
// =============================================================================

function precomputeAllWorldviews(data = PROJECT_DATA) {
  if (QUIZ_OPTIONS.length < 7) {
    // Not enough questions configured (e.g., in test environment)
    return [];
  }
  const [q1Opts, q2Opts, q3Opts, q4Opts, q5Opts, q6Opts, q7Opts] = QUIZ_OPTIONS;
  const results = [];

  for (const q1 of q1Opts) {
    for (const q2 of q2Opts) {
      for (const q3 of q3Opts) {
        for (const q4 of q4Opts) {
          for (let q5Idx = 0; q5Idx < q5Opts.length; q5Idx++) {
            for (const q6 of q6Opts) {
              for (const q7 of q7Opts) {
                const moralWeights = buildMoralWeights(q1, q2, q3, q4);
                const discountFactors = q5Opts[q5Idx];
                const baseValues = calculateAllProjects(data, moralWeights, discountFactors, q6);
                const adjustedValues = adjustForExtinctionRisk(baseValues, data, q7);
                results.push({ project_values: adjustedValues });
              }
            }
          }
        }
      }
    }
  }

  return results;
}

// Lazy precomputation — runs on first call, cached as singleton
let _precomputedResults = null;
function getPrecomputedResults() {
  if (!_precomputedResults) {
    _precomputedResults = precomputeAllWorldviews();
  }
  return _precomputedResults;
}

// =============================================================================
// WORLDVIEW CREDENCES
// =============================================================================

function computeWorldviewCredences(credArrays) {
  const worldviews = [];
  let idx = 0;

  const [q1, q2, q3, q4, q5, q6, q7] = credArrays;

  for (let i1 = 0; i1 < q1.length; i1++) {
    for (let i2 = 0; i2 < q2.length; i2++) {
      for (let i3 = 0; i3 < q3.length; i3++) {
        for (let i4 = 0; i4 < q4.length; i4++) {
          for (let i5 = 0; i5 < q5.length; i5++) {
            for (let i6 = 0; i6 < q6.length; i6++) {
              for (let i7 = 0; i7 < q7.length; i7++) {
                const credence = q1[i1] * q2[i2] * q3[i3] * q4[i4] * q5[i5] * q6[i6] * q7[i7];
                if (credence > 0) {
                  worldviews.push({ result_idx: idx, credence });
                }
                idx++;
              }
            }
          }
        }
      }
    }
  }

  return worldviews;
}

// =============================================================================
// PACKED TYPED-ARRAY PARLIAMENT
// =============================================================================

function packForParliament(results, worldviews, data = PROJECT_DATA) {
  const projectIds = Object.keys(data);
  const numProjects = projectIds.length;
  const N = worldviews.length;

  const scoreMatrix = new Float64Array(N * numProjects);
  const credences = new Float64Array(N);

  for (let w = 0; w < N; w++) {
    const pv = results[worldviews[w].result_idx].project_values;
    credences[w] = worldviews[w].credence;
    const base = w * numProjects;
    for (let p = 0; p < numProjects; p++) {
      scoreMatrix[base + p] = pv[projectIds[p]];
    }
  }

  const drArrays = projectIds.map((pid) => {
    const src = data[pid].diminishing_returns;
    const arr = new Float64Array(src.length);
    arr.set(src);
    return arr;
  });

  return { scoreMatrix, credences, numActive: N, projectIds, drArrays };
}

function voteParliamentFast(data, funding, increment, { packed }) {
  const { scoreMatrix, credences, numActive, projectIds, drArrays } = packed;
  const numProjects = projectIds.length;

  const drFactors = new Float64Array(numProjects);
  for (let p = 0; p < numProjects; p++) {
    const idx = Math.floor(funding[projectIds[p]] / 10);
    const arr = drArrays[p];
    drFactors[p] = idx >= arr.length ? arr[arr.length - 1] : arr[idx];
  }

  const alloc = new Float64Array(numProjects);

  for (let w = 0; w < numActive; w++) {
    const base = w * numProjects;
    const share = credences[w] * increment;

    let bestP = 0;
    let bestVal = scoreMatrix[base] * drFactors[0];
    for (let p = 1; p < numProjects; p++) {
      const mv = scoreMatrix[base + p] * drFactors[p];
      if (mv > bestVal) {
        bestVal = mv;
        bestP = p;
      }
    }
    alloc[bestP] += share;
  }

  const allocations = {};
  for (let p = 0; p < numProjects; p++) {
    allocations[projectIds[p]] = alloc[p];
  }
  return allocations;
}

// =============================================================================
// BUDGET ALLOCATION LOOP
// =============================================================================

function allocateBudget(data, votingMethod, totalBudget, opts = {}) {
  const incrementSize = opts.incrementSize ?? INCREMENT_SIZE;

  const funding = {};
  for (const projectId of Object.keys(data)) funding[projectId] = 0;

  let remaining = totalBudget;

  while (remaining > 0) {
    const increment = Math.min(incrementSize, remaining);
    const allocations = votingMethod(data, funding, increment, opts);

    for (const projectId of Object.keys(data)) {
      funding[projectId] += allocations[projectId];
    }

    remaining -= increment;
  }

  return { funding };
}

// =============================================================================
// CREDENCE CONVERSION
// =============================================================================

/**
 * Convert quiz credences from { questionId: { optionKey: value } } format
 * to ordered arrays of floats summing to 1.0 for each question.
 *
 * @param {Object} credences - Quiz credences keyed by question ID
 * @returns {Array} Array of 7 credence arrays, ordered by questionIndex
 */
function convertCredences(credences) {
  const credArrays = [];

  for (const mapping of QUIZ_MAPPINGS) {
    const questionCredences = credences[mapping.questionId];
    if (!questionCredences) {
      // Default: equal split
      const n = mapping.optionValues.length;
      credArrays.push(new Array(n).fill(1 / n));
      continue;
    }

    // Find the question config to get option order
    const question = questionsConfig.questions.find((q) => q.id === mapping.questionId);
    if (!question || !question.options) {
      const n = mapping.optionValues.length;
      credArrays.push(new Array(n).fill(1 / n));
      continue;
    }

    // Build array ordered by options array in questions.json
    const arr = question.options.map((opt) => {
      const val = questionCredences[opt.key] ?? 0;
      return val / 100; // Convert from percentage to fraction
    });

    credArrays.push(arr);
  }

  return credArrays;
}

// =============================================================================
// PUBLIC API
// =============================================================================

/**
 * Calculate Moral Marketplace allocation from quiz credences.
 *
 * @param {Object} credences - Quiz credences { questionId: { optionKey: value } }
 * @param {Object} [options] - Optional configuration
 * @param {number} [options.budget] - Budget in dollars (converted to $M internally).
 *   Defaults to TOTAL_BUDGET from projects.json.
 * @returns {Object} Allocation percentages { project_id: percentage }
 */
export function calculateMoralMarketplace(credences, options = {}) {
  if (QUIZ_MAPPINGS.length < 7) {
    // Not enough questions configured — return empty allocation
    const result = {};
    for (const projectId of Object.keys(PROJECT_DATA)) {
      result[projectId] = 0;
    }
    return result;
  }

  // Convert UI budget (dollars) to $M scale used by the calculation
  const budget = options.budget ? options.budget / 1_000_000 : TOTAL_BUDGET;

  // Convert credences to ordered arrays
  const credArrays = convertCredences(credences);

  // Compute worldview credences (which of the 25,600 are active and their weights)
  const worldviews = computeWorldviewCredences(credArrays);

  // Pack into typed arrays for fast parliament voting
  const packed = packForParliament(getPrecomputedResults(), worldviews, PROJECT_DATA);

  // Run budget allocation with parliament voting
  const { funding } = allocateBudget(PROJECT_DATA, voteParliamentFast, budget, {
    packed,
    incrementSize: INCREMENT_SIZE,
  });

  // Convert dollar funding to percentages
  const result = {};
  for (const [projectId, amount] of Object.entries(funding)) {
    result[projectId] = (amount / budget) * 100;
  }

  return result;
}
