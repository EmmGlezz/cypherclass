import React from 'react';
import { Link } from 'react-router-dom';

function Dashboard({ user }) {
  return (
    <div>
      <h2>Welcome, {user}!</h2>
      <h3>Challenges:</h3>
      <ul>
        <li><Link to="/challenge1">Challenge 1: Deciphering a code</Link></li>
        <li><Link to="/challenge2">Challenge 2: Log Review</Link></li>
        <li><Link to="/challenge3">Challenge 3: Vulnerability Scanning Simulation</Link></li>
        <li><Link to="/challenge4">Challenge 4: File Decryption</Link></li>
        <li><Link to="/challenge5">Challenge 5: Capture the Flag (CTF) Final Challenge</Link></li>
      </ul>
      <Link to="/progress">View Progress</Link>
    </div>
  );
}

export default Dashboard;

