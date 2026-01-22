# Moral Parliament Quiz - Development Guide

## Status

Production-ready. Refactored from single 816-line file to 25-file modular architecture.

---

## Development Notes

### Dev Server URL
The app is served at `http://localhost:5173/quiz-demo/` (not the root). Configured via `base: '/quiz-demo/'` in `vite.config.js`.

### Testing
- `npm test` - run tests in watch mode
- `npm run test:run` - single run
- Pre-commit hook runs linting + tests

### Design Decisions
All visual/UX design decisions are handled by the UX team, not implementation. Manu and Claude implement features with placeholder styles that will be updated when design specs arrive.

---

## Feature Flag System

**File:** `config/features.json`

- Features defined as true/false flags
- Import in components: `import features from '../config/features.json'`
- Missing flags should be handled gracefully with defaults

### Development Workflow
1. Implement feature with flag in `config/features.json` (default: `false`)
2. Test with flag enabled
3. Create prototype snapshot: `scripts/snapshot.sh` (UI features only)
4. Document in Completed Features section

---

## Completed Features

Summary of implemented features. See `CLAUDE-ARCHIVE.md` for detailed implementation notes.

| Feature | Flag | Description |
|---------|------|-------------|
| Reset Button | `ui.resetButton` | "Start Over" button on results screen with confirmation |
| Slider Lock | `ui.sliderLock` | Lock a slider in place while others adjust proportionally |
| Calculation Debugger | `developer.calculationDebugger` | Runtime modification of calculation parameters |
| Question Config | N/A | Questions defined in `config/questions.json` |
| Context API | N/A | Centralized state via `src/context/QuizContext.jsx` |
| Calculation Display | `calculations.show*`, `calculations.sideBySideComparison` | Control which calculation cards appear and comparison mode |
| Question Types | `ui.questionTypes` | Three presentation modes: default (toggle), selection (pick one only), credence (sliders only). **Defaults to ON.** |
| Intermission Type | N/A (requires `ui.questionTypes`) | Pause screen showing partial results + contextual copy. Excluded from progress count. |

### Key Architecture Notes
- **State management**: React Context in `src/context/QuizContext.jsx`
- **Questions**: `config/questions.json` with `worldviewDimension` for calculations
- **Causes**: `config/causes.json` with points, colors, boolean flags
- **Validation**: Runs on dev startup (`validateCauses.js`, `validateQuestions.js`)

### Question Types System
When `ui.questionTypes` is enabled, questions can have different presentation modes:

| Type | Behavior | Config |
|------|----------|--------|
| `default` | Mode toggle available (Pick One / Custom Mix) | Omit `type` or set `"type": "default"` |
| `selection` | Pick one option only, no sliders | `"type": "selection"` |
| `credence` | Sliders only, no discrete choice | `"type": "credence"` |
| `intermission` | Pause with partial results + copy | `"type": "intermission"` with `title` and `body` |

Colors defined in `src/constants/config.js` as `QUESTION_TYPE_COLORS` (placeholder: same colors for all types).

**Intermission behavior:**
- Displays `ResultCard` components showing current calculation results
- Shows configurable `title` and `body` text
- Does not count toward progress bar or "Question X of Y"
- No credences stored (no edit panel on results screen)
- When `ui.questionTypes` is disabled, intermissions are filtered out entirely

---

## Planned Features

### 1. Preset Credences Feature
**Flag:** `ui.presets`

Allow users to quickly set credences to predefined viewpoints (e.g., "Rethink Priorities' answer", "Classical Utilitarian").

**Key Requirements:**
- Per-question presets in `config/questions.json`
- Click preset → sliders animate to values
- Manual slider adjustment unselects active preset
- Preset UI only appears if `question.presets?.length > 0`

**Data Structure:**
```json
{
  "presets": [
    {
      "id": "rethink-priorities",
      "name": "Rethink Priorities",
      "description": "The worldview of the organization running this quiz",
      "credences": { "equal": 60, "10x": 30, "100x": 10 }
    }
  ]
}
```

---

### 2. Welcome Screen Preview Toggle
**Flag:** `ui.welcomePreview`

Hide the "You'll be asked about:" preview box on welcome screen. Wrap `infoBox` div with conditional render.

---

### 3. Difficulty Selection System
**Flag:** `ui.difficultySelection`

Choose between difficulty levels with different question sets (e.g., Socrates/simple, Kant/credence-based, Heidegger/complex).

**Behavior:**
- When enabled: Welcome → Difficulty Selection → Questions → Results
- When disabled: uses `difficulties[0]` as default
- Difficulty locked once selected

**Config:**
```json
{
  "difficulties": [
    {
      "id": "kant",
      "title": "Kant",
      "description": "Express uncertainty with credence distributions",
      "estimatedMinutes": 5,
      "questions": [...]
    }
  ]
}
```

---

## References

| File | Purpose |
|------|---------|
| `config/features.json` | Feature flags |
| `config/questions.json` | Question definitions + worldview dimensions |
| `config/causes.json` | Cause definitions (points, colors, flags) |
| `src/context/QuizContext.jsx` | React Context state management |
| `src/utils/calculations.js` | Calculation functions |
| `scripts/snapshot.sh` | Prototype builder |
| `CLAUDE-ARCHIVE.md` | Detailed implementation notes for completed features |
