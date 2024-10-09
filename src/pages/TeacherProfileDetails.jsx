import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import more_student from "../assets/images/more-student.svg"
import more_phone from "../assets/images/more_phone.svg"
import more_message from "../assets/images/more_message.svg"

function TeacherProfileDetails({ teachers }) {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const teacher = teachers.find((teacher) => teacher.id === parseInt(id));

  if (!teacher) {
    return <div>Teacher not found!</div>;
  }

  return (
    <div className="pt-6 pl-8 pr-8">
      <button 
        className="hover:opacity-75 duration-300 text-white bg-[#2D88D4] px-4 py-2 rounded mb-4"
        onClick={() => navigate('/teachers')}>
        <i class="fa-solid fa-arrow-left"></i>
      </button>
      
      <div className="flex pl-[200px] mt-[50px] gap-[105px]">
        <div className='text-center'>
        <img src={teacher.img} alt={teacher.name} className="w-[280px] h-[280px] rounded-full mb-[50px]" />
        <h2 className="text-[19px] font-bold leading-[20px] text-[#1A1A1A] mb-[10px]">{teacher.name}</h2>
        <p className='text-[14px] font-medium text-[#4F4F4F] leading-[15px]'><strong></strong> {teacher.email}</p>
        <div className='flex gap-[25px]  mt-[40px]'>
          <img className='cursor-pointer' src={more_student} alt="more_student" width={60} height={60}/>
          <img className='cursor-pointer' src={more_phone} alt="more_phone" width={60} height={60}/>
          <img className='cursor-pointer' src={more_message} alt="more_message" width={60} height={60}/>
        </div>
        </div>
        
        <div className='w-[355px]'>
          <div className='mb-[25px]'>
            <h3 className='text-[19px] font-bold leading-[20px] text-[#1A1A1A] mb-[10px]'>About</h3>
            <p className='text-[16px] text-[#A7A7A7] font-medium leading-[21px]'>Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. </p>
          </div>
          <p><strong>Subject:</strong> {teacher.subject}</p>
          <p><strong>Class:</strong> {teacher.className}</p>
          <p><strong>Age:</strong> 34</p>
          <p><strong>Gender:</strong> {teacher.gender}</p>
        </div>
      </div>
    </div>
  );
}

export default TeacherProfileDetails;
