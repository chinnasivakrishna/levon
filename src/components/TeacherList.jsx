import React from 'react';
import './TeacherList.css';

const TeacherList = ({ teachers }) => (
  <div className="teacher-list-container">
    <ul className="teacher-list-table">
      {teachers.map(teacher => (
        <li key={teacher._id}>{teacher.name} - {teacher.subject}</li>
      ))}
    </ul>
  </div>
);

export default TeacherList;
