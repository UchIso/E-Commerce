import React from 'react'
import { CiDark , CiLight } from "react-icons/ci";
import { SiVitest } from "react-icons/si";

function Header() {
  return (
    <div className='Header'>
        <div className='LogoDiv'>
            <SiVitest className='text-5xl' />
            <h2>Fake React E-commerce</h2>
        </div>
        <div className='Tehem'>
            <CiDark />
            <CiLight />
        </div>
    </div>
  )
}

export default Header