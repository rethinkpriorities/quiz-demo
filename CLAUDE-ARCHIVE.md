# Completed Features Archive

This file contains detailed implementation notes for completed features. For current development, see `CLAUDE.md`.

---

## Refactoring & Initial Setup
**Date:** 2026-01-19
**Prototype:** N/A (baseline)
**Description:**
- Refactored from single 816-line file to 25-file modular architecture
- Implemented sophisticated slider UX with ratio preservation and smooth animations
- Set up ESLint, Prettier, and pre-commit hooks

---

## Reset Button Feature
**Date:** 2026-01-19
**Category:** UI
**Flag:** `ui.resetButton`
**Prototype:** `prototype-reset-button` (2026-01-19)
**Dependencies:** None

**Description:**
Adds a "Start Over" button to the results screen that clears all quiz state and returns user to the welcome screen.

**Implementation:**
- Button appears on results screen next to "← Back to Quiz"
- Clicking shows confirmation dialog: "Are you sure? This will clear all your answers and return to the beginning."
- On confirm: resets all credences, input modes, expanded panels, and returns to welcome screen
- Button styled as secondary/warning (orange border, transparent background)
- Conditionally rendered based on `features.ui.resetButton` flag

**Testing:**
- Set up Vitest + React Testing Library infrastructure
- 5 passing tests covering:
  - Button visibility with flag enabled/disabled
  - Confirmation dialog behavior
  - Reset functionality when confirmed/cancelled
- Tests run in pre-commit hook alongside linting

**Files Changed:**
- `config/features.json` - Added `ui.resetButton` flag
- `src/components/MoralParliamentQuiz.jsx` - Added `handleResetQuiz()` function
- `src/components/ResultsScreen.jsx` - Added reset button with confirmation
- `src/styles/components/Results.module.css` - Added `.resetButton` styles
- `src/components/ResultsScreen.test.jsx` - Test suite for feature
- `.husky/pre-commit` - Added test runner to git hook

**Test Infrastructure Added:**
- Vitest test runner (fast, Vite-native)
- React Testing Library for component testing
- `vitest.config.js` configuration
- `src/test/setup.js` global test setup
- Test scripts: `npm test`, `npm run test:run`, `npm run test:ui`
- Pre-commit hook runs tests before allowing commits

---

## Slider Lock Feature
**Date:** 2026-01-19
**Category:** UI
**Flag:** `ui.sliderLock`
**Prototype:** `prototype-slider-lock-v2` (2026-01-19)
**Dependencies:** None

**Description:**
Allows users to lock any slider in place, preventing it from moving while other sliders adjust proportionally. Visual indicators show the maximum reach for unlocked sliders when one is locked.

**Implementation:**
- Lock button (monochrome icon from lucide-react) appears at right end of each credence slider
- Only one slider can be locked at a time (due to three-slider constraint totaling 100%)
- Clicking lock on another slider moves the lock to that slider
- Locked sliders are disabled and cannot be dragged
- Lock state is per-question and persists between question view and results view
- All sliders start unlocked by default

**Visual Feedback:**
- Locked slider: Lock icon appears solid/opaque, slider is disabled with `not-allowed` cursor
- Unlocked sliders when sibling is locked:
  - Semi-transparent white vertical line shows maximum reach point
  - Darker gray background appears beyond the limit
  - Line and color change positioned to account for browser slider thumb offset
- Lock icon opacity: 0.3 default, 0.6 on hover, 1.0 when locked

**Technical Implementation:**
- Added locked slider state management (4 state pairs for 4 questions)
- Updated `adjustCredences()` to skip locked slider and clamp other sliders to maximum allowed value
- Both `CredenceSlider` (question screens) and `CompactSlider` (results edit panels) support locking
- Thumb offset calculation: `calc(${maxAllowed}% + ${(50 - maxAllowed) * 0.16}px)` accounts for 16px thumb width
- Locked sliders completely ignore all input events (onChange, drag handlers)

**Testing:**
- 7 passing tests covering:
  - Lock button visibility with flag enabled/disabled
  - Lock/unlock functionality
  - Slider disabled state when locked
  - lockedKey parameter passed to onChange handler
- All tests passing (12 total across test suite)

**Files Changed:**
- `config/features.json` - Added `ui.sliderLock` flag
- `src/components/MoralParliamentQuiz.jsx` - Added locked key state for all 4 questions, passed to components
- `src/components/QuestionScreen.jsx` - Accept and pass through lockedKey/setLockedKey props
- `src/components/ResultsScreen.jsx` - Accept and pass through locked key state for all 4 questions
- `src/components/ui/CredenceSlider.jsx` - Added lock button, visual indicators, lock handling
- `src/components/ui/CompactSlider.jsx` - Added lock button, visual indicators, lock handling
- `src/components/ui/EditPanel.jsx` - Accept and pass through lockedKey/setLockedKey props
- `src/utils/calculations.js` - Updated `adjustCredences()` to handle locked sliders
- `src/styles/components/Slider.module.css` - Added styles for lock button, limit line, slider container
- `src/components/ui/CredenceSlider.test.jsx` - Test suite for lock feature

