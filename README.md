# Moral Parliament Quiz

An interactive tool to help you allocate resources across different causes based on your moral credences—the probabilities you assign to different ethical perspectives.

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![React](https://img.shields.io/badge/react-18.3.1-blue.svg)
![Vite](https://img.shields.io/badge/vite-6.0.5-purple.svg)

## 📖 Overview

Uncertain about your ethical views? This quiz helps you navigate moral uncertainty by:

- Asking about your credences (confidence levels) on key ethical questions
- Calculating optimal resource allocation using two methods:
  - **Max Expected Value**: 100% to the cause with highest expected value
  - **Variance Voting**: Weighted votes from different worldviews (moral parliament approach)
- Allowing real-time adjustment and exploration of how different credences affect allocations

### Questions Asked

1. **Animal vs. Human Welfare**: How do you value animal welfare relative to human welfare?
2. **Current vs. Future Generations**: How do you value future human welfare relative to current human welfare?

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
│   │   ├── calculations.js         # All calculation logic
│   │   │   ├── calculateCauseValue()
│   │   │   ├── calculateMaxEV()
│   │   │   ├── calculateVarianceVoting()
│   │   │   └── adjustCredences()
│   │   └── helpers.js              # Helper utilities
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
├── CLAUDE.md                       # Implementation plan (phases)
├── COMPONENT_BOUNDARIES.md         # Component analysis documentation
├── REFACTORING_NOTES.md            # Bug fixes and architecture notes
└── TESTING_CHECKLIST.md            # Manual testing checklist
```

---

## 🧮 How It Works

### Calculation Methods

#### 1. Max Expected Value (MaxEV)
Calculates the expected value for each cause across all possible worldview combinations, then allocates 100% to the cause with the highest expected value.

For each cause:
```
EV = Σ (P(animal_view) × P(future_view) × value(cause, animal_mult, future_mult))
```

Where multipliers are:
- Equal weight: 1.0
- 10× less: 0.1
- 100× less: 0.01

#### 2. Variance Voting (Moral Parliament)
Each worldview combination votes for its preferred cause(s), weighted by credence. If multiple causes are tied for a worldview, the vote splits equally.

```
For each worldview (9 total):
  - Find cause(s) with max value in this worldview
  - Assign vote_weight / num_tied_causes to each tied cause
```

Final percentages represent the proportion of votes each cause received.

### Auto-Balancing Sliders

When you adjust one slider, the others automatically rebalance to maintain a 100% total:

1. Set changed slider to new value (clamped 0-100)
2. Calculate target sum for other sliders (100 - new_value)
3. Distribute proportionally based on current ratios
4. Handle edge case: if others are all 0, distribute evenly

See `src/utils/calculations.js` for implementation details.

---

## 🛠️ Technology Stack

- **React 18.3.1** - UI framework
- **Vite 6.0.5** - Build tool and dev server
- **lucide-react 0.462.0** - Icons
- **CSS Modules** - Component-scoped styling
- **CSS Custom Properties** - Design system (colors, spacing, typography)

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

See **TESTING_CHECKLIST.md** for a comprehensive manual testing guide covering:
- All user flows (welcome → questions → results)
- Option selection and slider modes
- Auto-balancing behavior
- Real-time recalculation
- Reset functionality
- Visual and responsive design

---

## 📝 Development Notes

### State Management

All state lives in `MoralParliamentQuiz.jsx`:
- `currentStep` - Current screen (welcome/animals/future/results)
- `animalCredences` & `futureCredences` - Current credence values
- `originalAnimalCredences` & `originalFutureCredences` - Snapshots for reset
- `expandedPanel` - Which edit panel is open
- `animalInputMode` & `futureInputMode` - Options vs. sliders mode

State flows down as props to child components (unidirectional data flow).

### Adding New Questions

To add a new question:

1. Add question options to `src/constants/config.js`
2. Add new step to `STEPS` constant
3. Add state for credences in `MoralParliamentQuiz.jsx`
4. Add `QuestionScreen` instance with new props
5. Update navigation logic
6. Update calculations to incorporate new dimension

### Code Quality

- **Pure Functions**: All calculations are pure (no side effects)
- **Component Separation**: Each component has single responsibility
- **CSS Modules**: Scoped styles prevent conflicts
- **JSDoc Comments**: Utility functions documented with types

---

## 🐛 Known Issues & Future Work

### Planned Improvements

- [ ] Refine slider recalculation UX during drag operations
- [ ] Add TypeScript for type safety
- [ ] Add unit tests for calculation functions
- [ ] Add component tests with React Testing Library
- [ ] Improve accessibility (ARIA labels, keyboard navigation)
- [ ] Add error boundaries
- [ ] Consider state management library if app grows

See **REFACTORING_NOTES.md** for details on bug fixes and architectural decisions.

---

## 🤝 Contributing

This project was refactored from a single-file prototype (816 lines) into a modular architecture (25 files). The original source is preserved in git history (commit dd5499b).

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
