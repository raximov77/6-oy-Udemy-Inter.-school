import React from 'react';
import SettingsIcon from "../assets/images/settings.svg"
import Mushtariy from '../assets/images/Mushtariy.svg';
import Shuhratbek from '../assets/images/Shuhratbek.svg';
import { Dots } from '../assets/images/Icons';
import { useLocation } from 'react-router-dom';
import ProfileCol from "../assets/images/profile-col.png"

function SiteBar() {
  const {pathname} = useLocation();
  const trends = Array(3).fill({ 
    topic: 'Revolution', tweets: '50.4K Tweets', location: 'Trending in Germany' 
  });
  
  const suggestions = [
    { name: 'Mushtariy', handle: '@Mushtar565266', avatar: Mushtariy },
    { name: 'Shuhratbek', handle: '@mrshukhrat', avatar: Shuhratbek },
  ];

  return (
    <div className="w-[25%] p-4 overflow-auto h-[100vh]">

      <div className="mb-4 z-10">
        <div className="relative">
          <input
            type="text"
            placeholder="Search Twitter"
            className="w-full pl-14 pr-4 py-3 bg-[#EFF3F4] rounded-full border border-gray-300 focus:outline-none"
          />
          <i className="fa fa-search absolute left-[20px] top-[18px] text-[#5C6C79]"></i> 
        </div>
        {pathname.includes("profile") && <img className='w-[373px] h-[178px] mt-[11px] cursor-pointer' src={ProfileCol} alt='ProfileCol' width={373} height={178}/>}
      </div>

      <div className={`flex ${pathname.includes("profile") ? "flex-col-reverse" : "flex-col"}`}>
        {/* Trends */}
      <div className="mb-6 bg-[#F7F9F9] rounded-xl p-4">
        <div className='flex justify-between'>
          <h3 className="font-bold text-[24px]">Trends for you</h3>
          <img className='cursor-pointer' src={SettingsIcon} alt="Settings Icon"width={24} height={24} />
        </div>
       
        <div className="space-y-4 mt-4">
          {trends.map((trend, index) => (
            <div key={index} className="flex justify-between items-center">
              <div className='flex'>
                <div>
                  <p className="text-sm text-[#393B41] opacity-70">{trend.location}</p>
                  <p className="font-bold">{trend.topic}</p>
                  <p className="text-sm text-[#393B41] opacity-70">{trend.tweets}</p>
                </div>  
              </div>  
              <div className='cursor-pointer '>
                  <Dots />
              </div>
            </div>
          ))}
        </div>
        <button className="text-[#1DA1F2] mt-4">Show more</button>
      </div>
        {/* Like */}
      <div className="bg-[#F7F9F9] rounded-xl p-4 mb-[30px]">
        <h3 className="font-bold text-lg">You might like</h3>
        <div className="space-y-4 mt-4">
          {suggestions.map((user, index) => (
            <div key={index} className="flex justify-between items-center">
              <div className="flex items-center">
                <img
                  src={user.avatar}
                  alt={user.name}
                  className="w-10 h-10 rounded-full mr-3"
                />
                <div>
                  <p className="font-bold">{user.name}</p>
                  <p className="text-sm text-gray-500">{user.handle}</p>
                </div>
              </div>
              <button className="bg-black text-white px-4 py-1 rounded-full">
                Follow
              </button>
            </div>
          ))}
        </div>
        <button className="text-[#1DA1F2] mt-4">Show more</button>
      </div>
      </div>
      
      <div className={`flex ${pathname.includes("profile") ? "hidden" : ""}`}>
        <div className="footer flex flex-wrap items-center gap-2">
          <span className='text-[16px] leading-[21px] text-[#536471]'>Terms of Service </span>
          <span className='text-[16px] leading-[21px] text-[#536471] underline'>Privacy policy</span>
          <span className='text-[16px] leading-[21px] text-[#536471]'>Cookie policy</span>
          <span className='text-[16px] leading-[21px] text-[#536471]'>Imprint</span>
          <span className='text-[16px] leading-[21px] text-[#536471]'>Ads Info</span>
          <span className='text-[16px] leading-[21px] text-[#536471]'>More ...</span>
          <span className='text-[16px] leading-[21px] text-[#536471]'>© 2021 Twitter, Inc.</span>
        </div>
      </div>    
    </div>
  );
}

export default SiteBar;
