# Moral Parliament Quiz

An interactive tool to help you allocate resources across different causes based on your moral credences—the probabilities you assign to different ethical perspectives.

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![React](https://img.shields.io/badge/react-18.3.1-blue.svg)
![Vite](https://img.shields.io/badge/vite-6.0.5-purple.svg)

## 📖 Overview

Uncertain about your ethical views? This quiz helps you navigate moral uncertainty by:

- Asking about your credences (confidence levels) on key ethical questions
- Calculating optimal resource allocation using four methods:
  - **Max Expected Value**: 100% to the cause with highest expected value
  - **Variance Voting**: Weighted votes from different worldviews (moral parliament approach)
  - **Merged Favorites**: Each worldview allocates its budget share to its favorite cause
  - **Maximin**: Maximizes the minimum utility any worldview receives (egalitarian approach)
- Allowing real-time adjustment and exploration of how different credences affect allocations

### Questions Asked

1. **Animal vs. Human Welfare**: How do you value animal welfare relative to human welfare?
2. **Current vs. Future Generations**: How do you value future human welfare relative to current human welfare?
3. **Scale Sensitivity**: How much does the scale of an intervention matter?
4. **Certainty vs. Speculation**: How do you discount speculative interventions?

### Causes Evaluated

- **Global Health**: Helps current humans
- **Animal Welfare**: Helps animals
- **GCR (Global Catastrophic Risks)**: Helps future humans

---

## 🚀 Quick Start

### Prerequisites

- Node.js 16+ and npm

### Installation

```bash
# Clone the repository (or navigate to your project directory)
cd quiz-prototype

# Install dependencies
npm install
```

### Development

```bash
# Start dev server (with hot module replacement)
npm run dev

# Open http://localhost:5173 in your browser
```

### Code Quality

```bash
# Run ESLint to check for issues
npm run lint

# Auto-fix ESLint issues
npm run lint:fix

# Format code with Prettier
npm run format

# Check if code is formatted
npm run format:check
```

Pre-commit hooks automatically run linting and formatting on staged files.

### Production Build

```bash
# Build for production
npm run build

# Preview production build locally
npm run preview
```

---

## 📁 Project Structure

```
quiz-prototype/
├── src/
│   ├── main.jsx                    # React entry point
│   ├── App.jsx                     # Main app wrapper
│   │
│   ├── components/
│   │   ├── MoralParliamentQuiz.jsx # Main quiz orchestrator (state management)
│   │   ├── WelcomeScreen.jsx       # Landing page
│   │   ├── QuestionScreen.jsx      # Reusable question template
│   │   ├── ResultsScreen.jsx       # Results display
│   │   │
│   │   ├── ui/                     # Reusable UI components
│   │   │   ├── OptionButton.jsx    # Quick selection button
│   │   │   ├── CredenceSlider.jsx  # Full-size slider for questions
│   │   │   ├── CompactSlider.jsx   # Compact slider for results
│   │   │   ├── ModeToggle.jsx      # Options/Sliders mode switcher
│   │   │   ├── CauseBar.jsx        # Horizontal bar chart
│   │   │   └── EditPanel.jsx       # Collapsible credence editor
│   │   │
│   │   └── layout/                 # Layout components
│   │       ├── Header.jsx          # Page header
│   │       └── ProgressBar.jsx     # Progress indicator
│   │
│   ├── utils/                      # Pure utility functions
│   │   └── calculations.js         # All calculation logic
│   │       ├── calculateCauseValue()
│   │       ├── calculateMaxEV()
│   │       ├── calculateVarianceVoting()
│   │       ├── calculateMergedFavorites()
│   │       ├── calculateMaximin()
│   │       ├── adjustCredences()
│   │       └── roundCredences()
│   │
│   ├── constants/                  # Configuration
│   │   └── config.js               # All constants and config
│   │
│   └── styles/                     # Styling
│       ├── variables.css           # CSS custom properties (design system)
│       ├── global.css              # Global styles and utilities
│       └── components/             # Component-specific CSS modules
│
├── index.html                      # HTML entry point
├── vite.config.js                  # Vite configuration
├── package.json                    # Dependencies and scripts
├── CLAUDE.md                       # Post-refactoring cleanup plan
├── COMPONENT_BOUNDARIES.md         # Component analysis documentation
├── COMPREHENSION_ISSUES.md         # Code comprehension tracking (resolved)
├── REFACTORING_COMPLETE.md         # Refactoring completion summary
└── REFACTORING_NOTES.md            # Bug fixes and architecture notes
```

---

## 🧮 How It Works

### Calculation Methods

With 4 questions and 3 options each, there are 81 possible worldview combinations (3^4).

#### 1. Max Expected Value (MaxEV)
Calculates the expected value for each cause across all 81 worldview combinations, then allocates 100% to the cause with the highest expected value.

For each cause:
```
EV = Σ (P(animal_view) × P(future_view) × P(scale_view) × P(certainty_view) ×
      value(cause, animal_mult, future_mult, scale_exp, certainty_mult))
```

Where multipliers/exponents are:
- Animal/Future equal weight: 1.0, 10× less: 0.1, 100× less: 0.01
- Scale equal: 0 (no effect), 10×: 0.5 (sqrt), 100×: 1.0 (full scale)
- Certainty equal: 1.0, 10× discount: 0.1, 100× discount: 0.01

#### 2. Variance Voting (Moral Parliament)
Each worldview combination votes for its preferred cause(s), weighted by credence. If multiple causes are tied for a worldview, the vote splits equally.

```
For each worldview (81 total):
  - Find cause(s) with max value in this worldview
  - Assign vote_weight / num_tied_causes to each tied cause
```

Final percentages represent the proportion of votes each cause received.

#### 3. Merged Favorites
Each worldview allocates its probability share of the budget to its favorite cause(s). Similar to variance voting but uses budget shares instead of votes.

```
For each worldview:
  - Worldview gets (probability × 100) percent of budget
  - Allocate entirely to favorite cause(s)
  - If tied, split allocation equally
```

#### 4. Maximin
Finds the allocation that maximizes the minimum utility any worldview receives. An egalitarian approach that ensures no worldview is left too unhappy.

```
- Test 16 candidate allocations (100% to one, 50/50 splits, etc.)
- For each allocation, find minimum utility across all worldviews
- Choose allocation with highest minimum
```

### Auto-Balancing Sliders

The sliders feature sophisticated UX with ratio preservation and smooth animations:

**During Drag:**
1. Slider being dragged moves with unlimited precision (`step="any"`)
2. On drag start, a snapshot of all credences is captured
3. Other sliders maintain their exact original ratio throughout the drag
4. All calculations use decimal values for smooth, continuous adjustment
5. Display percentages are rounded to integers for clean presentation

**On Release:**
1. Final values are rounded to integers
2. Non-dragged sliders animate smoothly to final positions (0.4s ease-out)
3. All values guaranteed to sum to exactly 100%

**Proportional Distribution:**
- Changed slider gets new value (clamped 0-100)
- Other sliders adjust proportionally based on original ratios from snapshot
- If others are all 0, remaining value distributes evenly

See `src/utils/calculations.js` for implementation details (`adjustCredences()` and `roundCredences()`).

---

## 🛠️ Technology Stack

- **React 18.3.1** - UI framework
- **Vite 6.0.5** - Build tool and dev server
- **lucide-react 0.462.0** - Icons
- **CSS Modules** - Component-scoped styling
- **CSS Custom Properties** - Design system (colors, spacing, typography)
- **ESLint** - Code linting with React best practices
- **Prettier** - Code formatting
- **Husky + lint-staged** - Pre-commit hooks for code quality

### Fonts
- **Cormorant Garamond** - Headings (elegant serif)
- **Source Sans Pro** - Body text (clean sans-serif)

---

## 🎨 Design System

The app uses a comprehensive design system defined in `src/styles/variables.css`:

- **Colors**: 40+ semantic color variables
- **Typography**: Font families, 13 size scales, 5 weights
- **Spacing**: 13-level spacing scale (0 to 4rem)
- **Border Radius**: 7 variants (4px to full circle)
- **Transitions**: Smooth animations throughout

Global utility classes in `src/styles/global.css` provide common patterns like flex layouts, button styles, and card containers.

---

## 🧪 Testing

The dev server runs at `http://localhost:5173/` with hot module replacement.

### Manual Testing Areas
Test the following flows:
- All user flows (welcome → questions → results)
- Option selection and slider modes
- Auto-balancing behavior (sliders always sum to 100%)
- Real-time recalculation in results screen
- Reset functionality (individual and "Reset All")
- Visual polish and responsive design
- Browser console should show zero errors

---

## 📝 Development Notes

### State Management

All state lives in `MoralParliamentQuiz.jsx`:
- `currentStep` - Current screen (welcome/animals/future/scale/certainty/results)
- `animalCredences`, `futureCredences`, `scaleCredences`, `certaintyCredences` - Current credence values
- `originalAnimalCredences`, `originalFutureCredences`, `originalScaleCredences`, `originalCertaintyCredences` - Snapshots for reset
- `expandedPanel` - Which edit panel is open
- `animalInputMode`, `futureInputMode`, `scaleInputMode`, `certaintyInputMode` - Options vs. sliders mode

State flows down as props to child components (unidirectional data flow).

### Adding New Questions

To add a new question (we expanded from 2 to 4 questions):

1. Add question options and multipliers to `src/constants/config.js`
2. Add new step to `STEPS` constant
3. Add state for credences and input mode in `MoralParliamentQuiz.jsx`
4. Add original credences state for reset functionality
5. Add `QuestionScreen` instance with new props and navigation
6. Update all calculation methods to incorporate new dimension (iterate over new credence object)
7. Add `EditPanel` to results screen for live editing
8. Update progress percentages and worldview count display

### Code Quality

- **Pure Functions**: All calculations are pure (no side effects)
- **Component Separation**: Each component has single responsibility
- **CSS Modules**: Scoped styles prevent conflicts
- **JSDoc Comments**: Utility functions documented with types
- **ESLint**: Enforces React best practices and catches common mistakes
- **Prettier**: Consistent code formatting across the project
- **Pre-commit Hooks**: Automatic linting and formatting before commits

---

## 🐛 Known Issues & Future Work

### Planned Improvements

- [x] Refine slider recalculation UX during drag operations (completed with ratio preservation and smooth animations)
- [ ] Add TypeScript for type safety
- [ ] Add unit tests for calculation functions
- [ ] Add component tests with React Testing Library
- [ ] Improve accessibility (ARIA labels, keyboard navigation)
- [ ] Add error boundaries
- [ ] Consider state management library if app grows

See **REFACTORING_NOTES.md** for details on bug fixes and architectural decisions.

---

## 🤝 Contributing

This project was refactored from a single-file prototype (816 lines) into a modular architecture (26 files). The original source is preserved in git history (commit dd5499b).

When contributing:
1. Follow existing component patterns
2. Use CSS variables for colors/spacing
3. Keep functions pure and testable
4. Update documentation for significant changes

---

## 📄 License

MIT License - feel free to use and modify as needed.

---

## 🙏 Acknowledgments

- Calculation methods inspired by moral uncertainty frameworks
- Built with modern React best practices
- Designed for clarity and maintainability

---

**Questions or Issues?**
See the testing checklist and refactoring notes for detailed documentation.
