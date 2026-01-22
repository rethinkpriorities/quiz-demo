import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import EditPanel from './EditPanel';

// Mock copy.json
vi.mock('../../../config/copy.json', () => ({
  default: {
    editPanel: {
      modifiedBadge: 'modified',
      sliderNote: 'Sliders auto-balance to 100%',
      selectionNote: 'Pick one option',
      resetButton: 'Reset',
    },
    sliders: {
      lockTooltip: 'Lock slider',
      unlockTooltip: 'Unlock slider',
    },
  },
}));

// Default mock for features with questionTypes enabled
vi.mock('../../../config/features.json', () => ({
  default: {
    ui: {
      questionTypes: true,
      sliderLock: false,
    },
  },
}));

const mockCredences = {
  equal: 33,
  '10x': 33,
  '100x': 34,
};

const mockConfigs = [
  { key: 'equal', label: 'Equal weight', short: 'Eq', color: '#81B29A' },
  { key: '10x', label: '10× less', short: '10×', color: '#98C1D9' },
  { key: '100x', label: '100× less', short: '100×', color: '#E07A5F' },
];

const defaultProps = {
  title: 'Test Panel',
  icon: '🧪',
  credences: mockCredences,
  setCredences: vi.fn(),
  originalCredences: mockCredences,
  configs: mockConfigs,
  isExpanded: true,
  onToggle: vi.fn(),
  lockedKey: null,
  setLockedKey: vi.fn(),
};

describe('EditPanel - Question Types', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe('when questionType is selection', () => {
    it('renders CompactSelection buttons instead of sliders', () => {
      render(<EditPanel {...defaultProps} questionType="selection" />);

      // Should show selection buttons with labels
      expect(screen.getByRole('button', { name: /equal weight/i })).toBeInTheDocument();
      expect(screen.getByRole('button', { name: /10× less/i })).toBeInTheDocument();
      expect(screen.getByRole('button', { name: /100× less/i })).toBeInTheDocument();

      // Should NOT show sliders
      expect(screen.queryByRole('slider')).not.toBeInTheDocument();
    });

    it('sets credences to 100/0/0 when clicking a selection button', async () => {
      const user = userEvent.setup();
      const setCredences = vi.fn();

      render(<EditPanel {...defaultProps} questionType="selection" setCredences={setCredences} />);

      // Click the "10× less" button
      await user.click(screen.getByRole('button', { name: /10× less/i }));

      // Should set 100 to clicked option, 0 to others
      expect(setCredences).toHaveBeenCalledWith({
        equal: 0,
        '10x': 100,
        '100x': 0,
      });
    });

    it('shows selection note instead of slider note', () => {
      render(<EditPanel {...defaultProps} questionType="selection" />);

      expect(screen.getByText('Pick one option')).toBeInTheDocument();
      expect(screen.queryByText('Sliders auto-balance to 100%')).not.toBeInTheDocument();
    });
  });

  describe('when questionType is credence', () => {
    it('renders sliders instead of selection buttons', () => {
      render(<EditPanel {...defaultProps} questionType="credence" />);

      // Should show sliders
      const sliders = screen.getAllByRole('slider');
      expect(sliders).toHaveLength(3);

      // Should NOT show selection buttons (besides the toggle button)
      const buttons = screen.getAllByRole('button');
      // Only the toggle button and potentially reset should be present, not selection buttons
      expect(buttons.every((btn) => !btn.textContent.includes('Equal weight'))).toBe(true);
    });

    it('shows slider note', () => {
      render(<EditPanel {...defaultProps} questionType="credence" />);

      expect(screen.getByText('Sliders auto-balance to 100%')).toBeInTheDocument();
    });
  });

  describe('when questionType is default', () => {
    it('renders sliders', () => {
      render(<EditPanel {...defaultProps} questionType="default" />);

      const sliders = screen.getAllByRole('slider');
      expect(sliders).toHaveLength(3);
    });
  });

  describe('when questionType is not provided', () => {
    it('defaults to sliders (default type behavior)', () => {
      render(<EditPanel {...defaultProps} />);

      const sliders = screen.getAllByRole('slider');
      expect(sliders).toHaveLength(3);
    });
  });
});

describe('EditPanel - Question Types Disabled', () => {
  beforeEach(() => {
    vi.doMock('../../../config/features.json', () => ({
      default: {
        ui: {
          questionTypes: false,
          sliderLock: false,
        },
      },
    }));
  });

  it('renders sliders for selection type when feature is disabled', async () => {
    vi.resetModules();
    const { default: EditPanelReimported } = await import('./EditPanel.jsx');

    render(<EditPanelReimported {...defaultProps} questionType="selection" />);

    // Should show sliders even though type is "selection"
    const sliders = screen.getAllByRole('slider');
    expect(sliders).toHaveLength(3);
  });
});
