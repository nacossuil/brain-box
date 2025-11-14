import './App.css'

// Placeholder for Issue #10 and #15
const Scoreboard = ({ score, questionNumber }) => {
  return (
    <header className="scoreboard">
      <h2>NACOSS Trivia Challenge</h2>
      <p>Score: {score} | Question {questionNumber} of 10</p>
    </header>
  );
};

// Placeholder for Issue #11
const QuestionCard = ({ questionText }) => {
  return (
    <div className="question-card">
      <h3>{questionText}</h3>
      <p>Answers will go here. (Check Issue #12)</p>
    </div>
  );
};


function App() {
  // Placeholder state for Issue #6, #7, #8
  const currentScore = 0;
  const currentQuestion = 0;
  const placeholderQuestion = "Where does the API fetching logic belong? (Hint: See Issue #6)";

  return (
    <div className='App'>
      {/* Scoreboard placeholder */}
      <Scoreboard score={currentScore} questionNumber={currentQuestion} />

      {/* Main Content */}
      <main>
        <h1>Hello there, welcome and Dynasty hopes you win the <b>Golden Pull Request Award Competition</b> </h1>
        <h1>Welcome to the NACOSS-BrainBox!</h1>
        <p>A simple app to test your React, state, and API integration skills.</p>

        {/* Question Card placeholder */}
        <QuestionCard questionText={placeholderQuestion} />
      </main>

      {/* Note for contributors */}
      <footer style={{ marginTop: '20px', fontSize: '0.8em', color: '#666' }}>
        Check the Issues tab and the CONTRIBUTING.md file to get started!
      </footer>
    </div>
  )
}

export default App
