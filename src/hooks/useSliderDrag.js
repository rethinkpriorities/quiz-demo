import { useState, useCallback } from 'react';

/**
 * Custom hook for slider drag handling with credence tracking.
 * Captures credence snapshot at drag start and maintains it throughout the drag.
 *
 * @param {Object} params
 * @param {Object} params.credences - Current credence values
 * @param {boolean} params.isLocked - Whether this slider is locked
 * @param {string[]} params.lockedKeys - Array of locked slider keys
 * @param {Function} params.onChange - Callback with (value, baseCredences, shouldRound, lockedKeys)
 * @returns {Object} Drag state and handlers
 */
export function useSliderDrag({ credences, isLocked, lockedKeys, onChange }) {
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
      onChange(finalValue, dragBaseCredences, true, lockedKeys);
      setDragBaseCredences(null);
    },
    [isLocked, isDragging, dragBaseCredences, lockedKeys, onChange]
  );

  const handleChange = useCallback(
    (e) => {
      if (isLocked) return;
      const newValue = parseFloat(e.target.value);
      onChange(newValue, dragBaseCredences, false, lockedKeys);
    },
    [isLocked, dragBaseCredences, lockedKeys, onChange]
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
