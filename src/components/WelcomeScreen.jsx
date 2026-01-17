import Header from './layout/Header';

/**
 * Welcome/landing screen
 * Introduces the quiz and provides a start button
 */
const WelcomeScreen = ({ onStart }) => {
  return (
    <div className="screen">
      <Header subtitle="~3 minutes" />

      <main className="screen-main">
        <div style={{ maxWidth: '800px', textAlign: 'center' }}>
          <h1
            style={{
              fontSize: 'var(--text-hero)',
              fontWeight: 'var(--font-light)',
              lineHeight: 'var(--leading-tight)',
              marginBottom: 'var(--spacing-16)',
              letterSpacing: 'var(--tracking-tight)'
            }}
          >
            Where Should Your
            <br />
            <span
              style={{
                fontStyle: 'italic',
                background: 'var(--gradient-primary)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}
            >
              Giving Go?
            </span>
          </h1>

          <p
            style={{
              fontSize: 'var(--text-3xl)',
              lineHeight: 'var(--leading-relaxed)',
              opacity: 0.8,
              marginBottom: 'var(--spacing-24)',
              fontFamily: 'var(--font-body)'
            }}
          >
            Uncertain about your ethical views? This tool helps you allocate resources
            across different causes based on your moral credences—the probabilities you
            assign to different ethical perspectives.
          </p>

          <button onClick={onStart} className="btn btn-primary">
            Start Quiz →
          </button>

          <div
            style={{
              marginTop: 'var(--spacing-32)',
              padding: 'var(--spacing-16)',
              background: 'var(--overlay-subtle)',
              borderRadius: 'var(--radius-xl)',
              border: '1px solid var(--border-subtle)'
            }}
          >
            <div
              style={{
                fontSize: 'var(--text-lg)',
                opacity: 0.7,
                marginBottom: 'var(--spacing-8)',
                fontFamily: 'var(--font-body)'
              }}
            >
              You'll be asked about:
            </div>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: 'var(--spacing-8)',
                fontFamily: 'var(--font-body)'
              }}
            >
              <div style={{ fontSize: 'var(--text-xl)' }}>🐾 Animal vs. Human welfare</div>
              <div style={{ fontSize: 'var(--text-xl)' }}>⏳ Current vs. Future generations</div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default WelcomeScreen;
