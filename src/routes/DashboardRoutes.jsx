// File: DashboardRoutes.js
import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import {
  Billing,
  Dashboard,
  Exams,
  Features,
  NotFoundPage,
  Settings_and_profile,
  Students,
  Teachers
} from "../pages";
import Navbar from '../components/Navbar';
import SiteBar from '../components/SiteBar';
import TeacherProfileAdd from '../pages/TeacherProfileAdd';
import TeacherProfileUpdate from '../pages/TeacherProfileUpdate';
import TeacherProfileDetails from '../pages/TeacherProfileDetails';

function DashboardRoutes() {
  const [teachers, setTeachers] = useState([]);

  // Load teacher data from localStorage when the component mounts
  useEffect(() => {
    const storedTeachers = localStorage.getItem('teachers');
    if (storedTeachers) {
      setTeachers(JSON.parse(storedTeachers));
    } else {
      const initialTeachers = [
        {
          id: 1,
          name: 'Kristin Watson',
          subject: 'Chemistry',
          className: 'JSS 2',
          email: 'michelle.rivera@example.com',
          gender: 'Female',
          img: 'https://picsum.photos/800/800',
        },
        {
          id: 2,
          name: 'Marvin McKinney',
          subject: 'French',
          className: 'JSS 3',
          email: 'debbie.baker@example.com',
          gender: 'Male',
          img: 'https://picsum.photos/800/800',
        }
      ];
      setTeachers(initialTeachers);
      localStorage.setItem('teachers', JSON.stringify(initialTeachers));
    }
  }, []);

  // Add teacher function
  const addTeacher = (newTeacher) => {
    const updatedTeachers = [...teachers, { id: teachers.length + 1, ...newTeacher }];
    setTeachers(updatedTeachers);
    localStorage.setItem('teachers', JSON.stringify(updatedTeachers));
  };

  // Update teacher function
  const updateTeacher = (updatedTeacher) => {
    const updatedTeachers = teachers.map(teacher => 
      teacher.id === updatedTeacher.id ? updatedTeacher : teacher
    );
    setTeachers(updatedTeachers);
    localStorage.setItem('teachers', JSON.stringify(updatedTeachers));
  };

  // Delete teacher function
  const deleteTeacher = (id) => {
    const updatedTeachers = teachers.filter(teacher => teacher.id !== id);
    setTeachers(updatedTeachers);
    localStorage.setItem('teachers', JSON.stringify(updatedTeachers));
  };

  return (
    <div className='flex'>
      <Navbar />
      <div className='w-[80%]'>
        <SiteBar />
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route 
            path='/teachers' 
            element={<Teachers teachers={teachers} deleteTeacher={deleteTeacher} />} 
          />
          <Route 
            path='/teachers/add' 
            element={<TeacherProfileAdd addTeacher={addTeacher} />} 
          />
          <Route 
            path='/teachers/update/:id' 
            element={<TeacherProfileUpdate teachers={teachers} updateTeacher={updateTeacher} />} 
          />
          <Route 
            path='/teachers/details/:id' 
            element={<TeacherProfileDetails teachers={teachers} />} 
          />
          <Route path='/students' element={<Students />} />
          <Route path='/billing' element={<Billing />} />
          <Route path='/settings-and-profile' element={<Settings_and_profile />} />
          <Route path='/exams' element={<Exams />} />
          <Route path='/features' element={<Features />} />
          <Route path='/*' element={<NotFoundPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default DashboardRoutes;
