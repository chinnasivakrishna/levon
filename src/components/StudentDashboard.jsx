import React, { useEffect, useState } from 'react';
import { getStudents } from '../services/api';
import './Dashboard.css';

const StudentDashboard = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const fetchStudents = async () => {
      const response = await getStudents();
      setStudents(response.data);
    };
    fetchStudents();
  }, []);

  return (
    <div>
      <h1>Student Dashboard</h1>
      <ul>
        {students.map((student) => (
          <li key={student._id}>{student.name} - {student.grade}</li>
        ))}
      </ul>
    </div>
  );
};

export default StudentDashboard;
