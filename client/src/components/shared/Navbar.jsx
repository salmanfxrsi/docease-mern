import React from "react";
import logo from "../../assets/shared/logo.png";
import { Link, NavLink } from "react-router";
import useAuth from "../../hooks/useAuth";
import { IoIosArrowDropdown } from "react-icons/io";
import useUser from "../../hooks/useUser";

const Navbar = () => {
  const [, data] = useUser();

  const routes = (
    <>
      <NavLink to="/" className="font-medium">
        Home
      </NavLink>
      <NavLink to="/doctors" className="font-medium">
        Doctors
      </NavLink>
      <NavLink to="/doctor-registration" className="font-medium">
        Doctor Registration
      </NavLink>

      {data?.role === "patient" && (
        <>
          <NavLink to="/appointment-history" className="font-medium">
            Appointment History
          </NavLink>
          <NavLink to="/upcoming-booking" className="font-medium">
            Upcoming Booking
          </NavLink>
        </>
      )}
      {data?.role === "admin" && (
        <>
          <NavLink to="/manage-users" className="font-medium">
            Manage Users
          </NavLink>
          <NavLink to="/manage-doctor-registration" className="font-medium">
            Doctor Registration
          </NavLink>
        </>
      )}
    </>
  );

  const privateRoutes = (
    <>
      {/* Patient Routes */}
      {data?.role === "patient" && (
        <>
          <NavLink to="/appointment-history" className="font-medium">
            Appointment History
          </NavLink>
          <NavLink to="/upcoming-booking" className="font-medium">
            Upcoming Booking
          </NavLink>
        </>
      )}

      {/* Admin Routes */}
      {data?.role === "admin" && (
        <>
          <NavLink to="/manage-users" className="font-medium">
            Manage Users
          </NavLink>
          <NavLink to="/manage-doctor-registration" className="font-medium">
            Doctor Registration
          </NavLink>
        </>
      )}
    </>
  );

  const { user, signOut } = useAuth();

  return (
    <div className="navbar w-11/12 mx-auto">
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
          <h1 className="text-2xl uppercase font-black hidden lg:block">
            Doc<span className="text-teal-600">Ease</span>
          </h1>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <div className="menu menu-horizontal px-1 flex gap-4">
          <NavLink to="/" className="font-medium">
            Home
          </NavLink>
          <NavLink to="/doctors" className="font-medium">
            Doctors
          </NavLink>
          <NavLink to="/doctor-registration" className="font-medium">
            Doctor Registration
          </NavLink>
        </div>
      </div>

      {/* Logo and Routes */}
      <div className="navbar-end">
        {user ? (
          <div className="dropdown cursor-pointer flex">
            <div tabIndex={0} role="button" className="hidden lg:block">
              <div className="flex items-center gap-2">
                {/* Avatar */}
                <div className="avatar avatar-online">
                  <div className="w-10 rounded-full">
                    <img
                      src={
                        user.photoURL ||
                        "https://i.ibb.co.com/p69k0Xft/3d-cartoon-style-character-23-2151034122.jpg"
                      }
                    />
                  </div>
                </div>

                {/* Name */}
                <h1 className="text-xl font-medium">
                  {user && user.displayName}
                </h1>

                {/* Arrow */}
                <div className="text-2xl">
                  <IoIosArrowDropdown />
                </div>
              </div>
            </div>
            <div
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 text-black rounded-box z-1 mt-16 w-52 py-2 px-6 shadow gap-2"
            >
              {privateRoutes}
              <button
                onClick={signOut}
                className="bg-red-500 text-white uppercase rounded-lg font-medium mt-1 mb-1"
              >
                Logout
              </button>
            </div>
          </div>
        ) : (
          <div className="flex gap-4">
            <Link
              to="login"
              className="bg-teal-600 text-white px-6 py-1 rounded-lg uppercase font-medium"
            >
              Login
            </Link>
            <Link
              to="register"
              className="bg-teal-600 text-white px-6 py-1 rounded-lg uppercase font-medium"
            >
              Register
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
