import React from 'react'
import { CommentIcon, Dots, LikeActive, LikeIcon, ReplyIcon, ShareIcon, StatisticIcon } from '../assets/images/Icons'

function PostItem({item, posts, setPosts}) {
  function handleCommentClick(value){
    if(value == "comment"){
      item.isCommented = !item.isCommented
      item.commentCount = item.isCommented ? ++item.commentCount : -- item.commentCount
      setPosts([...posts])
    }
   else if(value == "reply"){
      item.isReplied = !item.isReplied
      item.replyCount = item.isReplied ? ++item.replyCount : -- item.replyCount
      setPosts([...posts])
   }
   else if(value == "like"){
      item.isLiked = !item.isLiked
      item.likeCount = item.isLiked ? ++item.likeCount : -- item.likeCount
      setPosts([...posts])
   }
  }


  return (
    <li className='p-5 border-b-[1px] border-[#D8D8D8] relative'>
              <div className='flex space-x-[15px]'>
                <img className='rounded-full h-[60px]' src={item.avatarIcon} alt="Avatar Icon" width={60} height={60} />
                <div>
                  <strong className='font-bold mr-[5px] text-[20px] leading-[26px]'>{item.name}</strong>
                  <span className='text-[18px] leading-[23px] text-black opacity-60'>{item.nic}</span>
                  <p className='mt-[5px] text-[18px] leading-[23px]'>{item.postDeck}</p>
                </div>  
              </div>
              <button className='absolute right-5 top-6'>
                <Dots/>
              </button>
              {item.postImg ? <img className='rounded-[28px] pl-[75px] mt-[15px]' src={item.postImg} alt='Post Img' width={679} height={453}/> : ""} 
              <div className='mt-[22px] flex items-center space-x-[100px] pl-[75px]'>
                <button onClick={() => handleCommentClick("comment")} className={`flex items-center space-x-[10px] ${item.isCommented ? "text-blue-500" : ""}  `}>
                  <CommentIcon/>
                  <span className='font-semibold text-[16px] leading-[21px]'>{item.commentCount ? item.commentCount : ""}</span>
                </button>
                <button onClick={() => handleCommentClick("reply")} className={`flex items-center space-x-[10px] ${item.isReplied ? "text-[#0CB245]" : ""}  `}>
                  <ReplyIcon/>
                  <span className='font-semibold text-[16px] leading-[21p onClick={() => handleCommentClick("")}x]'>{item.replyCount ? item.replyCount : ""}</span>
                </button>
                <button onClick={() => handleCommentClick("like")} className={`flex items-center space-x-[10px] ${item.isLiked ? "text-[#EF1C5C]" : ""}  `}>
                  {item.isLiked ? <LikeActive/> : <LikeIcon/>}  
                  <span className='font-semibold text-[16px] leading-[21px]'>{item.likeCount ? item.likeCount : ""}</span>
                </button>
                <button className='flex items-center space-x-[10px]'>
                  <ShareIcon/>
                </button>
                <button className='flex items-center space-x-[10px]'>
                  <StatisticIcon/>
                </button>
              </div>
            </li>
  )
}

export default PostItem