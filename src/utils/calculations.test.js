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
