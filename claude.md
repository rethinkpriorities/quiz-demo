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

### 1. Slider Lock Feature
**Category:** UI
**Flag:** `ui.sliderLock`

**Description:**
Add a lock icon (🔒) at the right end of each credence slider that allows users to lock one slider in place. When locked, only the other two sliders will adjust when changes are made.

**Requirements:**
- Lock emoji appears at the right end of all credence sliders
- Applies to both question screens and results panel
- Only one slider can be locked at a time (due to three-slider constraint totaling 100%)
- Clicking a lock icon when another is locked moves the lock to the new slider
- Locked slider becomes immobile (cannot be dragged)
- No visual change to locked slider appearance (just immobility)
- Lock state is global and persists between question view and results view for that question
- All sliders start unlocked by default

**Technical Notes:**
- Need to track locked slider index in state (per question)
- Adjustment logic needs to skip locked slider when distributing changes
- Lock state should be stored in question responses or separate lock state object

---

### 2. Question Configuration System
**Category:** Developer
**Flag:** None (no snapshot needed - productivity feature)

**Description:**
Move question definitions out of hardcoded React components into a JSON configuration file. Generate question screens, progress tracking, and navigation programmatically from config.

**Current State:**
- Questions hardcoded in `src/constants/config.js` (ANIMAL_QUESTION_OPTIONS, FUTURE_QUESTION_OPTIONS, etc.)
- Question screens manually instantiated in `MoralParliamentQuiz.jsx` with duplicate props
- Progress percentages, question numbers, navigation all hardcoded
- Separate state variables for each question (animalCredences, futureCredences, etc.)

**Proposed Structure:**
```json
{
  "questions": [
    {
      "id": "animal",
      "categoryLabel": "Species Weighting",
      "heading": "How do you value animal welfare relative to human welfare?",
      "instructionsOptions": "Choose the view that best represents your position, or use \"Custom Mix\" to split your credence.",
      "instructionsSliders": "Distribute your credence across these views. Sliders auto-balance to 100%.",
      "options": [
        {
          "key": "equal",
          "label": "Animals and humans matter equally",
          "description": "Equal weight to equivalent experiences",
          "panelLabel": "Equal weight",
          "panelShort": "Eq",
          "multiplier": 1
        },
        {
          "key": "10x",
          "label": "Animals matter 10× less than humans",
          "description": "Moderate speciesist view",
          "panelLabel": "10× less",
          "panelShort": "10×",
          "multiplier": 0.1
        },
        {
          "key": "100x",
          "label": "Animals matter 100× less than humans",
          "description": "Strong speciesist view",
          "panelLabel": "100× less",
          "panelShort": "100×",
          "multiplier": 0.01
        }
      ]
    }
  ]
}
```

**Design Decisions:**
- **Colors**: Fixed for options A, B, C (not per-question). Later will be per question-type.
- **Naming Convention**: Question ID `"animal"` maps to state `animalCredences` via `${id}Credences` pattern
- **All option data together**: Each option includes label, description, panel labels, and multiplier
- **No inference**: Exact match between question ID and credence collection name

**Benefits:**
- Add/remove/reorder questions without touching React code
- Enables future question type system (different renderers for different types)
- Cleaner state management (dynamic question responses object)
- Programmatic progress calculation
- Easier to validate and test question content

**Concerns & Mitigations:**
1. **No compile-time validation** → Build-time validation function with helpful errors (fail fast)
2. **More complex state management** → Use question IDs to key responses object dynamically
3. **Results screen coupling** → Needs refactor to work with dynamic questions
4. **Navigation logic** → Generate step constants from config, programmatic next/prev

**Implementation Scope:**
- Create `config/questions.json` with all current questions
- Add validation function that runs on app initialization
- Refactor `MoralParliamentQuiz` to generate questions from config
- Update state management to use dynamic question IDs (or keep individual state vars with naming convention)
- Programmatically calculate progress (currentIndex / totalQuestions)
- Refactor ResultsScreen to handle dynamic question data structure
- Update calculation functions to pull multipliers from question config instead of separate constants

**Future Extensibility:**
This sets up infrastructure for:
- Question type system (different renderers)
- Conditional question logic (skip questions based on previous answers)
- Question branching/routing
- External question sets (multiple quizzes)

---

### 3. Preset Credences Feature
**Category:** UI
**Flag:** `ui.presets`
**Dependencies:** Requires Feature #2 (Question Configuration System)

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

### 4. Dynamic Welcome Screen Preview
**Category:** UI
**Flag:** `ui.welcomePreview`
**Dependencies:** Requires Feature #2 (Question Configuration System)

