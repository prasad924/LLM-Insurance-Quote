import React from 'react'
import './NavBar.css'
import { NavLink } from 'react-router-dom';

const NavBar = ({items}) => {
  const renderButtons = () => {
    return items.map((item, index) => (
      <NavLink to={item.path} key={index} className='flex items-center justify-center gap-1 nav-buttons h-10 w-24 rounded-lg cursor-pointing'>
        <img src={item.imgpath} alt={item.title} />
        <p style={{ fontFamily: "Inter, sans-serif", fontSize: '16.49px' }}>{item.title}</p>
      </NavLink>
    ));
  };

  return (
    <nav className='flex justify-between'>
      <NavLink to={'/'} className='flex items-center cursor-pointing'>
        <img className='logo' src="/LOGO.png" alt="Logo" />
        <div className='select-none'>
          <p style={{fontFamily:'"Jim Nightshade", cursive', fontSize:'28.74px'}}>LLM Insurance</p>
          <p style={{fontFamily:'"Jim Nightshade", cursive', fontSize:'11.74px'}}>Find the best Quote for your life.</p>
        </div>
      </NavLink>
      <div className='flex gap-6 items-center select-none p-2'>
        {renderButtons()}
        {/* <div className='flex items-center mr-2 cursor-pointing'>
          <img className='p-2' src="./src/assets/profile.png" alt="profile" />
          <img src="./src/assets/Down-arrow.svg" alt="img" />
        </div> */}
      </div>
    </nav>
  )
}

export default NavBar
