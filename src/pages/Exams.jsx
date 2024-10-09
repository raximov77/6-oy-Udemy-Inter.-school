import React from 'react'
import { useNavigate } from 'react-router-dom';
import notFoundPage from '../assets/images/notFoundPage.png'

function Exams() {
    const navigate = useNavigate()
    return (
      <div className='bg-[#FCFAFA] flex flex-col items-center justify-center mt-[44px]'>
      <div className='text-center'>
        <img src={notFoundPage} alt="notFoundPage" width={340} height={255}/>
        <h3 className='text-[28px] text-[#4F4F4F] font-semibold leading-[34px] mt-[10px]'>No Exams at this time</h3>
      </div>
        <button onClick={() => navigate(-1)} className="mt-6 hover:opacity-75 duration-300 text-white bg-[#2D88D4] px-6 py-2 rounded-lg">
          Go Back
        </button>
      </div>
    );
}

export default Exams




