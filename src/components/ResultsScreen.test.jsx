import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ResultsScreen from './ResultsScreen';

// Mock the features config
vi.mock('../../config/features.json', () => ({
  default: {
    ui: {
      resetButton: true,
    },
  },
}));

// Mock data for tests
const mockCredences = {
  equal: 33,
  '10x': 33,
  '100x': 34,
};

const mockResults = {
  globalHealth: 50,
  animalWelfare: 30,
  gcr: 20,
  evs: { globalHealth: 100, animalWelfare: 50, gcr: 75 },
};

const mockProps = {
  animalCredences: mockCredences,
  setAnimalCredences: vi.fn(),
  futureCredences: mockCredences,
  setFutureCredences: vi.fn(),
  scaleCredences: mockCredences,
  setScaleCredences: vi.fn(),
  certaintyCredences: mockCredences,
  setCertaintyCredences: vi.fn(),
  originalAnimalCredences: mockCredences,
  originalFutureCredences: mockCredences,
  originalScaleCredences: mockCredences,
  originalCertaintyCredences: mockCredences,
  expandedPanel: null,
  setExpandedPanel: vi.fn(),
  maxEVResults: mockResults,
  parliamentResults: mockResults,
  mergedFavoritesResults: mockResults,
  maximinResults: mockResults,
  originalMaxEV: mockResults,
  originalParliament: mockResults,
  originalMergedFavorites: mockResults,
  originalMaximin: mockResults,
  hasChanged: false,
  onResetAll: vi.fn(),
  onResetQuiz: vi.fn(),
  onBack: vi.fn(),
};

describe('ResultsScreen - Reset Button Feature', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('displays reset button when feature flag is enabled', () => {
    render(<ResultsScreen {...mockProps} />);

    const resetButton = screen.getByRole('button', { name: /start over/i });
    expect(resetButton).toBeInTheDocument();
  });

  it('calls onResetQuiz when reset button is clicked and confirmed', async () => {
    const user = userEvent.setup();
    render(<ResultsScreen {...mockProps} />);

    const resetButton = screen.getByRole('button', { name: /start over/i });
    await user.click(resetButton);

    expect(mockProps.onResetQuiz).toHaveBeenCalledTimes(1);
  });

  it('displays confirmation dialog before resetting', async () => {
    const user = userEvent.setup();
    const confirmSpy = vi.spyOn(window, 'confirm').mockReturnValue(false);

    render(<ResultsScreen {...mockProps} />);

    const resetButton = screen.getByRole('button', { name: /start over/i });
    await user.click(resetButton);

    expect(confirmSpy).toHaveBeenCalledWith(
      'Are you sure? This will clear all your answers and return to the beginning.'
    );
    expect(mockProps.onResetQuiz).not.toHaveBeenCalled();

    confirmSpy.mockRestore();
  });

  it('does not call onResetQuiz when confirmation is cancelled', async () => {
    const user = userEvent.setup();
    const confirmSpy = vi.spyOn(window, 'confirm').mockReturnValue(false);

    render(<ResultsScreen {...mockProps} />);

    const resetButton = screen.getByRole('button', { name: /start over/i });
    await user.click(resetButton);

    expect(mockProps.onResetQuiz).not.toHaveBeenCalled();

    confirmSpy.mockRestore();
  });
});

describe('ResultsScreen - Reset Button Disabled', () => {
  beforeEach(() => {
    // Mock features with resetButton disabled
    vi.doMock('../../config/features.json', () => ({
      default: {
        ui: {
          resetButton: false,
        },
      },
    }));
  });

  it('does not display reset button when feature flag is disabled', async () => {
    // Re-import component with new mock
    vi.resetModules();
    const { default: ResultsScreenWithDisabledFlag } = await import('./ResultsScreen.jsx');

    render(<ResultsScreenWithDisabledFlag {...mockProps} />);

    const resetButton = screen.queryByRole('button', { name: /start over/i });
    expect(resetButton).not.toBeInTheDocument();
  });
});
