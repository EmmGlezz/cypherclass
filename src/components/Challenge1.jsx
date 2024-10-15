import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ProgressBar from './ProgressBar';
import './Challenge.css';

function Challenge1({ completeChallenge, completedChallenges }) {
  const [answer, setAnswer] = useState('');
  const [message, setMessage] = useState('');
  const [helpPassword, setHelpPassword] = useState('');
  const [showExtraHelp, setShowExtraHelp] = useState(false);
  const navigate = useNavigate();

  const correctAnswer = 'CYBERSECURITY';
  const encryptedMessage = 'FBEHUVHFXULWB';
  const extraHelpPassword = 'help1';

  useEffect(() => {
    if (completedChallenges.includes(1)) {
      setMessage('You have already completed this challenge!');
    }
  }, [completedChallenges]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (answer.toUpperCase() === correctAnswer) {
      setMessage('Correct! You have unlocked the next challenge.');
      completeChallenge(1);
      setTimeout(() => {
        navigate('/challenge2');
      }, 2000);
    } else {
      setMessage('Try Again');
    }
  };

  const handleExtraHelp = (e) => {
    e.preventDefault();
    if (helpPassword === extraHelpPassword) {
      setShowExtraHelp(true);
    } else {
      setMessage('Incorrect password for extra help');
    }
  };

  return (
    <div className="challenge-container">
      <ProgressBar currentChallenge={1} completedChallenges={completedChallenges} />
      <h2 className="challenge-title">Challenge 1: Caesar Cipher</h2>
      <div className="challenge-content">
        <p className="encrypted-message">Encrypted message: <span>{encryptedMessage}</span></p>
        <div className="hint-box">
          <h3>Hints:</h3>
          <ul>
            <li>The Caesar cipher shifts each letter in the alphabet by a fixed number of positions</li>
            <li>In this case, the shift is 3 places</li>
            <li>A becomes D, B becomes E, C becomes F, and so on</li>
          </ul>
        </div>
        <div className="tip-box">
          <p>Tip: Try writing out the alphabet and shifting each letter 3 places to create a lookup table!</p>
        </div>
        <div className="extra-help">
          <details>
            <summary>Need more help?</summary>
            {!showExtraHelp ? (
              <form onSubmit={handleExtraHelp}>
                <input
                  type="text"
                  value={helpPassword}
                  onChange={(e) => setHelpPassword(e.target.value)}
                  placeholder="Enter password for extra help"
                />
                <button type="submit">Submit</button>
              </form>
            ) : (
              <p>The first letter 'F' decrypts to 'C', the second letter 'B' decrypts to 'Y', and so on.</p>
            )}
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

export default Challenge1;
