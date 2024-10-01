import React, { useContext, useState } from 'react'
import { CalendarIcon, ClearIcon, CommentIcon, Dots, GiftIcon, LikeIcon, ModeIcon, ReplyIcon, SaveImgIcon, ShareIcon, SimailIcon, StatisticIcon, StatsIcon } from '../assets/images/Icons'
import Button from '../components/Button'
import CreativePhoto from "../assets/images/CreativePhoto.svg"
import Cloutexhibition from "../assets/images/cloutexhibition.svg"
import Designsta from "../assets/images/Designsta.svg"
import Kebab from "../assets/images/kebab.png"
import PostItem from '../components/PostItem'
import Loading from "../assets/images/loading.png"
import { Context } from '../context/AuthContext'

function Home() {
  const {userPosts, setUserPosts} = useContext(Context)
  const [inputValue, setinputValue] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [postImgUrl, setPostImgUrl] = useState(null)

  const [posts, setPosts] = useState([
    {
      id:1,
      avatarIcon:Designsta,
      name:"Designsta",
      nic:"@inner · 25m",
      postDeck:"Twitterdagi ayol-erkak qarama-qarshiliginglardan o'zinglar zerikmadinglarmi?",
      commentCount:"10",
      replyCount:"1",
      likeCount:"8",
      postImg:null,
      isCommented:false,
      isReplied:false,
      isLiked:false
    },
    {
      id:2,
      avatarIcon:Cloutexhibition,
      name:"Cloutexhibition",
      nic:"@RajLahoti · 22m",
      postDeck:"YPIP dasturining bu yilgi sezoni ham o’z nihoyasiga yetmoqda. Mentorlik davomida talaba va yangi bitiruvchilarni o’sayotganini ko’rib hursand bo’ladi odam.",
      commentCount:null,
      replyCount:"5",
      likeCount:"9",
      postImg:null,
      isCommented:false,
      isReplied:false,
      isLiked:false
    },
    {
      id:3,
      avatarIcon:CreativePhoto,
      name:"CreativePhoto",
      nic:"@cloutexhibition · 1h",
      postDeck:"Обетда..... Кечиринглар",
      commentCount:"10",
      replyCount:"1",
      likeCount:"8",
      postImg:Kebab,
      isCommented:false,
      isReplied:false,
      isLiked:false
    },
  ])

  function handleSubmitPosts(e){
    e.preventDefault()
    const data = {
      id: posts.length ? posts[posts.length - 1].id + 1 : 1,
      avatarIcon: "https://picsum.photos/800/800",
      name: JSON.parse(localStorage.getItem("token")).login,
      nic:`@${JSON.parse(localStorage.getItem("token")).login} · 5m`,
      postDeck: inputValue,
      commentCount:null,
      replyCount:null,
      likeCount:null,
      postImg:postImgUrl
    }
    setIsLoading(true)
    setTimeout(() => {
      setPosts([data,...posts])
      setUserPosts([data,...userPosts])
      setIsLoading(false)
      setPostImgUrl(null)
      e.target.reset()
    },1000)
  }

  return (
    <div className='border-r-[1px] border-[#D8D8D8] h-[100vh] overflow-y-auto'>
      <div className='flex items-center justify-between p-5 border-b-[1px] border-[#D8D8D8]'>
        <h2 className='font-bold text-[24px] leading-[31px]'>Home</h2>
        <button>
          <ModeIcon/>
        </button>
      </div>
      <form onSubmit={handleSubmitPosts} className='p-5 border-b-[1px] relative border-[#D8D8D8]' autoComplete='off'>
        <div className={`flex ${postImgUrl ? "items-start" : "items-center" }  space-x-[15px]`}>
          <img className='rounded-full cursor-pointer' src="https://picsum.photos/800/800" alt="Random image" width={60} height={60} />
          <div>
            <input onChange={(e) => setinputValue(e.target.value)} required className='w-[80%] text-[22px] leading-[29px] placeholder:text-[#828282] p-[1px] outline-none font-semibold' type="text" placeholder='What’s happening' name='tweetData'/>
            {postImgUrl ? 
              <div className='bg-slate-300 rounded-md mt-8 relative'>
                <img  src={postImgUrl} alt="Choosen Image" width={579} height={353}/> 
                <button onClick={() => setPostImgUrl(null)} type='button' className='absolute top-4 right-4 p-2 rounded-md bg-white'>
                  <ClearIcon/>
                </button>
              </div>
            : ""}
          </div>
        </div>
        <div className='flex items-center space-x-5 pl-[77px] mt-8 mb-[26px]'>
          <label className='cursor-pointer'>
            <input onChange={(e) => setPostImgUrl(URL.createObjectURL(e.target.files[0]))} className='hidden' type="file" />
            <SaveImgIcon/>
          </label>
          <label>
            <input className='hidden' type="text" />
            <GiftIcon/>
          </label>
          <label>
            <input className='hidden' type="text" />
            <StatsIcon/>
          </label>
          <label>
            <input className='hidden' type="text" />
            <SimailIcon/>
          </label>
          <label>
            <input className='hidden' type="text" />
            <CalendarIcon/>
          </label>
        </div>
        <Button type={inputValue ? "sumbit" : "button"} extraStyle={`w-[108px] p-[15px] absolute right-[18px] bottom-[5px] ${inputValue ? "" : "cursor-not-allowed opacity-50 hover:opacity-50"}`}>
          {isLoading ? <img className='mx-auto scale-[2]' src={Loading} alt='Loading' width={22}/> : "Tweet"} 
        </Button>
      </form>
      <ul> {posts.map(item => <PostItem posts={posts} setPosts={setPosts} key={item.id} item={item}/>)} </ul>
    </div>
  )
}

export default Home