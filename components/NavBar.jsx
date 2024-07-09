import React from 'react'
import './NavBar.css'

const NavBar = ({items}) => {
  const renderButtons = () => {
    return items.map((item, index) => (
      <div key={index} className='flex items-center justify-center gap-1 nav-buttons h-10 w-24 rounded-lg cursor-pointing'>
        <img src={item.path} alt="Icon" />
        <p style={{ fontFamily: "Inter, sans-serif", fontSize: '16.49px' }}>{item.title}</p>
      </div>
    ));
  };

  return (
    <nav className='flex justify-between'>
      <div>
        <img className='logo' src="/LOGO.png" alt="img" />
      </div>
      <div className='flex gap-6 items-center select-none'>
        {renderButtons()}
        <div className='flex items-center mr-2 cursor-pointing'>
          <img className='p-2' src="../assets/profile.png" alt="profile" />
          <img src="../assets/Down-arrow.svg" alt="img" />
        </div>
      </div>
    </nav>
  )
}

export default NavBar
