import { Heart } from 'lucide-react'

function App() {
  return (
    <div style={{
      padding: '2rem',
      fontFamily: 'system-ui, sans-serif',
      textAlign: 'center'
    }}>
      <h1 style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
        <Heart size={32} />
        Moral Parliament Quiz
      </h1>
      <p>Vite + React setup successful!</p>
    </div>
  )
}

export default App
