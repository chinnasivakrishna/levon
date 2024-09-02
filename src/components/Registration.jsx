import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { registerStudent, registerTeacher } from '../services/api';
import './Registration.css';

const Registration = ({ userType }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [additionalInfo, setAdditionalInfo] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      let response;
      if (userType === 'student') {
        response = await registerStudent({ name, email, password, grade: additionalInfo });
      } else if (userType === 'teacher') {
        response = await registerTeacher({ name, email, password, subject: additionalInfo });
      }
      console.log(response);
      
      if (response) {
        navigate('/');
      } else {
        alert('Registration failed');
      }
    } catch (error) {
      console.error('Error registering user', error);
      alert('An error occurred during registration');
    }
  };

  return (
    <div className="registration-container">
      <form onSubmit={handleSubmit} className="registration-form">
        <h2>{userType.charAt(0).toUpperCase() + userType.slice(1)} Registration</h2>
        <input 
          type="text" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          placeholder="Name" 
          required
          className="form-input"
        />
        <input 
          type="email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          placeholder="Email" 
          required
          className="form-input"
        />
        <input 
          type="password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          placeholder="Password" 
          required
          className="form-input"
        />
        <input 
          type="text" 
          value={additionalInfo} 
          onChange={(e) => setAdditionalInfo(e.target.value)} 
          placeholder={userType === 'student' ? 'Grade' : 'Subject'} 
          required
          className="form-input"
        />
        <button type="submit" className="submit-button">Register</button>
      </form>
    </div>
  );
};

export default Registration;
