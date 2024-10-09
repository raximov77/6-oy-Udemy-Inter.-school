import React, { useState } from 'react'
import ModalLogout from "./ModalLogout"
import {useNavigate } from 'react-router-dom';
import Ring from '../assets/images/ring.svg'

function SiteBar() {
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);
  const navigate = useNavigate()
  
  function handleLogOut(){
    localStorage.clear()
    navigate("/")
    window.location.reload()
}

  return (
    <div className='flex justify-between bg-[#f3f0f0] pl-[147px] pt-[44px] pb-[15px] pr-[127px]'>
      <div>
          <p className='text-[16px] text-[#424242] leading-[20px] font-medium'>Learn  how to launch faster <br /> watch our webinar for tips from our experts and get a limited time offer.</p>  
      </div>  
      <div>
        <div className='flex items-center gap-[48px]'>
              <img className='cursor-pointer' src={Ring} alt="Ring" width={28} height={28} />
              <button  onClick={() => setIsLogoutModalOpen(true)} className="your-button-class py-[12px] px-[35px] font-bold text-[16px] leading-[17px] hover:opacity-75 duration-300 text-white bg-[#2D88D4] rounded-[8px]">
                  Log out
              </button>
              {/* Modal */}
                {isLogoutModalOpen && (
                <ModalLogout OpenModal={isLogoutModalOpen} setOpenModal={setIsLogoutModalOpen}>
                <h2 className='text-center'>Are you sure you want to log out?</h2>
                <div className="flex justify-center mt-4 gap-10">
                <button 
                      onClick={handleLogOut}  
                      className="bg-red-500 text-white px-4 py-2 rounded-lg transition duration-200 ease-in-out hover:bg-red-600 hover:scale-105"
                  >
                      Yes
                  </button>
                  <button 
                      onClick={() => setIsLogoutModalOpen(false)} 
                      className="bg-gray-500 text-white px-4 py-2 rounded-lg transition duration-200 ease-in-out hover:bg-gray-600 hover:scale-105"
                  >
                      No
                  </button>
                </div>
                </ModalLogout> )}
              {/* Modal */}
        </div>
      </div>
    </div>
  )
}

export default SiteBar
