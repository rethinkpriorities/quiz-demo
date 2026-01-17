import React, { useState } from 'react';
import { ChevronDown, ChevronUp, RotateCcw, Sliders } from 'lucide-react';

const MoralParliamentQuiz = () => {
  const [currentStep, setCurrentStep] = useState('welcome');
  const [animalCredences, setAnimalCredences] = useState({
    equal: 33,
    '10x': 33,
    '100x': 34
  });
  const [futureCredences, setFutureCredences] = useState({
    equal: 33,
    '10x': 33,
    '100x': 34
  });
  const [originalAnimalCredences, setOriginalAnimalCredences] = useState(null);
  const [originalFutureCredences, setOriginalFutureCredences] = useState(null);
  const [expandedPanel, setExpandedPanel] = useState(null);
  
  // New state for tracking input mode per question
  const [animalInputMode, setAnimalInputMode] = useState('options'); // 'options' or 'sliders'
  const [futureInputMode, setFutureInputMode] = useState('options'); // 'options' or 'sliders'

  const CAUSES = {
    globalHealth: { name: 'Global Health', points: 100, helpsCurrentHumans: true },
    animalWelfare: { name: 'Animal Welfare', points: 100, helpsAnimals: true },
    gcr: { name: 'GCR (Future)', points: 100, helpsFutureHumans: true }
  };

  const ANIMAL_MULTIPLIERS = { equal: 1, '10x': 0.1, '100x': 0.01 };
  const FUTURE_MULTIPLIERS = { equal: 1, '10x': 0.1, '100x': 0.01 };

  // Set a single option to 100%
  const selectSingleOption = (key, setCredences) => {
    const newCredences = { equal: 0, '10x': 0, '100x': 0 };
    newCredences[key] = 100;
    setCredences(newCredences);
  };

  // Check if a single option is selected at 100%
  const getSelectedOption = (credences) => {
    for (const key of Object.keys(credences)) {
      if (credences[key] === 100) return key;
    }
    return null;
  };

  // Auto-balancing function: adjusts other sliders to maintain 100% total
  const adjustCredences = (changedKey, newValue, credences) => {
    newValue = Math.max(0, Math.min(100, newValue));
    
    const otherKeys = Object.keys(credences).filter(k => k !== changedKey);
    const currentOtherSum = otherKeys.reduce((sum, k) => sum + credences[k], 0);
    const targetOtherSum = 100 - newValue;
    
    const result = { [changedKey]: newValue };
    
    if (currentOtherSum === 0) {
      const each = Math.floor(targetOtherSum / otherKeys.length);
      let remainder = targetOtherSum - (each * otherKeys.length);
      otherKeys.forEach((k, i) => {
        result[k] = each + (i < remainder ? 1 : 0);
      });
    } else {
      let allocated = 0;
      otherKeys.forEach((k, i) => {
        if (i === otherKeys.length - 1) {
          result[k] = Math.max(0, targetOtherSum - allocated);
        } else {
          const proportion = credences[k] / currentOtherSum;
          const value = Math.round(targetOtherSum * proportion);
          result[k] = Math.max(0, value);
          allocated += result[k];
        }
      });
    }
    
    return result;
  };

  const calculateCauseValue = (cause, animalMultiplier, futureMultiplier) => {
    let value = cause.points;
    if (cause.helpsAnimals) value *= animalMultiplier;
    if (cause.helpsFutureHumans) value *= futureMultiplier;
    return value;
  };

  const calculateMaxEV = (animalCreds, futureCreds) => {
    const causeEVs = {};
    Object.entries(CAUSES).forEach(([causeKey, cause]) => {
      let ev = 0;
      Object.entries(animalCreds).forEach(([animalView, animalProb]) => {
        Object.entries(futureCreds).forEach(([futureView, futureProb]) => {
          const animalMult = ANIMAL_MULTIPLIERS[animalView];
          const futureMult = FUTURE_MULTIPLIERS[futureView];
          const worldviewProb = (animalProb / 100) * (futureProb / 100);
          const causeValue = calculateCauseValue(cause, animalMult, futureMult);
          ev += worldviewProb * causeValue;
        });
      });
      causeEVs[causeKey] = ev;
    });
    const maxEVCause = Object.keys(causeEVs).reduce((a, b) => causeEVs[a] > causeEVs[b] ? a : b);
    return {
      globalHealth: maxEVCause === 'globalHealth' ? 100 : 0,
      animalWelfare: maxEVCause === 'animalWelfare' ? 100 : 0,
      gcr: maxEVCause === 'gcr' ? 100 : 0,
      evs: causeEVs
    };
  };

  const calculateVarianceVoting = (animalCreds, futureCreds) => {
    const votes = { globalHealth: 0, animalWelfare: 0, gcr: 0 };
    Object.entries(animalCreds).forEach(([animalView, animalProb]) => {
      Object.entries(futureCreds).forEach(([futureView, futureProb]) => {
        const worldviewWeight = (animalProb / 100) * (futureProb / 100);
        const animalMult = ANIMAL_MULTIPLIERS[animalView];
        const futureMult = FUTURE_MULTIPLIERS[futureView];
        const values = {};
        Object.entries(CAUSES).forEach(([causeKey, cause]) => {
          values[causeKey] = calculateCauseValue(cause, animalMult, futureMult);
        });
        const maxValue = Math.max(...Object.values(values));
        const tiedCauses = Object.keys(values).filter(causeKey => Math.abs(values[causeKey] - maxValue) < 0.0001);
        const votePerCause = worldviewWeight / tiedCauses.length;
        tiedCauses.forEach(causeKey => { votes[causeKey] += votePerCause; });
      });
    });
    return {
      globalHealth: votes.globalHealth * 100,
      animalWelfare: votes.animalWelfare * 100,
      gcr: votes.gcr * 100
    };
  };

  // Option button component for quick selection
  const OptionButton = ({ label, description, optionKey, credences, setCredences, color, setInputMode }) => {
    const isSelected = credences[optionKey] === 100;
    
    return (
      <button
        onClick={() => {
          selectSingleOption(optionKey, setCredences);
          setInputMode('options');
        }}
        style={{
          width: '100%',
          padding: '1.25rem 1.5rem',
          marginBottom: '0.75rem',
          background: isSelected 
            ? `linear-gradient(135deg, ${color}22, ${color}11)`
            : 'rgba(255,255,255,0.02)',
          border: isSelected 
            ? `2px solid ${color}` 
            : '1px solid rgba(255,255,255,0.1)',
          borderRadius: '12px',
          cursor: 'pointer',
          textAlign: 'left',
          transition: 'all 0.2s ease',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div>
            <div style={{ 
              fontSize: '1rem', 
              fontWeight: 500, 
              color: isSelected ? color : '#f4f4f4', 
              marginBottom: '0.25rem' 
            }}>
              {label}
            </div>
            <div style={{ 
              fontSize: '0.85rem', 
              color: 'rgba(255,255,255,0.5)', 
              fontFamily: '"Source Sans Pro", sans-serif' 
            }}>
              {description}
            </div>
          </div>
          {isSelected && (
            <div style={{
              width: '24px',
              height: '24px',
              borderRadius: '50%',
              background: color,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#fff',
              fontSize: '14px',
              fontWeight: 'bold',
              flexShrink: 0
            }}>
              ✓
            </div>
          )}
        </div>
      </button>
    );
  };

  // Full-size slider for quiz questions (auto-balancing)
  const CredenceSlider = ({ label, description, value, onChange, color }) => (
    <div style={{ marginBottom: '1.5rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '0.5rem' }}>
        <div>
          <div style={{ fontSize: '1rem', fontWeight: 500, color: '#f4f4f4', marginBottom: '0.25rem' }}>{label}</div>
          <div style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.5)', fontFamily: '"Source Sans Pro", sans-serif' }}>{description}</div>
        </div>
        <div style={{ fontSize: '1.25rem', fontWeight: 600, color: color, minWidth: '60px', textAlign: 'right' }}>{value}%</div>
      </div>
      <input
        type="range" min="0" max="100" value={value}
        onChange={(e) => onChange(parseInt(e.target.value))}
        style={{
          width: '100%', height: '8px', borderRadius: '4px',
          background: `linear-gradient(to right, ${color} 0%, ${color} ${value}%, rgba(255,255,255,0.15) ${value}%, rgba(255,255,255,0.15) 100%)`,
          outline: 'none', WebkitAppearance: 'none', cursor: 'pointer'
        }}
      />
    </div>
  );

  // Compact slider for results page (auto-balancing)
  const CompactSlider = ({ label, value, onChange, color }) => (
    <div style={{ marginBottom: '0.625rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.25rem' }}>
        <span style={{ fontSize: '0.8rem', color: '#e5e7eb' }}>{label}</span>
        <span style={{ fontSize: '0.875rem', fontWeight: 600, color }}>{value}%</span>
      </div>
      <input
        type="range" min="0" max="100" value={value}
        onChange={(e) => onChange(parseInt(e.target.value))}
        style={{
          width: '100%', height: '6px', borderRadius: '3px',
          background: `linear-gradient(to right, ${color} 0%, ${color} ${value}%, rgb(51,65,85) ${value}%, rgb(51,65,85) 100%)`,
          outline: 'none', WebkitAppearance: 'none', cursor: 'pointer'
        }}
      />
    </div>
  );

  // Mode toggle component
  const ModeToggle = ({ mode, setMode }) => (
    <div style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      marginBottom: '1.5rem',
      gap: '0.5rem'
    }}>
      <button
        onClick={() => setMode('options')}
        style={{
          padding: '0.5rem 1rem',
          fontSize: '0.85rem',
          fontFamily: '"Source Sans Pro", sans-serif',
          fontWeight: 500,
          borderRadius: '20px',
          border: mode === 'options' ? '1px solid #81B29A' : '1px solid rgba(255,255,255,0.2)',
          background: mode === 'options' ? 'rgba(129, 178, 154, 0.2)' : 'transparent',
          color: mode === 'options' ? '#81B29A' : 'rgba(255,255,255,0.6)',
          cursor: 'pointer',
          transition: 'all 0.2s ease'
        }}
      >
        Pick One
      </button>
      <button
        onClick={() => setMode('sliders')}
        style={{
          padding: '0.5rem 1rem',
          fontSize: '0.85rem',
          fontFamily: '"Source Sans Pro", sans-serif',
          fontWeight: 500,
          borderRadius: '20px',
          border: mode === 'sliders' ? '1px solid #E07A5F' : '1px solid rgba(255,255,255,0.2)',
          background: mode === 'sliders' ? 'rgba(224, 122, 95, 0.2)' : 'transparent',
          color: mode === 'sliders' ? '#E07A5F' : 'rgba(255,255,255,0.6)',
          cursor: 'pointer',
          transition: 'all 0.2s ease',
          display: 'flex',
          alignItems: 'center',
          gap: '0.375rem'
        }}
      >
        <Sliders size={14} />
        Custom Mix
      </button>
    </div>
  );

  // Welcome Screen
  if (currentStep === 'welcome') {
    return (
      <div style={{
        minHeight: '100vh',
        background: 'linear-gradient(145deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
        fontFamily: '"Cormorant Garamond", Georgia, serif',
        color: '#f4f4f4',
        display: 'flex',
        flexDirection: 'column'
      }}>
        <header style={{ padding: '2rem 4rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ fontSize: '0.9rem', letterSpacing: '0.2em', textTransform: 'uppercase', opacity: 0.7 }}>Moral Parliament</div>
          <div style={{ fontSize: '0.85rem', opacity: 0.5 }}>~3 minutes</div>
        </header>

        <main style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem 4rem' }}>
          <div style={{ maxWidth: '800px', textAlign: 'center' }}>
            <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', fontWeight: 300, lineHeight: 1.1, marginBottom: '2rem', letterSpacing: '-0.02em' }}>
              Where Should Your<br />
              <span style={{ fontStyle: 'italic', background: 'linear-gradient(90deg, #E07A5F, #81B29A)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                Giving Go?
              </span>
            </h1>
            
            <p style={{ fontSize: '1.15rem', lineHeight: 1.7, opacity: 0.8, marginBottom: '3rem', fontFamily: '"Source Sans Pro", sans-serif' }}>
              Uncertain about your ethical views? This tool helps you allocate resources 
              across different causes based on your moral credences—the probabilities you 
              assign to different ethical perspectives.
            </p>

            <button
              onClick={() => setCurrentStep('animals')}
              style={{
                background: 'linear-gradient(135deg, #E07A5F 0%, #c65d43 100%)',
                color: '#fff', border: 'none', padding: '1.25rem 3rem', fontSize: '1.1rem',
                fontFamily: '"Source Sans Pro", sans-serif', fontWeight: 600, borderRadius: '50px',
                cursor: 'pointer', letterSpacing: '0.05em', boxShadow: '0 8px 32px rgba(224, 122, 95, 0.4)',
                transition: 'all 0.3s ease'
              }}
            >
              Start Quiz →
            </button>

            <div style={{ marginTop: '4rem', padding: '2rem', background: 'rgba(255,255,255,0.03)', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.1)' }}>
              <div style={{ fontSize: '0.9rem', opacity: 0.7, marginBottom: '1rem', fontFamily: '"Source Sans Pro", sans-serif' }}>You'll be asked about:</div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', fontFamily: '"Source Sans Pro", sans-serif' }}>
                <div style={{ fontSize: '0.95rem' }}>🐾 Animal vs. Human welfare</div>
                <div style={{ fontSize: '0.95rem' }}>⏳ Current vs. Future generations</div>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }

  // Question 1: Animals
  if (currentStep === 'animals') {
    const total = animalCredences.equal + animalCredences['10x'] + animalCredences['100x'];

    const options = [
      { key: 'equal', label: 'Animals and humans matter equally', description: 'Equal weight to equivalent experiences', color: '#81B29A' },
      { key: '10x', label: 'Animals matter 10× less than humans', description: 'Moderate speciesist view', color: '#98C1D9' },
      { key: '100x', label: 'Animals matter 100× less than humans', description: 'Strong speciesist view', color: '#E07A5F' }
    ];

    return (
      <div style={{
        minHeight: '100vh',
        background: 'linear-gradient(145deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
        fontFamily: '"Cormorant Garamond", Georgia, serif',
        color: '#f4f4f4',
        display: 'flex',
        flexDirection: 'column'
      }}>
        <header style={{ padding: '2rem 4rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ fontSize: '0.9rem', letterSpacing: '0.2em', textTransform: 'uppercase', opacity: 0.7 }}>Moral Parliament</div>
          <div style={{ fontSize: '0.85rem', opacity: 0.5 }}>Question 1 of 2</div>
        </header>

        <div style={{ padding: '0 4rem', marginBottom: '2rem' }}>
          <div style={{ height: '4px', background: 'rgba(255,255,255,0.1)', borderRadius: '2px' }}>
            <div style={{ width: '50%', height: '100%', background: 'linear-gradient(90deg, #E07A5F, #81B29A)', borderRadius: '2px', transition: 'width 0.5s ease' }} />
          </div>
        </div>

        <main style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem 4rem' }}>
          <div style={{ maxWidth: '700px', width: '100%' }}>
            <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.2em', color: '#81B29A', marginBottom: '1rem', fontFamily: '"Source Sans Pro", sans-serif' }}>Moral Weights</div>
            <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', fontWeight: 400, lineHeight: 1.3, marginBottom: '0.75rem' }}>
              How do you value animal welfare relative to human welfare?
            </h2>
            <p style={{ fontSize: '1rem', opacity: 0.6, marginBottom: '1.5rem', fontFamily: '"Source Sans Pro", sans-serif' }}>
              {animalInputMode === 'options' 
                ? 'Choose the view that best represents your position, or use "Custom Mix" to split your credence.'
                : 'Distribute your credence (confidence) across these views. Sliders auto-balance to 100%.'}
            </p>

            <ModeToggle mode={animalInputMode} setMode={setAnimalInputMode} />

            <div style={{ background: 'rgba(255,255,255,0.03)', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.1)', padding: '2rem' }}>
              {animalInputMode === 'options' ? (
                <>
                  {options.map(opt => (
                    <OptionButton
                      key={opt.key}
                      label={opt.label}
                      description={opt.description}
                      optionKey={opt.key}
                      credences={animalCredences}
                      setCredences={setAnimalCredences}
                      color={opt.color}
                      setInputMode={setAnimalInputMode}
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
                      value={animalCredences[opt.key]}
                      onChange={(val) => setAnimalCredences(adjustCredences(opt.key, val, animalCredences))}
                      color={opt.color}
                    />
                  ))}
                  <div style={{ marginTop: '1rem', padding: '0.75rem', background: 'rgba(129, 178, 154, 0.1)', borderRadius: '8px', fontSize: '0.9rem', fontFamily: '"Source Sans Pro", sans-serif', color: '#81B29A', textAlign: 'center' }}>
                    Total: {total}% ✓
                  </div>
                </>
              )}
            </div>

            <div style={{ marginTop: '2.5rem', display: 'flex', justifyContent: 'space-between' }}>
              <button onClick={() => setCurrentStep('welcome')} style={{ background: 'rgba(255,255,255,0.05)', color: '#fff', border: '1px solid rgba(255,255,255,0.2)', padding: '1rem 2rem', fontSize: '1rem', fontFamily: '"Source Sans Pro", sans-serif', fontWeight: 600, borderRadius: '50px', cursor: 'pointer', letterSpacing: '0.05em', transition: 'all 0.3s ease' }}>← Back</button>
              <button onClick={() => setCurrentStep('future')} style={{ background: 'linear-gradient(135deg, #E07A5F 0%, #c65d43 100%)', color: '#fff', border: 'none', padding: '1rem 2rem', fontSize: '1rem', fontFamily: '"Source Sans Pro", sans-serif', fontWeight: 600, borderRadius: '50px', cursor: 'pointer', letterSpacing: '0.05em', boxShadow: '0 4px 24px rgba(224, 122, 95, 0.3)', transition: 'all 0.3s ease' }}>Continue →</button>
            </div>
          </div>
        </main>
      </div>
    );
  }

  // Question 2: Future
  if (currentStep === 'future') {
    const total = futureCredences.equal + futureCredences['10x'] + futureCredences['100x'];

    const options = [
      { key: 'equal', label: 'Future and current humans matter equally', description: 'No time discounting', color: '#81B29A' },
      { key: '10x', label: 'Future humans matter 10× less', description: 'Moderate time preference', color: '#98C1D9' },
      { key: '100x', label: 'Future humans matter 100× less', description: 'Strong present focus', color: '#E07A5F' }
    ];

    return (
      <div style={{
        minHeight: '100vh',
        background: 'linear-gradient(145deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
        fontFamily: '"Cormorant Garamond", Georgia, serif',
        color: '#f4f4f4',
        display: 'flex',
        flexDirection: 'column'
      }}>
        <header style={{ padding: '2rem 4rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ fontSize: '0.9rem', letterSpacing: '0.2em', textTransform: 'uppercase', opacity: 0.7 }}>Moral Parliament</div>
          <div style={{ fontSize: '0.85rem', opacity: 0.5 }}>Question 2 of 2</div>
        </header>

        <div style={{ padding: '0 4rem', marginBottom: '2rem' }}>
          <div style={{ height: '4px', background: 'rgba(255,255,255,0.1)', borderRadius: '2px' }}>
            <div style={{ width: '100%', height: '100%', background: 'linear-gradient(90deg, #E07A5F, #81B29A)', borderRadius: '2px', transition: 'width 0.5s ease' }} />
          </div>
        </div>

        <main style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem 4rem' }}>
          <div style={{ maxWidth: '700px', width: '100%' }}>
            <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.2em', color: '#81B29A', marginBottom: '1rem', fontFamily: '"Source Sans Pro", sans-serif' }}>Time Preference</div>
            <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', fontWeight: 400, lineHeight: 1.3, marginBottom: '0.75rem' }}>
              How do you value future human welfare relative to current human welfare?
            </h2>
            <p style={{ fontSize: '1rem', opacity: 0.6, marginBottom: '1.5rem', fontFamily: '"Source Sans Pro", sans-serif' }}>
              {futureInputMode === 'options' 
                ? 'Choose the view that best represents your position, or use "Custom Mix" to split your credence.'
                : 'Distribute your credence across these views. Sliders auto-balance to 100%.'}
            </p>

            <ModeToggle mode={futureInputMode} setMode={setFutureInputMode} />

            <div style={{ background: 'rgba(255,255,255,0.03)', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.1)', padding: '2rem' }}>
              {futureInputMode === 'options' ? (
                <>
                  {options.map(opt => (
                    <OptionButton
                      key={opt.key}
                      label={opt.label}
                      description={opt.description}
                      optionKey={opt.key}
                      credences={futureCredences}
                      setCredences={setFutureCredences}
                      color={opt.color}
                      setInputMode={setFutureInputMode}
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
                      value={futureCredences[opt.key]}
                      onChange={(val) => setFutureCredences(adjustCredences(opt.key, val, futureCredences))}
                      color={opt.color}
                    />
                  ))}
                  <div style={{ marginTop: '1rem', padding: '0.75rem', background: 'rgba(129, 178, 154, 0.1)', borderRadius: '8px', fontSize: '0.9rem', fontFamily: '"Source Sans Pro", sans-serif', color: '#81B29A', textAlign: 'center' }}>
                    Total: {total}% ✓
                  </div>
                </>
              )}
            </div>

            <div style={{ marginTop: '2.5rem', display: 'flex', justifyContent: 'space-between' }}>
              <button onClick={() => setCurrentStep('animals')} style={{ background: 'rgba(255,255,255,0.05)', color: '#fff', border: '1px solid rgba(255,255,255,0.2)', padding: '1rem 2rem', fontSize: '1rem', fontFamily: '"Source Sans Pro", sans-serif', fontWeight: 600, borderRadius: '50px', cursor: 'pointer', letterSpacing: '0.05em', transition: 'all 0.3s ease' }}>← Back</button>
              <button
                onClick={() => {
                  if (!originalAnimalCredences) {
                    setOriginalAnimalCredences({...animalCredences});
                    setOriginalFutureCredences({...futureCredences});
                  }
                  setCurrentStep('results');
                }}
                style={{ background: 'linear-gradient(135deg, #E07A5F 0%, #c65d43 100%)', color: '#fff', border: 'none', padding: '1rem 2rem', fontSize: '1rem', fontFamily: '"Source Sans Pro", sans-serif', fontWeight: 600, borderRadius: '50px', cursor: 'pointer', letterSpacing: '0.05em', boxShadow: '0 4px 24px rgba(224, 122, 95, 0.3)', transition: 'all 0.3s ease' }}
              >
                See Results →
              </button>
            </div>
          </div>
        </main>
      </div>
    );
  }

  // Results Screen - COMPACT VERSION with auto-balancing sliders
  if (currentStep === 'results') {
    const maxEVResults = calculateMaxEV(animalCredences, futureCredences);
    const parliamentResults = calculateVarianceVoting(animalCredences, futureCredences);
    const originalMaxEV = originalAnimalCredences ? calculateMaxEV(originalAnimalCredences, originalFutureCredences) : null;
    const originalParliament = originalAnimalCredences ? calculateVarianceVoting(originalAnimalCredences, originalFutureCredences) : null;

    const hasChanged = originalAnimalCredences && (
      JSON.stringify(animalCredences) !== JSON.stringify(originalAnimalCredences) ||
      JSON.stringify(futureCredences) !== JSON.stringify(originalFutureCredences)
    );

    const resetToOriginal = () => {
      setAnimalCredences({...originalAnimalCredences});
      setFutureCredences({...originalFutureCredences});
    };

    // Compact cause bar
    const CauseBar = ({ name, percentage, color, originalPercentage = null }) => (
      <div style={{ marginBottom: '0.375rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.125rem', fontSize: '0.75rem', fontFamily: '"Source Sans Pro", sans-serif' }}>
          <span style={{ color: '#9ca3af' }}>{name}</span>
          <span style={{ fontWeight: 500, color }}>
            {percentage.toFixed(0)}%
            {hasChanged && originalPercentage !== null && percentage !== originalPercentage && (
              <span style={{ marginLeft: '0.25rem', color: percentage > originalPercentage ? '#34d399' : '#f87171' }}>
                {percentage > originalPercentage ? '↑' : '↓'}
              </span>
            )}
          </span>
        </div>
        <div style={{ height: '20px', background: '#1e293b', borderRadius: '4px', overflow: 'hidden', position: 'relative' }}>
          {hasChanged && originalPercentage !== null && percentage !== originalPercentage && (
            <div style={{ position: 'absolute', height: '100%', width: `${originalPercentage}%`, background: color, opacity: 0.25 }} />
          )}
          <div style={{ height: '100%', width: `${percentage}%`, background: color, transition: 'width 0.3s ease', display: 'flex', alignItems: 'center', justifyContent: 'flex-end', paddingRight: percentage > 15 ? '6px' : 0 }}>
            {percentage > 15 && <span style={{ color: '#fff', fontSize: '10px', fontWeight: 700 }}>{percentage.toFixed(0)}%</span>}
          </div>
        </div>
      </div>
    );

    // Compact edit panel with auto-balancing sliders
    const EditPanel = ({ title, icon, credences, setCredences, originalCredences: origCreds, configs, isExpanded, onToggle }) => {
      const panelChanged = origCreds && JSON.stringify(credences) !== JSON.stringify(origCreds);
      
      return (
        <div style={{
          borderRadius: '8px',
          border: `1px solid ${isExpanded ? 'rgba(16, 185, 129, 0.4)' : 'rgba(71, 85, 105, 0.5)'}`,
          background: isExpanded ? 'rgba(6, 78, 59, 0.3)' : 'rgba(30, 41, 59, 0.5)',
          overflow: 'hidden',
          transition: 'all 0.2s ease'
        }}>
          <button
            onClick={onToggle}
            style={{
              width: '100%',
              padding: '0.5rem 0.75rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              background: 'transparent',
              border: 'none',
              cursor: 'pointer',
              color: '#f3f4f6',
              textAlign: 'left'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span style={{ fontSize: '1rem' }}>{icon}</span>
              <span style={{ fontSize: '0.875rem', fontWeight: 500 }}>{title}</span>
              {panelChanged && (
                <span style={{ fontSize: '10px', background: 'rgba(249, 115, 22, 0.3)', color: '#fdba74', padding: '0.125rem 0.375rem', borderRadius: '9999px' }}>modified</span>
              )}
              {!isExpanded && (
                <span style={{ fontSize: '10px', color: '#6b7280', marginLeft: '0.25rem' }}>
                  {configs.map(c => `${c.short}:${credences[c.key]}%`).join(' ')}
                </span>
              )}
            </div>
            <span style={{ color: '#6b7280' }}>
              {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </span>
          </button>
          
          {isExpanded && (
            <div style={{ padding: '0.5rem 0.75rem 0.75rem', borderTop: '1px solid rgba(71, 85, 105, 0.5)' }}>
              {configs.map(config => (
                <CompactSlider
                  key={config.key}
                  label={config.label}
                  value={credences[config.key]}
                  onChange={(val) => setCredences(adjustCredences(config.key, val, credences))}
                  color={config.color}
                />
              ))}
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginTop: '0.25rem'
              }}>
                <span style={{ fontSize: '0.7rem', color: '#6b7280', fontStyle: 'italic' }}>
                  Sliders auto-balance to 100%
                </span>
                {panelChanged && (
                  <button
                    onClick={(e) => { e.stopPropagation(); setCredences({...origCreds}); }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.25rem',
                      fontSize: '10px',
                      color: '#9ca3af',
                      border: '1px solid #4b5563',
                      padding: '0.125rem 0.375rem',
                      borderRadius: '9999px',
                      background: 'transparent',
                      cursor: 'pointer'
                    }}
                  >
                    <RotateCcw size={10} /> Reset
                  </button>
                )}
              </div>
            </div>
          )}
        </div>
      );
    };

    const animalConfigs = [
      { key: 'equal', label: 'Equal weight', short: 'Eq', color: '#81B29A' },
      { key: '10x', label: '10× less', short: '10×', color: '#98C1D9' },
      { key: '100x', label: '100× less', short: '100×', color: '#E07A5F' }
    ];

    const futureConfigs = [
      { key: 'equal', label: 'Equal weight', short: 'Eq', color: '#81B29A' },
      { key: '10x', label: '10× less', short: '10×', color: '#98C1D9' },
      { key: '100x', label: '100× less', short: '100×', color: '#E07A5F' }
    ];

    return (
      <div style={{
        minHeight: '100vh',
        background: 'linear-gradient(145deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
        fontFamily: '"Cormorant Garamond", Georgia, serif',
        color: '#f4f4f4',
        padding: '0.75rem 1rem'
      }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          {/* Compact header */}
          <div style={{ textAlign: 'center', marginBottom: '0.75rem' }}>
            <h1 style={{ fontSize: '1.25rem', fontWeight: 400, margin: 0 }}>
              Recommended Allocations
              {hasChanged && <span style={{ color: '#34d399', fontSize: '0.75rem', marginLeft: '0.5rem', fontWeight: 400 }}>(modified)</span>}
            </h1>
          </div>

          {/* Side-by-side results */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', marginBottom: '0.75rem' }}>
            {/* Max EV */}
            <div style={{ background: 'rgba(30, 41, 59, 0.6)', borderRadius: '12px', border: '1px solid rgba(71, 85, 105, 0.5)', padding: '0.75rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                <div style={{ width: '28px', height: '28px', borderRadius: '8px', background: 'linear-gradient(135deg, #f97316, #ea580c)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.875rem' }}>🎯</div>
                <div>
                  <h3 style={{ fontSize: '0.875rem', fontWeight: 500, margin: 0, lineHeight: 1.2 }}>Max Expected Value</h3>
                  <p style={{ fontSize: '10px', color: '#6b7280', margin: 0 }}>100% to highest EV</p>
                </div>
              </div>
              <CauseBar name="Global Health" percentage={maxEVResults.globalHealth} originalPercentage={originalMaxEV?.globalHealth} color="#F2CC8F" />
              <CauseBar name="Animal Welfare" percentage={maxEVResults.animalWelfare} originalPercentage={originalMaxEV?.animalWelfare} color="#81B29A" />
              <CauseBar name="GCR (Future)" percentage={maxEVResults.gcr} originalPercentage={originalMaxEV?.gcr} color="#3D5A80" />
              <div style={{ fontSize: '10px', color: '#6b7280', marginTop: '0.375rem', paddingTop: '0.375rem', borderTop: '1px solid rgba(71, 85, 105, 0.5)' }}>
                EVs: GH {maxEVResults.evs.globalHealth.toFixed(0)} · AW {maxEVResults.evs.animalWelfare.toFixed(0)} · GCR {maxEVResults.evs.gcr.toFixed(0)}
              </div>
            </div>

            {/* Variance Voting */}
            <div style={{ background: 'rgba(30, 41, 59, 0.6)', borderRadius: '12px', border: '1px solid rgba(71, 85, 105, 0.5)', padding: '0.75rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                <div style={{ width: '28px', height: '28px', borderRadius: '8px', background: 'linear-gradient(135deg, #10b981, #059669)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.875rem' }}>🏛️</div>
                <div>
                  <h3 style={{ fontSize: '0.875rem', fontWeight: 500, margin: 0, lineHeight: 1.2 }}>Variance Voting</h3>
                  <p style={{ fontSize: '10px', color: '#6b7280', margin: 0 }}>Weighted worldview votes</p>
                </div>
              </div>
              <CauseBar name="Global Health" percentage={parliamentResults.globalHealth} originalPercentage={originalParliament?.globalHealth} color="#F2CC8F" />
              <CauseBar name="Animal Welfare" percentage={parliamentResults.animalWelfare} originalPercentage={originalParliament?.animalWelfare} color="#81B29A" />
              <CauseBar name="GCR (Future)" percentage={parliamentResults.gcr} originalPercentage={originalParliament?.gcr} color="#3D5A80" />
              <div style={{ fontSize: '10px', color: '#6b7280', marginTop: '0.375rem', paddingTop: '0.375rem', borderTop: '1px solid rgba(71, 85, 105, 0.5)' }}>
                9 worldviews vote for preferred cause
              </div>
            </div>
          </div>

          {/* Edit controls */}
          <div style={{ background: 'rgba(30, 41, 59, 0.4)', borderRadius: '12px', border: '1px solid rgba(71, 85, 105, 0.5)', padding: '0.75rem', marginBottom: '0.75rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
              <span style={{ fontSize: '0.875rem', fontWeight: 500, fontFamily: '"Source Sans Pro", sans-serif' }}>🎛️ Adjust Your Credences</span>
              {hasChanged && (
                <button
                  onClick={resetToOriginal}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.25rem',
                    fontSize: '10px',
                    color: '#fdba74',
                    border: '1px solid rgba(249, 115, 22, 0.4)',
                    background: 'rgba(249, 115, 22, 0.2)',
                    padding: '0.25rem 0.5rem',
                    borderRadius: '9999px',
                    cursor: 'pointer'
                  }}
                >
                  <RotateCcw size={10} /> Reset All
                </button>
              )}
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <EditPanel
                title="Animal Values"
                icon="🐾"
                credences={animalCredences}
                setCredences={setAnimalCredences}
                originalCredences={originalAnimalCredences}
                configs={animalConfigs}
                isExpanded={expandedPanel === 'animals'}
                onToggle={() => setExpandedPanel(expandedPanel === 'animals' ? null : 'animals')}
              />
              <EditPanel
                title="Future Values"
                icon="⏳"
                credences={futureCredences}
                setCredences={setFutureCredences}
                originalCredences={originalFutureCredences}
                configs={futureConfigs}
                isExpanded={expandedPanel === 'future'}
                onToggle={() => setExpandedPanel(expandedPanel === 'future' ? null : 'future')}
              />
            </div>
          </div>

          {/* Back button */}
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <button
              onClick={() => setCurrentStep('future')}
              style={{
                background: 'rgba(255,255,255,0.05)',
                color: '#fff',
                border: '1px solid rgba(255,255,255,0.2)',
                padding: '0.5rem 1.5rem',
                fontSize: '0.875rem',
                fontFamily: '"Source Sans Pro", sans-serif',
                fontWeight: 600,
                borderRadius: '50px',
                cursor: 'pointer',
                letterSpacing: '0.05em',
                transition: 'all 0.3s ease'
              }}
            >
              ← Back to Quiz
            </button>
          </div>
        </div>
      </div>
    );
  }

  return null;
};

export default MoralParliamentQuiz;
