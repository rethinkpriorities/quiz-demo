import { useState, useCallback } from 'react';

/**
 * Custom hook for slider drag handling with credence tracking.
 * Captures credence snapshot at drag start and maintains it throughout the drag.
 *
 * @param {Object} params
 * @param {Object} params.credences - Current credence values
 * @param {boolean} params.isLocked - Whether this slider is locked
 * @param {string} params.lockedKey - Key of the locked slider (if any)
 * @param {Function} params.onChange - Callback with (value, baseCredences, shouldRound, lockedKey)
 * @returns {Object} Drag state and handlers
 */
export function useSliderDrag({ credences, isLocked, lockedKey, onChange }) {
  const [dragBaseCredences, setDragBaseCredences] = useState(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleDragStart = useCallback(() => {
    if (isLocked) return;
    setIsDragging(true);
    setDragBaseCredences({ ...credences });
  }, [isLocked, credences]);

  const handleDragEnd = useCallback(
    (e) => {
      if (isLocked) return;
      if (!isDragging) return;
      setIsDragging(false);
      const finalValue = parseFloat(e.target.value);
      onChange(finalValue, dragBaseCredences, true, lockedKey);
      setDragBaseCredences(null);
    },
    [isLocked, isDragging, dragBaseCredences, lockedKey, onChange]
  );

  const handleChange = useCallback(
    (e) => {
      if (isLocked) return;
      const newValue = parseFloat(e.target.value);
      onChange(newValue, dragBaseCredences, false, lockedKey);
    },
    [isLocked, dragBaseCredences, lockedKey, onChange]
  );

  return {
    isDragging,
    dragHandlers: {
      onChange: handleChange,
      onMouseDown: handleDragStart,
      onMouseUp: handleDragEnd,
      onMouseLeave: handleDragEnd,
      onTouchStart: handleDragStart,
      onTouchEnd: handleDragEnd,
    },
  };
}
