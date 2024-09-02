import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { getStudents } from '../services/api';
import './Dashboard.css';

const StudentDashboard = () => {
  const [students, setStudents] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const fetchStudents = async () => {
      const response = await getStudents();
      setStudents(response.data);
    };
    fetchStudents();
  }, []);

  return (
    <div className="dashboard-container">
      <h1 className="dashboard-header">Student Dashboard</h1>
      <div className="dashboard-content">
        {students.length ? (
          <ul className="student-list">
            {students.map((student) => (
              <li key={student._id}>{student.name} - {student.grade}</li>
            ))}
          </ul>
        ) : (
          <p>No students found.</p>
        )}
      </div>
    </div>
  );
};

export default StudentDashboard;
