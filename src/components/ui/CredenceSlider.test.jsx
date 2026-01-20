import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import CredenceSlider from './CredenceSlider';

// Mock the features config
vi.mock('../../../config/features.json', () => ({
  default: {
    ui: {
      sliderLock: true,
    },
  },
}));

const mockCredences = {
  equal: 33,
  '10x': 33,
  '100x': 34,
};

describe('CredenceSlider - Lock Feature', () => {
  let mockOnChange;
  let mockSetLockedKey;

  beforeEach(() => {
    vi.clearAllMocks();
    mockOnChange = vi.fn();
    mockSetLockedKey = vi.fn();
  });

  it('displays lock button when feature flag is enabled', () => {
    render(
      <CredenceSlider
        label="Test Slider"
        description="Test description"
        value={33}
        onChange={mockOnChange}
        color="#81B29A"
        credences={mockCredences}
        sliderKey="equal"
        lockedKey={null}
        setLockedKey={mockSetLockedKey}
      />
    );

    const lockButton = screen.getByRole('button', { name: /lock slider/i });
    expect(lockButton).toBeInTheDocument();
  });

  it('locks slider when lock button is clicked', async () => {
    const user = userEvent.setup();
    render(
      <CredenceSlider
        label="Test Slider"
        description="Test description"
        value={33}
        onChange={mockOnChange}
        color="#81B29A"
        credences={mockCredences}
        sliderKey="equal"
        lockedKey={null}
        setLockedKey={mockSetLockedKey}
      />
    );

    const lockButton = screen.getByRole('button', { name: /lock slider/i });
    await user.click(lockButton);

    expect(mockSetLockedKey).toHaveBeenCalledWith('equal');
  });

  it('unlocks slider when lock button is clicked on locked slider', async () => {
    const user = userEvent.setup();
    render(
      <CredenceSlider
        label="Test Slider"
        description="Test description"
        value={33}
        onChange={mockOnChange}
        color="#81B29A"
        credences={mockCredences}
        sliderKey="equal"
        lockedKey="equal"
        setLockedKey={mockSetLockedKey}
      />
    );

    const lockButton = screen.getByRole('button', { name: /unlock slider/i });
    await user.click(lockButton);

    expect(mockSetLockedKey).toHaveBeenCalledWith(null);
  });

  it('disables input when slider is locked', () => {
    render(
      <CredenceSlider
        label="Test Slider"
        description="Test description"
        value={33}
        onChange={mockOnChange}
        color="#81B29A"
        credences={mockCredences}
        sliderKey="equal"
        lockedKey="equal"
        setLockedKey={mockSetLockedKey}
      />
    );

    const slider = screen.getByRole('slider');
    expect(slider).toBeDisabled();
  });

  it('enables input when slider is not locked', () => {
    render(
      <CredenceSlider
        label="Test Slider"
        description="Test description"
        value={33}
        onChange={mockOnChange}
        color="#81B29A"
        credences={mockCredences}
        sliderKey="equal"
        lockedKey={null}
        setLockedKey={mockSetLockedKey}
      />
    );

    const slider = screen.getByRole('slider');
    expect(slider).not.toBeDisabled();
  });

  it('passes lockedKey to onChange handler', async () => {
    const user = userEvent.setup();
    const lockedKey = '100x';

    render(
      <CredenceSlider
        label="Test Slider"
        description="Test description"
        value={33}
        onChange={mockOnChange}
        color="#81B29A"
        credences={mockCredences}
        sliderKey="equal"
        lockedKey={lockedKey}
        setLockedKey={mockSetLockedKey}
      />
    );

    const slider = screen.getByRole('slider');
    await user.type(slider, '50');

    // Check that onChange was called with lockedKey parameter
    expect(mockOnChange).toHaveBeenCalled();
    const lastCall = mockOnChange.mock.calls[mockOnChange.mock.calls.length - 1];
    expect(lastCall[3]).toBe(lockedKey);
  });
});

describe('CredenceSlider - Lock Feature Disabled', () => {
  beforeEach(() => {
    // Mock features with sliderLock disabled
    vi.doMock('../../../config/features.json', () => ({
      default: {
        ui: {
          sliderLock: false,
        },
      },
    }));
  });

  it('does not display lock button when feature flag is disabled', async () => {
    // Re-import component with new mock
    vi.resetModules();
    const { default: CredenceSliderWithDisabledFlag } = await import('./CredenceSlider.jsx');

    render(
      <CredenceSliderWithDisabledFlag
        label="Test Slider"
        description="Test description"
        value={33}
        onChange={vi.fn()}
        color="#81B29A"
        credences={mockCredences}
        sliderKey="equal"
        lockedKey={null}
        setLockedKey={vi.fn()}
      />
    );

    const lockButton = screen.queryByRole('button', { name: /lock slider/i });
    expect(lockButton).not.toBeInTheDocument();
  });
});