**Description:**
The welcome screen currently has hardcoded preview items ("🐾 Animal vs. Human welfare", "⏳ Current vs. Future generations"). This should programmatically generate from the question configuration.

**Current State:**
- Hardcoded in `WelcomeScreen.jsx` lines 34-35
- Only shows 2 of 4 questions
- Would need code changes to add/remove/reorder questions

**Requirements:**
- Generate preview items from question config
- All questions included in preview (no filtering in first version)
- Each question needs `previewText` and `previewEmoji` in config
- Feature flag controls whether entire preview box appears
- Default: `true` (preview shows)
- When `false`: entire "You'll be asked about:" box disappears

**Updated Question Config Structure:**
```json
{
  "questions": [
    {
      "id": "animal",
      "categoryLabel": "Species Weighting",
      "previewText": "Animal vs. Human welfare",
      "previewEmoji": "🐾",
      "heading": "How do you value animal welfare...",
      "options": [...]
    },
    {
      "id": "future",
      "categoryLabel": "Time Preference",
      "previewText": "Current vs. Future generations",
      "previewEmoji": "⏳",
      "heading": "How do you value future humans...",
      "options": [...]
    },
    {
      "id": "scale",
      "categoryLabel": "Scale Sensitivity",
      "previewText": "Helping one vs. helping millions",
      "previewEmoji": "📊",
      "heading": "How much does the scale of impact matter?",
      "options": [...]
    },
    {
      "id": "certainty",
      "categoryLabel": "Evidence Preference",
      "previewText": "Proven vs. speculative interventions",
      "previewEmoji": "🔬",
      "heading": "How much do you value proven interventions...",
      "options": [...]
    }
  ]
}
```

**Implementation:**
- `WelcomeScreen` receives questions config as prop
- Maps over questions to generate preview items
- Conditionally renders entire `infoBox` div based on `features.ui.welcomePreview`
- Grid automatically adjusts for any number of questions

**Technical Notes:**
- CSS grid in `WelcomeScreen.module.css` should handle any number of items
- May need to adjust grid columns if more than 4-6 questions (responsive design)

---

### 5. Question Types System
**Category:** UI
**Flag:** `ui.questionTypes`
**Dependencies:** Requires Feature #2 (Question Configuration System)

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

### 6. Intermission Question Type
**Category:** UI
**Flag:** `ui.intermissionType`
**Dependencies:** Requires Feature #2 (Question Configuration System), Feature #5 (Question Types System)

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

### 7. Difficulty Selection System
**Category:** UI
**Flag:** `ui.difficultySelection`
**Dependencies:** Requires Feature #2 (Question Configuration System)

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

### 8. Reset Button
**Category:** UI
**Flag:** `ui.resetButton`
**Dependencies:** None

**Description:**
Add a reset button to the results screen that clears all state and returns user to welcome screen. Works independently of difficulty selection feature.

**Behavior:**
- Button appears on results screen when flag is enabled
- Clicking button:
  - Shows confirmation dialog ("Are you sure? This will clear all your answers.")
  - On confirm: Clears all state (credences, selected difficulty, etc.)
  - Returns to welcome screen
- Works with or without difficulty selection feature

**UI Placement:**
- Results screen, likely near top or in a settings/menu area
- Clear visual distinction (secondary/warning button style)
- Label: "Start Over" or "Reset Quiz"

**State Cleared:**
- All credence values (reset to defaults)
- Selected difficulty (if difficulty feature enabled)
- Any other quiz progress state
- Does NOT clear: original credences (for comparison on results screen)

**Implementation:**
```js
const handleReset = () => {
  if (confirm('Are you sure? This will clear all your answers.')) {
    // Clear all state
    setAnimalCredences({ ...DEFAULT_CREDENCES });
    setFutureCredences({ ...DEFAULT_CREDENCES });
    // ... all other credences
    setSelectedDifficulty(null);
    setCurrentStep(STEPS.WELCOME);
  }
};
```

**Technical Notes:**
- Simple feature, no complex dependencies
- Independent of difficulty selection (works with single question set too)
- May want to add analytics event for reset action

---

### 9. Calculation Debugger
**Category:** Developer
**Flag:** `developer.calculationDebugger`
**Dependencies:** None (no snapshot needed - dev tool)

**Description:**
Developer tool for testing different calculation parameters without editing code. Allows runtime modification of multipliers, point values, and cause configurations.

**Behavior:**

