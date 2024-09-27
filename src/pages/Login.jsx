import React, { useContext, useState } from 'react';
import Logo from "../assets/images/logo.svg";
import LoginInput from '../components/LoginInput';
import Button from '../components/Button';
import { Link } from 'react-router-dom';
import { Context } from '../context/AuthContext';
import Loading from "../assets/images/loading.png"
import toast, { Toaster } from 'react-hot-toast';

function Login() {
  const { setToken, register } = useContext(Context);
  const [isLoading, setIsLoading] = useState(false);

  function handleLoginSubmit(e) {
    e.preventDefault();
    const data = {
      login: e.target.login.value.trim(),
      password: e.target.password.value,
    };
    if(register){
      if (data.login == register.login && data.password == register.password) {
        setIsLoading(true);
        toast.success('Welcome to Twitter ' + data.login)
        setTimeout(() => setToken(data),1000)
      } 
      else {
        setIsLoading(true);
        setTimeout(() => toast.error("This didn't work."),1000)
      }
    }
    else{
      if (data.login == 'admin' && data.password == '123') {
        setIsLoading(true);
        toast.success('Welcome to Twitter ' + data.login)
        setTimeout(() => setToken(data),1000)
      } 
      else {
        setIsLoading(true);
        setTimeout(() => toast.error("This didn't work."),1000)
      }
    }
  }

  return (
    <form onSubmit={handleLoginSubmit} className="w-[450px] mx-auto mt-[60px]" autoComplete="off">
      <Toaster position="top-right" reverseOrder={false}/>
      <img src={Logo} alt="Site" width={50} height={41} />
      <h2 className="text-[42px] leading-[49px] font-black my-[36px]">Log in to Twitter</h2>
      <LoginInput placeholder="Phone number, email address" name="login" type="text" extrStyle="mb-[25px]" />
      <LoginInput placeholder="Password" name="password" type="password" extrStyle="mb-[25px]" />
      <Button extraStyle={"h-[59px]"} type="submit">
        {isLoading ? <img className='scale-[3] mx-auto' src={Loading} alt="Loading..." width={22} h /> : 'Log In'}
      </Button>
      <div className="flex justify-between items-center mt-10">
        <p className="text-[18px] text-[#1DA1F2] font-normal leading-[23px] cursor-pointer">Forgot password?</p>
        <Link to="/sign-up" className="text-[18px] text-[#1DA1F2] font-normal leading-[23px]">Sign up to Twitter</Link>
      </div>
    </form>
  );
}

export default Login;
