/**
 * Tests for diminishing returns functionality in calculations.js
 */

import { describe, it, expect } from 'vitest';
import {
  calculateMaxEV,
  calculateMergedFavorites,
  calculateVarianceVoting,
  optimalAllocationAnalytical,
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
// MaxEV WITH DIMINISHING RETURNS
// =============================================================================

describe('calculateMaxEV with diminishing returns', () => {
  it('with none: winner-take-all', () => {
    const result = calculateMaxEV(ghFavoringCredences, {
      causes: testCauses,
      dimensions: testDimensions,
      diminishingReturns: 'none',
    });

    // Global health should get ~100%
    expect(result.globalHealth).toBeGreaterThan(99);
  });

  it('with sqrt: spreading across causes', () => {
    const result = calculateMaxEV(mixedCredences, {
      causes: testCauses,
      dimensions: testDimensions,
      diminishingReturns: 'sqrt',
    });

    // Multiple causes should get allocation
    const nonZeroCauses = Object.keys(testCauses).filter((k) => result[k] > 1);
    expect(nonZeroCauses.length).toBeGreaterThanOrEqual(2);
  });

  it('extreme produces more equal distribution than sqrt', () => {
    const sqrtResult = calculateMaxEV(mixedCredences, {
      causes: testCauses,
      dimensions: testDimensions,
      diminishingReturns: 'sqrt',
    });

    const extremeResult = calculateMaxEV(mixedCredences, {
      causes: testCauses,
      dimensions: testDimensions,
      diminishingReturns: 'extreme',
    });

    const sqrtRange =
      Math.max(sqrtResult.globalHealth, sqrtResult.animalWelfare, sqrtResult.gcr) -
      Math.min(sqrtResult.globalHealth, sqrtResult.animalWelfare, sqrtResult.gcr);

    const extremeRange =
      Math.max(extremeResult.globalHealth, extremeResult.animalWelfare, extremeResult.gcr) -
      Math.min(extremeResult.globalHealth, extremeResult.animalWelfare, extremeResult.gcr);

    expect(extremeRange).toBeLessThan(sqrtRange);
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
