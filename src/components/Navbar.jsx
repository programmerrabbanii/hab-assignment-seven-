 import navLogo from '../assets/Logo.png'
import React from 'react';
const Navbar = () => {
  return (
    <div >
      <div className="navbar bg-black shadow-md">
        <div className="flex-none">
          <img src={navLogo} alt="" />
        </div>

        <div className="flex-1 hidden lg:flex justify-center">
          <ul className="menu menu-horizontal px-1 text-white">
          <li><a href="#About Us">About Us</a></li>
              <li><a href="#Pricing">Pricing</a></li>
              <li><a href="#Costumer">Coustomer</a></li> 
              <li><a href="#Solutions">Solutions</a></li>
          </ul>
        </div>

        <div className="flex-none hidden lg:flex">
          <button className="bg-[#0FF1F6] py-2 px-6 rounded-full ml-3">Back a Demo</button>
          <button className="rounded-full border px-6 py-2 text-white ml-2 ">Contact US</button>
        </div>

        <div className="lg:hidden">
          <div className="dropdown">
            <label tabIndex="0" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </label>
            <ul tabIndex="0" className="menu text-white menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              <li><a href="#About Us">About Us</a></li>
              <li><a href="#Pricing">Pricing</a></li>
              <li><a href="#Costumer">Coustomer</a></li> 
              <li><a href="#Solutions">Solutions</a></li>
              <div className="divider"></div>
              <li><button className=" bg-[#0FF1F6] w-full my-1">Back a Demo</button></li>
              <li><button className="btn btn-primary w-full my-1">Contact Us</button></li>
            </ul>
          </div>
        </div>
      </div>
    </div> 
  );
};

export default Navbar;
