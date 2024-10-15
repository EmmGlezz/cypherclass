import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ProgressBar from './ProgressBar';
import './Challenge.css';

function Challenge6({ completeChallenge, completedChallenges }) {
  const [answer, setAnswer] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const correctAnswer = 'THEULTIMATECHALLENGE: THEULTIMATECYBERSECURITYMASTER';
  const encryptedMessage = 'Hku Bkwjadjl Bkbzouufh: 5-8-18-25-8-20-7-24-1-7-9-25-25-26-16-18-6-9-25-21-16-20-20-12-17-23-19-18-16-18';
  const key = 'LANEWAY';

  useEffect(() => {
    if (completedChallenges.includes(6)) {
      setMessage('You have already completed this challenge!');
    }
  }, [completedChallenges]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (answer.toUpperCase().replace(/\s/g, '') === correctAnswer) {
      setMessage('Congratulations, you\'ve completed the ultimate challenge!');
      completeChallenge(6);
      setTimeout(() => {
        navigate('/dashboard');
      }, 3000);
    } else {
      setMessage('Incorrect. This challenge requires true mastery.');
    }
  };

  return (
    <div className="challenge-container">
      <ProgressBar currentChallenge={6} completedChallenges={completedChallenges} />
      <h2 className="challenge-title">Challenge 6: The Ultimate Cybersecurity Test</h2>
      <div className="challenge-content">
        <p className="encrypted-message">Encrypted message: <span>{encryptedMessage}</span></p>
        <p className="key-info">Key: <span>{key}</span></p>
        <div className="hint-box">
          <h3>Hints:</h3>
          <ul>
            <li>This challenge combines all the ciphers you've encountered so far</li>
            <li>The message is encrypted in multiple layers</li>
            <li>You'll need to apply the ciphers in the correct order</li>
            <li>Pay attention to the format of different parts of the message</li>
          </ul>
        </div>
        <div className="tip-box">
          <p>Tip: Break down the problem into smaller steps and use all the tools at your disposal!</p>
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

export default Challenge6;