---

## Calculation Debugger Feature
**Date:** 2026-01-19
**Category:** Developer
**Flag:** `developer.calculationDebugger`
**Prototype:** N/A (developer tool - no snapshot needed)
**Dependencies:** None

**Description:**
Developer tool for testing different calculation parameters without editing code. Allows runtime modification of multipliers, point values, and cause configurations.

**Implementation:**
- Fixed "Settings" button at bottom-right corner (z-index 9999), visible on all screens
- Modal overlay with form inputs for all calculation parameters
- Editable constants include:
  - **Causes**: points, scaleFactor, helpsAnimals, helpsFutureHumans, isSpeculative for each cause
  - **Multipliers**: Animal, Future, Scale (exponents), and Certainty multipliers (equal, 10x, 100x values)
- Save button applies changes; modal closes on save
- No reset button in modal - reload page to restore defaults
- Zero validation - user responsible for valid numbers

**Technical Implementation:**
- Added `debugConfig` state to `MoralParliamentQuiz.jsx`
- Modified all 4 calculation functions (`calculateMaxEV`, `calculateVarianceVoting`, `calculateMergedFavorites`, `calculateMaximin`) to accept optional `config` parameter
- When `config` is provided, functions use config values instead of imported defaults
- CalculationDebugger component manages its own form state, passes config to parent on save
- Minimal CSS styling (dev tool, not production-ready)

**Files Changed:**
- `config/features.json` - Added `developer.calculationDebugger` flag
- `src/components/CalculationDebugger.jsx` - New component (modal + button)
- `src/styles/components/Debugger.module.css` - Minimal styles for debugger
- `src/utils/calculations.js` - Added optional config parameter to 4 calculation functions
- `src/components/MoralParliamentQuiz.jsx` - Added debugConfig state, pass to calculations, render debugger

**Usage:**
1. Enable flag: set `developer.calculationDebugger: true` in `config/features.json`
2. "Settings" button appears at bottom-right on all screens
3. Click to open modal, modify values, click Save
4. Results immediately recalculate with new values
5. Reload page to restore original values

---

## Question Configuration + Context API Refactor
**Date:** 2026-01-19
**Category:** Developer
**Prototype:** N/A (infrastructure - no snapshot needed)
**Dependencies:** None

**Description:**
Major architectural refactor combining two related features:
1. **Question Configuration System** - Move question definitions from hardcoded React to JSON config
2. **Context API** - Replace prop drilling (30+ props) with React Context

**Config Files Created:**
- `config/questions.json` - All question definitions with embedded `worldviewDimension` objects
- `config/causes.json` - Cause definitions with points, colors, and boolean flags

**Key Changes:**

1. **Questions Config** (`config/questions.json`):
   - Each question has `id`, `worldviewDimension`, UI text, and `options` array
   - `worldviewDimension` specifies how the question affects calculations:
     - `appliesWhen`: Boolean flag on causes (e.g., `"helpsAnimals"`)
     - `appliesTo`: Cause property (e.g., `"scaleFactor"`)
     - `applyAs`: `"multiplier"` or `"exponent"`
     - `options`: Numeric values for each option key

2. **Causes Config** (`config/causes.json`):
   - Cause definitions with `name`, `color` (hex), `points`, `scaleFactor`
   - Boolean flags: `helpsAnimals`, `helpsFutureHumans`, `isSpeculative`
   - `defaultCredences` for initial slider values

3. **Context API** (`src/context/QuizContext.jsx`):
   - Single provider wraps entire app
   - State: `currentStep`, `questions` (keyed by ID), `expandedPanel`, `debugConfig`
   - Actions: `goToStep`, `setCredences`, `setInputMode`, `setLockedKey`, etc.
   - Derived values: `calculationResults`, `hasChanged`, `progressPercentage`
   - `stateMap` provides per-question state accessors for components

4. **Validation** (runs on dev startup):
   - `validateCauses.js` - Validates causes.json structure
   - `validateQuestions.js` - Validates questions.json, cross-references with causes

5. **Calculations** (`src/utils/calculations.js`):
   - `buildDimensionsFromQuestions()` extracts dimensions from questions config
   - `generateWorldviews()` yields all worldview combinations (cartesian product)
   - All calculation functions use config-driven dimensions

