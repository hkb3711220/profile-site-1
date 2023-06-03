import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { styles } from '../styles'
import logo from '../assets/logo.png'
import { navLinks } from '../constants'
import { AiOutlineMenu } from 'react-icons/ai'


const Navbar = () => {

  const [activeMenu, setActiveMenu] = useState("")
  const [toggle, setToggle] = useState(false)

  return (
    <nav className={`${styles.paddingX} lg:max-w-[80%] flex justify-between items-center top-0 z-20 relative py-5 mx-auto`}>
      <div className='w-full flex items-center justify-between mx-auto'>
        <Link to='/' className='flex items-center gap-2'
          onClick={() => {
            window.scrollTo(0, 0)
            setActiveMenu("")
          }}
        >
          <img src={logo} alt="logo" className='w-9 h-9 object-contain' />
          <p className='font-bold text-[23px] cursor-pointer text-black'>Chanhu</p>
        </Link>
      </div>

      <ul className='list-none hidden sm:flex flex-row gap-10 '>
        {navLinks.map((navLink) =>
          <li id={navLink.id}
            className={`${activeMenu === navLink.title ? "text-black" : "text-secondary"} 
          text-[20px] font-medium cursor-pointer`} onClick={() => setActiveMenu(navLink.title)}>
            <a href={`#${navLink.id}`}>{navLink.title}</a>
          </li>
        )}
      </ul>

      <div className='sm:hidden flex flex-1 justify-end items-center'>
        <AiOutlineMenu className='w-[28px] h-[28px] object-contain' onClick={() => setToggle(!toggle)} />
        <div className={`${toggle === true ? "flex" : "hidden"} bg-white right-0 top-20 absolute p-6 mx-4 my-2 min-w-[140px] rounded-lg border border-black`}>
          <ul className='list-none flex flex-col flex-1 gap-4'>
            {navLinks.map((navLink) =>
              <li id={navLink.id}
                className={`${activeMenu === navLink.title ? "text-black" : "text-secondary"} 
              text-[20px] font-medium cursor-pointer`} onClick={() => setActiveMenu(navLink.title)}>
                <a href={`#${navLink.id}`}>{navLink.title}</a>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar