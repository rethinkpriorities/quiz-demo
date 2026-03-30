/**
 * Per-project diminishing returns overrides.
 *
 * Users can specify a power/exponent (0-1) for individual projects.
 * The formula `dr[i] = power^i` generates a replacement DR array.
 */

/**
 * Generate a diminishing returns array from a power exponent.
 * @param {number} power - Exponent between 0 and 1
 * @param {number} length - Number of entries to generate
 * @returns {number[]} Array where entry i = power^i
 */
export function generateDrArray(power, length) {
  const arr = new Array(length);
  arr[0] = 1;
  for (let i = 1; i < length; i++) {
    arr[i] = power ** i;
  }
  return arr;
}

/**
 * Apply DR overrides to project data, returning a new object with replaced
 * `diminishing_returns` arrays for overridden projects.
 *
 * Returns the original object if no overrides (preserves referential identity).
 *
 * @param {Object} projectData - Project definitions keyed by project ID
 * @param {Object} drOverrides - { projectId: power } where power is 0-1
 * @returns {Object} Project data with overridden DR arrays
 */
export function applyDrOverrides(projectData, drOverrides) {
  if (!drOverrides || Object.keys(drOverrides).length === 0) {
    return projectData;
  }

  const result = {};
  for (const [id, project] of Object.entries(projectData)) {
    if (drOverrides[id] != null && project.diminishing_returns) {
      result[id] = {
        ...project,
        diminishing_returns: generateDrArray(drOverrides[id], project.diminishing_returns.length),
      };
    } else {
      result[id] = project;
    }
  }
  return result;
}