**Files Changed:**
- `config/causes.json` - NEW
- `config/questions.json` - NEW (updated structure)
- `src/context/QuizContext.jsx` - NEW
- `src/utils/validateCauses.js` - NEW
- `src/utils/validateQuestions.js` - NEW (updated for worldviewDimension)
- `src/utils/calculations.js` - Refactored to use config
- `src/main.jsx` - Added validation on startup
- `src/components/MoralParliamentQuiz.jsx` - Simplified, uses context
- `src/components/ResultsScreen.jsx` - Uses context instead of 30+ props
- `src/components/CalculationDebugger.jsx` - Updated imports

**Benefits:**
- Add/remove/reorder questions by editing JSON only
- No more prop drilling (30+ props eliminated)
- Centralized state management
- Config validation catches errors early
- Cleaner component code

---

## Calculation Display Configuration
**Date:** 2026-01-20
**Category:** Calculations
**Flags:** `calculations.showMaxEV`, `calculations.showParliament`, `calculations.showMergedFavorites`, `calculations.showMaximin`, `calculations.sideBySideComparison`
**Prototype:** N/A (configuration - no snapshot needed)
**Dependencies:** None

**Description:**
Controls which calculation methods appear on the results screen and how changes are displayed when users edit their credences.

**Visibility Flags:**
- `calculations.showMaxEV` - Show Max Expected Value card
- `calculations.showParliament` - Show Variance Voting card
- `calculations.showMergedFavorites` - Show Merged Favorites card
- `calculations.showMaximin` - Show Maximin card

**Default behavior:** Cards are hidden unless flag is explicitly `true`. This differs from most flags where missing = enabled.

**Side-by-Side Comparison Flag:**
- `calculations.sideBySideComparison` - Controls how credence changes are displayed
- When `true` + user has edited credences: Shows original results on left, updated results on right, with arrow divider (→) between them
- When `false` or no changes: Shows standard single grid with inline change indicators (ghost bars + ↑↓ arrows)

**Implementation:**
- Conditional rendering in `ResultsScreen.jsx` using `=== true` checks
- Compact card styles for side-by-side mode (smaller icons, no subtitles/footers)
- `CauseBar` component accepts `simpleMode` prop for compact rendering
- Slide-in animations for comparison view
- Mobile responsive: stacks vertically with rotated arrow on small screens

**Files Changed:**
- `config/features.json` - Added all calculation flags
- `src/components/ResultsScreen.jsx` - Conditional rendering for visibility and comparison mode
- `src/components/ui/CauseBar.jsx` - Added `simpleMode` prop
- `src/styles/components/Results.module.css` - Comparison container, divider, animations
- `src/styles/components/CauseBar.module.css` - Compact mode styles

---

## Question Types System
**Date:** 2026-01-21
**Category:** UI
**Flag:** `ui.questionTypes`
**Prototype:** `prototype-question-types` (2026-01-21)
**Dependencies:** None

**Description:**
Different presentation modes for questions, controlling whether users see discrete choices, sliders, or both.

**Question Types:**
| Type | Behavior |
|------|----------|
| `default` | Mode toggle available - user can switch between "Pick One" and "Custom Mix" |
| `selection` | Discrete choice only - pick one option (100/0/0 credences), no sliders |
| `credence` | Sliders only - custom mix mode, no discrete "Pick One" option |

**Implementation:**
- Question type specified in `config/questions.json` via `"type"` field
- Missing/null type defaults to `"default"`
- Feature defaults to ON (use `"questionTypes": false` to disable)
- `QUESTION_TYPE_COLORS` in `src/constants/config.js` defines per-type color palettes (placeholder: same colors for all types, pending UX design)
- `QUESTION_TYPES` constant provides type identifiers
- `QuizContext.jsx` assigns colors based on question type when feature enabled
- `QuestionScreen.jsx` conditionally renders mode toggle and forces appropriate input mode

**Files Changed:**
- `config/features.json` - Added `ui.questionTypes` flag
- `src/constants/config.js` - Added `QUESTION_TYPE_COLORS` and `QUESTION_TYPES` constants
- `src/context/QuizContext.jsx` - Type-specific color assignment via `getColorsForQuestion()`
- `src/components/QuestionScreen.jsx` - Conditional mode toggle, forced input mode for selection/credence types
- `src/components/ui/CompactSelection.jsx` - NEW: Selection button component for results edit panels
- `src/components/ui/EditPanel.jsx` - Added `questionType` prop, uses CompactSelection for selection type
- `src/components/ResultsScreen.jsx` - Passes `questionType` to EditPanel
- `src/styles/components/Slider.module.css` - Added `.compactSelection` styles

**Results Screen Behavior:**
Edit panels respect question types:
- `selection` type: CompactSelection buttons (click to select, sets 100/0/0 credences)
- `credence` type: CompactSlider (current behavior)
- `default` type: CompactSlider (current behavior)

**Tests Added:**
- `src/components/QuestionScreen.test.jsx` - 6 tests for mode toggle visibility by question type
- `src/components/ui/EditPanel.test.jsx` - 8 tests for CompactSelection vs CompactSlider rendering

