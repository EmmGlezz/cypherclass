import React from 'react';
import { Link } from 'react-router-dom';

function ProgressBar({ currentChallenge, completedChallenges }) {
  const challenges = [1, 2, 3, 4, 5];

  return (
    <div className="progress-bar">
      {challenges.map((challenge) => (
        <Link
          key={challenge}
          to={`/challenge${challenge}`}
          className={`challenge-link ${challenge === currentChallenge ? 'current' : ''} ${completedChallenges.includes(challenge) ? 'completed' : ''}`}
        >
          Challenge {challenge}
        </Link>
      ))}
    </div>
  );
}

export default ProgressBar;

