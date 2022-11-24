import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Shared/NavBar/Navbar";

const Main = () => {
  return (
    <>
      <Navbar></Navbar>
      <Outlet></Outlet>
      {/* footer */}
    </>
  );
};

export default Main;
