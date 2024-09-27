import React from 'react'

function LoginInput({placeholder, type, name, extrStyle}) {
  return (
    <input className={`py-[23px] outline-none rounded-[6px] w-full pl-5 text-[18px] leading-[23px] border-[1px] border-solid border-[#00000033] ${extrStyle}`}  type={type} required placeholder={placeholder} name={name}/>
  )
}

export default LoginInput