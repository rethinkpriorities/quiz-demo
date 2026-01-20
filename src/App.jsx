import { QuizProvider } from './context/QuizContext';
import MoralParliamentQuiz from './components/MoralParliamentQuiz';
import './styles/global.css';

/**
 * Main app wrapper component
 * Provides quiz context and renders the Moral Parliament Quiz
 */
function App() {
  return (
    <QuizProvider>
      <MoralParliamentQuiz />
    </QuizProvider>
  );
}

export default App;
