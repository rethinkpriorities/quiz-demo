# Moral Parliament Quiz - Feature Summary

## Completed

- **Reset Button** - "Start Over" button on results screen clears state and returns to welcome
- **Slider Lock** - Lock any slider in place while others adjust proportionally
- **Calculation Debugger** - Dev tool modal for runtime modification of calculation parameters
- **Question Configuration** - Questions defined in JSON config instead of hardcoded React
- **Context API** - Centralized state management replacing prop drilling
- **Calculation Display Flags** - Toggle visibility of each calculation method (MaxEV, Parliament, etc.)
- **Side-by-Side Comparison** - Show original vs updated results when credences change

## Planned (Detailed Specs Exist)

- **Preset Credences** - Quick-set sliders to predefined viewpoints (e.g., "Classical Utilitarian")
- **Welcome Screen Preview Toggle** - Hide/show the "You'll be asked about" preview box
- **Question Types System** - Different presentation modes (default sliders, no-credence discrete choice)
- **Intermission Type** - Mid-quiz pause showing partial results with conditional copy
- **Difficulty Selection** - Choose question complexity level (Socrates/Kant/Heidegger)

## Backlog (Ideas Only)

- Save/share results
- Export results as PDF or image
- Dark mode
- Animations with framer-motion
- Accessibility improvements (ARIA, keyboard nav, screen reader)
- TypeScript migration
- More cause categories
- More moral dimensions
- Test coverage for calculation functions
