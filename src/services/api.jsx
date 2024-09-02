import axios from 'axios';

const API_URL = 'https://levon-backend-6yla.onrender.com';

export const registerStudent = async (studentData) => {
  try {
    const response = await axios.post(`${API_URL}/students/register`, studentData);
    return response.data;
  } catch (error) {
    console.error('Error registering student', error);
    return { success: false, message: 'Registration failed' };
  }
};

export const registerTeacher = async (teacherData) => {
  try {
    const response = await axios.post(`${API_URL}/teachers/register`, teacherData);
    return response.data;
  } catch (error) {
    console.error('Error registering teacher', error);
    return { success: false, message: 'Registration failed' };
  }
};


export const login = async (email, password) => {
  try {
    const response = await axios.post(`${API_URL}/auth/login`, { email, password });
    return response.data;
  } catch (error) {
    console.error('Error logging in', error);
    return { success: false, message: 'Login failed' };
  }
};

// Other API functions
export const getStudents = async () => {
  return await axios.get(`${API_URL}/students`);
};

export const getTeachers = async () => {
  return await axios.get(`${API_URL}/teachers`);
};

export const addStudent = async (studentData) => {
  return await axios.post(`${API_URL}/students`, studentData);
};

export const addTeacher = async (teacherData) => {
  return await axios.post(`${API_URL}/teachers`, teacherData);
};
