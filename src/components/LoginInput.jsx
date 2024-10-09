import React from 'react'

function LoginInput({placeholder, type, name, extrStyle}) {
  return (
    <input className={`py-[14px] outline-none rounded-[4px] w-full pl-[13px] text-[16px] leading-[17px] border-[0.5px] border-solid border-[#A7A7A7] ${extrStyle}`}  type={type} required placeholder={placeholder} name={name}/>
  )
}

export default LoginInput