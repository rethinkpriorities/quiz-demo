import { describe, it, expect } from 'vitest';
import { calculateMoralMarketplace } from './moralMarketplace.js';
import projectsConfig from '../../config/projects.json';

/**
 * Reference implementation — inlined from import/calculation.js
 * to verify the new module produces identical outputs.
 */
const DATA = projectsConfig.projects;
const BUDGET = projectsConfig.budget;

const Q1 = [0, 0.003, 0.0172, 0.086];
const Q2 = [0, 0.0017, 0.0086, 0.0172];
const Q3 = [1, 0.1, 0.01, 0.001, 0];
const Q4 = [1, 0.01, 0.001, 0.0001, 0];
const Q5 = [
  [1, 1, 0, 0, 0, 0],
  [1, 1, 0.2, 0.2, 0, 0],
  [1, 1, 0.5, 0.5, 0.2, 0.2],
  [1, 1, 1, 1, 1, 1],
];
const Q6 = [0, 1, 2, 3];
const Q7 = [0.0, 0.1, 0.5, 1.0];

function buildMW(q1, q2, q3, q4) {
  const c = q1 * q3,
    inv = q1 * q4;
  return {
    human_life_years: 1,
    human_ylds: q1,
    human_income_doublings: q2,
    chickens_birds: c,
    mammals: c,
    fish: (inv + c) / 2,
    shrimp: inv,
    non_shrimp_invertebrates: inv,
  };
}

function calcAll(d, mw, df, rp) {
  const r = {};
  for (const [pid, pd] of Object.entries(d)) {
    let total = 0;
    for (const ed of Object.values(pd.effects)) {
      const mi = mw[ed.recipient_type] ?? 0;
      let s = 0;
      for (let t = 0; t < 6; t++) s += ed.values[t][rp] * df[t];
      total += mi * s;
    }
    r[pid] = total;
  }
  return r;
}

function adjustXR(pv, d, pe) {
  const r = {};
  for (const [pid, v] of Object.entries(pv))
    r[pid] = d[pid].tags.near_term_xrisk ? v : v * (1 - pe);
  return r;
}

function precompute() {
  const results = [];
  for (const q1 of Q1)
    for (const q2 of Q2)
      for (const q3 of Q3)
        for (const q4 of Q4)
          for (let q5i = 0; q5i < Q5.length; q5i++)
            for (const q6 of Q6)
              for (const q7 of Q7) {
                const mw = buildMW(q1, q2, q3, q4);
                results.push({
                  project_values: adjustXR(calcAll(DATA, mw, Q5[q5i], q6), DATA, q7),
                });
              }
  return results;
}

function computeWV(c1, c2, c3, c4, c5, c6, c7) {
  const wv = [];
  let idx = 0;
  for (let i1 = 0; i1 < Q1.length; i1++)
    for (let i2 = 0; i2 < Q2.length; i2++)
      for (let i3 = 0; i3 < Q3.length; i3++)
        for (let i4 = 0; i4 < Q4.length; i4++)
          for (let i5 = 0; i5 < Q5.length; i5++)
            for (let i6 = 0; i6 < Q6.length; i6++)
              for (let i7 = 0; i7 < Q7.length; i7++) {
                const cr = c1[i1] * c2[i2] * c3[i3] * c4[i4] * c5[i5] * c6[i6] * c7[i7];
                if (cr > 0) wv.push({ result_idx: idx, credence: cr });
                idx++;
              }
  return wv;
}

function pack(results, worldviews) {
  const pids = Object.keys(DATA),
    np = pids.length,
    N = worldviews.length;
  const sm = new Float64Array(N * np),
    creds = new Float64Array(N);
  for (let w = 0; w < N; w++) {
    const pv = results[worldviews[w].result_idx].project_values;
    creds[w] = worldviews[w].credence;
    for (let p = 0; p < np; p++) sm[w * np + p] = pv[pids[p]];
  }
  const dr = pids.map((pid) => {
    const a = new Float64Array(DATA[pid].diminishing_returns.length);
    a.set(DATA[pid].diminishing_returns);
    return a;
  });
  return { scoreMatrix: sm, credences: creds, numActive: N, projectIds: pids, drArrays: dr };
}

