 import navLogo from '../assets/navLogo.jpeg'
import React from 'react';
const Navbar = () => {
  return (
    <div >
      <div className="navbar bg-black shadow-md">
        {/* Left: Side Logo */}
        <div className="flex-none">
          <img src={navLogo} alt="" />
        </div>

        {/* Center: Links (Hidden on small devices) */}
        <div className="flex-1 hidden lg:flex justify-center">
          <ul className="menu menu-horizontal px-1">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        {/* Right: Buttons */}
        <div className="flex-none hidden lg:flex">
          <button className="btn btn-outline btn-primary mx-1">Login</button>
          <button className="btn btn-primary mx-1">Sign Up</button>
        </div>

        {/* Mobile Menu (Hamburger) */}
        <div className="lg:hidden">
          <div className="dropdown">
            <label tabIndex="0" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </label>
            <ul tabIndex="0" className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#contact">Contact</a></li>
              <div className="divider"></div>
              <li><button className="btn btn-outline btn-primary w-full my-1">Login</button></li>
              <li><button className="btn btn-primary w-full my-1">Sign Up</button></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
