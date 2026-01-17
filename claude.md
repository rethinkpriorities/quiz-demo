# Moral Parliament Quiz - Vite Migration & Refactoring Plan

## Overview

This plan outlines the migration of the Moral Parliament Quiz from a single JSX file to a properly structured Vite + React application with clear separation of concerns.

**Goals:**

- Serve the application with Vite dev server
- Separate concerns into logical files
- Maintain exact current behavior
- Improve code readability and maintainability

---

## Phase 1: Vite Setup

### Tasks

- [ ] Initialize Vite project with React template
- [ ] Install dependencies (React, Vite, lucide-react)
- [ ] Configure Vite for development
- [ ] Create index.html entry point
- [ ] Set up package.json scripts
- [ ] Test that Vite dev server runs successfully

---

## Phase 2: File Structure Design

### Proposed Structure

```
src/
├── main.jsx                    # Entry point
├── App.jsx                     # Main app wrapper
├── components/
│   ├── MoralParliamentQuiz.jsx # Main quiz orchestrator
│   ├── WelcomeScreen.jsx       # Welcome page
│   ├── QuestionScreen.jsx      # Reusable question template
│   ├── ResultsScreen.jsx       # Results display
│   ├── ui/
│   │   ├── OptionButton.jsx    # Option selection button
│   │   ├── CredenceSlider.jsx  # Full-size slider for questions
│   │   ├── CompactSlider.jsx   # Compact slider for results
│   │   ├── ModeToggle.jsx      # Options/Sliders mode switcher
│   │   ├── CauseBar.jsx        # Cause allocation bar chart
│   │   └── EditPanel.jsx       # Credence editing panel
│   └── layout/
│       ├── Header.jsx          # Reusable header component
│       └── ProgressBar.jsx     # Progress indicator
├── utils/
│   ├── calculations.js         # All calculation logic
│   │   ├── calculateCauseValue
│   │   ├── calculateMaxEV
│   │   ├── calculateVarianceVoting
│   │   └── adjustCredences
│   └── helpers.js              # Helper functions
│       ├── selectSingleOption
│       └── getSelectedOption
├── constants/
│   └── config.js               # Constants (CAUSES, MULTIPLIERS, options data)
└── styles/
    ├── global.css              # Global styles and resets
    ├── variables.css           # CSS custom properties (colors, fonts)
    └── components/             # Component-specific styles (if needed)
```

### Tasks

- [ ] Create directory structure
- [ ] Plan component boundaries
- [ ] Identify shared styles and extract to CSS variables

---

## Phase 3: Extract Constants & Configuration

### Tasks

- [ ] Create `src/constants/config.js`
- [ ] Extract `CAUSES` object
- [ ] Extract `ANIMAL_MULTIPLIERS` and `FUTURE_MULTIPLIERS`
- [ ] Extract question options configurations (animal & future)
- [ ] Extract color palette constants
- [ ] Extract font family constants

---

## Phase 4: Extract Utility Functions

### Tasks

- [ ] Create `src/utils/calculations.js`
  - [ ] Move `calculateCauseValue` function
  - [ ] Move `calculateMaxEV` function
  - [ ] Move `calculateVarianceVoting` function
  - [ ] Move `adjustCredences` function (auto-balancing logic)
- [ ] Create `src/utils/helpers.js`
  - [ ] Move `selectSingleOption` function
  - [ ] Move `getSelectedOption` function
- [ ] Add JSDoc comments to all utility functions
- [ ] Ensure all functions are pure (no side effects)

---

## Phase 5: Extract Styling

### Tasks

- [ ] Create `src/styles/variables.css`
  - [ ] Define color palette CSS variables
  - [ ] Define typography variables (fonts, sizes, weights)
  - [ ] Define spacing scale
  - [ ] Define border radius values
  - [ ] Define transition/animation values
- [ ] Create `src/styles/global.css`
  - [ ] Add CSS reset/normalize
  - [ ] Add global background gradient
  - [ ] Add font imports (Cormorant Garamond, Source Sans Pro)
  - [ ] Add global typography styles
- [ ] Identify inline styles that can be extracted to CSS classes
- [ ] Create CSS modules for complex components if needed

---

## Phase 6: Extract UI Components

### Small Components First

- [ ] Create `src/components/ui/OptionButton.jsx`
  - [ ] Extract component with props interface
  - [ ] Extract inline styles to CSS module or styled component
  - [ ] Test component in isolation
- [ ] Create `src/components/ui/CredenceSlider.jsx`
  - [ ] Extract component
  - [ ] Handle slider styling
- [ ] Create `src/components/ui/CompactSlider.jsx`
  - [ ] Extract component
  - [ ] Handle compact styling
- [ ] Create `src/components/ui/ModeToggle.jsx`
  - [ ] Extract component
  - [ ] Handle mode switching logic
- [ ] Create `src/components/ui/CauseBar.jsx`
  - [ ] Extract component
  - [ ] Handle bar chart rendering
- [ ] Create `src/components/ui/EditPanel.jsx`
  - [ ] Extract component
  - [ ] Handle panel expand/collapse

### Layout Components

