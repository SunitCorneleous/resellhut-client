import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../Pages/Shared/NavBar/Navbar";

const DashboardLayout = () => {
  return (
    <>
      <Navbar></Navbar>
      <div className="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex justify-end m-2">
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            See Options
          </label>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 bg-base-100 text-base-content">
            <li>
              <Link>Sidebar Item 1</Link>
            </li>
            <li>
              <Link>Sidebar Item 2</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default DashboardLayout;
