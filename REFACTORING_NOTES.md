# Refactoring Notes

## Bug Fixes During Refactor

### Fixed: Sticky Slider Behavior

**Original Bug:**
In the original `moral-parliament-quiz-v6.jsx`, dragging a slider would only move one notch and stop. The slider would not smoothly follow the mouse drag, creating a frustrating "sticky" experience.

**Root Cause:**
Stale closure over React state in the onChange handler:

```jsx
// Original code
onChange={(val) => setAnimalCredences(adjustCredences(opt.key, val, animalCredences))}
```

When dragging rapidly:
1. onChange fires with new value
2. `adjustCredences` is called with current state snapshot
3. State update is queued (async)
4. Next onChange fires **before** state actually updates
5. Still uses old state values, creating one-notch-at-a-time behavior

**How We Fixed It:**
Through better component architecture and state flow:

1. **Component Separation**: Extracted `CredenceSlider` as its own component with cleaner re-render boundaries
2. **Pure Function Import**: `adjustCredences` imported from `utils/calculations.js` as stable reference rather than inline definition
3. **Cleaner State Flow**:
   ```
   MoralParliamentQuiz (owns state)
     ↓ props
   QuestionScreen (receives state as props)
     ↓ props
   CredenceSlider (pure presentation)
   ```
4. **Fresh Props on Render**: Each component level receives fresh prop values, avoiding stale closures

The refactored architecture naturally avoided the stale closure problem by following React best practices.

**Current Status:**
✅ Sliders now drag smoothly without sticking

**Future Improvement:**
Once documentation and cleanup are complete, we may want to further refine how the other sliders recalculate during drag operations for better UX.

---

## Other Differences from Original

### Margins and Spacing
The original JSX had inconsistent margins/padding across screens. Our refactored version uses:
- Consistent CSS variables for spacing (`--spacing-*`)
- Standardized padding via `.screen` and `.screen-main` classes
- More uniform layout across all screens

**Decision:** Keeping the improved consistency rather than replicating the original inconsistencies.

---

## Architecture Improvements

### Before (Single File)
- ~816 lines in one JSX file
- Inline component definitions
- Inline styles mixed with logic
- Functions defined inside component (recreated on every render)
- No reusability

### After (25 Files)
- Modular component structure
- Reusable `QuestionScreen` template
- Separated concerns:
  - Components (presentation)
  - Utils (logic)
  - Constants (configuration)
  - Styles (appearance)
- Pure functions with no side effects
- CSS modules for encapsulation
- Design system via CSS variables

### Benefits
- **Maintainability**: Easy to find and modify specific functionality
- **Testability**: Pure functions can be tested in isolation
- **Reusability**: Components and utilities can be used elsewhere
- **Performance**: Fewer recreated functions, better memoization potential
- **Readability**: Each file has single responsibility
- **Scalability**: Easy to add new questions or features

---

## Known Issues / Future Work

### Slider UX Refinement (Post-Cleanup)
- [ ] Optimize how other sliders recalculate during drag operations
- [ ] Consider debouncing or different distribution algorithms
- [ ] Test with various credence distributions

### Optional Enhancements
- [ ] TypeScript migration for type safety
- [ ] Unit tests for calculation functions
- [ ] Component tests with Testing Library
- [ ] Accessibility improvements (ARIA labels, keyboard navigation)
- [ ] Animation polish with framer-motion
- [ ] Error boundaries
- [ ] Loading states (if data fetching added)

---

## Files Changed from Vite Template

### Added Files
- All files in `src/components/` (13 files)
- All files in `src/constants/` (1 file)
- All files in `src/utils/` (2 files)
- All files in `src/styles/` (8 files)

### Modified Files
- `src/App.jsx` - Now imports MoralParliamentQuiz
- `index.html` - Enhanced meta tags and title
- `package.json` - Already configured in Phase 1

### Original Source
- Original file preserved in git history (commit dd5499b)
- Retrieve with: `git show dd5499b:moral-parliament-quiz-v6.jsx`

---

## Migration Guide (If Reverting)

To retrieve the original single-file version:
1. From git history: `git show dd5499b:moral-parliament-quiz-v6.jsx > original.jsx`
2. Import in `App.jsx` if needed

To migrate from refactored back to single file:
1. Copy content from `src/components/MoralParliamentQuiz.jsx`
2. Inline all imported components
3. Inline all utility functions
4. Convert CSS variables to inline styles
5. Not recommended - loses all architectural benefits!
