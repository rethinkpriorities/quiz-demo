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

## All Issues Resolved ✓

All comprehension issues have been addressed. See "Resolved Issues" section below for details.

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

- [x] File: `src/components/ui/OptionButton.jsx:21-26, 32, 43` - Hardcoded values in inline styles
      Resolution: CLEANUP - Moved all hardcoded values to CSS, use CSS custom property for dynamic color
      What was learned: CSS custom properties (--option-color) can be set via inline style in JSX
      Changes made:
        - JSX now: style={{ '--option-color': color }} (one line, clean)
        - CSS handles: gradient angle (135deg), opacity (13%, 7%), fallback color (--text-primary)
        - Removed: All template literals and magic numbers from JSX
      Files modified: OptionButton.jsx, OptionButton.module.css
      Commit needed: YES - 2 files modified

- [x] React Patterns: `useState` and `useEffect` - Comprehensive review
      Resolution: EXPLAINED - Covered all topics comprehensively
      Topics covered:
        - useState syntax, patterns, and 8 examples from MoralParliamentQuiz.jsx
        - Computed values vs state (lines 36-49 recalculate on every render)
        - State update mechanics (async, batching, object/array immutability)
        - Comparison to Redux/Flux from 6 years ago (simpler, more direct)
        - useEffect syntax, dependency array, cleanup functions
        - Common useEffect patterns (data fetching, subscriptions, external sync)
        - Why this app doesn't need useEffect (purely reactive)
        - Mental models and common pitfalls
      Understanding: All React fundamentals for this codebase now clear
      Commit needed: NO - explanation only

---

## Notes

- Start reading wherever feels natural
- Call out anything that makes you pause or re-read
- "Why does this work this way?" is a valid issue
- Both "this is confusing" and "this seems unnecessarily complex" are worth listing
- File/line numbers help us jump right to it

---

**Status:** ✅ COMPLETE - All comprehension issues resolved
