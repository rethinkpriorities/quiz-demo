# Testing Checklist for Moral Parliament Quiz

## ✅ Automated Tests Completed

- [x] **Build Test**: Production build completed successfully (165.41 kB bundle)
- [x] **Syntax Validation**: Fixed quote escaping issues in instruction strings
- [x] **Dev Server**: Vite dev server running without errors on http://localhost:5173/

---

## 📋 Manual Testing Checklist

Please test the following functionality in your browser at **http://localhost:5173/**

### Welcome Screen
- [ ] Welcome screen loads correctly
- [ ] Hero headline displays with gradient text "Giving Go?"
- [ ] Description paragraph is readable
- [ ] Font: Cormorant Garamond for headings
- [ ] Font: Source Sans Pro for body text
- [ ] Background gradient displays correctly
- [ ] "Start Quiz →" button is visible and styled
- [ ] Preview card shows two items (animals & future)
- [ ] Click "Start Quiz" navigates to Animals question

### Question 1: Animals
- [ ] Header shows "Moral Parliament" and "Question 1 of 2"
- [ ] Progress bar shows 50% filled
- [ ] Category badge shows "MORAL WEIGHTS" in green
- [ ] Question heading displays correctly
- [ ] Mode toggle shows "Pick One" and "Custom Mix" buttons
- [ ] **Default mode is "Pick One"** (options mode)

#### Options Mode Testing
- [ ] Three option buttons display:
  - "Animals and humans matter equally" (green)
  - "Animals matter 10× less than humans" (blue)
  - "Animals matter 100× less than humans" (coral)
- [ ] Click an option button - it highlights with colored border
- [ ] Selected option shows checkmark (✓)
- [ ] Only one option can be selected at a time
- [ ] Click different option - previous unselects, new one selects

#### Sliders Mode Testing
- [ ] Click "Custom Mix" button - mode switches to sliders
- [ ] Three sliders display with labels and percentages
- [ ] Initial values: 33%, 33%, 34% (totaling 100%)
- [ ] Drag one slider - other sliders auto-adjust
- [ ] Total always equals 100%
- [ ] "Total: 100% ✓" indicator displays below sliders

#### Navigation
- [ ] "← Back" button returns to Welcome screen
- [ ] "Continue →" button advances to Future question

### Question 2: Future
- [ ] Header shows "Question 2 of 2"
- [ ] Progress bar shows 100% filled
- [ ] Category badge shows "TIME PREFERENCE" in green
- [ ] Question heading displays correctly
- [ ] Three option buttons display with correct labels
- [ ] Options mode and sliders mode both work
- [ ] Auto-balancing works correctly
- [ ] "← Back" returns to Animals question
- [ ] "Continue →" advances to Results screen

### Results Screen
- [ ] Compact layout with two side-by-side result cards
- [ ] Title shows "Recommended Allocations"

#### Max Expected Value Card
- [ ] Card shows 🎯 icon with orange gradient
- [ ] Title: "Max Expected Value"
- [ ] Subtitle: "100% to highest EV"
- [ ] Three cause bars display:
  - Global Health (yellow)
  - Animal Welfare (green)
  - GCR (Future) (dark blue)
- [ ] One bar shows 100%, others show 0%
- [ ] Footer shows EV values for all three causes

#### Variance Voting Card
- [ ] Card shows 🏛️ icon with green gradient
- [ ] Title: "Variance Voting"
- [ ] Subtitle: "Weighted worldview votes"
- [ ] Three cause bars display with percentages
- [ ] Percentages sum to 100%
- [ ] Footer shows "9 worldviews vote for preferred cause"

#### Adjustment Panel
- [ ] Section titled "🎛️ Adjust Your Credences"
- [ ] Two collapsible panels:
  - "🐾 Animal Values"
  - "⏳ Future Values"
- [ ] Click panel - it expands to show sliders
- [ ] Collapsed panel shows preview: "Eq:33% 10×:33% 100×:34%"
- [ ] Expanded panel shows three sliders with auto-balancing
- [ ] Footer text: "Sliders auto-balance to 100%"

#### Real-time Recalculation
- [ ] Change a credence value in Animal Values panel
- [ ] Cause bars update immediately
- [ ] "modified" badge appears on changed panel
- [ ] Up/down arrows (↑↓) show changes in cause bars
- [ ] Ghost bars show original values
- [ ] Title shows "(modified)" indicator
- [ ] Individual "Reset" button appears in panel
- [ ] "Reset All" button appears in header

#### Reset Functionality
- [ ] Click individual "Reset" button - that panel resets
- [ ] Click "Reset All" button - all values reset to original
- [ ] After reset, "modified" indicators disappear
- [ ] Cause bars return to original values

#### Navigation
- [ ] "← Back to Quiz" button returns to Future question
- [ ] Returning preserves credence values

### Visual & Responsive Testing
- [ ] All colors match design (gradients, borders, text)
- [ ] Typography is clean and readable
- [ ] Button hover states work (slight lift on primary buttons)
- [ ] Slider styling looks good (gradient fill)
- [ ] Transitions are smooth (bar width, panel expand/collapse)
- [ ] Test on different screen sizes (desktop, tablet, mobile)
- [ ] Mobile: Results grid stacks to single column

### Edge Cases
- [ ] Set one slider to 100% in questions - others go to 0%
- [ ] Set one slider to 0% - others adjust proportionally
- [ ] Navigate back from results, change answers, return to results
- [ ] Values persist during navigation within same session
- [ ] All lucide-react icons render correctly:
  - Sliders icon in mode toggle
  - ChevronDown/ChevronUp in edit panels
  - RotateCcw in reset buttons

### Browser Console
- [ ] Open browser DevTools console (F12)
- [ ] Check for zero JavaScript errors
- [ ] Check for zero React warnings
- [ ] Verify no 404 errors for fonts or assets

---

## 🐛 Issues Found

Document any issues below:

1.
2.
3.

---

## ✅ Success Criteria

All checkboxes above should be checked before considering Phase 10 complete.

The application should:
- ✅ Build without errors
- ✅ Run without console errors
- ✅ Match the original behavior exactly
- ✅ Display all visual elements correctly
- ✅ Calculate results accurately
- ✅ Support full user workflow from welcome to results
