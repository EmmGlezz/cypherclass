import React from 'react';
import { Link } from 'react-router-dom';

function Progress({ completedChallenges }) {
  const challenges = [
    { id: 1, name: 'Deciphering a code' },
    { id: 2, name: 'Log Review' },
    { id: 3, name: 'Vulnerability Scanning Simulation' },
    { id: 4, name: 'File Decryption' },
    { id: 5, name: 'Capture the Flag (CTF) Final Challenge' },
    { id: 6, name: 'The Ultimate Cybersecurity Test' },
  ];

  return (
    <div>
      <h2>Progress Tracker</h2>
      <ul>
        {challenges.map((challenge) => (
          <li key={challenge.id}>
            Challenge {challenge.id}: {challenge.name} - 
            {completedChallenges.includes(challenge.id) ? 'Completed' : 'Not Completed'}
          </li>
        ))}
      </ul>
      <Link to="/dashboard">Back to Dashboard</Link>
    </div>
  );
}

export default Progress;
