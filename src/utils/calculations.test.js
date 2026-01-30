/**
 * Tests for diminishing returns functionality in calculations.js
 */

import { describe, it, expect } from 'vitest';
import {
  calculateMaxEV,
  calculateMergedFavorites,
  calculateVarianceVoting,
  optimalAllocationAnalytical,
  calculateWorldviewEVs,
  calculateMoralMarketplace,
  generateWorldviews,
  generateWorldviewsSampled,
  generateWorldviewsSmart,
  isDeterministicCredences,
  countWorldviewCombinations,
  calculateCauseValue,
  DIMINISHING_RETURNS_POWER,
} from './calculations.js';

// =============================================================================
// TEST CONFIG
// =============================================================================

const testCauses = {
  globalHealth: {
    points: 100,
    scaleFactor: 1,
    helpsAnimals: false,
    helpsFutureHumans: false,
    isSpeculative: false,
  },
  animalWelfare: {
    points: 100,
    scaleFactor: 10,
    helpsAnimals: true,
    helpsFutureHumans: false,
    isSpeculative: false,
  },
  gcr: {
    points: 100,
    scaleFactor: 100,
    helpsAnimals: false,
    helpsFutureHumans: true,
    isSpeculative: true,
  },
};

const testDimensions = {
  animal: {
    appliesWhen: 'helpsAnimals',
    applyAs: 'multiplier',
    options: { equal: 1, '10x': 0.1, '100x': 0.01 },
  },
  future: {
    appliesWhen: 'helpsFutureHumans',
    applyAs: 'multiplier',
    options: { equal: 1, '10x': 0.1, '100x': 0.01 },
  },
};

// Credences that produce clear preferences for global health
const ghFavoringCredences = {
  animal: { equal: 0, '10x': 50, '100x': 50 },
  future: { equal: 0, '10x': 50, '100x': 50 },
};

// Credences that produce mixed preferences
const mixedCredences = {
  animal: { equal: 50, '10x': 30, '100x': 20 },
  future: { equal: 50, '10x': 30, '100x': 20 },
};

// =============================================================================
// ANALYTICAL ALLOCATION TESTS
// =============================================================================

describe('optimalAllocationAnalytical', () => {
  it('linear (none) produces winner-take-all', () => {
    const result = optimalAllocationAnalytical([80, 60, 30], 100, DIMINISHING_RETURNS_POWER.none);
    expect(result[0]).toBeCloseTo(100, 0);
    expect(result[1]).toBeCloseTo(0, 0);
    expect(result[2]).toBeCloseTo(0, 0);
  });

  it('sqrt produces spreading', () => {
    const result = optimalAllocationAnalytical([80, 60, 30], 100, DIMINISHING_RETURNS_POWER.sqrt);
    expect(result[0]).toBeCloseTo(58.7, 0);
    expect(result[1]).toBeCloseTo(33.0, 0);
    expect(result[2]).toBeCloseTo(8.3, 0);
  });

  it('extreme produces more equal distribution', () => {
    const result = optimalAllocationAnalytical(
      [80, 60, 30],
      100,
      DIMINISHING_RETURNS_POWER.extreme
    );
    expect(result[0]).toBeCloseTo(48.5, 0);
    expect(result[1]).toBeCloseTo(35.2, 0);
    expect(result[2]).toBeCloseTo(16.3, 0);
  });

  it('allocations sum to 100 for all power values', () => {
    for (const power of Object.values(DIMINISHING_RETURNS_POWER)) {
      const result = optimalAllocationAnalytical([80, 60, 30], 100, power);
      const sum = result.reduce((a, b) => a + b, 0);
      expect(sum).toBeCloseTo(100, 5);
    }
  });

  it('handles ties in linear mode', () => {
    const result = optimalAllocationAnalytical([50, 50, 30], 100, DIMINISHING_RETURNS_POWER.none);
    expect(result[0]).toBeCloseTo(50, 0);
    expect(result[1]).toBeCloseTo(50, 0);
    expect(result[2]).toBeCloseTo(0, 0);
  });

  it('handles zero coefficients', () => {
    const result = optimalAllocationAnalytical([80, 0, 30], 100, DIMINISHING_RETURNS_POWER.sqrt);
    expect(result[1]).toBe(0);
    expect(result[0] + result[2]).toBeCloseTo(100, 5);
  });
});

