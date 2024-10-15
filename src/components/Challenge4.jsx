import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ProgressBar from './ProgressBar';
import './Challenge.css';

function Challenge4({ completeChallenge, completedChallenges }) {
  const [answer, setAnswer] = useState('');
  const [message, setMessage] = useState('');
  const [helpPassword, setHelpPassword] = useState('');
  const [showExtraHelp, setShowExtraHelp] = useState(false);
  const navigate = useNavigate();

  const correctAnswer = 'DECRYPTION';
  const encryptedMessage = 'IGVETRVKQP';
  const key = 'CIPHER';
  const extraHelpPassword = 'hackaton';

  useEffect(() => {
    if (completedChallenges.includes(4)) {
      setMessage('You have already completed this challenge!');
    }
  }, [completedChallenges]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (answer.toUpperCase() === correctAnswer) {
      setMessage('Correct! You have unlocked the final challenge.');
      completeChallenge(4);
      setTimeout(() => {
        navigate('/challenge5');
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
      <ProgressBar currentChallenge={4} completedChallenges={completedChallenges} />
      <h2 className="challenge-title">Challenge 4: Vigenère Cipher</h2>
      <div className="challenge-content">
        <p className="encrypted-message">Encrypted message: <span>{encryptedMessage}</span></p>
        <p className="key-info">Key: <span>{key}</span></p>
        <div className="hint-box">
          <h3>Hints:</h3>
          <ul>
            <li>The Vigenère cipher uses a keyword to shift letters</li>
            <li>Each letter of the keyword determines the shift for the corresponding letter in the message</li>
            <li>The keyword is repeated as needed to match the length of the message</li>
          </ul>
        </div>
        <div className="tip-box">
          <p>Tip: Create a Vigenère square to help with decryption!</p>
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
              <p>The first letter 'I' is shifted by 'C', the second letter 'G' by 'I', and so on.</p>
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
          <button type="submit" className="challenge-button">Decrypt</button>
        </form>
        {message && <p className="challenge-message">{message}</p>}
      </div>
    </div>
  );
}

export default Challenge4;
