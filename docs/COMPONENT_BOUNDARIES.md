# Component Boundaries Analysis

## Overview
This document outlines the component structure identified in `moral-parliament-quiz-v6.jsx` to guide the refactoring process.

---

## Component Breakdown

### 1. UI Components (src/components/ui/)

#### OptionButton.jsx (lines 137-202)
- **Purpose**: Quick selection button for choosing a single option
- **Props**: label, description, optionKey, credences, setCredences, color, setInputMode
- **Features**:
  - Visual selected state with color-coded border and background
  - Checkmark indicator when selected
  - Gradient backgrounds
  - Hover transitions

#### CredenceSlider.jsx (lines 205-224)
- **Purpose**: Full-size slider for question screens with auto-balancing
- **Props**: label, description, value, onChange, color
- **Features**:
  - Large percentage display
  - Gradient fill based on value
  - Label and description text

#### CompactSlider.jsx (lines 227-243)
- **Purpose**: Smaller slider variant for results page editing
- **Props**: label, value, onChange, color
- **Features**:
  - Minimal design for space efficiency
  - Auto-balancing behavior
  - Color-coded fill gradient

#### ModeToggle.jsx (lines 246-292)
- **Purpose**: Switch between "Pick One" and "Custom Mix" input modes
- **Props**: mode, setMode
- **Features**:
  - Two-button toggle with icon (Sliders icon for Custom Mix)
  - Active state highlighting
  - Color transitions

#### CauseBar.jsx (lines 558-580)
- **Purpose**: Horizontal bar chart for cause allocation visualization
- **Props**: name, percentage, color, originalPercentage
- **Features**:
  - Ghost bar showing original value when changed
  - Up/down arrow indicators for changes
  - Percentage label inside bar when space allows
  - Smooth width transitions

#### EditPanel.jsx (lines 583-670)
- **Purpose**: Collapsible panel for editing credences in results
- **Props**: title, icon, credences, setCredences, originalCredences, configs, isExpanded, onToggle
- **Features**:
  - Expand/collapse with chevron icons
  - "Modified" badge when values change
  - Inline preview of values when collapsed
  - Individual reset button
  - Contains multiple CompactSliders
  - Auto-balancing info text

---

### 2. Screen Components (src/components/)

#### WelcomeScreen.jsx (lines 295-348)
- **Purpose**: Landing page with intro text and quiz start
- **Elements**:
  - Header with "Moral Parliament" branding
  - Hero headline with gradient text
  - Description paragraph
  - "Start Quiz" CTA button
  - Preview card showing what will be asked
- **Navigation**: → animals

#### QuestionScreen.jsx (Reusable template for both questions)
**Animals Question** (lines 352-437)
**Future Question** (lines 441-537)

- **Purpose**: Reusable question template
- **Dynamic Props**:
  - Question text
  - Category label (e.g., "Moral Weights", "Time Preference")
  - Options array (label, description, key, color)
  - Credences state
  - Set credences handler
  - Input mode state
  - Progress percentage (50% or 100%)
  - Question number (1 of 2, 2 of 2)
- **Elements**:
  - Header
  - Progress bar
  - Category badge
  - Question heading
  - Dynamic instruction text (changes based on mode)
  - ModeToggle
  - Conditional rendering: OptionButtons OR CredenceSliders
  - Total percentage indicator (sliders mode only)
  - Navigation buttons (Back, Continue)
- **Navigation**: ← previous | → next

#### ResultsScreen.jsx (lines 541-809)
- **Purpose**: Display calculation results and allow credence editing
- **Elements**:
  - Compact header with modification indicator
  - Two side-by-side result cards:
    - Max Expected Value (🎯)
    - Variance Voting (🏛️)
  - Each card contains:
    - Title and description
    - 3× CauseBar components
    - Metadata footer
  - Adjustment panel with:
    - 2× EditPanel (Animals, Future)
    - "Reset All" button (when changed)
  - Back to quiz button
- **Features**:
  - Real-time recalculation on credence changes
  - Visual diff indicators (arrows, ghost bars)
  - Individual and global reset options
- **Navigation**: ← future

---

### 3. Layout Components (src/components/layout/)

#### Header.jsx (Appears in all screens)
- **Variants**:
  - Welcome: "Moral Parliament" + "~3 minutes"
  - Questions: "Moral Parliament" + "Question X of 2"
  - Results: Minimal/integrated into screen
- **Props**: variant, step (optional)

#### ProgressBar.jsx (Appears in question screens)
- **Props**: percentage (50 or 100)
- **Features**:
  - Gradient fill bar
  - Smooth width transition

---

### 4. Utility Functions (src/utils/)

#### helpers.js
- `selectSingleOption(key, setCredences)` - Set single option to 100%
- `getSelectedOption(credences)` - Check if single option is at 100%

#### calculations.js
- `adjustCredences(changedKey, newValue, credences)` - Auto-balance sliders to 100%
- `calculateCauseValue(cause, animalMultiplier, futureMultiplier)` - Calculate value for a cause
- `calculateMaxEV(animalCreds, futureCreds)` - Calculate max expected value allocation
- `calculateVarianceVoting(animalCreds, futureCreds)` - Calculate variance voting allocation

---

### 5. Constants (src/constants/config.js)

#### Cause Definitions
```js
CAUSES = {
  globalHealth: { name: 'Global Health', points: 100, helpsCurrentHumans: true },
  animalWelfare: { name: 'Animal Welfare', points: 100, helpsAnimals: true },
  gcr: { name: 'GCR (Future)', points: 100, helpsFutureHumans: true }
}
```

