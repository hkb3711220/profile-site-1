import React from 'react'
import { AiFillInstagram, AiOutlineTwitter} from 'react-icons/ai';

const Footer = () => {
  return (
    <div className="w-full bg-black py-[15px] px-[5px] flex flex-col items-center justify-center gap-[10px] font-normal">
      <p className='text-white'>Chanhu.All rights reserverd</p>
      <p className="text-[30px] text-white flex gap-[10px]">
        <AiFillInstagram className='hover:text-[#ca3433] duration-500'/>
        <AiOutlineTwitter className='hover:text-[#ca3433] duration-500'/>
      </p>
   </div>
  )
}

export default Footer