import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../services/authService";
import lanewayLogo from "../assets/laneway-logo-white.svg";
import "./Login.css";

function Login({ setIsAuthenticated, setUser }) {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");
	const navigate = useNavigate();

	const handleSubmit = (e) => {
		e.preventDefault();
		if (login(username, password)) {
			setIsAuthenticated(true);
			setUser(username);
			navigate("/dashboard");
		} else {
			setError("Invalid credentials");
		}
	};

	return (
		<div className="login-container">
            <div></div>
			<div className="login-content">
				<h1 className="main-title">Cybersecurity Hackathon</h1>
				<div className="login-form-container">
					<h2 className="login-title">Login</h2>
					<form onSubmit={handleSubmit} className="login-form">
						<input
							type='text'
							placeholder='Username'
							value={username}
							onChange={(e) => setUsername(e.target.value)}
							className="login-input"
						/>
						<input
							type='password'
							placeholder='Password'
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							className="login-input"
						/>
						<button type='submit' className="login-button">Login</button>
					</form>
					{error && <p className="error-message">{error}</p>}
				</div>
			</div>
				<footer className="footer">
					<img src={lanewayLogo} alt="Laneway Education" className="laneway-logo" style={{ width: "200px" }}/>
				</footer>
		</div>
	);
}

export default Login;