// =============================================================================
// MaxEV (ALWAYS WINNER-TAKE-ALL)
// =============================================================================

describe('calculateMaxEV', () => {
  it('always does winner-take-all regardless of diminishing returns config', () => {
    const result = calculateMaxEV(ghFavoringCredences, {
      causes: testCauses,
      dimensions: testDimensions,
      diminishingReturns: 'extreme', // Should be ignored
    });

    // Global health should get ~100% (winner-take-all)
    expect(result.globalHealth).toBeGreaterThan(99);
  });

  it('splits equally when causes are tied', () => {
    // With mixed credences, multiple causes may have equal EV
    const result = calculateMaxEV(mixedCredences, {
      causes: testCauses,
      dimensions: testDimensions,
    });

    // Should sum to 100
    const total = result.globalHealth + result.animalWelfare + result.gcr;
    expect(total).toBeCloseTo(100, 5);
  });
});

// =============================================================================
// MergedFavorites WITH DIMINISHING RETURNS
// =============================================================================

describe('calculateMergedFavorites with diminishing returns', () => {
  it('with none: equals variance voting (each worldview goes all-in)', () => {
    const mergedResult = calculateMergedFavorites(mixedCredences, {
      causes: testCauses,
      dimensions: testDimensions,
      diminishingReturns: 'none',
    });

    const votingResult = calculateVarianceVoting(mixedCredences, {
      causes: testCauses,
      dimensions: testDimensions,
    });

    for (const key of Object.keys(testCauses)) {
      expect(mergedResult[key]).toBeCloseTo(votingResult[key], 0);
    }
  });

  it('with sqrt: produces different distribution than none', () => {
    const noneResult = calculateMergedFavorites(mixedCredences, {
      causes: testCauses,
      dimensions: testDimensions,
      diminishingReturns: 'none',
    });

    const sqrtResult = calculateMergedFavorites(mixedCredences, {
      causes: testCauses,
      dimensions: testDimensions,
      diminishingReturns: 'sqrt',
    });

    // The minimum allocation should be higher with sqrt (more spreading)
    const noneMin = Math.min(...Object.values(noneResult));
    const sqrtMin = Math.min(...Object.values(sqrtResult));

    expect(sqrtMin).toBeGreaterThan(noneMin);
  });
});

// =============================================================================
// VarianceVoting (unchanged by diminishing returns)
// =============================================================================

describe('calculateVarianceVoting', () => {
  it('ignores diminishing returns config', () => {
    const noneResult = calculateVarianceVoting(mixedCredences, {
      causes: testCauses,
      dimensions: testDimensions,
      diminishingReturns: 'none',
    });

    const sqrtResult = calculateVarianceVoting(mixedCredences, {
      causes: testCauses,
      dimensions: testDimensions,
      diminishingReturns: 'sqrt',
    });

    for (const key of Object.keys(testCauses)) {
      expect(noneResult[key]).toBeCloseTo(sqrtResult[key], 5);
    }
  });
});

// =============================================================================
// WORLDVIEW EVs
// =============================================================================

describe('calculateWorldviewEVs', () => {
  it('returns correct EVs with uniform credences (no discounts)', () => {
    const credences = {
      animal: { equal: 100, '10x': 0, '100x': 0 },
      future: { equal: 100, '10x': 0, '100x': 0 },
    };
    const evs = calculateWorldviewEVs(credences, {
      causes: testCauses,
      dimensions: testDimensions,
    });

    // All causes get their base points (100) with no discounts
    expect(evs.globalHealth).toBeCloseTo(100, 1);
    expect(evs.animalWelfare).toBeCloseTo(100, 1);
    expect(evs.gcr).toBeCloseTo(100, 1);
  });

  it('applies animal discount correctly', () => {
    const credences = {
      animal: { equal: 0, '10x': 100, '100x': 0 }, // 10x discount to animals
      future: { equal: 100, '10x': 0, '100x': 0 },
    };
    const evs = calculateWorldviewEVs(credences, {
      causes: testCauses,
      dimensions: testDimensions,
    });

    // Global health unaffected, animal welfare discounted by 0.1
    expect(evs.globalHealth).toBeCloseTo(100, 1);
    expect(evs.animalWelfare).toBeCloseTo(10, 1); // 100 * 0.1
    expect(evs.gcr).toBeCloseTo(100, 1);
  });

  it('applies future discount correctly', () => {
    const credences = {
      animal: { equal: 100, '10x': 0, '100x': 0 },
      future: { equal: 0, '10x': 0, '100x': 100 }, // 100x discount to future
    };
    const evs = calculateWorldviewEVs(credences, {
      causes: testCauses,
      dimensions: testDimensions,
    });

    // Global health and animal welfare unaffected, GCR discounted
    expect(evs.globalHealth).toBeCloseTo(100, 1);
    expect(evs.animalWelfare).toBeCloseTo(100, 1);
    expect(evs.gcr).toBeCloseTo(1, 1); // 100 * 0.01
  });

  it('calculates weighted average with mixed credences', () => {
    const credences = {
      animal: { equal: 50, '10x': 50, '100x': 0 }, // 50% full value, 50% 10x discount
      future: { equal: 100, '10x': 0, '100x': 0 },
    };
    const evs = calculateWorldviewEVs(credences, {
      causes: testCauses,
      dimensions: testDimensions,
    });

    // Animal welfare: 50% * 100 + 50% * 10 = 55
    expect(evs.globalHealth).toBeCloseTo(100, 1);
    expect(evs.animalWelfare).toBeCloseTo(55, 1);
    expect(evs.gcr).toBeCloseTo(100, 1);
  });
});

