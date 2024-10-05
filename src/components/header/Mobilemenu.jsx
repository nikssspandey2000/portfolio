import React from 'react'
import { NavLink } from 'react-router-dom'

const Mobilemenu = () => {
  return (
    <nav className='flex gap-8 items-center justify-center'>
      <NavLink to="/" className={({isActive})=>`rounded-md ${isActive ? "border-b-4 border-[#ffa6a6]" : ""}`}>
        <img src="/assets/homeSVG.svg" width={28} height={28} alt="home" />
      </NavLink>
      <NavLink to="/about" className={({isActive})=>`rounded-md ${isActive ? "border-b-4 border-[#ffa6a6]" : ""}`}>
        <img src="/assets/userSVG.svg" width={28} height={28} alt="home" />
      </NavLink>
      <NavLink to="/contact" className={({isActive})=>`rounded-md ${isActive ? "border-b-4 border-[#ffa6a6]" : ""}`}>
        <img src="/assets/contactSVG.svg" width={28} height={28} alt="home" />
      </NavLink>
      <NavLink to="/posts" className={({isActive})=>`rounded-md ${isActive ? "border-b-4 border-[#ffa6a6]" : ""}`}>
        <img src="/assets/workSVG.svg" width={28} height={28} alt="home" />
      </NavLink>
      
    </nav>
  )
}

export default Mobilemenu