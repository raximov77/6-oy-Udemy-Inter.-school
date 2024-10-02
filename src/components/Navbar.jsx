import React, { useState } from 'react'
import Logo from "../assets/images/logo.svg"
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom'
import { BookmarksIcon, BookmarksIconActive, Dots, ExploreIcon, ExploreIconActive, HomeIcon, HomeIconActive, ListsIcon, ListsIconActive, MassagesIcon, MassagesIconActive, MoreICon, MoreIConActive, NotificationsIcon, NotificationsIconActive, ProfileIcon, ProfileIconActive } from '../assets/images/Icons'
import Button from "../components/Button"

function Navbar() {
    const navigate = useNavigate()
    const user = JSON.parse(localStorage.getItem("token"))
    const {pathname} = useLocation();

    const navbarList = [
        {
            id:1,
            icon: pathname == "/" ? <HomeIconActive/> : <HomeIcon/>,
            title:"Home",
            path:"/"
        },
        {
            id:2,
            icon: pathname == "/explore" ? <ExploreIconActive/> : <ExploreIcon/>,
            title:"Explore",
            path:"/explore"
        },
        {
            id:3,
            icon: pathname == "/notifications" ? <NotificationsIconActive/> : <NotificationsIcon/>,
            title:"Notifications",
            path:"/notifications"
        },
        {
            id:4,
            icon: pathname == "/massages" ? <MassagesIconActive/> : <MassagesIcon/>,
            title:"Massages",
            path:"/massages"
        },
        {
            id:5,
            icon: pathname == "/bookmarks" ? <BookmarksIconActive/> : <BookmarksIcon/>,
            title:"Bookmarks",
            path:"/bookmarks"
        },
        {
            id:6,
            icon: pathname == "/lists" ? <ListsIconActive/> : <ListsIcon/>,
            title:"Lists",
            path:"/lists"
        },
        {
            id:7,
            icon: pathname == "/profile" ? <ProfileIconActive/> : <ProfileIcon/>,
            title:"Profile",
            path:"/profile"
        },
        {
            id:8,
            icon: pathname == "/more" ? <MoreIConActive/> : <MoreICon/>,
            title:"More",
            path:"/more"
        },
    ]

    function handleLogOut(){
        localStorage.clear()
        navigate("/")
        window.location.reload()
    }

  return (
    <div className='w-[25%] border-r-[1px] border-[#D8D8D8] relative h-[100vh] overflow-y-auto pt-[31px] pl-[115px] pr-[16px]'>
        <Link to={"/"}>
            <img src={Logo} alt="Site Logo" width={40} height={33}/>
        </Link>
        <div className='mt-[49px] space-y-[30px]'>
            {navbarList.map(item => (
                <NavLink className={"flex font-semibold text-[18px] leading-[23px] items-center space-x-5"} key={item.id} to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                </NavLink>
            ))}
        </div>
        <Button type={"button"} extraStyle={"py-[15px] mt-[30px] w-full"}>Tweet</Button>
        <div className='flex items-center space-x-[10px] absolute bottom-[30px]'>
            <img className='rounded-full' src="https://picsum.photos/500/500" alt="Icon" width={50} height={50} />
            <div className='flex items-center space-x-[42px] justify-between w-[80%]'>
               <div>
                    <strong className='font-semibold text-[16px]'>{user.login}</strong>
                    <p className='text-[16px] opacity-60'>@bobur_mavlonov</p>
               </div>
               <button onClick={handleLogOut}>
                    <Dots/>
               </button>
            </div>
        </div>
    </div>
  )
}

export default Navbar