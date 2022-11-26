import React from "react";
import { Link } from "react-router-dom";
import BannerImg from "./../../../assets/HomeBanner.svg";

const HomeBanner = () => {
  return (
    <div className="md:w-10/12 mx-auto py-4 rounded-md flex-col md:flex-row flex justify-around items-center">
      <div className="md:w-[50%] w-11/12">
        <h1 className="text-accent font-semibold md:text-5xl text-2xl">
          Buy and Sell laptops
        </h1>
        <p className="text-2xl mt-2 text-slate-600">
          <span className="text-primary font-bold">#1</span> site to buy and
          sell laptops
        </p>
        <div className="mt-5">
          <p className="text-2xl text-slate-600">
            To become a Buyer or Seller Sign up Now!
          </p>
          <Link className="btn btn-sm btn-primary mt-2">signup</Link>
        </div>
      </div>
      <img src={BannerImg} alt="banner" className="w-[45%] md:w-[30%]" />
    </div>
  );
};

export default HomeBanner;
