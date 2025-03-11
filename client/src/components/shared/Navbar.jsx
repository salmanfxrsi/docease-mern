import React from "react";
import logo from '../../assets/shared/logo.png'
import { Link, NavLink } from "react-router";

const Navbar = () => {
  const routes = <>
  </>

  return (
    <div className="navbar bg-base-100 shadow-sm">
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
          <div
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {routes}
          </div>
        </div>
        <div className="flex items-center">
            <img className="w-12 h-12" src={logo} alt="" />
            <h1 className="text-2xl uppercase font-black">Doc<span className="text-[#4BBDD7]">Ease</span></h1>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <div className="menu menu-horizontal px-1">
          {routes}
        </div>
      </div>
      <button className="navbar-end">
        <div>
          <Link className="bg-[#4BBDD7] px-5 py-1.5 text-white text-lg uppercase font-medium rounded-sm">Login</Link>
        </div>
      </button>
    </div>
  );
};

export default Navbar;
