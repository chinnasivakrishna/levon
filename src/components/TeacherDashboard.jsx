import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { getTeachers } from '../services/api';
import './Dashboard.css';

const TeacherDashboard = () => {
  const [teachers, setTeachers] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const fetchTeachers = async () => {
      const response = await getTeachers();
      setTeachers(response.data);
    };
    fetchTeachers();
  }, []);

  return (
    <div className="dashboard-container">
      <h1 className="dashboard-header">Teacher Dashboard</h1>
      <div className="dashboard-content">
        {teachers.length ? (
          <ul className="teacher-list">
            {teachers.map((teacher) => (
              <li key={teacher._id}>{teacher.name} - {teacher.subject}</li>
            ))}
          </ul>
        ) : (
          <p>No teachers found.</p>
        )}
      </div>
    </div>
  );
};

export default TeacherDashboard;
