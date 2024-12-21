import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Quiz() {
  const [score, setScore] = useState(0);
  const [currentSign, setCurrentSign] = useState('');
  const [userAnswer, setUserAnswer] = useState('');
  const [resultMessage, setResultMessage] = useState('');

  const handSigns = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

  const generateRandomSign = () => {
    const randomIndex = Math.floor(Math.random() * handSigns.length);
    setCurrentSign(handSigns[randomIndex]);
  };

  useEffect(() => {
    generateRandomSign();
  }, []);

  const handleSubmitAnswer = () => {
    if (userAnswer.toUpperCase() === currentSign) {
      setScore(score + 1);
      setResultMessage('Correct! Well done.');
    } else {
      setResultMessage(`Wrong! The correct answer is ${currentSign}.`);
    }
    generateRandomSign();
    setUserAnswer('');
  };

  return (
    <div id="quizContent">
      <h2>Identify the hand sign shown below:</h2>
      <img id="quizImage" src={`${process.env.PUBLIC_URL}/hand_signs/${currentSign}.png`} alt="Hand Sign" />
      <input
        type="text"
        id="answerInput"
        placeholder="Enter your answer (A-Z)"
        value={userAnswer}
        onChange={(e) => setUserAnswer(e.target.value)}
      />
      <button id="submitAnswerBtn" onClick={handleSubmitAnswer}>Submit Answer</button>
      <p id="resultMessage">{resultMessage}</p>
      <p>Score: <span id="score">{score}</span></p>
      <Link to="/lesson">
        <button id="goBackToLessonsBtn">Go Back to Lessons</button>
      </Link>
    </div>
  );
}

export default Quiz;