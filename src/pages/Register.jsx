import React, { useContext, useState } from 'react';
import LoginInput from '../components/LoginInput';
import Button from '../components/Button';
import { Link, useNavigate } from 'react-router-dom';
import Loading from "../assets/images/loading.png"
import toast, { Toaster } from 'react-hot-toast';
import { Context } from '../context/AuthContext';

function Register() {
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(false)
  const {setRegister }= useContext(Context)

  function handleRegisterSubmit(e) {
    e.preventDefault();
    const data = {
      login: e.target.login.value.trim(),
      password: e.target.password.value.trim(),
    };
      setIsLoading(true);
      toast.success('Successfully registered ' + data.login)
      setTimeout(() => {
        setRegister(data)
        navigate(-1)
      },1000)
      
  }
  return (
    <div className='mt-[88px] text-center mx-auto'>
      <h2 className="text-[36px] leading-[44px] text-[#4F4F4F] mb-[53px] font-semibold">Welcome, Sign up</h2>
      <div className='w-[620px] mx-auto bg-white'>
        <h3 className='w-[315px] mx-auto text-[18px] font-medium text-[#667085] leading-[25px] pt-[72px] mb-[34px]'>It is our great pleasure to have you on board!</h3>
        <form onSubmit={handleRegisterSubmit} className="w-[348px] mx-auto pb-[100px]" autoComplete="off">
          <Toaster position="top-right" reverseOrder={false}/>
          <LoginInput placeholder="Enter your Email" name="email" type="email" extrStyle="mb-[14px]" />
          <LoginInput placeholder="Create your Login" name="login" type="text" extrStyle="mb-[14px]" />
          <LoginInput placeholder="Create your Password" name="password" type="tel" extrStyle="mb-[14px]" />
          <div className="text-left">
            <Link to={"/"} className='text-[18px] text-[#2D88D4] font-semibold leading-[24px]'>Sign In</Link>
          </div>
          <Button extraStyle={"h-[42px] mt-[15px] w-full"} type="submit">
            {isLoading ? <img className='scale-[3] mx-auto' src={Loading} alt="Loading..." width={22} h /> : 'Sign up'}
          </Button>
        </form>
      </div>
    </div>
  )
}

export default Register