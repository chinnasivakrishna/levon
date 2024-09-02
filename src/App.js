import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import StudentDashboard from './components/StudentDashboard';
import TeacherDashboard from './components/TeacherDashboard';
import Teachers from './components/AddTeacher';
import Registration from './components/Registration';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Login />} />
        <Route path="/register/student" element={<Registration userType="student" />} />
        <Route path="/register/teacher" element={<Registration userType="teacher" />} />
        <Route path="/student-dashboard" element={<StudentDashboard />} />
        <Route path="/teacher-dashboard" element={<TeacherDashboard />} />
        <Route path="/teacher" element={<Teachers />} />
      </Routes>
    </Router>
  );
};

export default App;
