import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function TeacherProfileUpdate({ teachers, updateTeacher }) {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const teacher = teachers.find(t => t.id === parseInt(id));
  
  const [formData, setFormData] = useState({ ...teacher });
  const [selectedImage, setSelectedImage] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedImage(URL.createObjectURL(file));
      setFormData({ ...formData, img: file });
    }
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.img instanceof File) {
      const reader = new FileReader();
      reader.onloadend = () => {
        updateTeacher({ ...formData, img: reader.result });
        navigate('/teachers');
      };
      reader.readAsDataURL(formData.img);
    } else {
      updateTeacher(formData);
      navigate('/teachers');
    }
  };

  return (
    <div className='pt-[20px] pl-[32px] pr-[126px]'>
      <h2 className='text-[23px] text-[#4F4F4F] leading-[24px] font-medium'>Update Teacher</h2>
      <form onSubmit={handleSubmit} className='w-[75%] grid grid-cols-2 gap-9 mt-10 mx-auto'>
        <div className='mb-4'>
          <label className='block text-[15px] text-[#8A8A8A] leading-[17px] font-medium mb-1'>Name</label>
          <input 
            type='text' 
            name='name' 
            value={formData.name} 
            onChange={handleChange} 
            className='border px-[12px] p-2 w-full outline-none' 
            required
          />
        </div>
        <div className='mb-4'>
          <label className='block text-[15px] text-[#8A8A8A] leading-[17px] font-medium mb-1'>Subject</label>
          <input 
            type='text' 
            name='subject' 
            value={formData.subject} 
            onChange={handleChange} 
            className='border px-[12px] p-2 w-full outline-none' 
            required
          />
        </div>
        <div className='mb-4'>
          <label className='block text-[15px] text-[#8A8A8A] leading-[17px] font-medium mb-1'>Class</label>
          <input 
            type='text' 
            name='className' 
            value={formData.className} 
            onChange={handleChange} 
            className='border px-[12px] p-2 w-full outline-none' 
            required
          />
        </div>
        <div className='mb-4'>
          <label className='block text-[15px] text-[#8A8A8A] leading-[17px] font-medium mb-1'>Email</label>
          <input 
            type='email' 
            name='email' 
            value={formData.email} 
            onChange={handleChange} 
            className='border px-[12px] p-2 w-full outline-none' 
            required
          />
        </div>
        <div className='mb-4'>
          <label className='block text-[15px] text-[#8A8A8A] leading-[17px] font-medium mb-1'>Gender</label>
          <select 
            name='gender' 
            value={formData.gender} 
            onChange={handleChange} 
            className='border px-[12px] p-2 w-full outline-none'>
            <option value='Male'>Male</option>
            <option value='Female'>Female</option>
          </select>
        </div>
        <div className='mb-4'>
          <label className='block text-[15px] text-[#8A8A8A] leading-[17px] font-medium mb-1 cursor-pointer'>Profile Image
            <input 
              type='file' 
              accept='image/*' 
              onChange={handleImageChange} 
              className='border px-[12px] p-2 w-full outline-none hidden' 
            />
          </label>
          
        </div>
        {selectedImage && (
          <div className=''>
            <img src={selectedImage} alt="Profile Preview" className='w-10 h-10 rounded-full' />
          </div>
        )}
        <button type='submit' className='mt-4 px-4 py-2 rounded hover:opacity-75 duration-300 text-white bg-[#2D88D4]'>
          Save Changes
        </button>
      </form>
    </div>
  );
}

export default TeacherProfileUpdate;
