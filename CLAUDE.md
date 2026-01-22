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

### 4. Multiple Worldviews
**Flag:** `ui.multipleWorldviews`

Save quiz results as a named worldview and retake the quiz to compare different perspectives.

**Behavior:**
- Results screen shows "Save Worldview" option
- After saving, user can choose to retake quiz or view comparison
- Maximum of 3 worldviews can be saved per session
- After 2nd or 3rd completion, special comparison screen unlocks
- Comparison screen displays all saved worldviews side-by-side

**Flow:**
1. Complete quiz → Results screen with "Save Worldview" button
2. Save worldview (name it) → Option to "Retake Quiz" or "Compare Worldviews"
3. Retake → Fresh quiz, loop back to step 1
4. After 2-3 worldviews saved → Comparison screen available

**State Requirements:**
- Store array of saved worldviews in context: `savedWorldviews[]`
- Each worldview contains: `{ id, name, credences, calculationResults, timestamp }`
- Reset current quiz state when retaking, preserve saved worldviews

**Comparison Screen:**
- Side-by-side view of 2-3 worldviews
- Show calculation results for each
- Highlight differences between worldviews

---

### 5. Share Results via URL
**Flag:** `ui.shareResults`

Generate a shareable URL containing the user's quiz answers. No backend required — data encoded in the URL itself.

**Behavior:**
- Results screen shows "Share Results" button
- Click copies URL to clipboard with "Copied!" feedback
- URL uses hash fragment: `https://.../#results=compressed_data`

**Data Format:**
- Encode credences by question ID + option names
- If 100% credence on one option, store only that option
- Compress with lz-string for shorter URLs

**Loading from URL:**
- On page load, check for `#results=` hash
- Decompress and validate data
- Compare question IDs and option names against current quiz config

**Stale URL Handling:**
- If all questions/options match: go directly to results screen
- If some questions missing or options changed: show dialog explaining quiz has changed
- User clicks through quiz to answer only the missing/changed questions
- Pre-populate matching questions from URL data
- Answers to removed questions are ignored

**Error Handling:**
- Malformed/truncated URLs: graceful fallback to fresh quiz
- Optional subtle message: "Couldn't restore your results"

**Dependencies:**
- `lz-string` package

---

### 6. Export Results as PDF
**Flag:** `ui.exportPDF`

Download quiz results as a PDF document. Hybrid approach: visual screenshot of results + text footer with data summary and shareable link.

**Behavior:**
- Results screen shows "Download PDF" button
- Click generates and downloads PDF
- PDF contains:
  1. Screenshot of results screen (preserves exact visual appearance)
  2. Text footer with plain text summary of results
  3. Clickable shareable URL (same as Share Results feature)

**Technical Approach:**
- Dynamic import of libraries (only loaded when user clicks download)
- Use html2canvas to capture results screen as image
- Use jsPDF to create PDF, add image, then add text footer
- Footer text is native PDF text (selectable, accessible)
- URL is clickable link via jsPDF `.link()` method

```js
const handleDownload = async () => {
  const [{ default: html2canvas }, { jsPDF }] = await Promise.all([
    import('html2canvas'),
    import('jspdf')
  ]);
  // capture, generate, download
};
```

**Footer Content:**
- Quiz title and completion date
- Summary of calculation results (text form)
- Shareable URL that repopulates quiz with these answers

**Dependencies:**
- `html2canvas` (~40kb gzipped)
- `jspdf` (~90kb gzipped)
- `lz-string` (shared with Share Results feature)

**Relationship to Share Results:**
- Reuses URL generation logic from Share Results feature
- If Share Results is also enabled, same URL appears in both places
- Can be implemented independently, but shares `lz-string` encoding utilities

---

### 7. Results-Only Share Mode
**Flag:** `ui.shareResultsOnly` (extends `ui.shareResults`)

Share quiz results without exposing the underlying quiz answers. Recipients see only the final results, not the credences that produced them.

**Behavior:**
- Results screen shows additional "Share Results Only" button (alongside full share)
- Generated URL contains calculation results but blocks answer repopulation
- Recipients landing on this URL go directly to results view
- No access to edit panels or individual question answers

**Data Format:**
- Builds on existing lz-string compression from `ui.shareResults`
- Adds `resultsOnly: true` flag in the encoded data
- Stores calculation results directly instead of (or in addition to) credences
- When `resultsOnly` flag is detected, app renders results in read-only mode

**URL Structure:**
```
https://.../#results=compressed_data
```
Same hash format as feature #5, but data payload includes the `resultsOnly` marker.

**Loading from URL:**
- On page load, decompress data and check for `resultsOnly` flag
- If `resultsOnly: true`: render results screen in read-only mode
- Skip any "edit your answers" functionality
- Hide navigation back to quiz questions

**Graceful Failure:**
- If quiz config has changed significantly (calculation methods, cause definitions), results may be invalid
- Detect mismatches by comparing stored calculation IDs against current config
- On mismatch: show friendly message ("These results were generated with an older version of the quiz")
- Optionally display partial results if some calculations still match
- Never crash or show broken UI

**Dependencies:**
- `lz-string` (shared with features #5 and #6)
- Requires `ui.shareResults` infrastructure

**Relationship to Share Results (#5):**
- Shares URL encoding/decoding utilities
- Both features can coexist (two share buttons on results screen)
- Results-only mode is a subset: less data exposed, simpler recipient experience

---

### 8. AI Results Explanation
**Flag:** `ui.aiExplanation`

Show an "Explain Results" button that generates a personalized explanation of why the user got their results, powered by Claude API.

**Behavior:**
- Results screen shows "Explain Results" button
- Click sends quiz data to Vercel serverless function
- Backend calls Claude API with quiz context + user's answers/results
- Returns short paragraph explanations for each voting method
- Displays explanations inline on results screen

**Example Output:**
> "You value animals highly, and scale matters. There are many times more animals than humans, therefore animal welfare wins a lot of these voting methods."

**Architecture:**
```
[Frontend] → [Vercel Serverless Function] → [Claude API]
     ↑                                            ↓
     └──────────── Response ──────────────────────┘
```

**Request Payload:**
- User's credences per question
- Calculation results (winners, scores)
- Question metadata (worldview dimensions)
- Cause definitions

**Backend Prompt:**
- System prompt explaining quiz mechanics and calculation methods
- How worldview dimensions map to cause scoring
- Instructions to generate concise, personalized explanations
- One paragraph per voting method explaining the "why"

**Serverless Function:**
- Located in `/api/explain.js` (Vercel convention)
- Validates request payload
- Constructs prompt with quiz context + user data
- Calls Claude API (claude-3-haiku or claude-3-5-sonnet)
- Returns structured response with per-method explanations

**Frontend State:**
- Loading state while waiting for API response
- Error handling with user-friendly message
- Cache response in session (don't re-fetch on re-render)

**Dependencies:**
- `@anthropic-ai/sdk` (backend only)
- Vercel deployment for serverless functions
- `ANTHROPIC_API_KEY` environment variable

**Security Considerations:**
- API key stored in Vercel environment variables (never exposed to frontend)
- Rate limiting on serverless function
- Input validation to prevent prompt injection

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
