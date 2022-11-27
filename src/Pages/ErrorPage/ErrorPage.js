import React from "react";
import { Link } from "react-router-dom";
import ErrorImg from "./../../assets/error.svg";

const ErrorPage = () => {
  return (
    <div className="max-w-[1440px] mx-auto min-h-[70vh] flex flex-col justify-center items-center">
      <img src={ErrorImg} alt="error" className="w-[350px]" />
      <p className="text-3xl text-red-600 font-bold">404</p>
      <p className="text-3xl">Page Not Found</p>
      <Link to="/" className="link link-success font-semibold text-xl">
        Back to Home
      </Link>
    </div>
  );
};

export default ErrorPage;
