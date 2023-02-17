import React from 'react';
import Logo from '../assets/logo.png';

function NavBar() {
  return (
    <div className="flex h-[3.5rem] w-auto content-center items-center">
      <img src={Logo} style={{ width: '3rem', height: '3rem' }}></img>
      <div className="text-sm text-darkMajor">ChatPuppy</div>
    </div>
  );
}

export default NavBar;