function voteFast(data, funding, increment, { packed }) {
  const { scoreMatrix: sm, credences: cr, numActive: N, projectIds: pids, drArrays: dr } = packed;
  const np = pids.length,
    drf = new Float64Array(np);
  for (let p = 0; p < np; p++) {
    const i = Math.floor(funding[pids[p]] / 10);
    drf[p] = i >= dr[p].length ? dr[p][dr[p].length - 1] : dr[p][i];
  }
  const alloc = new Float64Array(np);
  for (let w = 0; w < N; w++) {
    const base = w * np,
      share = cr[w] * increment;
    let bp = 0,
      bv = sm[base] * drf[0];
    for (let p = 1; p < np; p++) {
      const mv = sm[base + p] * drf[p];
      if (mv > bv) {
        bv = mv;
        bp = p;
      }
    }
    alloc[bp] += share;
  }
  const r = {};
  for (let p = 0; p < np; p++) r[pids[p]] = alloc[p];
  return r;
}

function refAllocate(c1, c2, c3, c4, c5, c6, c7) {
  const results = precompute();
  const wv = computeWV(c1, c2, c3, c4, c5, c6, c7);
  const packed = pack(results, wv);
  const funding = {};
  for (const pid of Object.keys(DATA)) funding[pid] = 0;
  let rem = BUDGET;
  while (rem > 0) {
    const inc = Math.min(10, rem);
    const allocs = voteFast(DATA, funding, inc, { packed });
    for (const pid of Object.keys(DATA)) funding[pid] += allocs[pid];
    rem -= inc;
  }
  const pct = {};
  for (const [k, v] of Object.entries(funding)) pct[k] = (v / BUDGET) * 100;
  return pct;
}

// ============================================================================