#### Multipliers
```js
ANIMAL_MULTIPLIERS = { equal: 1, '10x': 0.1, '100x': 0.01 }
FUTURE_MULTIPLIERS = { equal: 1, '10x': 0.1, '100x': 0.01 }
```

#### Question Options Configurations
**Animal Question Options:**
- equal: "Animals and humans matter equally" (green #81B29A)
- 10x: "Animals matter 10× less than humans" (blue #98C1D9)
- 100x: "Animals matter 100× less than humans" (coral #E07A5F)

**Future Question Options:**
- equal: "Future and current humans matter equally" (green #81B29A)
- 10x: "Future humans matter 10× less" (blue #98C1D9)
- 100x: "Future humans matter 100× less" (coral #E07A5F)

---

## Shared Styles to Extract (src/styles/)

### Color Palette (variables.css)
```css
/* Backgrounds */
--bg-gradient: linear-gradient(145deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%);
--bg-overlay-subtle: rgba(255,255,255,0.03);
--bg-overlay-medium: rgba(30, 41, 59, 0.6);
--bg-overlay-dark: rgba(30, 41, 59, 0.4);

/* Primary Colors */
--color-coral: #E07A5F;
--color-green: #81B29A;
--color-blue: #98C1D9;
--color-yellow: #F2CC8F;
--color-dark-blue: #3D5A80;
--color-orange: #f97316;
--color-success: #10b981;

/* Text Colors */
--text-primary: #f4f4f4;
--text-secondary: rgba(255,255,255,0.5);
--text-tertiary: rgba(255,255,255,0.7);
--text-gray: #6b7280;
--text-gray-light: #9ca3af;

/* Border Colors */
--border-subtle: rgba(255,255,255,0.1);
--border-medium: rgba(71, 85, 105, 0.5);
--border-bright: rgba(255,255,255,0.2);
```

### Typography (variables.css)
```css
/* Fonts */
--font-heading: "Cormorant Garamond", Georgia, serif;
--font-body: "Source Sans Pro", sans-serif;

/* Sizes */
--text-xs: 0.7rem;
--text-sm: 0.75rem;
--text-base: 0.85rem;
--text-md: 0.875rem;
--text-lg: 0.9rem;
--text-xl: 1rem;
--text-2xl: 1.15rem;
--text-3xl: 1.25rem;
--text-4xl: 2.25rem;
--text-5xl: 4.5rem;

/* Weights */
--font-normal: 400;
--font-medium: 500;
--font-semibold: 600;
--font-bold: 700;
```

### Spacing (variables.css)
```css
--spacing-1: 0.25rem;
--spacing-2: 0.5rem;
--spacing-3: 0.75rem;
--spacing-4: 1rem;
--spacing-5: 1.25rem;
--spacing-6: 1.5rem;
--spacing-8: 2rem;
--spacing-12: 3rem;
--spacing-16: 4rem;
```

### Border Radius (variables.css)
```css
--radius-sm: 4px;
--radius-md: 8px;
--radius-lg: 12px;
--radius-xl: 16px;
--radius-full: 50px;
--radius-circle: 9999px;
```

### Transitions (variables.css)
```css
--transition-fast: all 0.2s ease;
--transition-base: all 0.3s ease;
--transition-slow: width 0.5s ease;
```

### Shadows (variables.css)
```css
--shadow-button: 0 8px 32px rgba(224, 122, 95, 0.4);
--shadow-button-sm: 0 4px 24px rgba(224, 122, 95, 0.3);
```

---

## State Management

### Main Quiz Component (MoralParliamentQuiz.jsx)
Manages all state:
- `currentStep`: 'welcome' | 'animals' | 'future' | 'results'
- `animalCredences`: { equal, 10x, 100x }
- `futureCredences`: { equal, 10x, 100x }
- `originalAnimalCredences`: Snapshot for reset functionality
- `originalFutureCredences`: Snapshot for reset functionality
- `expandedPanel`: 'animals' | 'future' | null
- `animalInputMode`: 'options' | 'sliders'
- `futureInputMode`: 'options' | 'sliders'

### Data Flow
```
MoralParliamentQuiz (orchestrator)
  ├─→ WelcomeScreen
  │     └─→ Header
  ├─→ QuestionScreen (animals)
  │     ├─→ Header
  │     ├─→ ProgressBar
  │     ├─→ ModeToggle
  │     └─→ [OptionButton × 3] OR [CredenceSlider × 3]
  ├─→ QuestionScreen (future)
  │     └─→ (same as above)
  └─→ ResultsScreen
        ├─→ CauseBar × 6 (3 per method)
        └─→ EditPanel × 2
              └─→ CompactSlider × 3 each
```

---

## Notes for Refactoring

1. **QuestionScreen should be highly reusable** - Both animal and future questions share identical structure
2. **Color system** - Many colors are hardcoded; extract to CSS variables
3. **Inline styles** - Most styles are inline; consider extracting common patterns to CSS classes
4. **Icons** - Uses lucide-react for ChevronDown, ChevronUp, RotateCcw, Sliders
5. **Responsive design** - Uses `clamp()` for some font sizes; check if more responsive work needed
6. **Auto-balancing** - Core feature; must be preserved exactly
7. **Transitions** - Smooth animations are important for UX
8. **Font imports** - Need to import Google Fonts for Cormorant Garamond and Source Sans Pro
