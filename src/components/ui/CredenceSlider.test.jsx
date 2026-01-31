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
  let mockSetLockedKeys;

  beforeEach(() => {
    vi.clearAllMocks();
    mockOnChange = vi.fn();
    mockSetLockedKeys = vi.fn();
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
        lockedKeys={[]}
        setLockedKeys={mockSetLockedKeys}
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
        lockedKeys={[]}
        setLockedKeys={mockSetLockedKeys}
      />
    );

    const lockButton = screen.getByRole('button', { name: /lock slider/i });
    await user.click(lockButton);

    expect(mockSetLockedKeys).toHaveBeenCalledWith(['equal']);
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
        lockedKeys={['equal']}
        setLockedKeys={mockSetLockedKeys}
      />
    );

    const lockButton = screen.getByRole('button', { name: /unlock slider/i });
    await user.click(lockButton);

    expect(mockSetLockedKeys).toHaveBeenCalledWith([]);
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
        lockedKeys={['equal']}
        setLockedKeys={mockSetLockedKeys}
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
        lockedKeys={[]}
        setLockedKeys={mockSetLockedKeys}
      />
    );

    const slider = screen.getByRole('slider');
    expect(slider).not.toBeDisabled();
  });

  it('passes lockedKeys to onChange handler', async () => {
    const user = userEvent.setup();
    const lockedKeys = ['100x'];

    render(
      <CredenceSlider
        label="Test Slider"
        description="Test description"
        value={33}
        onChange={mockOnChange}
        color="#81B29A"
        credences={mockCredences}
        sliderKey="equal"
        lockedKeys={lockedKeys}
        setLockedKeys={mockSetLockedKeys}
      />
    );

    const slider = screen.getByRole('slider');
    await user.type(slider, '50');

    // Check that onChange was called with lockedKeys parameter
    expect(mockOnChange).toHaveBeenCalled();
    const lastCall = mockOnChange.mock.calls[mockOnChange.mock.calls.length - 1];
    expect(lastCall[3]).toEqual(lockedKeys);
  });

  it('prevents locking when n-2 sliders are already locked', async () => {
    const user = userEvent.setup();
    // With 3 sliders, only 1 can be locked (n-2 = 1)
    render(
      <CredenceSlider
        label="Test Slider"
        description="Test description"
        value={33}
        onChange={mockOnChange}
        color="#81B29A"
        credences={mockCredences}
        sliderKey="equal"
        lockedKeys={['10x']}
        setLockedKeys={mockSetLockedKeys}
      />
    );

    const lockButton = screen.getByRole('button', { name: /lock slider/i });
    expect(lockButton).toBeDisabled();

    await user.click(lockButton);
    expect(mockSetLockedKeys).not.toHaveBeenCalled();
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
        lockedKeys={[]}
        setLockedKeys={vi.fn()}
      />
    );

    const lockButton = screen.queryByRole('button', { name: /lock slider/i });
    expect(lockButton).not.toBeInTheDocument();
  });
});
