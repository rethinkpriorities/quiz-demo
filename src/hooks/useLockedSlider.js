import { useMemo } from 'react';
import features from '../../config/features.json';

/**
 * Custom hook for locked slider calculations.
 * Computes locked state and max allowed value based on sibling locks.
 * Supports multiple locked sliders (up to n-2 where n is total sliders).
 *
 * @param {Object} params
 * @param {string} params.sliderKey - This slider's key
 * @param {string[]} params.lockedKeys - Array of locked slider keys
 * @param {Object} params.credences - Current credence values
 * @returns {Object} Lock state and calculations
 */
export function useLockedSlider({ sliderKey, lockedKeys = [], credences }) {
  return useMemo(() => {
    // Normalize lockedKeys to array (support legacy single key)
    const keysArray = Array.isArray(lockedKeys) ? lockedKeys : lockedKeys ? [lockedKeys] : [];

    const isLocked = keysArray.includes(sliderKey);
    const hasLockedSibling = keysArray.length > 0 && !isLocked;

    // Sum of all locked sliders' values
    const lockedValue = hasLockedSibling
      ? keysArray.reduce((sum, key) => sum + (credences[key] || 0), 0)
      : 0;

    const maxAllowed = hasLockedSibling ? 100 - lockedValue : 100;

    // Calculate thumb offset for visual indicator (16px thumb assumed)
    const thumbOffset = hasLockedSibling
      ? `calc(${maxAllowed}% + ${(50 - maxAllowed) * 0.16}px)`
      : null;

    // Check if we can lock more sliders (need at least 2 unlocked)
    const totalSliders = Object.keys(credences).length;
    const unlockedCount = totalSliders - keysArray.length;
    const canLockMore = unlockedCount > 2;

    return {
      isLocked,
      hasLockedSibling,
      lockedValue,
      maxAllowed,
      thumbOffset,
      canLockMore,
      featureEnabled: features.ui?.sliderLock === true,
    };
  }, [sliderKey, lockedKeys, credences]);
}
