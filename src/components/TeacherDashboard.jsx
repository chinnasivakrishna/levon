import React, { useEffect, useState } from 'react';
import { getTeachers } from '../services/api';
import './Dashboard.css';

const TeacherDashboard = () => {
  const [teachers, setTeachers] = useState([]);

  useEffect(() => {
    const fetchTeachers = async () => {
      const response = await getTeachers();
      setTeachers(response.data);
    };
    fetchTeachers();
  }, []);

  return (
    <div>
      <h1>Teacher Dashboard</h1>
      <ul>
        {teachers.map((teacher) => (
          <li key={teacher._id}>{teacher.name} - {teacher.subject}</li>
        ))}
      </ul>
    </div>
  );
};

export default TeacherDashboard;
