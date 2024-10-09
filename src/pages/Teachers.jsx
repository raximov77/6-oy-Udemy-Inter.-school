import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Teachers({ teachers, deleteTeacher }) {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');

  const filteredTeachers = teachers.filter(teacher => 
    teacher.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
    teacher.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className='pt-[20px] pl-[32px] pr-[126px]'>
      <div className='flex items-center justify-between'>
        <h2 className='text-[23px] text-[#4F4F4F] leading-[24px] font-medium'>Teachers</h2>
        <button 
          className="hover:opacity-75 duration-300 text-white bg-[#2D88D4] px-[14px] py-2 rounded"
          onClick={() => navigate('/teachers/add')}>
          Add Teacher
        </button>
      </div>
      <div className="relative mt-[17px]">
        <input
          type="text"
          placeholder="Search for teachers by name or email"
          className="w-full pl-14 pr-4 py-3 bg-[#E0E0E0] rounded-[8px] focus:outline-none"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}  
        />
        <i className="fa fa-search absolute left-[20px] top-[18px] text-[#5C6C79]"></i>
      </div>
      <div className="overflow-x-auto mt-[15px]">
        <table className="min-w-full text-left border-separate border-spacing-0">
          <thead>
            <tr>
              <th className="px-4 py-2 border-b-2 border-gray-200">Name</th>
              <th className="px-4 py-2 border-b-2 border-gray-200">Subject</th>
              <th className="px-4 py-2 border-b-2 border-gray-200">Class</th>
              <th className="px-4 py-2 border-b-2 border-gray-200">Email</th>
              <th className="px-4 py-2 border-b-2 border-gray-200">Gender</th>
              <th className="px-4 py-2 border-b-2 border-gray-200">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredTeachers.map((teacher, index) => (
              <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-[#EBF6FF80]'}>
                <td className="px-4 py-[12px] flex items-center">
                  <img src={teacher.img} alt={teacher.name} className="w-8 h-8 rounded-full mr-2" />
                  {teacher.name}
                </td>
                <td className="px-4 py-2">{teacher.subject}</td>
                <td className="px-4 py-2">{teacher.className}</td>
                <td className="px-4 py-2">{teacher.email}</td>
                <td className="px-4 py-2">{teacher.gender}</td>
                <td className="px-4 py-2">
                  <i 
                    className="fa-solid fa-pen text-[18px] cursor-pointer update-btn text-blue-600"
                    onClick={() => navigate(`/teachers/update/${teacher.id}`)}  
                  ></i>
                  <i 
                    className="fa-solid fa-trash text-[18px] ml-[10px] mr-[15px] cursor-pointer delete-btn text-red-600"
                    onClick={() => deleteTeacher(teacher.id)}  
                  ></i>
                  <i 
                    className="fas fa-ellipsis-h text-[18px] cursor-pointer more-btn"
                    onClick={() => navigate(`/teachers/details/${teacher.id}`)}  
                  ></i>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Teachers;
