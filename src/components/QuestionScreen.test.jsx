import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import QuestionScreen from './QuestionScreen';
import { QuizContext } from '../context/QuizContext';

// Mock copy.json
vi.mock('../../config/copy.json', () => ({
  default: {
    branding: {
      title: 'Donor Compass',
    },
    navigation: {
      back: 'Back',
      continue: 'Continue',
    },
    questionScreen: {
      modeToggle: {
        pickOne: 'Pick One',
        customMix: 'Custom Mix',
      },
    },
    sliders: {
      lockTooltip: 'Lock slider',
      unlockTooltip: 'Unlock slider',
    },
  },
}));

// Default mock for features - will be overridden per test
vi.mock('../../config/features.json', () => ({
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

const createMockQuestion = (type = 'default') => ({
  id: 'test-question',
  type,
  categoryLabel: 'Test Category',
  heading: 'Test Question Heading',
  instructionsOptions: 'Pick one option',
  instructionsSliders: 'Adjust the sliders',
  options: [
    { key: 'equal', label: 'Option A', description: 'Description A', color: '#81B29A' },
    { key: '10x', label: 'Option B', description: 'Description B', color: '#98C1D9' },
    { key: '100x', label: 'Option C', description: 'Description C', color: '#E07A5F' },
  ],
});

const createMockContextValue = (questionType = 'default') => ({
  currentQuestion: createMockQuestion(questionType),
  stateMap: {
    'test-question': {
      credences: mockCredences,
      setCredences: vi.fn(),
      inputMode: 'options',
      setInputMode: vi.fn(),
      lockedKey: null,
      setLockedKey: vi.fn(),
    },
  },
  questionNumber: 'Question 1 of 4',
  progressPercentage: 25,
  goBack: vi.fn(),
  goForward: vi.fn(),
});

const renderWithContext = (contextValue) => {
  return render(
    <QuizContext.Provider value={contextValue}>
      <QuestionScreen />
    </QuizContext.Provider>
  );
};

describe('QuestionScreen - Question Types', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe('when questionTypes feature is enabled', () => {
    it('shows mode toggle for default type questions', () => {
      renderWithContext(createMockContextValue('default'));

      // Mode toggle should be present (Pick One / Custom Mix buttons)
      expect(screen.getByRole('button', { name: /pick one/i })).toBeInTheDocument();
      expect(screen.getByRole('button', { name: /custom mix/i })).toBeInTheDocument();
    });

    it('hides mode toggle for selection type questions', () => {
      renderWithContext(createMockContextValue('selection'));

      // Mode toggle should NOT be present
      expect(screen.queryByRole('button', { name: /pick one/i })).not.toBeInTheDocument();
      expect(screen.queryByRole('button', { name: /custom mix/i })).not.toBeInTheDocument();
    });

    it('hides mode toggle for credence type questions', () => {
      renderWithContext(createMockContextValue('credence'));

      // Mode toggle should NOT be present
      expect(screen.queryByRole('button', { name: /pick one/i })).not.toBeInTheDocument();
      expect(screen.queryByRole('button', { name: /custom mix/i })).not.toBeInTheDocument();
    });

    it('shows option buttons for selection type questions', () => {
      renderWithContext(createMockContextValue('selection'));

      // Should show the option buttons
      expect(screen.getByText('Option A')).toBeInTheDocument();
      expect(screen.getByText('Option B')).toBeInTheDocument();
      expect(screen.getByText('Option C')).toBeInTheDocument();
    });

    it('shows sliders for credence type questions', () => {
      renderWithContext(createMockContextValue('credence'));

      // Should show sliders (range inputs)
      const sliders = screen.getAllByRole('slider');
      expect(sliders).toHaveLength(3);
    });
  });
});

describe('QuestionScreen - Question Types Disabled', () => {
  beforeEach(() => {
    vi.doMock('../../config/features.json', () => ({
      default: {
        ui: {
          questionTypes: false,
          sliderLock: false,
        },
      },
    }));
  });

  it('shows mode toggle even for selection type when feature is disabled', async () => {
    vi.resetModules();
    const { default: QuestionScreenReimported } = await import('./QuestionScreen.jsx');
    const { QuizContext: QuizContextReimported } = await import('../context/QuizContext.jsx');

    render(
      <QuizContextReimported.Provider value={createMockContextValue('selection')}>
        <QuestionScreenReimported />
      </QuizContextReimported.Provider>
    );

    // Mode toggle SHOULD be present when feature is disabled
    expect(screen.getByRole('button', { name: /pick one/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /custom mix/i })).toBeInTheDocument();
  });
});