- [ ] Create `src/components/layout/Header.jsx`
  - [ ] Extract header with props for different states
- [ ] Create `src/components/layout/ProgressBar.jsx`
  - [ ] Extract progress bar with percentage prop

---

## Phase 7: Extract Screen Components

### Tasks

- [ ] Create `src/components/WelcomeScreen.jsx`
  - [ ] Extract welcome screen JSX
  - [ ] Import and use Header component
  - [ ] Handle "Start Quiz" button click
  - [ ] Apply extracted styles
- [ ] Create `src/components/QuestionScreen.jsx`
  - [ ] Create reusable question template
  - [ ] Accept props: question data, credences, handlers, mode, etc.
  - [ ] Import UI components (OptionButton, CredenceSlider, ModeToggle)
  - [ ] Import layout components (Header, ProgressBar)
- [ ] Create `src/components/ResultsScreen.jsx`
  - [ ] Extract results screen JSX
  - [ ] Import CauseBar, EditPanel, CompactSlider
  - [ ] Handle calculation display
  - [ ] Handle credence editing

---

## Phase 8: Refactor Main Quiz Component

### Tasks

- [ ] Create `src/components/MoralParliamentQuiz.jsx`
- [ ] Keep state management (useState hooks)
- [ ] Keep step navigation logic
- [ ] Import all screen components
- [ ] Import utility functions for calculations
- [ ] Import constants from config
- [ ] Render appropriate screen based on `currentStep`
- [ ] Pass down props to child components
- [ ] Verify no logic is duplicated

---

## Phase 9: Create Entry Points

### Tasks

- [ ] Create `src/App.jsx`
  - [ ] Import MoralParliamentQuiz component
  - [ ] Import global styles
  - [ ] Render MoralParliamentQuiz
- [ ] Create `src/main.jsx`
  - [ ] Import React and ReactDOM
  - [ ] Import App component
  - [ ] Render app to DOM
- [ ] Create `index.html`
  - [ ] Set up HTML boilerplate
  - [ ] Link to main.jsx
  - [ ] Set page title and meta tags

---

## Phase 10: Testing & Verification

### Functional Testing

- [ ] Test welcome screen loads
- [ ] Test navigation: Welcome → Animals → Future → Results
- [ ] Test back navigation at each step
- [ ] Test option button selection (sets credence to 100%)
- [ ] Test mode toggle (Options ↔ Custom Mix)
- [ ] Test slider auto-balancing in question screens
- [ ] Test slider auto-balancing in results edit panels
- [ ] Test calculation results match original
- [ ] Test credence editing in results screen
- [ ] Test edit panel expand/collapse
- [ ] Test "Reset" buttons (individual and "Reset All")
- [ ] Test visual change indicators when credences are modified
- [ ] Verify all icons render (lucide-react)

### Visual Testing

- [ ] Compare visual output against original
- [ ] Test responsive layout
- [ ] Verify color gradients and transitions
- [ ] Verify typography (fonts, sizes, weights)
- [ ] Check button hover states
- [ ] Check slider styling and fill gradients

### Code Quality

- [ ] Remove all console.logs
- [ ] Ensure no unused imports
- [ ] Verify all components have clear prop interfaces
- [ ] Add PropTypes or TypeScript types (optional enhancement)
- [ ] Ensure consistent code formatting
- [ ] Run any linting tools

---

## Phase 11: Documentation & Cleanup

### Tasks

- [ ] Add README.md with:
  - [ ] Project description
  - [ ] How to install dependencies
  - [ ] How to run dev server
  - [ ] How to build for production
  - [ ] Project structure explanation
- [ ] Add code comments where logic is complex
- [ ] Document calculation algorithms
- [ ] Remove old `moral-parliament-quiz-v6.jsx` file
- [ ] Clean up any temporary files

---

## Phase 12: Optional Enhancements (Post-refactor)

These can be considered after core refactoring is complete:

- [ ] Consider TypeScript migration for type safety
- [ ] Add unit tests for calculation functions
- [ ] Add component tests with Testing Library
- [ ] Consider CSS-in-JS solution (styled-components, emotion) vs CSS modules
- [ ] Add accessibility improvements (ARIA labels, keyboard navigation)
- [ ] Add animations with framer-motion or similar
- [ ] Consider state management library if app grows (Zustand, Redux)
- [ ] Add error boundaries
- [ ] Add loading states (if data fetching added later)

---

## Success Criteria

✅ Application runs on Vite dev server
✅ All functionality works identically to original
✅ Code is organized into logical, single-responsibility files
✅ Styling is extracted and maintainable
✅ Calculations are isolated and testable
✅ Components are reusable and composable
✅ Code is more readable and easier to understand
✅ No breaking changes to user experience

---

## Notes

- **Priority**: Maintain exact behavior - no feature changes during refactor
- **Style approach**: Start with CSS modules or CSS variables, can migrate to CSS-in-JS later if needed
- **Component size**: Keep components small and focused (< 150 lines ideally)
- **Testing strategy**: Manual testing during development, consider automated tests after refactor
- **Performance**: Should be equivalent or better than original (Vite's HMR is fast)
