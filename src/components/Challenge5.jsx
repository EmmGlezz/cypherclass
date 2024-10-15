import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ProgressBar from './ProgressBar';
import './Challenge.css';

function Challenge5({ completeChallenge, completedChallenges }) {
  const [answer, setAnswer] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const correctAnswer = 'THEFINALCHALLENGE';
  const encryptedMessage = '20-8-5 6-9-14-1-12 3-8-1-12-12-5-14-7-5';

  useEffect(() => {
    if (completedChallenges.includes(5)) {
      setMessage('You have already completed this challenge!');
    }
  }, [completedChallenges]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (answer.toUpperCase().replace(/\s/g, '') === correctAnswer) {
      setMessage('Congratulations, you\'ve completed all the cipher challenges!');
      completeChallenge(5);
      setTimeout(() => {
        navigate('/dashboard');
      }, 3000);
    } else {
      setMessage('Try Again');
    }
  };

  return (
    <div className="challenge-container">
      <ProgressBar currentChallenge={5} completedChallenges={completedChallenges} />
      <h2 className="challenge-title">Challenge 5: Combined Ciphers</h2>
      <div className="challenge-content">
        <p className="encrypted-message">Encrypted message: <span>{encryptedMessage}</span></p>
        <div className="hint-box">
          <h3>Hints:</h3>
          <ul>
            <li>This challenge combines two ciphers you've already encountered</li>
            <li>First, decode the numbers to letters (A1Z26)</li>
            <li>Then, apply a Caesar shift of 1</li>
          </ul>
        </div>
        <div className="tip-box">
          <p>Tip: Break the problem into steps and solve one cipher at a time!</p>
        </div>
        <div className="extra-help">
          <details>
            <summary>Need more help?</summary>
            <p>After decoding A1Z26, you'll get a phrase that's still encoded with a Caesar cipher (shift of 1).</p>
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

export default Challenge5;
