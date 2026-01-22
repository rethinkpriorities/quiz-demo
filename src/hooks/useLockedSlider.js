import { useMemo } from 'react';
import features from '../../config/features.json';

/**
 * Custom hook for locked slider calculations.
 * Computes locked state and max allowed value based on sibling locks.
 *
 * @param {Object} params
 * @param {string} params.sliderKey - This slider's key
 * @param {string} params.lockedKey - Currently locked slider key
 * @param {Object} params.credences - Current credence values
 * @returns {Object} Lock state and calculations
 */
export function useLockedSlider({ sliderKey, lockedKey, credences }) {
  return useMemo(() => {
    const isLocked = lockedKey === sliderKey;
    const hasLockedSibling = lockedKey && lockedKey !== sliderKey;
    const lockedValue = hasLockedSibling ? credences[lockedKey] : 0;
    const maxAllowed = hasLockedSibling ? 100 - lockedValue : 100;

    // Calculate thumb offset for visual indicator (16px thumb assumed)
    const thumbOffset = hasLockedSibling
      ? `calc(${maxAllowed}% + ${(50 - maxAllowed) * 0.16}px)`
      : null;

    return {
      isLocked,
      hasLockedSibling,
      lockedValue,
      maxAllowed,
      thumbOffset,
      featureEnabled: features.ui?.sliderLock === true,
    };
  }, [sliderKey, lockedKey, credences]);
}
