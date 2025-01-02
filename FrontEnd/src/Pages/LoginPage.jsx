import React, { useState } from 'react';
import './loginPage.css';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSignUp = () => {
        navigate('/SignUpPage');
    };

    const handleLogin = async () => {
        try {
            const response = await fetch('http://localhost:5000/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
            });

            const data = await response.json();

            if (response.ok) {
                // Navigate to HomePage on successful login
                navigate('/HomePage');
            } else {
                // Display error message
                setError(data.message || 'Login failed. Please try again.');
            }
        } catch (err) {
            setError('An error occurred. Please try again later.');
        }
    };

    

    return (
        <div className="login-container">
            <header className="header">
                <div className="header-left">
                    <img src="../Images/UniversityLogo.jpeg" alt="University Logo" className="logo" />
                </div>
                <div className="header-text">
                    <h1>Trincomalee Campus - Eastern University</h1>
                    <h2>Welcome to Student Lecturer Communication System</h2>
                </div>
                <div className="header-right">
                    <button className="signup-btn" onClick={handleSignUp}>Sign Up</button>
                </div>
            </header>

            <div className="content">
                <div className="login-form">
                    {error && <div className="error-message">{error}</div>}
                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input 
                            type="text" 
                            id="username" 
                            placeholder="Enter your username" 
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input 
                            type="password" 
                            id="password" 
                            placeholder="Enter your password" 
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    <div className="form-options">
                        <div>
                            <input type="checkbox" id="remember-me" />
                            <label htmlFor="remember-me">Remember me</label>
                        </div>
                        <a href="/" className="forgot-password">Forgot password?</a>
                    </div>

                    <button className="signin-btn" onClick={handleLogin}>Sign in</button>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
