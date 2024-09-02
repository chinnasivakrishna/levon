import React, { useState } from 'react';
import { addTeacher } from '../services/api';
import './AddTeacher.css'; // Add this file for specific styles if needed

const AddTeacher = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addTeacher({ name, email, subject });
    alert('Teacher added successfully');
  };

  return (
    <div className="add-teacher-container">
      <form onSubmit={handleSubmit} className="add-teacher-form">
        <input 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          placeholder="Name" 
          className="form-input"
        />
        <input 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          placeholder="Email" 
          className="form-input"
        />
        <input 
          value={subject} 
          onChange={(e) => setSubject(e.target.value)} 
          placeholder="Subject" 
          className="form-input"
        />
        <button type="submit" className="submit-button">Add Teacher</button>
      </form>
    </div>
  );
};

export default AddTeacher;
