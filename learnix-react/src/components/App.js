import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Lesson from './Lesson';
import Quiz from './Quiz';
import '../styles.css'; // Import the styles.css file

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Learnix: Sign Language Recognition</h1>
        <nav>
          <ul>
            <li>
              <Link to="/lesson">Take Lesson</Link>
            </li>
            <li>
              <Link to="/quiz">Take Quiz</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/lesson" element={<Lesson />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/" element={<h2>Welcome to Learnix</h2>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;