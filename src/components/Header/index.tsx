import React from "react";
import './index.sass'

function Header() {
  return (
  <header className='header'>
  <p className='header-title'>Online Store</p>
  <div className="basket">
    <img 
    src={'./logo.svg'} 
    alt="logo-basket" 
    className='logo-basket' 
    />
  </div>
</header>
  );
}

export default Header;