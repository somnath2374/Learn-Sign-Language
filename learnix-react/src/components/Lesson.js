import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Lesson() {
  const [showLesson, setShowLesson] = useState(false);

  const handleTakeLesson = () => {
    setShowLesson(true);
  };

  return (
    <div>
      {!showLesson && (
        <button id="takeLessonBtn" onClick={handleTakeLesson}>Take Lesson</button>
      )}
      {showLesson && (
        <div id="lessonContent">
          <h2>Learn the Alphabet</h2>
          <div className="hand-sign-grid">
            {['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'].map(sign => (
              <div className="hand-sign" data-sign={sign} key={sign}>
                <img src={`${process.env.PUBLIC_URL}/hand_signs/${sign}.png`} alt={`${sign} Hand Sign`} />
                <p>{sign}</p>
              </div>
            ))}
          </div>
          <Link to="/quiz">
            <button id="takeQuizBtn">Take Quiz</button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default Lesson;