# Moral Parliament Quiz - Post-Refactoring Cleanup Plan

## ✅ Completed: Initial Refactoring (Phases 1-11)

The application has been successfully refactored from a single 816-line JSX file into a modular architecture with 25 well-organized files. All core functionality has been preserved and bugs have been fixed.

**Status:** Production-ready and fully functional ✅

---

## 🎯 Current Cleanup & Refinement Goals

This document outlines remaining cleanup tasks and planned improvements to further enhance the codebase.

---

## Phase 1: Slider UX Refinement

**Priority:** High
**Status:** ✅ Completed

### Solution Implemented
Implemented a sophisticated slider system that maintains ratio preservation during drag with smooth animations.

### What Was Built

#### Ratio Preservation During Drag
- When dragging one slider, the other two maintain their exact original ratio throughout the entire drag
- Uses snapshot-based calculation: captures credence values at `mousedown`/`touchstart`
- All ratio calculations reference the snapshot, not the constantly updating values
- Prevents ratio drift and creates predictable, intuitive behavior

#### Retina-Smooth Dragging
- Sliders use `step="any"` for unlimited precision during drag
- Changed from `parseInt` to `parseFloat` for fractional values
- Display always shows rounded integers (`Math.round(value)%`)
- Calculations use precise decimal values during drag

#### Smooth Animations for Non-Dragged Sliders
- Non-dragged sliders animate smoothly to new positions with `transition: background 0.4s ease-out`
- Active slider has transitions disabled (`data-dragging` attribute) for instant response
- Values round to integers only on drag end, then animate to final positions
- Created `roundCredences()` utility to ensure values sum to exactly 100

### Implementation Details
- `adjustCredences()` now accepts optional `baseCredences` parameter
- Removed `Math.round()` during drag to preserve decimal precision
- Slider components track drag state with `useState` (not `useRef` to allow rendering)
- Parent components apply rounding only when `shouldRound=true` flag is passed

### Tasks Completed
- [x] Designed ratio-preserving algorithm
- [x] Implemented smooth dragging with decimal precision
- [x] Added CSS animations for non-dragged sliders
- [x] Tested thoroughly in both question screens and results panels
- [x] Fixed ESLint errors (refs during render)
- [x] Updated documentation

---

## Phase 2: Code Quality Polish

**Priority:** Medium
**Status:** In Progress

### Tasks

#### Remove Any Remaining Inline Styles
- [x] Audit all components for inline styles
- [x] Move remaining inline styles to CSS modules where appropriate
- [x] Keep dynamic styles (colors from props) inline

#### Consistency Review
- [ ] Ensure consistent prop naming across components
- [ ] Verify consistent error handling (if any)
- [x] Check for any duplicated logic

#### Performance Optimization
- [ ] Consider React.memo for frequently re-rendering components
- [ ] Evaluate if useMemo/useCallback would help in MoralParliamentQuiz
- [ ] Profile rendering performance (if needed)

---

## Phase 3: Accessibility Improvements

**Priority:** Medium
**Status:** Not Started

### Tasks
- [ ] Add ARIA labels to interactive elements
- [ ] Ensure keyboard navigation works for all interactions
- [ ] Test slider keyboard controls (arrow keys)
- [ ] Add focus indicators for keyboard users
- [ ] Test with screen reader (VoiceOver on Mac)
- [ ] Add skip navigation link
- [ ] Ensure color contrast meets WCAG AA standards
- [ ] Add aria-live regions for dynamic content updates

---

## Phase 4: Documentation Refinement

**Priority:** Low
**Status:** Not Started

### Tasks
- [ ] Add inline code examples to README
- [ ] Create CONTRIBUTING.md if planning to open source
- [ ] Add JSDoc comments to any remaining uncommented functions
- [ ] Consider adding architecture diagram
- [ ] Add screenshots to README

---

## Phase 5: Optional Enhancements

**Priority:** Low
**Status:** Not Started

These are nice-to-have improvements that go beyond cleanup:

### Testing Infrastructure
- [ ] Set up Vitest for unit testing
- [ ] Write tests for calculation functions
- [ ] Set up React Testing Library
- [ ] Write component tests for UI elements
- [ ] Add test coverage reporting

### Developer Experience
- [x] Add ESLint configuration
- [x] Add Prettier for code formatting
- [x] Add pre-commit hooks with husky
- [ ] Consider adding TypeScript (major undertaking)

### Visual Polish
- [ ] Add subtle animations with framer-motion
- [ ] Polish transitions between screens
- [ ] Add loading states (if ever needed)
- [ ] Consider dark mode support

### Features (Beyond Cleanup)
- [ ] Add ability to save/share results
- [ ] Add more cause categories
- [ ] Add more moral dimensions to evaluate
- [ ] Export results as PDF or image
- [ ] Add explanations for each calculation method

---

## Success Criteria for Cleanup Phase

- [x] Slider UX feels smooth and intuitive
- [x] No inline styles except for dynamic values
- [ ] All interactive elements are keyboard accessible
- [x] Code passes linting with zero warnings
- [ ] Documentation is clear and comprehensive
- [ ] Performance is optimal (no unnecessary re-renders)

---

## Notes

### Priority Ordering
1. **Slider UX Refinement** - Most impactful UX improvement
2. **Code Quality** - Maintainability improvements
3. **Accessibility** - Important for inclusive design
4. **Documentation** - Help future contributors
5. **Optional Enhancements** - Nice-to-haves

### Approach
- Take one phase at a time
- Test thoroughly after each change
- Update documentation as you go
- Keep the principle: don't fix what isn't broken

### Timeline
No fixed timeline - work on these as needed or as time permits. The application is already production-ready.

---

## References

- **REFACTORING_NOTES.md** - Details on what was fixed during refactor
- **COMPONENT_BOUNDARIES.md** - Component architecture analysis
- **README.md** - Full project documentation
