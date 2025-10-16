import React, { useState } from 'react'
import { BiLabel } from 'react-icons/bi';
import { CiDark , CiLight , CiSearch  } from "react-icons/ci";
import { SiVitest } from "react-icons/si";

function Header() {
  
  const Body = document.body
  const [ThemeCh,SetThemeCh] = useState(false)
  const [Theme,SetTheme] = useState({
    Container:"#1A1A1A",
    Header:"#5F5F5F",
    Shadow:"#C7C8C2",
    Text:"#E6E7E1",
  })
  
  const ChangeTheme = ()=> {
    if(ThemeCh){
      Body.style.background = "#2F2F2F"
      Theme.Container = "#1A1A1A"
      Theme.Header = "#5F5F5F"
      Theme.Shadow = "#C7C8C2"
      Theme.Text = "#E6E7E1"
    }else{
      Body.style.background = "#E7E8E2"
      Theme.Container = "#3F3F3F"
      Theme.Header = "#C7C8C2"
      Theme.Shadow = "#5F5F5F"
      Theme.Text = "#0A0A0A"
    }    
    SetThemeCh(!ThemeCh)
  }

  return (
    <div style={{color:Theme.Text , background:Theme.Header}} id='Header'>
        <div className='LogoDiv'>
            <SiVitest className='text-5xl' />
            <h2>Fake React E-commerce</h2>
        </div>
        <div className='HeaderRight'>

          <div className='Searchs'>
            <CiSearch className='text-3xl' />
            <input className='SearchInput' type="text" />
          </div>
          
          <div style={{boxShadow: "0px 0px 10px"+Theme.Shadow}} className='Tehem'>
            {ThemeCh? <CiDark onClick={ChangeTheme} className="cursor-pointer" /> : <CiLight onClick={ChangeTheme} className="cursor-pointer" />}
          </div>
        </div>
    </div>
  )
}

export default Header