import React from 'react'
import logo from '../images/Black.png';
import menu from '../images/Combined Shape.svg';
import combined from '../images/Combined-Shape.svg';
import clip from '../images/phone-18.svg';
import dd from '../images/Combined Shape (1).svg';
import user from '../images/Userpic.png';
import lupa from '../images/Shape.svg';
const Header = () => {
  return (
    <header className="header flex justify-between items-center">
        <div className="flex">
          <div className="header__left">
            <img style={{ width: 20 }} src={menu} alt="menu" />
            <img src={logo} alt="logo" />
          </div>
          <div className="relative">
            <input type="text" placeholder="Search" style={{ width: 730 }} className="ml-14 rounded-3xl border-solid border-0 bg-slate-100 py-2 px-4 " />
            <img className="absolute top-3 right-5" src={lupa} />
          </div>
        </div>
        <div className="header__icons flex gap-x-12 items-center">
          <img src={clip} />
          <img src={dd} />
          <img src={combined} />
          <img src={user} />
        </div>
      </header>
  )
}

export default Header