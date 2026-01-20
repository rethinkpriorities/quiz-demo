# Moral Parliament Quiz - Development Guide

## ✅ Completed: Initial Refactoring (Phases 1-11)

The application has been successfully refactored from a single 816-line JSX file into a modular architecture with 25 well-organized files. All core functionality has been preserved and bugs have been fixed.

**Status:** Production-ready and fully functional ✅

---

## 🎯 Current Focus: Feature Development & Prototyping

The project is now in **iterative feature development mode**. We add configurable features one at a time, test them, and create prototype snapshots for external feedback.

---

## Development Notes

### Dev Server URL
The app is served at `http://localhost:5173/quiz-demo/` (not the root). This is configured via `base: '/quiz-demo/'` in `vite.config.js`.

When testing the dev server, always use:
```bash
curl http://localhost:5173/quiz-demo/
```

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

### 1. Preset Credences Feature
**Category:** UI
**Flag:** `ui.presets`
**Dependencies:** None (Question Configuration System completed)

**Description:**
Allow users to quickly set credences to predefined viewpoints (e.g., "Rethink Priorities' answer", "Classical Utilitarian", "Longtermist") instead of manually adjusting sliders.

**Requirements:**
- **Per-question presets**: Each question can have its own set of preset options
- **Optional**: Some questions may have no presets (preset UI doesn't appear)
- **UI placement**: Left or right of answer choices on desktop (mobile behavior TBD)
- **Button style**: Similar to answer choice buttons (OptionButton component style)
- **Display before selection**: Only name and description visible initially
- **Interactive exploration**:
  - User clicks preset button → sliders animate to preset values
  - User can click different presets to explore different viewpoints
  - Question doesn't advance until "Continue" clicked
- **Manual override**:
  - User can still manually adjust sliders after selecting preset
  - Manual adjustment visually unselects the active preset
- **Visual feedback**: Selected preset shows active/selected state

**Data Structure:**
```json
{
  "questions": [
    {
      "id": "animal",
      "categoryLabel": "Species Weighting",
      "heading": "How do you value animal welfare...",
      "options": [...],
      "presets": [
        {
          "id": "rethink-priorities",
          "name": "Rethink Priorities",
          "description": "The worldview of the organization running this quiz",
          "credences": {
            "equal": 60,
            "10x": 30,
            "100x": 10
          }
        },
        {
          "id": "utilitarian",
          "name": "Classical Utilitarian",
          "description": "Equal weight to all sentient beings",
          "credences": {
            "equal": 100,
            "10x": 0,
            "100x": 0
          }
        }
      ]
    },
    {
      "id": "future",
      "categoryLabel": "Time Preference",
      "heading": "How do you value future humans...",
      "options": [...],
      "presets": []  // No presets for this question - UI won't show
    }
  ]
}
```

**UI/UX Flow:**
1. Question screen loads with preset buttons in sidebar (if presets exist)
2. User clicks "Rethink Priorities" preset
3. Sliders smoothly animate to preset values
4. "Rethink Priorities" button shows selected/active state
5. User can click "Classical Utilitarian" to see those values
6. Previous preset unselects, new one selects, sliders animate
7. User manually drags a slider
8. Selected preset visually unselects (user is now in "custom" mode)
9. User clicks "Continue" when satisfied

**Technical Notes:**
- Need to track `selectedPresetId` state per question
- Manual slider adjustment clears `selectedPresetId`
- Preset selection triggers same credence update flow as manual adjustment (with animation)
- Preset UI component conditionally renders only if `question.presets?.length > 0`

---

### 2. Welcome Screen Preview Toggle
**Category:** UI
**Flag:** `ui.welcomePreview`
**Dependencies:** None

**Description:**
Add a feature flag to hide the "You'll be asked about:" preview box on the welcome screen.

**Current State:**
The welcome screen already dynamically generates preview items from `questionsConfig` using `emoji` and `previewText` fields. This feature just adds the ability to hide the box entirely.

**Implementation:**
- Add `ui.welcomePreview` flag to `config/features.json` (default: `true`)
- Wrap the `infoBox` div in WelcomeScreen.jsx with conditional render based on flag
- When `false`: entire preview box disappears

---

### 3. Question Types System
**Category:** UI
**Flag:** `ui.questionTypes`
**Dependencies:** None (Question Configuration System completed)

**Description:**
Add a question type system that allows different presentation modes. The first two types are "default" (current slider-based questions) and "no-credence" (discrete choice with no visible credences).

**Question Types:**

#### Type: "default"
- Current behavior: Options mode with toggle to Custom Mix sliders
- Sliders visible in results screen edit panels
- Presets supported
- Colors: Current option colors (#81B29A, #98C1D9, #E07A5F)

#### Type: "no-credence"
- **Question Screen:**
  - Only option buttons visible (no toggle, no slider mode)
  - User clicks option → shows selected state
  - Must click "Continue" to advance (no auto-advance)
  - Selecting an option sets credence to 100% for that option, 0% for others
- **Results Screen:**
  - Edit panel shows three abbreviated buttons (like current panel short labels)
  - Clicking button switches selection (100/0/0 pattern)
  - No sliders visible
- **No presets:** Preset UI doesn't render for "no-credence" questions
- **Colors:** Defined separately in `src/constants/config.js` (different palette from default type)

**Type Specification in Config:**
```json
{
  "questions": [
    {
      "id": "animal",
      "type": "default",  // or omit, or null - all normalize to "default"
      "options": [...]
    },
    {
      "id": "binary-choice",
      "type": "no-credence",
      "options": [...]
    }
  ]
}
```

**Type Normalization:**
- Config can omit type, set to `null`, or set to `"default"`
- All these normalize to `"default"` string on build/load
- Validation ensures unknown types throw helpful errors

**Color System:**

In `src/constants/config.js`:
```js
export const QUESTION_TYPE_COLORS = {
  default: ['#81B29A', '#98C1D9', '#E07A5F'],
  'no-credence': ['#colorA', '#colorB', '#colorC']  // TBD
};
```

Colors accessed by: `QUESTION_TYPE_COLORS[question.type][optionIndex]`

**Implementation Changes:**

1. **QuestionScreen component:**
   - Accept `questionType` prop
   - Conditionally render `<ModeToggle>` only if type === "default"
   - Force `inputMode = 'options'` for "no-credence" type
   - Option selection for "no-credence" sets 100/0/0 credences

2. **ResultsScreen edit panels:**
   - Check question type when rendering edit UI
   - For "default": render sliders (current behavior)
   - For "no-credence": render three buttons with short labels

3. **Preset UI:**
   - Only render if `question.presets?.length > 0 && question.type === 'default'`

4. **Color resolution:**
   - Replace hardcoded option colors with lookup: `QUESTION_TYPE_COLORS[questionType][index]`

**Technical Notes:**
- Under the hood, "no-credence" still uses credence state (100/0/0 pattern)
- Calculation functions unchanged - still receive credence objects
- Type checking happens at render time in components
- May need separate button styling for "no-credence" results panel buttons

**Future Types (not implemented yet):**
- Binary choice (yes/no, two options only)
- Ranking (order preferences)
- Numeric input (direct percentage entry)
- Multi-select (allocate across more than 3 options)

---

### 4. Intermission Question Type
**Category:** UI
**Flag:** `ui.intermissionType`
**Dependencies:** Requires Feature #3 (Question Types System)

**Description:**
Add "intermission" question type - a pause in the quiz that displays partial results and contextual copy based on answers so far. Intermissions don't collect input and don't count toward question progress.

**Intermission Behavior:**

- **Display:**
  - Top: Results component (same as top of results screen - cause allocation display)
  - Bottom: Title + body paragraph with contextual copy
- **Navigation:**
  - User can click "Continue" to advance
  - User can click "Back" to return to previous question
  - Intermission can be navigated back to like any other question
- **Progress Bar:**
  - Intermissions don't count toward total question count
  - Omitted from progress calculation (e.g., 4 questions + 1 intermission = "Question 3 of 4")
  - No visual indicator on progress bar in first version
- **Results Screen:**
  - Intermissions don't appear in results screen
  - No stored credences (no edit panel)
- **Calculations:**
  - Results shown are calculated from questions answered *before* this intermission

**Conditional Copy System:**

Intermissions can show different copy based on user's credences so far.

**Logic:**
1. Test conditions in array order (top to bottom)
2. First condition that evaluates to `true` → display that copy
3. Last item in array has no condition (default/else case)
4. Single condition per variant (complex logic via careful ordering)

**Operators:**
- `"greater_than"`: credence value > threshold
- `"less_than"`: credence value < threshold
- For `>=` or `<=`, adjust threshold (e.g., `>= 50` becomes `> 49.999`)

**Config Structure:**
```json
{
  "id": "intermission-1",
  "type": "intermission",
  "copyVariants": [
    {
      "condition": {
        "questionId": "animal",
        "optionKey": "equal",
        "operator": "greater_than",
        "value": 50
      },
      "title": "You lean toward animal welfare",
      "body": "Based on your answers so far, you're assigning significant credence to animals mattering equally to humans. This perspective will influence how the tool allocates resources between global health and animal welfare causes."
    },
    {
      "condition": {
        "questionId": "animal",
        "optionKey": "100x",
        "operator": "greater_than",
        "value": 60
      },
      "title": "You strongly prioritize humans",
      "body": "Your credences suggest a strong preference for human-focused interventions. The tool will weight global health causes more heavily than animal welfare in your results."
    },
    {
      "title": "Your moral parliament is taking shape",
      "body": "You've expressed uncertainty across different moral views. This tool will help you see how that uncertainty translates into resource allocation across causes."
    }
  ]
}
```

**Copy Format:**
- Title and body are plaintext strings
- No markdown or HTML in first version
- Line breaks preserved in body text

**Implementation Details:**

1. **IntermissionScreen Component:**
   - Displays results component at top (reuse from ResultsScreen)
   - Displays title and body at bottom
   - Back/Continue buttons (standard navigation)

2. **Conditional Evaluation:**
   - Function `evaluateIntermissionConditions(copyVariants, currentCredences)`
   - Iterates through variants, tests conditions
   - Returns first matching variant (or last variant if no conditions match)
   - Accesses credence: `currentCredences[condition.questionId][condition.optionKey]`

3. **Progress Calculation:**
   - Filter out intermissions when calculating progress
   - `questionsCount = allItems.filter(q => q.type !== 'intermission').length`
   - Current question number excludes intermissions before current position

4. **Navigation State:**
   - Intermissions included in step/navigation sequence
   - User can navigate to/from intermissions normally
   - No credence state stored for intermissions

5. **Results Display:**
   - Calculate partial results from questions answered up to (but not including) this intermission
   - Pass subset of credences to calculation functions
   - Display MaxEV, Parliament, etc. based on incomplete data

**Validation:**
- Ensure last copyVariant has no condition (fail fast if missing default)
- Validate operator is "greater_than" or "less_than"
- Validate questionId references valid question before this intermission
- Validate optionKey exists in referenced question

**Technical Notes:**
- Intermissions reference questions by ID, not position (allows reordering)
- Copy selection happens at render time (dynamic)
- Results calculated fresh each time intermission is visited
- Can only reference questions that appear *before* the intermission in config order

**Future Enhancements:**
- Markdown/HTML support in copy
- Multiple conditions with AND/OR logic
- Template strings for dynamic values in copy: `"You assigned {{animal.equal}}%..."`
- Progress bar visual indicator for intermissions
- Custom result displays per intermission (not just top of results screen)

---

### 5. Difficulty Selection System
**Category:** UI
**Flag:** `ui.difficultySelection`
**Dependencies:** None (Question Configuration System completed)

**Description:**
Allow users to choose between different difficulty levels with different question sets. Each difficulty presents the same underlying moral dimensions but with different question styles and complexity.

**Difficulty Levels (Examples):**
- **Socrates:** Simple yes/no questions, intuitive choices
- **Kant:** Credence-based questions (current style)
- **Heidegger:** Esoteric philosophical scenarios, complex thought experiments

**Behavior:**

- **When enabled:**
  - Welcome → **Difficulty Selection Screen** → Questions → Results
  - User selects difficulty → locked in for entire quiz
  - All progress/credences scoped to selected difficulty

- **When disabled (default):**
  - Welcome → Questions → Results
  - Uses first difficulty in config array as default
  - No selection screen shown

**Difficulty Selection Screen:**
- Simple layout with card/button for each difficulty
- Each difficulty shows: title + description
- User clicks difficulty to select it (shows selected state)
- Single "Continue" button to proceed (difficulty locked in on continue)
- Can perform background state setup after selection, before continue

**Config Structure:**
```json
{
  "difficulties": [
    {
      "id": "socrates",
      "title": "Socrates",
      "description": "Simple yes/no questions for quick intuitive answers",
      "estimatedMinutes": 2,
      "questions": [
        {
          "id": "animal",
          "type": "no-credence",
          "heading": "Do animals matter as much as humans?",
          "options": [...]
        }
      ]
    },
    {
      "id": "kant",
      "title": "Kant",
      "description": "Express uncertainty with credence distributions across moral views",
      "estimatedMinutes": 5,
      "questions": [
        {
          "id": "animal",
          "type": "default",
          "heading": "How do you value animal welfare relative to human welfare?",
          "options": [...]
        }
      ]
    },
    {
      "id": "heidegger",
      "title": "Heidegger",
      "description": "Esoteric philosophical scenarios and complex thought experiments",
      "estimatedMinutes": 10,
      "questions": [
        {
          "id": "animal-tradeoff",
          "type": "numeric-input",  // Future question type
          "heading": "How many shrimp would you sacrifice for one human baby?",
          "credenceMapping": "..."  // Defined when question type is implemented
        }
      ]
    }
  ]
}
```

**Key Design Decisions:**

1. **Result Comparability:**
   - All difficulties produce same underlying credence dimensions (animal/future/scale/certainty)
   - Question design and credence mapping handled by human philosophers/mathematicians
   - Not our concern to ensure comparability - trust the config

2. **Separate Question Arrays:**
   - Each difficulty has completely independent question set
   - No shared questions with variants
   - Simpler config structure, easier to maintain

3. **Default Behavior:**
   - When flag disabled: use `difficulties[0]` as default
   - Can be changed later, but simplifies initial implementation

4. **No Mid-Quiz Switching:**
   - Difficulty locked once user clicks continue
   - Only way to change: reset button on results screen (separate feature)

**Implementation Details:**

1. **State Management:**
   ```js
   const [selectedDifficulty, setSelectedDifficulty] = useState(null);
   // All credences/progress scoped to selectedDifficulty
   ```

2. **Progress Calculation:**
   - Based on selected difficulty's question count
   - Filter out intermissions as usual
   - `progress = currentIndex / selectedDifficulty.questions.filter(q => q.type !== 'intermission').length`

3. **Navigation:**
   - Add DIFFICULTY_SELECTION step before first question
   - `currentStep` can be difficulty ID or question index within that difficulty

4. **Header Subtitle:**
   - Welcome screen shows estimated time from selected difficulty
   - Or default to first difficulty if not yet selected

**Validation:**
- Ensure at least one difficulty exists
- Ensure all difficulties have required fields (id, title, description, questions)
- Validate question IDs unique within each difficulty (can duplicate across difficulties)

**Future Considerations:**
- Special question types (numeric-input, ranking, etc.) will define their own credence calculations
- Each question type feature will document how answers map to credences
- Heidegger difficulty may require many custom question types

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

### Reset Button Feature
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

### Slider Lock Feature
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

**Known Limitations:**
- State management has reached 30+ props threaded through components (refactor to Context API planned)

---

### Calculation Debugger Feature
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

### Question Configuration + Context API Refactor
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

## 🗂️ Backlog: Code Quality & Enhancements

These items are deprioritized but may be addressed when development pace slows down. General rule: keep the codebase readable as we go.

### Code Quality Polish
- [x] **Context API Refactor** - Replaced prop drilling with React Context (completed with Question Configuration System)
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
- [ ] Question type system (different presentation modes)
- [ ] Consider adding TypeScript (major undertaking)

---

## References

- **config/causes.json** - Cause definitions (points, colors, flags)
- **config/questions.json** - Question definitions and worldview dimensions
- **config/features.json** - Feature flag configuration
- **src/context/QuizContext.jsx** - React Context provider and state management
- **src/utils/calculations.js** - Calculation functions and worldview generation
- **scripts/snapshot.sh** - Prototype snapshot builder
- **prototypes/index.html** - Index of all prototype builds
- **README.md** - Full project documentation
