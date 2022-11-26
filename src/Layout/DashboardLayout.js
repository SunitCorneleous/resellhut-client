import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../Contexts/AuthProvider";
import useUser from "../hooks/useUser";
import Navbar from "../Pages/Shared/NavBar/Navbar";

const DashboardLayout = () => {
  const { user } = useContext(AuthContext);
  const [userType] = useUser(user?.email);
  return (
    <>
      <Navbar></Navbar>
      <div className="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col md:flex-row  m-2 md:min-h-[80vh]">
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            See Options
          </label>
          <Outlet></Outlet>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 bg-slate-300 text-base-content">
            {userType === "admin" && (
              <>
                <li>
                  <Link>All Sellers</Link>
                </li>
                <li>
                  <Link>All Buyers</Link>
                </li>
                <li>
                  <Link>Reported Items</Link>
                </li>
              </>
            )}
            {userType === "seller" && (
              <>
                <li>
                  <Link to="/dashboard/addproduct">Add A Product</Link>
                </li>
                <li>
                  <Link to="/dashboard/myproducts">My Products</Link>
                </li>
                <li>
                  <Link>My Buyers</Link>
                </li>
              </>
            )}
            {userType === "user" && (
              <>
                <li>
                  <Link>My Orders</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </>
  );
};

export default DashboardLayout;