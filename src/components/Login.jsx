import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../services/api';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await login(email, password);
    console.log(response);
    if (response) {
      if (response.role === 'student') {
        navigate('/student-dashboard');
      } else if (response.role === 'teacher') {
        navigate('/teacher-dashboard');
      }
    } else {
      alert('Invalid login credentials');
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit} className="login-form">
        <h2>Login</h2>
        <input 
          type="email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          placeholder="Email" 
          className="form-input"
        />
        <input 
          type="password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          placeholder="Password" 
          className="form-input"
        />
        <button type="submit" className="submit-button">Login</button>
      </form>
    </div>
  );
};

export default Login;