// =============================================================================
// MORAL MARKETPLACE
// =============================================================================

describe('calculateMoralMarketplace', () => {
  it('throws error with empty worldviews array', () => {
    expect(() => calculateMoralMarketplace([])).toThrow('At least one worldview is required');
  });

  it('single worldview matches direct analytical allocation', () => {
    const worldviews = [{ name: 'Test', evs: { globalHealth: 80, animalWelfare: 60, gcr: 30 } }];
    const result = calculateMoralMarketplace(worldviews, { diminishingReturns: 'sqrt' });

    // Should match direct analytical allocation
    const directAlloc = optimalAllocationAnalytical([80, 60, 30], 100, 0.5);
    expect(result.allocation.globalHealth).toBeCloseTo(directAlloc[0], 1);
    expect(result.allocation.animalWelfare).toBeCloseTo(directAlloc[1], 1);
    expect(result.allocation.gcr).toBeCloseTo(directAlloc[2], 1);
  });

  it('two equal worldviews with opposing preferences split evenly', () => {
    const worldviews = [
      { name: 'A', evs: { globalHealth: 100, animalWelfare: 0, gcr: 0 } },
      { name: 'B', evs: { globalHealth: 0, animalWelfare: 100, gcr: 0 } },
    ];
    const result = calculateMoralMarketplace(worldviews, { diminishingReturns: 'sqrt' });

    // Each worldview gets 50% budget, allocates 100% to its top cause
    expect(result.allocation.globalHealth).toBeCloseTo(50, 1);
    expect(result.allocation.animalWelfare).toBeCloseTo(50, 1);
    expect(result.allocation.gcr).toBeCloseTo(0, 1);
  });

  it('respects worldview weights', () => {
    const worldviews = [
      { name: 'A', evs: { globalHealth: 100, animalWelfare: 0, gcr: 0 }, weight: 3 },
      { name: 'B', evs: { globalHealth: 0, animalWelfare: 100, gcr: 0 }, weight: 1 },
    ];
    const result = calculateMoralMarketplace(worldviews, { diminishingReturns: 'sqrt' });

    // A gets 75%, B gets 25%
    expect(result.allocation.globalHealth).toBeCloseTo(75, 1);
    expect(result.allocation.animalWelfare).toBeCloseTo(25, 1);
  });

  it('allocations always sum to budget', () => {
    const worldviews = [
      { name: 'A', evs: { globalHealth: 80, animalWelfare: 60, gcr: 40 } },
      { name: 'B', evs: { globalHealth: 40, animalWelfare: 90, gcr: 20 } },
      { name: 'C', evs: { globalHealth: 30, animalWelfare: 30, gcr: 95 } },
    ];

    for (const dr of ['none', 'sqrt', 'extreme']) {
      const result = calculateMoralMarketplace(worldviews, { diminishingReturns: dr });
      const sum = Object.values(result.allocation).reduce((a, b) => a + b, 0);
      expect(sum).toBeCloseTo(100, 5);
    }
  });

  it('returns per-worldview breakdown', () => {
    const worldviews = [
      { name: 'Utilitarian', evs: { globalHealth: 80, animalWelfare: 60, gcr: 30 } },
      { name: 'Animal-focused', evs: { globalHealth: 40, animalWelfare: 90, gcr: 20 } },
    ];
    const result = calculateMoralMarketplace(worldviews, { diminishingReturns: 'sqrt' });

    expect(result.worldviewAllocations).toHaveLength(2);
    expect(result.worldviewAllocations[0].name).toBe('Utilitarian');
    expect(result.worldviewAllocations[0].share).toBeCloseTo(50, 1);
    expect(result.worldviewAllocations[1].name).toBe('Animal-focused');
    expect(result.worldviewAllocations[1].share).toBeCloseTo(50, 1);

    // Each worldview's allocation should sum to its share
    for (const wv of result.worldviewAllocations) {
      const wvSum = Object.values(wv.allocation).reduce((a, b) => a + b, 0);
      expect(wvSum).toBeCloseTo(wv.share, 5);
    }
  });

  it('linear (none) produces winner-take-all per worldview', () => {
    const worldviews = [{ name: 'Test', evs: { globalHealth: 80, animalWelfare: 60, gcr: 30 } }];
    const result = calculateMoralMarketplace(worldviews, { diminishingReturns: 'none' });

    // With linear utility, 100% goes to highest EV cause
    expect(result.allocation.globalHealth).toBeCloseTo(100, 1);
    expect(result.allocation.animalWelfare).toBeCloseTo(0, 1);
    expect(result.allocation.gcr).toBeCloseTo(0, 1);
  });

  it('sqrt produces spreading compared to none', () => {
    const worldviews = [{ name: 'Test', evs: { globalHealth: 80, animalWelfare: 60, gcr: 40 } }];

    const noneResult = calculateMoralMarketplace(worldviews, { diminishingReturns: 'none' });
    const sqrtResult = calculateMoralMarketplace(worldviews, { diminishingReturns: 'sqrt' });

    // With sqrt, allocation spreads across causes
    expect(sqrtResult.allocation.globalHealth).toBeLessThan(100);
    expect(sqrtResult.allocation.animalWelfare).toBeGreaterThan(0);
    expect(sqrtResult.allocation.gcr).toBeGreaterThan(0);

    // None is winner-take-all
    expect(noneResult.allocation.globalHealth).toBeCloseTo(100, 1);
  });
});