---

## Intermission Question Type
**Date:** 2026-01-21
**Category:** UI
**Flag:** N/A (requires `ui.questionTypes` to be enabled)
**Prototype:** `prototype-intermission-v1` (2026-01-21)
**Dependencies:** Question Types System

**Description:**
A new question type that pauses the quiz to show partial calculation results with contextual copy. Useful for providing feedback mid-quiz or breaking up longer question sequences.

**Behavior:**
- Displays title and body text from question config
- Shows all enabled `ResultCard` components with current calculation results
- Does not count toward progress bar or "Question X of Y" display
- No credences stored (no state, no edit panel on results screen)
- When `ui.questionTypes` is disabled, intermissions are completely filtered out

**Question Config:**
```json
{
  "id": "intermission1",
  "type": "intermission",
  "title": "Halfway There",
  "body": "Based on your answers so far..."
}
```

**Implementation:**

1. **Constants** (`src/constants/config.js`):
   - Added `INTERMISSION: 'intermission'` to `QUESTION_TYPES`

2. **IntermissionScreen** (`src/components/IntermissionScreen.jsx`):
   - New component displaying Header, ProgressBar, title/body, ResultCards, and navigation
   - Uses shared `ResultCard` component for calculation display
   - Respects `calculations.showMaxEV` and `calculations.showMergedFavorites` feature flags

3. **ResultCard** (`src/components/ui/ResultCard.jsx`):
   - NEW: Extracted shared component from ResultsScreen
   - Used by both ResultsScreen and IntermissionScreen
   - Props: `methodKey`, `results`, `evs`, `originalResults`, `causeEntries`, `hasChanged`, `simpleMode`

4. **QuizContext** (`src/context/QuizContext.jsx`):
   - Filters intermissions from `questions` array when `ui.questionTypes` is disabled
   - Excludes intermissions from `totalQuestions` count
   - Excludes intermissions from `progressPercentage` calculation
   - Excludes intermissions from `questionNumber` display
   - Excludes intermissions from `createInitialQuestionsState()` (no credence state)
   - Excludes intermissions from `extractCredences()` and `stateMap`

5. **Router** (`src/components/MoralParliamentQuiz.jsx`):
   - Routes to `IntermissionScreen` when `currentQuestion.type === QUESTION_TYPES.INTERMISSION`

6. **Calculations** (`src/utils/calculations.js`):
   - `buildDimensionsFromQuestions()` filters out intermissions (no `worldviewDimension`)

7. **Validation** (`src/utils/validateQuestions.js`):
   - Special validation for intermission questions: only requires `id`, `title`, `body`

8. **Filtering** (multiple components):
   - `WelcomeScreen.jsx` - Filters intermissions from question preview
   - `ResultsScreen.jsx` - Filters intermissions from edit panel list

**Files Changed:**
- `src/constants/config.js` - Added `INTERMISSION` to `QUESTION_TYPES`
- `src/components/IntermissionScreen.jsx` - NEW
- `src/components/ui/ResultCard.jsx` - NEW (extracted from ResultsScreen)
- `src/styles/components/Intermission.module.css` - NEW
- `src/context/QuizContext.jsx` - Progress exclusion, state filtering
- `src/components/MoralParliamentQuiz.jsx` - Router for intermission type
- `src/components/ResultsScreen.jsx` - Uses ResultCard, filters intermissions
- `src/components/WelcomeScreen.jsx` - Filters intermissions from preview
- `src/utils/calculations.js` - Filters intermissions from dimensions
- `src/utils/validateQuestions.js` - Special validation rules
- `config/questions.json` - Added example intermission after question 2

**Tests Added:**
- `src/context/QuizContext.intermission.test.jsx` - 8 tests covering:
  - Progress calculation excludes intermissions (5 tests)
  - Feature flag filtering behavior (3 tests)

**Future Enhancement (deferred):**
Conditional copy variants based on user answers:
```json
{
  "copyVariants": [
    {
      "condition": { "questionId": "animal", "optionKey": "equal", "operator": "greater_than", "value": 50 },
      "title": "You lean toward animal welfare",
      "body": "Based on your answers..."
    },
    { "title": "Default title", "body": "Default body (no condition = fallback)" }
  ]
}
```

---

## Backlog: Code Quality & Enhancements

These items are deprioritized but may be addressed when development pace slows down.

### Code Quality Polish
- [x] **Context API Refactor** - Replaced prop drilling with React Context
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
- [x] Set up Vitest for unit testing
- [ ] Write tests for calculation functions
- [x] Set up React Testing Library
- [x] Write component tests for UI elements
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
- [x] Question type system (different presentation modes)
- [ ] Consider adding TypeScript (major undertaking)
