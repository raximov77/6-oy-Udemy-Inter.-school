import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import {Bookmarks, Explore, Home, Likes, Lists, Massages, Media, More, NotFoundPage, Notifications, Profile, Replies, Tweets} from "../pages"
import SiteBar from '../components/SiteBar'
import Navbar from '../components/Navbar'

function DashboardRoutes() {
  const location = useLocation();
  return (
    <div className='flex'>
      <Navbar/>
      <div className='w-[50%]'>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/explore' element={<Explore/>}/>
          <Route path='/notifications' element={<Notifications/>}/>
          <Route path='/massages' element={<Massages/>}/>
          <Route path='/bookmarks' element={<Bookmarks/>}/>
          <Route path='/lists' element={<Lists/>}/>
          <Route path='/profile' element={<Profile/>}>
            <Route path='/profile' element={<Tweets/>}/>
            <Route path='tweets-replies' element={<Replies/>}/>
            <Route path='media' element={<Media/>}/>
            <Route path='likes' element={<Likes/>}/>
          </Route>
          <Route path='/more' element={<More/>}/>
          <Route path='/*' element={<NotFoundPage/>}/>
        </Routes>
      </div>
       {(location.pathname.startsWith('/') || location.pathname.startsWith('/profile')) && <SiteBar />}
    </div>
  )
}

export default DashboardRoutes