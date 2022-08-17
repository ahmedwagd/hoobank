import React, { useState } from 'react'
import { navLinks } from '../constants'
import { close, logo, menu } from '../assets'

function Navbar() {
  const [toggle, setToggle] = useState(false)
  return (
    <nav className='w-full flex justify-between items-center py-6 navbar'>
      <img src={logo} alt="hoobank" className='w-[124px] h-[32px] ' />
      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((link, i) => (
          <li
            className={`font-poppins font-normal cursor-pointer text-[16px] text-white ${i === navLinks.length - 1 ? 'mr-0' : 'mr-10'}`}
            id={`#${link.id}`}
            key={`${link.title}`}
          ><a href={`#${link.id}`}>{link.title}</a></li>
        ))}
      </ul>
      <div className="menu-links sm:hidden flex flex-1 justify-end items-center" onClick={() => setToggle(prev => !prev)}>
        <img src={toggle ? close : menu} alt="mobile menu" className='w-[25px] h-[28px] object-contain' />
        <div
          className={`${toggle ? 'flex' : 'hidden'} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl`}
        >
          <ul className="list-none flex flex-col justify-end items-center flex-1">
            {navLinks.map((link, i) => (
              <li
                className={`font-poppins font-normal cursor-pointer text-[16px] text-white ${i === navLinks.length - 1 ? '' : 'mb-4'}`}
                id={`#${link.id}`}
                key={`${link.title}`}
              >{link.title}</li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar