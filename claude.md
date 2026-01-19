# Moral Parliament Quiz - Development Guide

## ✅ Completed: Initial Refactoring (Phases 1-11)

The application has been successfully refactored from a single 816-line JSX file into a modular architecture with 25 well-organized files. All core functionality has been preserved and bugs have been fixed.

**Status:** Production-ready and fully functional ✅

---

## 🎯 Current Focus: Feature Development & Prototyping

The project is now in **iterative feature development mode**. We add configurable features one at a time, test them, and create prototype snapshots for external feedback.

---

## Feature Flag System

### Configuration Location
**File:** `config/features.json`

### How It Works
- Features are defined in `config/features.json` as true/false flags
- Imported directly in components: `import features from '../config/features.json'`
- Default behavior: If a flag doesn't exist, code should handle it gracefully with appropriate default behavior
- Simple runtime evaluation - change JSON and refresh to see changes in dev

### Feature Categories
- **UI Features**: Visual/UX changes visible to users
- **Calculations**: Changes to underlying algorithms or metrics
- **Developer Tools**: Productivity improvements (no prototype snapshots needed)

### Development Workflow
1. Add feature request to "Planned Features" section below
2. Implement feature with flag in `config/features.json` (default: `false`)
3. Test thoroughly with flag enabled
4. Create prototype snapshot using `scripts/snapshot.sh` (UI features only)
5. Log completed feature with prototype tag in "Completed Features" section
6. Get external feedback, iterate if needed

### Prototype Snapshots
- **When to create:** Only for features with user-visible frontend effects
- **When to skip:** Developer productivity features, refactoring, backend improvements
- **Script:** `scripts/snapshot.sh` copies build to `prototypes/` folder
- **Index:** `prototypes/index.html` contains descriptive links to all snapshots

---

## 📋 Planned Features

_Feature requests will be added here as they come up_

---

## ✅ Completed Features

### Refactoring & Initial Setup
**Date:** 2026-01-19
**Prototype:** N/A (baseline)
**Description:**
- Refactored from single 816-line file to 25-file modular architecture
- Implemented sophisticated slider UX with ratio preservation and smooth animations
- Set up ESLint, Prettier, and pre-commit hooks

---

## 🗂️ Backlog: Code Quality & Enhancements

These items are deprioritized but may be addressed when development pace slows down. General rule: keep the codebase readable as we go.

### Code Quality Polish
- [ ] Ensure consistent prop naming across components
- [ ] Verify consistent error handling (if any)
- [ ] Consider React.memo for frequently re-rendering components
- [ ] Evaluate if useMemo/useCallback would help in MoralParliamentQuiz
- [ ] Profile rendering performance (if needed)

### Build Optimization
- [ ] Implement Vite env vars for build-time feature flag replacement (for prod next month)
- [ ] Dead code elimination for disabled features
- [ ] Bundle size optimization

### Accessibility Improvements
- [ ] Add ARIA labels to interactive elements
- [ ] Ensure keyboard navigation works for all interactions
- [ ] Test slider keyboard controls (arrow keys)
- [ ] Add focus indicators for keyboard users
- [ ] Test with screen reader (VoiceOver on Mac)
- [ ] Add skip navigation link
- [ ] Ensure color contrast meets WCAG AA standards
- [ ] Add aria-live regions for dynamic content updates

### Documentation
- [ ] Add inline code examples to README
- [ ] Create CONTRIBUTING.md if planning to open source
- [ ] Add JSDoc comments to any remaining uncommented functions
- [ ] Consider adding architecture diagram
- [ ] Add screenshots to README

### Testing Infrastructure
- [ ] Set up Vitest for unit testing
- [ ] Write tests for calculation functions
- [ ] Set up React Testing Library
- [ ] Write component tests for UI elements
- [ ] Add test coverage reporting

### Visual Polish
- [ ] Add subtle animations with framer-motion
- [ ] Polish transitions between screens
- [ ] Add loading states (if ever needed)
- [ ] Consider dark mode support

### Feature Ideas
- [ ] Add ability to save/share results
- [ ] Add more cause categories
- [ ] Add more moral dimensions to evaluate
- [ ] Export results as PDF or image
- [ ] Add explanations for each calculation method
- [ ] Question type system (different presentation modes)
- [ ] Consider adding TypeScript (major undertaking)

---

## References

- **config/features.json** - Feature flag configuration
- **scripts/snapshot.sh** - Prototype snapshot builder
- **prototypes/index.html** - Index of all prototype builds
- **REFACTORING_NOTES.md** - Details on what was fixed during refactor
- **COMPONENT_BOUNDARIES.md** - Component architecture analysis
- **README.md** - Full project documentation
