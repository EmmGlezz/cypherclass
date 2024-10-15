import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ProgressBar from './ProgressBar';
import './Challenge.css';

function Challenge2({ completeChallenge, completedChallenges }) {
  const [answer, setAnswer] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const correctAnswer = 'ENCRYPTION';
  const encryptedMessage = 'RAPELCGVBA';

  useEffect(() => {
    if (completedChallenges.includes(2)) {
      setMessage('You have already completed this challenge!');
    }
  }, [completedChallenges]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (answer.toUpperCase() === correctAnswer) {
      setMessage('Correct! You have unlocked the next challenge.');
      completeChallenge(2);
      setTimeout(() => {
        navigate('/challenge3');
      }, 2000);
    } else {
      setMessage('Try Again');
    }
  };

  return (
    <div className="challenge-container">
      <ProgressBar currentChallenge={2} completedChallenges={completedChallenges} />
      <h2 className="challenge-title">Challenge 2: ROT13 Cipher</h2>
      <div className="challenge-content">
        <p className="encrypted-message">Encrypted message: <span>{encryptedMessage}</span></p>
        <div className="hint-box">
          <h3>Hints:</h3>
          <ul>
            <li>ROT13 is a special case of the Caesar cipher</li>
            <li>Each letter is shifted 13 places in the alphabet</li>
            <li>A becomes N, B becomes O, and so on</li>
          </ul>
        </div>
        <div className="tip-box">
          <p>Tip: You can use an online ROT13 decoder to check your work, but try to solve it manually first!</p>
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

export default Challenge2;
