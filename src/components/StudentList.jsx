import React from 'react';
import './StudentList.css';

const StudentList = ({ students }) => (
  <div className="student-list-container">
    <ul className="student-list-table">
      {students.map(student => (
        <li key={student._id}>{student.name} - {student.grade}</li>
      ))}
    </ul>
  </div>
);

export default StudentList;
