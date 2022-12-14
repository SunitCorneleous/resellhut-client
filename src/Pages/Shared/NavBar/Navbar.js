import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Contexts/AuthProvider";
import { toast } from "react-hot-toast";
import { BsFillLaptopFill } from "react-icons/bs";

const Navbar = () => {
  const { user, logOutUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const menuItems = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>

      <li>
        <Link to="/blogs">Blogs</Link>
      </li>

      {user?.email && (
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
      )}
    </>
  );

  const logoutHandler = () => {
    logOutUser()
      .then(() => {
        navigate("/");
        toast.success("User logged out");
      })
      .catch(error => toast.error(error.message));
  };

  return (
    <div className=" bg-secondary py-3">
      <div className="navbar max-w-[1440px] mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {menuItems}
            </ul>
          </div>
          <Link to="/" className="text-2xl md:text-3xl font-semibold">
            ResellHut{" "}
            <BsFillLaptopFill className="inline-block w-8 h-8 mb-2"></BsFillLaptopFill>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">{menuItems}</ul>
        </div>
        <div className="navbar-end">
          {user?.email ? (
            <button onClick={logoutHandler} className="btn">
              logout
            </button>
          ) : (
            <Link className="btn" to="/login">
              login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
