import React from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css';
import lanewayLogo from "../assets/laneway-logo-white.svg";

function Dashboard({ userName, completedChallenges, handleLogout }) {
  const firstName = userName.split(' ')[0];

  return (
    <div className="dashboard-container">
      <div></div>
      <div className="dashboard-content">
        <h1 className="main-title">Cybersecurity Hackathon</h1>
        <div className="dashboard-inner">
          <h2 className="welcome-message">Welcome, {firstName}!</h2>
          <h3 className="challenges-title">Challenges:</h3>
          <ul className="challenge-list">
            <li><Link to="/challenge1" className="challenge-link">Challenge 1: Deciphering a code</Link></li>
            <li><Link to="/challenge2" className="challenge-link">Challenge 2: Log Review</Link></li>
            <li><Link to="/challenge3" className="challenge-link">Challenge 3: Vulnerability Scanning Simulation</Link></li>
            <li><Link to="/challenge4" className="challenge-link">Challenge 4: File Decryption</Link></li>
            <li><Link to="/challenge5" className="challenge-link">Challenge 5: Capture the Flag (CTF) Final Challenge</Link></li>
          </ul>
          <Link to="/progress" className="progress-link">View Progress</Link>
          <button onClick={handleLogout} className="logout-button">Logout</button>
        </div>
      </div>
      <footer className="footer">
        <img src={lanewayLogo} alt="Laneway Education" className="laneway-logo" style={{ width: "200px" }}/>
      </footer>
    </div>
  );
}

export default Dashboard;
