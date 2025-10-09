import React from "react";
import { assets } from "../../assets/assets";   
import { Link, NavLink } from "react-router";


const navLink = <>
  <NavLink 
    to="/" 
    className={({ isActive }) => 
      `m-2 font-semibold ${isActive ? 'text-[#7A42E8] underline' : ''}`
    }
  >
    Home
  </NavLink>

  <NavLink 
    to="/apps" 
    className={({ isActive }) => 
      `m-2 font-semibold ${isActive ? 'text-[#7A42E8] underline' : ''}`
    }
  >
    Apps
  </NavLink>

  <NavLink 
    to="/installation" 
    className={({ isActive }) => 
      `m-2 font-semibold ${isActive ? 'text-[#7A42E8] underline' : ''}`
    }
  >
    Installation
  </NavLink>
</>


const Navbar = () => {
  return (
    <div className="">
      <div className="navbar bg-base-100 px-4 md:px-6 lg:px-10">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {
                navLink 
              }
            </ul>
          </div>
          <a href="/" className="font-bold text-xl flex items-center gap-3">
            <img className="w-8 md:w-10 lg:w-11" src={assets.logo} alt="logo"/>
            <span className="bg-clip-text text-transparent bg-gradient-to-br from-[#6538BA] via-[#7A42E8] to-[#8854CE] text-[0.9rem] md:text-[1.1rem]">HERO.IO</span>
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {
                navLink
            }
          </ul>
        </div>
        <div className="navbar-end">
          <button className="btn rounded-lg bg-gradient-to-br from-[#6538BA] via-[#7A42E8] to-[#8854CE]">
            <a className="flex items-center gap-2" href="https://github.com/ehasun15019" target="_blank">
                <img className="w-5" src={assets.github} alt="github"/>
                <span className="font-semibold text-white">Contribute</span>
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
