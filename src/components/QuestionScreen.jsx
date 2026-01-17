import Header from './layout/Header';
import ProgressBar from './layout/ProgressBar';
import ModeToggle from './ui/ModeToggle';
import OptionButton from './ui/OptionButton';
import CredenceSlider from './ui/CredenceSlider';

/**
 * Reusable question screen template
 * Used for both animal and future questions
 */
const QuestionScreen = ({
  categoryLabel,
  categoryColor,
  questionNumber,
  progressPercentage,
  heading,
  instructionsOptions,
  instructionsSliders,
  options,
  credences,
  setCredences,
  inputMode,
  setInputMode,
  onBack,
  onContinue,
  adjustCredences
}) => {
  const total = Object.values(credences).reduce((sum, val) => sum + val, 0);

  return (
    <div className="screen">
      <Header subtitle={questionNumber} />
      <ProgressBar percentage={progressPercentage} />

      <main className="screen-main">
        <div style={{ maxWidth: '700px', width: '100%' }}>
          <div
            style={{
              fontSize: 'var(--text-sm)',
              textTransform: 'uppercase',
              letterSpacing: 'var(--tracking-wider)',
              color: categoryColor,
              marginBottom: 'var(--spacing-8)',
              fontFamily: 'var(--font-body)'
            }}
          >
            {categoryLabel}
          </div>

          <h2
            style={{
              fontSize: 'var(--text-heading)',
              fontWeight: 'var(--font-normal)',
              lineHeight: 'var(--leading-normal)',
              marginBottom: 'var(--spacing-6)'
            }}
          >
            {heading}
          </h2>

          <p
            style={{
              fontSize: 'var(--text-2xl)',
              opacity: 0.6,
              marginBottom: 'var(--spacing-12)',
              fontFamily: 'var(--font-body)'
            }}
          >
            {inputMode === 'options' ? instructionsOptions : instructionsSliders}
          </p>

          <ModeToggle mode={inputMode} setMode={setInputMode} />

          <div className="card">
            {inputMode === 'options' ? (
              <>
                {options.map(opt => (
                  <OptionButton
                    key={opt.key}
                    label={opt.label}
                    description={opt.description}
                    optionKey={opt.key}
                    credences={credences}
                    setCredences={setCredences}
                    color={opt.color}
                    setInputMode={setInputMode}
                  />
                ))}
              </>
            ) : (
              <>
                {options.map(opt => (
                  <CredenceSlider
                    key={opt.key}
                    label={opt.label}
                    description={opt.description}
                    value={credences[opt.key]}
                    onChange={(val) => setCredences(adjustCredences(opt.key, val, credences))}
                    color={opt.color}
                  />
                ))}
                <div className="total">
                  Total: {total}% ✓
                </div>
              </>
            )}
          </div>

          <div
            style={{
              marginTop: 'var(--spacing-20)',
              display: 'flex',
              justifyContent: 'space-between'
            }}
          >
            <button onClick={onBack} className="btn btn-secondary">
              ← Back
            </button>
            <button onClick={onContinue} className="btn btn-primary">
              Continue →
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default QuestionScreen;
