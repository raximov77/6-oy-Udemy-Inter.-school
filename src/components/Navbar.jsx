import React, { useState } from 'react'
import Logo from "../assets/images/logo.svg"
import { Link, Navigate, NavLink, useLocation, useNavigate } from 'react-router-dom'
import { BillingIcon, DashboardIcon, ExamsIcon, FeaturesIcon, SettingsandprofileIcon, StudentsIcon, TeachersIcon } from '../assets/images/Icons'

function Navbar() {
    const {pathname} = useLocation();

    const navbarList = [
        {
            id:1,
            icon: <DashboardIcon/>,
            title:"Dashboard",
            path:"/"
        },
        {
            id:2,
            icon: <TeachersIcon/>,
            title:"Teachers",
            path:"/teachers"
        },
        {
            id:3,
            icon: <StudentsIcon/>,
            title:"Students",
            path:"/students"
        },
        {
            id:4,
            icon: <BillingIcon/>,
            title:"Billing",
            path:"/billing"
        },
        {
            id:5,
            icon: <SettingsandprofileIcon/>,
            title:"Settings and profile",
            path:"/Settings-and-profile"
        },
        {
            id:6,
            icon: <ExamsIcon/>,
            title:"Exams",
            path:"/exams"
        },
        {
            id:7,
            icon: <FeaturesIcon/>,
            title:"Features",
            path:"/features"
        },
    ]

  return (
    <div className='w-[20%] mx-auto bg-[#152259] border-r-[1px] border-[#D8D8D8] relative h-[100vh] overflow-y-auto pt-[26px] pl-[44px] pr-[36px]'>
        <div className='text-center'>
            <Link to={"/"}>
                <img className='mx-auto' src={Logo} alt="Site Logo" width={65} height={65}/>
            </Link>   
            <p className='text-[14px] mt-[22px] cursor-pointer leading-[17px] font-semibold text-[#FFFFFF]'>Udemy Inter. school</p>
        </div>
        <hr className='mt-[40px] border-[0.5px] text-[#BDBDBD] ml-[-46px] mr-[-36px]'></hr>
        <div className='mt-[27px] space-y-[8px]'>
        {navbarList.map(item => (
        <NavLink
            key={item.id}
            to={item.path}
            className={({ isActive }) =>
                `flex text-[#FFFFFF] font-semibold text-[17px] leading-[17px] items-center gap-[18px] pl-[16px] py-[12px] rounded-lg border-[2px] border-transparent transition-colors duration-300 ${
                isActive ? 'bg-[#509CDB]' : 'hover:border-[#509CDB]'}`}>
            {item.icon}
            <span>{item.title}</span>
        </NavLink>
        ))}
        </div>
    </div>
  )
}

export default Navbar