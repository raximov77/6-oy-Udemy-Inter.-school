import React from 'react'
import { Route, Routes } from 'react-router-dom'
import {Home, Profile} from "../pages"
import SiteBar from '../components/SiteBar'
import Navbar from '../components/Navbar'

function DashboardRoutes() {
  return (
    <div className='flex'>
      <Navbar/>
      <div className='w-[50%]'>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/profile' element={<Profile/>}/>
        </Routes>
      </div>
      <SiteBar/>
    </div>
  )
}

export default DashboardRoutes