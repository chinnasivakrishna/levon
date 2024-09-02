import React, { useState } from 'react';
import { addStudent } from '../services/api';
import './AddStudent.css'; // Add this file for specific styles if needed

const AddStudent = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');
  const [grade, setGrade] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addStudent({ name, email, age, grade });
    alert('Student added successfully');
  };

  return (
    <div className="add-student-container">
      <form onSubmit={handleSubmit} className="add-student-form">
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
          value={age} 
          onChange={(e) => setAge(e.target.value)} 
          placeholder="Age" 
          className="form-input"
        />
        <input 
          value={grade} 
          onChange={(e) => setGrade(e.target.value)} 
          placeholder="Grade" 
          className="form-input"
        />
        <button type="submit" className="submit-button">Add Student</button>
      </form>
    </div>
  );
};

export default AddStudent;
