# Code Comprehension Issues & Questions

This document tracks specific code patterns, files, or lines that need explanation or cleanup to improve readability for someone with Ruby/Vue background and 6-year-old React knowledge.

**Process:**
1. Add issues to the list as you encounter them (file:line + description)
2. Prioritize the list
3. Tackle them one by one (either cleanup or explanation)
4. Mark as resolved when complete

---

## 📋 Issues to Address

### Format
```
- [ ] File: `path/to/file.jsx:123` - Brief description of issue
      Why it's confusing: [your explanation]
      Resolution needed: [cleanup | explanation | both]
```

---

## Collected Issues

### High Priority (Blocking comprehension)

- [ ] File: `src/components/ui/EditPanel.jsx:54-85` - Inline auto-balancing logic
      Why it's confusing: 30+ line function inline in JSX onChange handler
      Why it exists: Duplicated from adjustCredences utility during refactoring
      Resolution needed: cleanup - import and use adjustCredences from utils/calculations.js
      Notes: We already have this exact logic in utils/calculations.js:110

- [ ] File: `src/components/ui/CauseBar.jsx:9-11` - When do isIncrease/isDecrease recompute?
      Why it's confusing: Want to understand React render cycle and when these values update
      User observed: "unusual behavior in the browser that seemed like it was almost what was intended"
      Resolution needed: both - explain React rendering + investigate potential bug
      Notes: Lines 9-11 compute on every render. May have logic issue with change detection.

### Medium Priority (Makes code harder to read)

- [ ] File: `src/components/ui/OptionButton.jsx:21-26, 32, 43` - Hardcoded values in inline styles
      Why it's confusing: Mix of dynamic (color prop) and hardcoded values ('135deg', '22', '11', '#f4f4f4')
      Why it exists: Need dynamic color from props, but included magic numbers
      Resolution needed: cleanup - Move hardcoded values to CSS variables
      Notes: '22' and '11' are hex opacity values, '135deg' is gradient angle, '#f4f4f4' is fallback color

### Low Priority (Nice to understand but not critical)

- [ ] File: `src/components/QuestionScreen.jsx` - How styles are applied
      Why it's confusing: Mix of className, inline styles, CSS modules - want to understand the pattern
      Resolution needed: explanation - Review the different styling approaches and when to use each
      Notes: Need to understand React styling best practices

- [ ] File: `src/components/WelcomeScreen.jsx` - Styling approach
      Why it's confusing: Also has mix of styling methods, want to understand the pattern
      Resolution needed: explanation - Review styling approach used here
      Notes: Related to QuestionScreen styling question

---

## React Patterns to Review

Before marking this complete, need to cover:

- [ ] `useState` and `useEffect` - Comprehensive review
      Topics to cover:
      - How useState works, when state updates, batching
      - How useEffect works, dependencies array, cleanup
      - Analogies to Redux/Flux or other state management you used 6 years ago
      - Common pitfalls and mental models
      - How they're used in this codebase (MoralParliamentQuiz.jsx)
      Notes: Final item before completion

---

## Resolved Issues

- [x] File: `src/components/ui/EditPanel.jsx:54-85` - Inline auto-balancing logic
      Resolution: Imported `adjustCredences` from utils/calculations.js
      Changed from: 30+ line inline function
      Changed to: One-line call to utility function
      Impact: Removed code duplication, improved readability
      Commit needed: YES - EditPanel.jsx modified

- [x] File: `src/components/ui/CauseBar.jsx:9-11` - When do isIncrease/isDecrease recompute?
      Resolution: EXPLAINED - Lines recalculate on every render when props change
      Understanding: Ghost bar is set ONCE on first entry to results (line 59 of MoralParliamentQuiz)
      UX Notes: Visual overlap issue identified (ghost bar hidden when values increase)
      Decision: Defer UX changes to UX designer - "bug is a feature" until reviewed
      Commit needed: NO - explanation only

---

## Notes

- Start reading wherever feels natural
- Call out anything that makes you pause or re-read
- "Why does this work this way?" is a valid issue
- Both "this is confusing" and "this seems unnecessarily complex" are worth listing
- File/line numbers help us jump right to it

---

**Status:** Collecting issues (not yet addressing them)