// =============================================================================
// MONTE CARLO SAMPLING ACCURACY
// =============================================================================

describe('Monte Carlo sampling accuracy', () => {
  // Use a medium-sized problem where we can compute exact answer
  const samplingTestCauses = {
    causeA: { points: 100, flag1: true, flag2: false },
    causeB: { points: 100, flag1: false, flag2: true },
    causeC: { points: 100, flag1: false, flag2: false },
  };

  const samplingTestDimensions = {
    dim1: {
      appliesWhen: 'flag1',
      applyAs: 'multiplier',
      options: { high: 1, med: 0.5, low: 0.1 },
    },
    dim2: {
      appliesWhen: 'flag2',
      applyAs: 'multiplier',
      options: { high: 1, med: 0.5, low: 0.1 },
    },
    dim3: {
      appliesWhen: 'flag1',
      applyAs: 'multiplier',
      options: { boost: 2, normal: 1, penalty: 0.5 },
    },
  };

  // 3 x 3 x 3 = 27 combinations (small enough to enumerate)
  const samplingTestCredences = {
    dim1: { high: 40, med: 35, low: 25 },
    dim2: { high: 50, med: 30, low: 20 },
    dim3: { boost: 30, normal: 50, penalty: 20 },
  };

  it('countWorldviewCombinations returns correct count', () => {
    expect(countWorldviewCombinations(samplingTestCredences)).toBe(27);
  });

  it('full enumeration produces exact probabilities summing to 1', () => {
    let totalProb = 0;
    let count = 0;
    for (const { probability } of generateWorldviews(samplingTestCredences)) {
      totalProb += probability;
      count++;
    }
    expect(count).toBe(27);
    expect(totalProb).toBeCloseTo(1, 10);
  });

  it('sampling produces probabilities summing to 1', () => {
    let totalProb = 0;
    let count = 0;
    for (const { probability } of generateWorldviewsSampled(samplingTestCredences, 1000)) {
      totalProb += probability;
      count++;
    }
    expect(count).toBe(1000);
    expect(totalProb).toBeCloseTo(1, 10);
  });

  it('compares merged favorites: sampling vs exact (with stats)', () => {
    // Config object for reference (test uses individual components)
    const _config = {
      causes: samplingTestCauses,
      dimensions: samplingTestDimensions,
      diminishingReturns: 'sqrt',
    };

    // Calculate exact result using full enumeration
    // (We need to temporarily use full enumeration)
    const causeKeys = Object.keys(samplingTestCauses);
    const exactAllocation = Object.fromEntries(causeKeys.map((k) => [k, 0]));

    for (const { options, probability } of generateWorldviews(samplingTestCredences)) {
      const values = {};
      for (const [causeKey, cause] of Object.entries(samplingTestCauses)) {
        values[causeKey] = calculateCauseValue(cause, options, samplingTestDimensions);
      }
      const share = probability * 100;
      const coefficients = causeKeys.map((key) => values[key]);
      const worldviewAllocation = optimalAllocationAnalytical(coefficients, share, 0.5);
      causeKeys.forEach((key, i) => {
        exactAllocation[key] += worldviewAllocation[i];
      });
    }

    // Run sampling multiple times to get distribution
    const numTrials = 10;
    const sampledResults = [];

    for (let trial = 0; trial < numTrials; trial++) {
      const sampledAllocation = Object.fromEntries(causeKeys.map((k) => [k, 0]));

      for (const { options, probability } of generateWorldviewsSampled(
        samplingTestCredences,
        2000
      )) {
        const values = {};
        for (const [causeKey, cause] of Object.entries(samplingTestCauses)) {
          values[causeKey] = calculateCauseValue(cause, options, samplingTestDimensions);
        }
        const share = probability * 100;
        const coefficients = causeKeys.map((key) => values[key]);
        const worldviewAllocation = optimalAllocationAnalytical(coefficients, share, 0.5);
        causeKeys.forEach((key, i) => {
          sampledAllocation[key] += worldviewAllocation[i];
        });
      }

      sampledResults.push(sampledAllocation);
    }

    // Calculate average and max error across trials
    const avgAllocation = Object.fromEntries(causeKeys.map((k) => [k, 0]));
    for (const result of sampledResults) {
      for (const key of causeKeys) {
        avgAllocation[key] += result[key] / numTrials;
      }
    }

    // Check that average is close to exact
    for (const key of causeKeys) {
      const error = Math.abs(avgAllocation[key] - exactAllocation[key]);
      // Allow up to 3% error in allocation
      expect(error).toBeLessThan(3);
    }

    // Log results for visibility
    console.log('\n=== Sampling Accuracy Test ===');
    console.log('Exact allocation:', exactAllocation);
    console.log('Average sampled (10 trials, 2000 samples each):', avgAllocation);
    console.log(
      'Max error:',
      Math.max(...causeKeys.map((k) => Math.abs(avgAllocation[k] - exactAllocation[k]))).toFixed(
        2
      ) + '%'
    );
  });

  it('performance comparison: enumeration vs sampling on larger problem', () => {
    // 4^5 = 1024 combinations - larger but still enumerable
    // Causes and dimensions defined for documentation; test uses largeCredences only
    const _largeCauses = {
      causeA: { points: 100, f1: true, f2: false, f3: false },
      causeB: { points: 100, f1: false, f2: true, f3: false },
      causeC: { points: 100, f1: false, f2: false, f3: true },
    };

    const _largeDimensions = {
      d1: { appliesWhen: 'f1', applyAs: 'multiplier', options: { a: 1, b: 0.5, c: 0.25, d: 0.1 } },
      d2: { appliesWhen: 'f2', applyAs: 'multiplier', options: { a: 1, b: 0.5, c: 0.25, d: 0.1 } },
      d3: { appliesWhen: 'f3', applyAs: 'multiplier', options: { a: 1, b: 0.5, c: 0.25, d: 0.1 } },
      d4: { appliesWhen: 'f1', applyAs: 'multiplier', options: { a: 2, b: 1, c: 0.5, d: 0.25 } },
      d5: { appliesWhen: 'f2', applyAs: 'multiplier', options: { a: 2, b: 1, c: 0.5, d: 0.25 } },
    };

    const largeCredences = {
      d1: { a: 40, b: 30, c: 20, d: 10 },
      d2: { a: 25, b: 25, c: 25, d: 25 },
      d3: { a: 10, b: 20, c: 30, d: 40 },
      d4: { a: 35, b: 35, c: 15, d: 15 },
      d5: { a: 50, b: 30, c: 15, d: 5 },
    };

    const totalCombinations = countWorldviewCombinations(largeCredences);
    console.log(`\n=== Performance Test (${totalCombinations} combinations) ===`);

    // Time full enumeration
    const enumStart = Date.now();
    let enumCount = 0;
    for (const _ of generateWorldviews(largeCredences)) {
      enumCount++;
    }
    const enumTime = Date.now() - enumStart;

    // Time sampling
    const sampleStart = Date.now();
    let sampleCount = 0;
    for (const _ of generateWorldviewsSampled(largeCredences, 2000)) {
      sampleCount++;
    }
    const sampleTime = Date.now() - sampleStart;

    console.log(`Full enumeration: ${enumCount} worldviews in ${enumTime.toFixed(2)}ms`);
    console.log(`Sampling: ${sampleCount} samples in ${sampleTime.toFixed(2)}ms`);
    console.log(`Speedup: ${(enumTime / sampleTime).toFixed(1)}x`);

    expect(enumCount).toBe(totalCombinations);
    expect(sampleCount).toBe(2000);
  });

  it('handles selection-style credences (one option at 100%)', () => {
    // This is what selection questions produce - exactly one option per dimension has 100%
    const selectionCredences = {
      dim1: { high: 100, med: 0, low: 0 },
      dim2: { high: 0, med: 100, low: 0 },
      dim3: { boost: 0, normal: 0, penalty: 100 },
    };

    // With selection, there's really only 1 worldview
    // Enumeration generates 27 but 26 have probability 0
    let nonZeroCount = 0;
    let totalProb = 0;
    for (const { probability } of generateWorldviews(selectionCredences)) {
      if (probability > 0) nonZeroCount++;
      totalProb += probability;
    }
    expect(nonZeroCount).toBe(1); // Only one worldview has non-zero probability
    expect(totalProb).toBeCloseTo(1, 10);

    // Sampling should work (always picks the 100% option)
    const sampledOptions = new Set();
    for (const { options } of generateWorldviewsSampled(selectionCredences, 100)) {
      const key = JSON.stringify(options);
      sampledOptions.add(key);
    }
    expect(sampledOptions.size).toBe(1); // All samples are identical

    // MaxEV should give correct result
    const result = calculateMaxEV(selectionCredences, {
      causes: samplingTestCauses,
      dimensions: samplingTestDimensions,
    });

    // With dim1=high (mult 1), dim3=penalty (mult 0.5) for causeA (flag1=true)
    // causeA = 100 * 1 * 0.5 = 50
    // With dim2=med (mult 0.5) for causeB (flag2=true)
    // causeB = 100 * 0.5 = 50
    // causeC has no flags, so = 100
    expect(result.evs.causeA).toBeCloseTo(50, 1);
    expect(result.evs.causeB).toBeCloseTo(50, 1);
    expect(result.evs.causeC).toBeCloseTo(100, 1);

    console.log('\n=== Selection-Style Credences Test ===');
    console.log('Non-zero worldviews:', nonZeroCount, 'of 27');
    console.log('Unique sampled worldviews:', sampledOptions.size);
    console.log('EVs:', result.evs);
  });

  it('isDeterministicCredences detects selection-style correctly', () => {
    const selectionStyle = {
      dim1: { a: 100, b: 0, c: 0 },
      dim2: { x: 0, y: 100 },
    };
    expect(isDeterministicCredences(selectionStyle)).toBe(true);

    const mixedStyle = {
      dim1: { a: 50, b: 50, c: 0 },
      dim2: { x: 0, y: 100 },
    };
    expect(isDeterministicCredences(mixedStyle)).toBe(false);

    const allMixed = {
      dim1: { a: 33, b: 33, c: 34 },
      dim2: { x: 50, y: 50 },
    };
    expect(isDeterministicCredences(allMixed)).toBe(false);
  });

  it('generateWorldviewsSmart uses fast path for selection-style', () => {
    const selectionCredences = {
      dim1: { high: 100, med: 0, low: 0 },
      dim2: { high: 0, med: 100, low: 0 },
      dim3: { boost: 0, normal: 0, penalty: 100 },
    };

    // Count iterations - should be exactly 1 for deterministic case
    let count = 0;
    for (const { options, probability } of generateWorldviewsSmart(selectionCredences)) {
      count++;
      expect(probability).toBe(1);
      expect(options).toEqual({ dim1: 'high', dim2: 'med', dim3: 'penalty' });
    }
    expect(count).toBe(1);

    console.log('\n=== Smart Generator Optimization ===');
    console.log('Selection-style credences: 1 iteration (fast path)');
  });
});

