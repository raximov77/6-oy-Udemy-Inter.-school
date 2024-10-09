import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function TeacherProfileAdd({ addTeacher }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    className: '',
    gender: '',
    img: '',
    about: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setFormData({ ...formData, img: reader.result });
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTeacher(formData);
    navigate('/teachers');
  };

  return (
    <form onSubmit={handleSubmit} className='p-[32px]' autoComplete='off'>
      <div className='flex items-center justify-between pr-[98px]'>
        <h2 className='text-[23px] text-[#4F4F4F] leading-[24px] font-medium'>Add teacher</h2>
        <button type="submit" className="mt-4 px-5 py-2 rounded hover:opacity-75 duration-300 text-white bg-[#2D88D4]">
          Save
        </button>
      </div>
      <div className='w-[75%] grid grid-cols-2 gap-9 mt-4'>
        {/* Full Name */}
        <div>
          <label className='block text-[15px] text-[#8A8A8A] leading-[17px] font-medium mb-1'>Full Name</label>
          <input
            required
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            className="border p-2 w-full outline-none"
          />
        </div>
        {/* Class */}
        <div>
          <label className='block text-[15px] text-[#8A8A8A] leading-[17px] font-medium mb-1'>Class</label>
          <input
            required
            type="text"
            name="className"
            placeholder="Class"
            value={formData.className}
            onChange={handleChange}
            className="border p-2 w-full outline-none"
          />
        </div>
        {/* Email Address */}
        <div>
          <label className='block text-[15px] text-[#8A8A8A] leading-[17px] font-medium mb-1'>Email address</label>
          <input
            required
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="border p-2 w-full outline-none"
          />
        </div>
        {/* Gender */}
        <div>
          <label className='block text-[15px] text-[#8A8A8A] leading-[17px] font-medium mb-1'>Gender</label>
          <select
            required
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            className="border p-2 w-full outline-none"
          >
            <option value="" disabled hidden>Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>
        {/* Subject */}
        <div>
          <label className='block text-[15px] text-[#8A8A8A] leading-[17px] font-medium mb-1'>Subject</label>
          <input
            required
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
            className="border p-2 w-full outline-none"
          />
        </div>
        {/* Age */}
        <div>
          <label className='block text-[15px] text-[#8A8A8A] leading-[17px] font-medium mb-1'>Age</label>
          <input
            type="text"
            name="age"
            placeholder="Age"
            value={formData.age}
            onChange={handleChange}
            className="border p-2 w-full outline-none"
          />
        </div>
        {/* About and Image Upload */}
        <div className="col-span-2 grid grid-cols-2 gap-4">
          <div>
            <label className='block text-[15px] text-[#8A8A8A] leading-[17px] font-medium mb-1'>About</label>
            <textarea
              name="about"
              placeholder="About"
              value={formData.about}
              onChange={handleChange}
              className="border p-2 outline-none resize-none w-full"
              rows="4"
            />
          </div>
          {/* Image Upload */}
          <div className='ml-[24px] mt-[20px] flex'>
            <label className='cursor-pointer block text-[18px] text-[#4F4F4F] leading-[22px] font-medium mb-1'>Import Img
              <input
                type="file"
                onChange={handleImageChange}
                className="border p-2 w-full outline-none hidden"
              />
            </label>
            {/* Display Selected Image */}
            {formData.img && (
              <div className="w-[150px] mt-2 cursor-help">
                <img
                  src={formData.img}
                  alt="Selected"
                  className="ml-[25px] object-contain" 
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </form>
  );
}

export default TeacherProfileAdd;
