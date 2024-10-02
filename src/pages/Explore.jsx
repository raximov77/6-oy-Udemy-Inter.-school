import React from 'react';
import { useNavigate } from 'react-router-dom';

function Explore() {
  const navigate = useNavigate()
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-gray-800">This is a Explore Page</h1>
      <p className="text-lg text-gray-600 mt-4">You can place any content here.</p>
      
      <button onClick={() => navigate(-1)} className="mt-6 bg-blue-500 text-white px-6 py-2 rounded-lg">
        Go Back
      </button>
    </div>
  );
}

export default Explore
