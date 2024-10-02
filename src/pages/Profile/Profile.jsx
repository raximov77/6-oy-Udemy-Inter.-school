import React, { useState } from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import ProfileBg from "../../assets/images/profile-bg.png"
import { DateIcon, GlobusIcon, LinkIcon, LocationIcon } from '../../assets/images/Icons'
import Modal from '../../components/Modal'
import Button from "../../components/Button" 

function profile() {
  const navigate = useNavigate()
  const user = JSON.parse(localStorage.getItem("token"))
  const [profileImg, setProfileImg] = useState("https://picsum.photos/800/800")
  const [profileActive, setProfileActive] = useState("Tweets")
  const [isUpdateModal, setIsUpdateModal] = useState(false)

  const [userInfo, setUserInfo ] = useState({
      avatarImg:profileImg,
      name: JSON.parse(localStorage.getItem("token")).login,
      email: "raximovikrom@gmail.com",
      jobTitle: "UX&UI designer",
      companyName: "@abutechuz"
  })

  function handleUpdateUser(e){
    e.preventDefault()
    const data = {
      avatarImg:profileImg,
      name: e.target.name.value,
      email:e.target.email.value,
      jobTitle:e.target.info.value,
      companyName:e.target.companyName.value
    }
    setUserInfo(data)
    setIsUpdateModal(false)
  }

  return (
    <div className='border-r-[2px] border-[#D8D8D8] h-[100vh] overflow-y-auto'>
      <div className='py-[20px] border-b-[2px] pl-[31px] border-[#D8D8D8] flex items-center space-x-10'>
        <button onClick={() => navigate(-1)}>
          <i class="fa-solid fa-arrow-left"></i>
        </button>
        <div className='flex flex-col'>
          <strong className='font-bold text-[20px]'>{userInfo.name}</strong>
          <span className='text-[16px] opacity-60 mt-[2px]'></span>
        </div>
      </div>
      <img className='h-[280px]' src={ProfileBg} alt="Bg photo" width={"100%"} />
      <div className='flex items-end -mt-[75px] justify-between px-[25px]'>
        <img className='w-[150px] h-[150px] rounded-full border-[5px] border-[#FFFFFF] ' src={profileImg} alt="Avatar Img" width={100} height={100}/>
        <button onClick={() => setIsUpdateModal(true)} className='font-bold text-[18px] py-[10px] border-[1px] border-[#00000066] rounded-[50px] w-[120px]'>Edit Profile</button>
      </div>
      <div className='p-[25px]'>
        <strong className='text-[24px]'>{userInfo.name}</strong>
        <p className='text-[14px] opacity-60'>{userInfo.email}</p>
        <p className='mt-[15px] text-[18px]'>{userInfo.jobTitle} <span className='text-[#1DA1F2]'>{userInfo.companyName}</span></p>
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
      <Modal OpenModal={isUpdateModal} setOpenModal={setIsUpdateModal}>
          <form onSubmit={handleUpdateUser} autoComplete='off'>
            <label htmlFor="file">
              <input onChange={(e) => setProfileImg(URL.createObjectURL(e.target.files[0]))} id='file' type="file" className='hidden'/>
              <img className='h-[300px]' src={profileImg} alt="Choose Img" width={"100%"} height={200} />
            </label>
            <input className='p-2 w-[100%] mt-5 rounded-md outline-none border-[2px] border-slate-300' type="text" required name='name' placeholder='Enter your name'/>
            <input className='p-2 w-[100%] mt-5 rounded-md outline-none border-[2px] border-slate-300' type="email" required name='email' placeholder='Enter your email'/>
            <input className='p-2 w-[100%] mt-5 rounded-md outline-none border-[2px] border-slate-300' type="text" required name='info' placeholder='Job title'/>
            <input className='p-2 w-[100%] mt-5 rounded-md outline-none border-[2px] border-slate-300' type="text" required name='companyName' placeholder='Enter your company name'/>
            <Button type={"submit"} extraStyle={"w-full mt-5 py-2 text-[22px]"}>Update user</Button>
          </form>
      </Modal>
    </div>
  )
}

export default profile