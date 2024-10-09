import React from 'react'

function Button({children, type, extraStyle}) {
  return (
    <button className={`py-[12px] font-bold text-[16px] leading-[17px] hover:opacity-75 duration-300 text-white bg-[#2D88D4] 
      rounded-[5px] ${extraStyle}`}
    type={type}>{children}</button>
  )
}

export default Button