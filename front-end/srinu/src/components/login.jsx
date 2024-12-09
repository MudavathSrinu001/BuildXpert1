import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";

import './login.css';

function Login() {
  const [isLogin, setIsLogin] = useState(true);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const { loginWithRedirect, isAuthenticated, user } = useAuth0(); // useAuth0 hook to get authentication status

  useEffect(() => {
    // Redirect to /home if user is already authenticated
    if (isAuthenticated) {
      navigate('/home');
    }
  }, [isAuthenticated, navigate]);

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5001/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });
      const data = await response.json();

      if (data.success) {
        navigate('/home'); // Redirect to Home component on successful login
      } else {
        setError(data.message || "Invalid username or password.");
      }
    } catch (error) {
      console.error("Error:", error);
      setError("An error occurred. Please try again.");
    }
  };

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5001/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });
      const data = await response.json();

      if (data.success) {
        setIsLogin(true); // Switch to login form after successful signup
        setError("Registration successful. Please log in.");
      } else {
        setError(data.message || "Registration failed.");
      }
    } catch (error) {
      console.error("Error:", error);
      setError("An error occurred. Please try again.");
    }
  };

  return (
    <div className="main">
      <div className="video-container">
        <video autoPlay muted loop className="bg-video">
          <source src="/Moving.webm" type="video/webm" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="container">
        <div className="login-info-box" style={{ display: isLogin ? 'none' : 'flex' }}>
          <h2>Already have an account?</h2>
          <p>Login to continue!</p>
        </div>
        <div className="register-info-box" style={{ display: isLogin ? 'flex' : 'none' }}>
          <h2>Don't have an account?</h2>
          <p>Sign up to get started!</p>
        </div>

        <div className={`white-panel ${isLogin ? 'right-log' : ''}`}>
          <div className="toggle-container">
            <input
              type="radio"
              name="panel-toggle"
              id="log-login-show"
              checked={isLogin}
              onChange={() => setIsLogin(true)}
            />
            <label htmlFor="log-login-show">Login</label>
            <input
              type="radio"
              name="panel-toggle"
              id="log-reg-show"
              checked={!isLogin}
              onChange={() => setIsLogin(false)}
            />
            <label htmlFor="log-reg-show">Register</label>
          </div>

          {error && <p style={{ color: 'red' }}>{error}</p>}

          {/* Login Form */}
          <div className="login-show" style={{ display: isLogin ? 'block' : 'none' }}>
            <h2>Login</h2>
            <form onSubmit={handleLoginSubmit}>
              <input
                type="text"
                name="username"
                className="input-field"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
              <input
                type="password"
                name="password"
                className="input-field"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <input type="submit" className="btn" value="LOGIN" />
            </form>
            <div className="auth">
              <header className="auth-header">
                {/* Triggering Auth0 login on button click */}
                <button className='login-btn-red' onClick={() => loginWithRedirect()}>
                <i className="fab fa-google"></i>
                  Login With Google</button>
              </header>
            </div>
          </div>

          {/* Register Form */}
          <div className="register-show" style={{ display: !isLogin ? 'block' : 'none' }}>
            <h2>Register</h2>
            <form onSubmit={handleRegisterSubmit}>
              <input
                type="text"
                name="username"
                className="input-field"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
              <input
                type="password"
                name="password"
                className="input-field"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <input type="submit" className="btn" value="Sign Up" />
            </form>
            <div className="auth">
              <header className="auth-header">
                {/* Triggering Auth0 login on button click */}
                <button className='login-btn-red' onClick={() => loginWithRedirect()}>
                <i className="fab fa-google"></i>
                  SignUp With Google</button>
              </header>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
