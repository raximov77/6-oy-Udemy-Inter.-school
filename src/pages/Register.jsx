import React, { useContext, useState } from 'react';
import Logo from "../assets/images/logo.svg";
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
      toast.success('Successfully registered' + data.login)
      setTimeout(() => {
        setRegister(data)
        navigate(-1)
      },1000)
      
  }
  return (
    <form onSubmit={handleRegisterSubmit} className="w-[670px] mx-auto mt-[60px]" autoComplete="off">
      <Toaster position="top-right" reverseOrder={false}/>
      <img className='mx-auto' src={Logo} alt="Site" width={40} height={33} />
      <h2 className="text-[30px] leading-[39px] font-bold my-[35px]">Create an account</h2>
      <LoginInput placeholder="Name" name="login" type="text" extrStyle="mb-[25px]" />
      <LoginInput placeholder="Phone number" name="password" type="tel" extrStyle="mb-[25px]" />
      <div className="mt-[10px]">
        <Link to={"/"} className='block text-[18px] mb-[30px] leading-[23px] text-[#1DA1F2]'>Sign In</Link>
        <h3 className='font-bold text-[18px] leading-[23px] mb-[18px]'>Date of birth</h3>
        <p className='text-[16px] leading-[25px] text-[#000000] opacity-60'>Facilisi sem pulvinar velit nunc, gravida scelerisque amet nibh sit. Quis bibendum ante phasellus metus, magna lacinia sed augue. Odio enim nascetur leo mauris vel eget. Pretium id ullamcorper blandit viverra dignissim eget tellus. Nibh mi massa in molestie a sit. Elit congue.</p>
      </div>
      <Button extraStyle={"h-[59px] mt-[45px]"} type="submit">
        {isLoading ? <img className='scale-[3] mx-auto' src={Loading} alt="Loading..." width={22} h /> : 'Next'}
      </Button>
    </form>
  )
}

export default Register