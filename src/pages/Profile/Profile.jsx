import React, { useState } from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import ProfileBg from "../../assets/images/profile-bg.png"
import { DateIcon, GlobusIcon, LinkIcon, LocationIcon } from '../../assets/images/Icons'

function profile() {
  const navigate = useNavigate()
  const user = JSON.parse(localStorage.getItem("token"))
  const [profileImg, setProfileImg] = useState("https://picsum.photos/800/800")
  const [profileActive, setProfileActive] = useState("Tweets")

  return (
    <div className='border-r-[2px] border-[#D8D8D8] h-[100vh] overflow-y-auto'>
      <div className='py-[20px] border-b-[2px] pl-[31px] border-[#D8D8D8] flex items-center space-x-10'>
        <button onClick={() => navigate(-1)}>
          <i class="fa-solid fa-arrow-left"></i>
        </button>
        <div className='flex flex-col'>
          <strong className='font-bold text-[20px]'>{user.login}</strong>
          <span className='text-[16px] opacity-60 mt-[2px]'></span>
        </div>
      </div>
      <img className='h-[280px]' src={ProfileBg} alt="Bg photo" width={"100%"} />
      <div className='flex items-end -mt-[75px] justify-between px-[25px]'>
        <img className='w-[150px] h-[150px] rounded-full border-[5px] border-[#FFFFFF] ' src={profileImg} alt="Avatar Img" width={100} height={100}/>
        <button className='font-bold text-[18px] py-[10px] border-[1px] border-[#00000066] rounded-[50px] w-[120px]'>Edit Profile</button>
      </div>
      <div className='p-[25px]'>
        <strong className='text-[24px]'>{user.login}</strong>
        <p className='text-[14px] opacity-60'>@bobur_mavlonov</p>
        <p className='mt-[15px] text-[18px]'>UX&UI designer at <span className='text-[#1DA1F2]'>@abutechuz</span></p>
      </div>
      <ul className='px-[25px] flex gap-[10px]'>
        <li className='flex gap-[4px]'>
          <LocationIcon/>
          <span className='font-semibold text-[18px] text-[#000000] opacity-60'>Mashag'daman</span>
        </li>
        <li className='flex gap-[4px]'>
          <LinkIcon/>
          <span className='font-semibold text-[18px] text-[#000000] opacity-60'>t.me/boburjon_mavlonov</span>
        </li>
        <li className='flex text-center  gap-[4px]'>
          <GlobusIcon/>
          <span className='font-semibold text-[18px] text-[#000000] opacity-60'>Born November 24, 2000</span>
        </li>
        <li className='flex text-center gap-[4px]'>
          <DateIcon/>
          <span className='font-semibold text-[18px] text-[#000000] opacity-60'>Joined May 2020</span>
        </li>
      </ul>
      <ul className='flex gap-[30px] mb-[40px] pl-[20px]'>
        <li className='flex gap-[3px]'>
          <strong className='font-bold text-[18px] leading-[23px]'>67</strong>
          <span className='text-[18px] leading-[23px] opacity-80'>Following</span>
        </li>
        <li className='flex gap-[3px]'>
          <strong className='font-bold text-[18px] leading-[23px]'>47</strong>
          <span className='text-[18px] leading-[23px] opacity-80'>Followers</span>
        </li>
      </ul>
      
      <div className='flex items-center justify-between px-[25px] border-b-[1px] border-[#D8D8D8]'>
          <Link onClick={(e) => setProfileActive(e.target.textContent)} className={`font-bold text-[18px] inline-block pb-[19px] relative before:w-[100%] before:h-[4px] before:rounded-md before:bg-[#1DA1F2] before:absolute before:bottom-0 before:-left-[100%] overflow-hidden duration-300 ${profileActive == "Tweets" ? "before:left-0" : ""}`} to={"/profile"}>Tweets</Link>
          <Link onClick={(e) => setProfileActive(e.target.textContent)} className={`font-bold text-[18px] inline-block pb-[19px] relative before:w-[100%] before:h-[4px] before:rounded-md before:bg-[#1DA1F2] before:absolute before:bottom-0 before:-left-[100%] overflow-hidden duration-300 ${profileActive == "Tweets & replies" ? "before:left-0" : ""}`} to={"tweets-replies"}>Tweets & replies</Link>
          <Link onClick={(e) => setProfileActive(e.target.textContent)} className={`font-bold text-[18px] inline-block pb-[19px] relative before:w-[100%] before:h-[4px] before:rounded-md before:bg-[#1DA1F2] before:absolute before:bottom-0 before:-left-[100%] overflow-hidden duration-300 ${profileActive == "Media" ? "before:left-0" : ""}`} to={"media"}>Media</Link>
          <Link onClick={(e) => setProfileActive(e.target.textContent)} className={`font-bold text-[18px] inline-block pb-[19px] relative before:w-[100%] before:h-[4px] before:rounded-md before:bg-[#1DA1F2] before:absolute before:bottom-0 before:-left-[100%] overflow-hidden duration-300 ${profileActive == "Likes" ? "before:left-0" : ""}`} to={"likes"}>Likes</Link>
      </div>
      <Outlet/>
    </div>
  )
}

export default profile