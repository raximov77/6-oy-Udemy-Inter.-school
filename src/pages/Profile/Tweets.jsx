import React, { useContext, useState } from 'react'
import PostItem from '../../components/PostItem'
import { PinIcon } from '../../assets/images/Icons'
import { Context } from '../../context/AuthContext'

function Tweets() {
  const {userPosts, setUserPosts} = useContext(Context)

  return (
    <div>
      <div className='flex pt-[15px] pl-[66px] items-center gap-[15px] cursor-pointer'>
        <PinIcon/>
        <span className='text-[#536471] text-[16px] font-semibold'>Pinned Tweet</span>
      </div>
      <ul> {userPosts.map(item => <PostItem posts={userPosts} setPosts={setUserPosts} key={item.id} item={item}/>)} </ul>
    </div>
  )
}

export default Tweets