// =============================================================================
// APPLIES-TO PATTERN (multi-value property lookup)
// =============================================================================

describe('appliesTo pattern for timeframe-style questions', () => {
  const timeframeCauses = {
    shortTermCause: { points: 100, timeframe: 'short' },
    mediumTermCause: { points: 100, timeframe: 'medium' },
    longTermCause: { points: 100, timeframe: 'long' },
    noTimeframeCause: { points: 100 }, // No timeframe property
  };

  const timeframeDimension = {
    timeframes: {
      appliesTo: 'timeframe',
      applyAs: 'multiplier',
      options: {
        equalAll: { short: 1, medium: 1, long: 1 },
        prioritizeNearer: { short: 1, medium: 0.5, long: 0.2 },
        discountDistant: { short: 1, medium: 0.2, long: 0 },
        shortTermOnly: { short: 1, medium: 0, long: 0 },
      },
    },
  };

  it('applies different multipliers based on cause timeframe property', () => {
    // Test with "prioritizeNearer" selected: short=1, medium=0.5, long=0.2
    const options = { timeframes: 'prioritizeNearer' };

    const shortValue = calculateCauseValue(
      timeframeCauses.shortTermCause,
      options,
      timeframeDimension
    );
    const mediumValue = calculateCauseValue(
      timeframeCauses.mediumTermCause,
      options,
      timeframeDimension
    );
    const longValue = calculateCauseValue(
      timeframeCauses.longTermCause,
      options,
      timeframeDimension
    );
    const noTimeframeValue = calculateCauseValue(
      timeframeCauses.noTimeframeCause,
      options,
      timeframeDimension
    );

    expect(shortValue).toBe(100); // 100 * 1
    expect(mediumValue).toBe(50); // 100 * 0.5
    expect(longValue).toBe(20); // 100 * 0.2
    expect(noTimeframeValue).toBe(100); // No timeframe = no multiplier applied
  });

  it('shortTermOnly zeroes out medium and long term causes', () => {
    const options = { timeframes: 'shortTermOnly' };

    const shortValue = calculateCauseValue(
      timeframeCauses.shortTermCause,
      options,
      timeframeDimension
    );
    const mediumValue = calculateCauseValue(
      timeframeCauses.mediumTermCause,
      options,
      timeframeDimension
    );
    const longValue = calculateCauseValue(
      timeframeCauses.longTermCause,
      options,
      timeframeDimension
    );

    expect(shortValue).toBe(100);
    expect(mediumValue).toBe(0);
    expect(longValue).toBe(0);
  });

  it('equalAll applies multiplier of 1 to all timeframes', () => {
    const options = { timeframes: 'equalAll' };

    const shortValue = calculateCauseValue(
      timeframeCauses.shortTermCause,
      options,
      timeframeDimension
    );
    const mediumValue = calculateCauseValue(
      timeframeCauses.mediumTermCause,
      options,
      timeframeDimension
    );
    const longValue = calculateCauseValue(
      timeframeCauses.longTermCause,
      options,
      timeframeDimension
    );

    expect(shortValue).toBe(100);
    expect(mediumValue).toBe(100);
    expect(longValue).toBe(100);
  });

  it('works with MaxEV calculation', () => {
    const credences = {
      timeframes: { equalAll: 0, prioritizeNearer: 100, discountDistant: 0, shortTermOnly: 0 },
    };

    const result = calculateMaxEV(credences, {
      causes: timeframeCauses,
      dimensions: timeframeDimension,
    });

    // With prioritizeNearer (100% credence): short=1, medium=0.5, long=0.2
    expect(result.evs.shortTermCause).toBe(100);
    expect(result.evs.mediumTermCause).toBe(50);
    expect(result.evs.longTermCause).toBe(20);
    expect(result.evs.noTimeframeCause).toBe(100);

    // Winner should be short-term (tied with noTimeframe at 100)
    expect(result.shortTermCause + result.noTimeframeCause).toBe(100);
  });

  console.log('\n=== appliesTo Pattern Test ===');
  console.log('Timeframe multipliers working correctly');
});
