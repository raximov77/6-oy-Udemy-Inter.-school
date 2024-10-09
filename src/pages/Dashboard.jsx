import React from 'react'
import Admins from "../assets/images/other-admins.svg"
import Classes from "../assets/images/classes.svg"
import Students from "../assets/images/students.svg"
import Microphone from "../assets/images/microphone.svg"
import UpIcon from "../assets/images/up-icon.svg"

function Dashboard() {
  return (
    <div className='pt-[53px]'>
      <div className='pl-[145px]'>
        <h2 className='text-[36px] mb-[23px] font-semibold text-[#4F4F4F] leading-[45px]'>Welcome to your dashboard, Udemy school</h2>
        <a href="mailto:raximovikrom42@gmail.com" className='ml-[105px] text-[24px] text-[#4F4F4F] leading-[30px]'>Uyo/school/@teachable.com</a>
      </div>
      <div className='mt-[74px] pl-[216px] flex'>
        <div className='flex flex-col gap-[51px]'>
          <div className='flex gap-[20px]'>
            <div>
                <img className='cursor-pointer' src={Admins} alt="Admins" width={36} height={36} />
            </div>
            <div>
              <strong className='text-[24px] text-[#4F4F4F] leading-[30px] font-medium'>Add other admins </strong>
              <p className='w-[454px] mt-[16px] text-[14px] text-[#4F4F4F] font-normal leading-[18px]'>Create rich course content and coaching products for your students.
              When you give them a pricing plan, they’ll appear on your site!</p>
            </div>
          </div>
          <div className='flex gap-[20px]'>
            <div>
                <img className='cursor-pointer' src={Classes} alt="Admins" width={36} height={36} />
            </div>
            <div>
              <strong className='text-[24px] text-[#4F4F4F] leading-[30px] font-medium'>Add classes</strong>
              <p className='w-[454px] mt-[16px] text-[14px] text-[#4F4F4F] font-normal leading-[18px]'>Create rich course content and coaching products for your students.
              When you give them a pricing plan, they’ll appear on your site!</p>
            </div>
          </div>
          <div className='flex gap-[20px]'>
            <div>
                <img className='cursor-pointer' src={Students} alt="Admins" width={36} height={36} />
            </div>
            <div>
              <strong className='text-[24px] text-[#4F4F4F] leading-[30px] font-medium'>Add students</strong>
              <p className='w-[454px] mt-[16px] text-[14px] text-[#4F4F4F] font-normal leading-[18px]'>Create rich course content and coaching products for your students.
              When you give them a pricing plan, they’ll appear on your site!</p>
            </div>
          </div>
        </div>
        <div className='flex mt-[270px]  ml-[153px] p-[22px] bg-[#152259] w-[181px] h-[60px] rounded-[30px] cursor-pointer'>
          <img src={Microphone} alt="Microphone" width={16} height={16}/>
          <button className='ml-[8px] mr-[39px] text-[14px] font-semibold text-[#FCFAFA] leading-[17px]'>Support</button>
          <img src={UpIcon} alt="UpIcon" width={16} height={16}/>
        </div>
      </div>
    </div>
  );
}

export default Dashboard