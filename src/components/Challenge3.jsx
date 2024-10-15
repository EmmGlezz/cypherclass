import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ProgressBar from './ProgressBar';
import './Challenge.css';

function Challenge3({ completeChallenge, completedChallenges }) {
  const [answer, setAnswer] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const correctAnswer = 'CRYPTOGRAPHY';
  const encryptedMessage = '3-18-25-16-20-15-7-18-1-16-8-25';

  useEffect(() => {
    if (completedChallenges.includes(3)) {
      setMessage('You have already completed this challenge!');
    }
  }, [completedChallenges]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (answer.toUpperCase() === correctAnswer) {
      setMessage('Correct! You have unlocked the next challenge.');
      completeChallenge(3);
      setTimeout(() => {
        navigate('/challenge4');
      }, 2000);
    } else {
      setMessage('Try Again');
    }
  };

  return (
    <div className="challenge-container">
      <ProgressBar currentChallenge={3} completedChallenges={completedChallenges} />
      <h2 className="challenge-title">Challenge 3: A1Z26 Cipher</h2>
      <div className="challenge-content">
        <p className="encrypted-message">Encrypted message: <span>{encryptedMessage}</span></p>
        <div className="hint-box">
          <h3>Hints:</h3>
          <ul>
            <li>A=1, B=2, C=3, ..., Z=26</li>
            <li>The dash (-) separates different letters</li>
            <li>Try writing out the alphabet with numbers underneath</li>
          </ul>
        </div>
        <div className="tip-box">
          <p>Tip: Create a lookup table to speed up your decoding process!</p>
        </div>
        <div className="extra-help">
          <details>
            <summary>Need more help?</summary>
            <p>The first letter is 'C' (3), and the last letter is 'Y' (25).</p>
          </details>
        </div>
        <form onSubmit={handleSubmit} className="challenge-form">
          <input
            type="text"
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            placeholder="Enter your answer"
            className="challenge-input"
          />
          <button type="submit" className="challenge-button">Submit</button>
        </form>
        {message && <p className="challenge-message">{message}</p>}
      </div>
    </div>
  );
}

export default Challenge3;
