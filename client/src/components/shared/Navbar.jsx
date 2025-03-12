import React from "react";
import logo from "../../assets/shared/logo.png";
import { Link, NavLink } from "react-router";
import useAuth from "../../hooks/useAuth";

const Navbar = () => {
  const routes = (
    <>
      <NavLink to="/" className="font-medium">
        Home
      </NavLink>
      <NavLink to="/doctors" className="font-medium">
        Doctors
      </NavLink>
    </>
  );

  const { user, signOut } = useAuth();

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
          <h1 className="text-2xl uppercase font-black">
            Doc<span className="text-teal-600">Ease</span>
          </h1>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <div className="menu menu-horizontal px-1 flex gap-4">{routes}</div>
      </div>
      <div className="navbar-end">
        <div className="flex gap-4">
          {user ? (
            <>
              <Link to="dashboard" className="avatar avatar-online">
                <div className="w-10 rounded-full">
                  <img
                    src={
                      user.photoURL
                        ? user.photoURL
                        : "https://i.ibb.co.com/p69k0Xft/3d-cartoon-style-character-23-2151034122.jpg"
                    }
                  />
                </div>
              </Link>
              <button
                onClick={signOut}
                className="bg-red-500 px-5 py-1 text-white text-sm uppercase font-medium rounded-sm"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                to="login"
                className="bg-teal-600 px-6 py-1 text-white text-sm uppercase font-medium rounded-sm"
              >
                Login
              </Link>
              <Link
                to="register"
                className="bg-teal-600 px-5 py-1 text-white text-sm uppercase font-medium rounded-sm"
              >
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