- **Settings Button:**
  - Fixed position bottom-right corner
  - Appears on all screens (welcome, questions, results, everywhere)
  - Simple icon/text button (e.g., "⚙️ Debug" or just "⚙️")
  - Overlays content with high z-index

- **Modal Window:**
  - Opens when settings button clicked
  - Blocks interaction with page (true modal)
  - Sparsely styled (minimal CSS, not production-ready)
  - Close button (X) in top-right

- **Editable Constants:**
  Form inputs for all calculation parameters:

  1. **Cause Data:**
     - Global Health: points, helpsAnimals, helpsFutureHumans, scaleFactor, isSpeculative
     - Animal Welfare: points, helpsAnimals, helpsFutureHumans, scaleFactor, isSpeculative
     - GCR (Future): points, helpsAnimals, helpsFutureHumans, scaleFactor, isSpeculative

  2. **Animal Multipliers:**
     - equal, 10x, 100x

  3. **Future Multipliers:**
     - equal, 10x, 100x

  4. **Scale Multipliers:**
     - equal, 10x, 100x

  5. **Certainty Multipliers:**
     - equal, 10x, 100x

- **Save Behavior:**
  - "Save" button at bottom of modal
  - Values only update on save (not live/reactive)
  - Modal closes on save
  - Changes persist in memory until page reload
  - Calculations immediately recalculate with new values

- **Restore Defaults:**
  - No reset button in modal
  - Reload page to restore original values

- **Validation:**
  - Zero validation
  - User responsible for entering valid numbers
  - Invalid values may cause calculation errors (expected for dev tool)

**UI Layout (Form Structure):**

```
╔══════════════════════════════════════╗
║  Calculation Debugger          [X]  ║
╠══════════════════════════════════════╣
║                                      ║
║  CAUSES                              ║
║  ─────────────────────────────────  ║
║  Global Health:                      ║
║    Points: [100]                     ║
║    Scale Factor: [1]                 ║
║    ☐ Helps Animals                   ║
║    ☐ Helps Future Humans             ║
║    ☐ Is Speculative                  ║
║                                      ║
║  Animal Welfare:                     ║
║    Points: [100]                     ║
║    Scale Factor: [10]                ║
║    ☑ Helps Animals                   ║
║    ☐ Helps Future Humans             ║
║    ☐ Is Speculative                  ║
║                                      ║
║  GCR (Future):                       ║
║    Points: [100]                     ║
║    Scale Factor: [100]               ║
║    ☐ Helps Animals                   ║
║    ☑ Helps Future Humans             ║
║    ☑ Is Speculative                  ║
║                                      ║
║  MULTIPLIERS                         ║
║  ─────────────────────────────────  ║
║  Animal:   Equal [1]   10× [0.1]    ║
║            100× [0.01]               ║
║                                      ║
║  Future:   Equal [1]   10× [0.1]    ║
║            100× [0.01]               ║
║                                      ║
║  Scale:    Equal [0]   10× [0.5]    ║
║            100× [1]                  ║
║                                      ║
║  Certainty: Equal [1]  10× [0.1]    ║
║             100× [0.01]              ║
║                                      ║
║              [Save]                  ║
╚══════════════════════════════════════╝
```

**Implementation Details:**

1. **State Management:**
   ```js
   const [debugConfig, setDebugConfig] = useState({
     causes: CAUSES,
     animalMultipliers: ANIMAL_MULTIPLIERS,
     futureMultipliers: FUTURE_MULTIPLIERS,
     scaleMultipliers: SCALE_MULTIPLIERS,
     certaintyMultipliers: CERTAINTY_MULTIPLIERS
   });
   ```

2. **Calculation Functions:**
   - Accept optional config override parameter
   - Use debugConfig if provided, else use defaults
   - Example: `calculateMaxEV(credences, debugConfig)`

3. **Settings Button Component:**
   ```jsx
   {features.developer?.calculationDebugger && (
     <button className="debug-settings-btn" onClick={openModal}>
       ⚙️
     </button>
   )}
   ```

4. **Modal Form:**
   - Controlled inputs bound to temporary state
   - On save: update debugConfig in parent state
   - Triggers recalculation of all results

**Styling:**
- Minimal CSS (basic layout, no polish)
- Fixed position button: `position: fixed; bottom: 20px; right: 20px;`
- Modal: centered overlay with basic border
- Not intended for production users

**Technical Notes:**
- This is a developer tool, not a user-facing feature
- No prototype snapshot needed
- Zero error handling for invalid inputs
- Page reload to restore defaults (simple, no state persistence)
- Works with all other features (presets, difficulty selection, etc.)

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
