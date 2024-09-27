import React from 'react'
import Logo from "../assets/images/logo.svg"
import { Link, NavLink } from 'react-router-dom'
import { BookmarksIcon, Dots, ExploreIcon, HomeIcon, ListsIcon, MassagesIcon, MoreICon, NotificationsIcon, ProfileFillIcon } from '../assets/images/Icons'
import Button from "../components/Button"

function Navbar() {
    const user = JSON.parse(localStorage.getItem("token"))
    const navbarList = [
        {
            id:1,
            icon:<HomeIcon/>,
            title:"Home",
            path:"/"
        },
        {
            id:2,
            icon:<ExploreIcon/>,
            title:"Explore",
            path:"/explore"
        },
        {
            id:3,
            icon:<NotificationsIcon/>,
            title:"Notifications",
            path:"/notifications"
        },
        {
            id:4,
            icon:<MassagesIcon/>,
            title:"Massages",
            path:"/massages"
        },
        {
            id:5,
            icon:<BookmarksIcon/>,
            title:"Bookmarks",
            path:"/bookmarks"
        },
        {
            id:6,
            icon:<ListsIcon/>,
            title:"Lists",
            path:"/lists"
        },
        {
            id:7,
            icon:<ProfileFillIcon/>,
            title:"Profile",
            path:"/profile"
        },
        {
            id:8,
            icon:<MoreICon/>,
            title:"More",
            path:"/more"
        },
    ]

    function handleLogOut(){
        localStorage.clear()
        window.location.reload()
    }

  return (
    <div className='w-[25%] relative h-[100vh] overflow-y-auto pt-[31px] pl-[130px] pr-[16px]'>
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
        <Button type={"button"} extraStyle={"py-[15px] mt-[30px]"}>Tweet</Button>
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