import { useState, useCallback, useRef, useEffect } from 'react';
import { Info } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import styles from '../../styles/components/InfoTooltip.module.css';

/**
 * Info icon with styled popover tooltip.
 * Shows on hover (mouse) and touch (mobile).
 * Tooltip is positioned to stay within viewport bounds.
 * Tapping outside closes the tooltip on mobile.
 */
function InfoTooltip({ content, size = 14 }) {
  const [isVisible, setIsVisible] = useState(false);
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const triggerRef = useRef(null);
  const popoverRef = useRef(null);
  const wrapperRef = useRef(null);

  const updatePosition = useCallback(() => {
    if (!triggerRef.current) return;

    const triggerRect = triggerRef.current.getBoundingClientRect();
    const popoverWidth = popoverRef.current?.offsetWidth || 400;
    const viewportWidth = window.innerWidth;
    const padding = 16;

    // Center below the trigger
    let left = triggerRect.left + triggerRect.width / 2 - popoverWidth / 2;
    const top = triggerRect.bottom + 8;

    // Clamp to viewport bounds
    if (left < padding) {
      left = padding;
    } else if (left + popoverWidth > viewportWidth - padding) {
      left = viewportWidth - popoverWidth - padding;
    }

    setPosition({ top, left });
  }, []);

  // Close tooltip when clicking/tapping outside
  useEffect(() => {
    if (!isVisible) return;

    const handleClickOutside = (e) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setIsVisible(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [isVisible]);

  useEffect(() => {
    if (isVisible) {
      updatePosition();
    }
  }, [isVisible, updatePosition]);

  const handleMouseEnter = useCallback(() => {
    updatePosition();
  }, [updatePosition]);

  const handleTouchStart = useCallback(
    (e) => {
      e.preventDefault();
      e.stopPropagation();
      updatePosition();
      setIsVisible((prev) => !prev);
    },
    [updatePosition]
  );

  if (!content) return null;

  return (
    <span ref={wrapperRef} className={styles.wrapper}>
      <button
        ref={triggerRef}
        type="button"
        className={styles.trigger}
        onMouseEnter={handleMouseEnter}
        onTouchStart={handleTouchStart}
        aria-label="More information"
      >
        <Info size={size} />
      </button>
      <span
        ref={popoverRef}
        className={`${styles.popover} ${isVisible ? styles.popoverVisible : ''}`}
        style={{ top: position.top, left: position.left }}
      >
        <ReactMarkdown
          components={{
            a: ({ href, children }) => (
              <a href={href} target="_blank" rel="noopener noreferrer">
                {children}
              </a>
            ),
          }}
        >
          {content}
        </ReactMarkdown>
      </span>
    </span>
  );
}

export default InfoTooltip;
