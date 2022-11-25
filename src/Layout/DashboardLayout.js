import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Contexts/AuthProvider";
import Navbar from "../Pages/Shared/NavBar/Navbar";
import { useQuery } from "@tanstack/react-query";
import Spinner from "./../Pages/Shared/Spinner/Spinner";

const DashboardLayout = () => {
  const { user } = useContext(AuthContext);

  const { data, isLoading } = useQuery({
    queryKey: ["email", user?.email],
    queryFn: () =>
      fetch(`http://localhost:5000/userType?email=${user?.email}`).then(res =>
        res.json()
      ),
  });

  if (isLoading) {
    return (
      <>
        <Navbar></Navbar>
        <Spinner></Spinner>
      </>
    );
  }

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
          <ul className="menu p-4 w-80 bg-slate-300 text-base-content">
            {data.userType === "admin" && (
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
            {data.userType === "seller" && (
              <>
                <li>
                  <Link>Add A Product</Link>
                </li>
                <li>
                  <Link>My Products</Link>
                </li>
                <li>
                  <Link>My Buyers</Link>
                </li>
              </>
            )}
            {data.userType === "user" && (
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
