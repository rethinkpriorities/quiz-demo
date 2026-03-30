import { describe, it, expect } from 'vitest';
import { generateDrArray, applyDrOverrides } from './drOverrides';

describe('generateDrArray', () => {
  it('power=1 returns all ones', () => {
    const result = generateDrArray(1, 5);
    expect(result).toEqual([1, 1, 1, 1, 1]);
  });

  it('power=0 returns [1, 0, 0, ...]', () => {
    const result = generateDrArray(0, 4);
    expect(result).toEqual([1, 0, 0, 0]);
  });

  it('power=0.5 returns correct decay', () => {
    const result = generateDrArray(0.5, 4);
    expect(result[0]).toBe(1);
    expect(result[1]).toBe(0.5);
    expect(result[2]).toBe(0.25);
    expect(result[3]).toBe(0.125);
  });

  it('first element is always 1', () => {
    expect(generateDrArray(0.99, 1)).toEqual([1]);
    expect(generateDrArray(0.01, 3)[0]).toBe(1);
  });
});

describe('applyDrOverrides', () => {
  const projectData = {
    proj_a: { diminishing_returns: [1, 0.9, 0.8], effects: {} },
    proj_b: { diminishing_returns: [1, 0.95, 0.9], effects: {} },
    proj_c: { diminishing_returns: [1, 0.85, 0.7], effects: {} },
  };

  it('returns same object when no overrides', () => {
    expect(applyDrOverrides(projectData, {})).toBe(projectData);
    expect(applyDrOverrides(projectData, null)).toBe(projectData);
    expect(applyDrOverrides(projectData, undefined)).toBe(projectData);
  });

  it('replaces DR array for overridden project', () => {
    const result = applyDrOverrides(projectData, { proj_a: 0.5 });
    expect(result.proj_a.diminishing_returns).toEqual([1, 0.5, 0.25]);
    expect(result.proj_a.effects).toBe(projectData.proj_a.effects);
  });

  it('leaves non-overridden projects untouched', () => {
    const result = applyDrOverrides(projectData, { proj_a: 0.5 });
    expect(result.proj_b).toBe(projectData.proj_b);
    expect(result.proj_c).toBe(projectData.proj_c);
  });

  it('handles multiple overrides', () => {
    const result = applyDrOverrides(projectData, { proj_a: 1, proj_c: 0 });
    expect(result.proj_a.diminishing_returns).toEqual([1, 1, 1]);
    expect(result.proj_c.diminishing_returns).toEqual([1, 0, 0]);
    expect(result.proj_b).toBe(projectData.proj_b);
  });
});