describe('Moral Marketplace vs import reference', () => {
  it('matches reference for equal credences', () => {
    const credences = {
      disability: { livesOnly: 25, livesMore: 25, equal: 25, disabilityMore: 25 },
      income: { livesOnly: 25, lives10x: 25, lives2x: 25, equal: 25 },
      animal: { humanEqual: 20, human10x: 20, human100x: 20, human1000x: 20, noValue: 20 },
      invertebrate: { humanEqual: 20, human100x: 20, human1000x: 20, human10000x: 20, noValue: 20 },
      timeframes: { shortTermOnly: 25, discountDistant: 25, prioritizeNearer: 25, equalAll: 25 },
      risk: { riskNeutral: 25, upsideSkepticism: 25, lossAversion: 25, both: 25 },
      xrisk: { evaluateSame: 25, discount10: 25, discount50: 25, xriskOnly: 25 },
    };
    const ref = refAllocate(
      [0.25, 0.25, 0.25, 0.25],
      [0.25, 0.25, 0.25, 0.25],
      [0.2, 0.2, 0.2, 0.2, 0.2],
      [0.2, 0.2, 0.2, 0.2, 0.2],
      [0.25, 0.25, 0.25, 0.25],
      [0.25, 0.25, 0.25, 0.25],
      [0.25, 0.25, 0.25, 0.25]
    );
    const result = calculateMoralMarketplace(credences);

    console.log(
      'New:   ',
      Object.fromEntries(Object.entries(result).map(([k, v]) => [k, v.toFixed(2)]))
    );
    console.log(
      'Ref:   ',
      Object.fromEntries(Object.entries(ref).map(([k, v]) => [k, v.toFixed(2)]))
    );

    for (const key of Object.keys(ref)) {
      expect(result[key]).toBeCloseTo(ref[key], 1);
    }
  });

  it('matches reference for lives-only deterministic scenario', () => {
    const credences = {
      disability: { livesOnly: 100, livesMore: 0, equal: 0, disabilityMore: 0 },
      income: { livesOnly: 100, lives10x: 0, lives2x: 0, equal: 0 },
      animal: { humanEqual: 0, human10x: 0, human100x: 0, human1000x: 0, noValue: 100 },
      invertebrate: { humanEqual: 0, human100x: 0, human1000x: 0, human10000x: 0, noValue: 100 },
      timeframes: { shortTermOnly: 100, discountDistant: 0, prioritizeNearer: 0, equalAll: 0 },
      risk: { riskNeutral: 100, upsideSkepticism: 0, lossAversion: 0, both: 0 },
      xrisk: { evaluateSame: 100, discount10: 0, discount50: 0, xriskOnly: 0 },
    };
    const ref = refAllocate(
      [1, 0, 0, 0],
      [1, 0, 0, 0],
      [0, 0, 0, 0, 1],
      [0, 0, 0, 0, 1],
      [1, 0, 0, 0],
      [1, 0, 0, 0],
      [1, 0, 0, 0]
    );
    const result = calculateMoralMarketplace(credences);

    console.log('New (lives-only):   ', result);
    console.log('Ref (lives-only):   ', ref);

    for (const key of Object.keys(ref)) {
      expect(result[key]).toBeCloseTo(ref[key], 1);
    }
  });

  it('matches reference for longtermist animal-friendly scenario', () => {
    const credences = {
      disability: { livesOnly: 0, livesMore: 0, equal: 100, disabilityMore: 0 },
      income: { livesOnly: 0, lives10x: 0, lives2x: 0, equal: 100 },
      animal: { humanEqual: 100, human10x: 0, human100x: 0, human1000x: 0, noValue: 0 },
      invertebrate: { humanEqual: 100, human100x: 0, human1000x: 0, human10000x: 0, noValue: 0 },
      timeframes: { shortTermOnly: 0, discountDistant: 0, prioritizeNearer: 0, equalAll: 100 },
      risk: { riskNeutral: 100, upsideSkepticism: 0, lossAversion: 0, both: 0 },
      xrisk: { evaluateSame: 100, discount10: 0, discount50: 0, xriskOnly: 0 },
    };
    const ref = refAllocate(
      [0, 0, 1, 0],
      [0, 0, 0, 1],
      [1, 0, 0, 0, 0],
      [1, 0, 0, 0, 0],
      [0, 0, 0, 1],
      [1, 0, 0, 0],
      [1, 0, 0, 0]
    );
    const result = calculateMoralMarketplace(credences);

    console.log(
      'New (longtermist):   ',
      Object.fromEntries(Object.entries(result).map(([k, v]) => [k, v.toFixed(2)]))
    );
    console.log(
      'Ref (longtermist):   ',
      Object.fromEntries(Object.entries(ref).map(([k, v]) => [k, v.toFixed(2)]))
    );

    for (const key of Object.keys(ref)) {
      expect(result[key]).toBeCloseTo(ref[key], 1);
    }
  });

  it('matches reference for mixed credences', () => {
    const credences = {
      disability: { livesOnly: 10, livesMore: 40, equal: 40, disabilityMore: 10 },
      income: { livesOnly: 5, lives10x: 30, lives2x: 50, equal: 15 },
      animal: { humanEqual: 10, human10x: 30, human100x: 30, human1000x: 20, noValue: 10 },
      invertebrate: { humanEqual: 5, human100x: 25, human1000x: 35, human10000x: 25, noValue: 10 },
      timeframes: { shortTermOnly: 10, discountDistant: 30, prioritizeNearer: 40, equalAll: 20 },
      risk: { riskNeutral: 40, upsideSkepticism: 30, lossAversion: 20, both: 10 },
      xrisk: { evaluateSame: 50, discount10: 30, discount50: 15, xriskOnly: 5 },
    };
    const ref = refAllocate(
      [0.1, 0.4, 0.4, 0.1],
      [0.05, 0.3, 0.5, 0.15],
      [0.1, 0.3, 0.3, 0.2, 0.1],
      [0.05, 0.25, 0.35, 0.25, 0.1],
      [0.1, 0.3, 0.4, 0.2],
      [0.4, 0.3, 0.2, 0.1],
      [0.5, 0.3, 0.15, 0.05]
    );
    const result = calculateMoralMarketplace(credences);

    console.log(
      'New (mixed):   ',
      Object.fromEntries(Object.entries(result).map(([k, v]) => [k, v.toFixed(2)]))
    );
    console.log(
      'Ref (mixed):   ',
      Object.fromEntries(Object.entries(ref).map(([k, v]) => [k, v.toFixed(2)]))
    );

    for (const key of Object.keys(ref)) {
      expect(result[key]).toBeCloseTo(ref[key], 1);
    }
  });
});
