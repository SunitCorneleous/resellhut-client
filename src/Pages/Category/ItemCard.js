import React from "react";
import { IoLocation } from "react-icons/io5";

const ItemCard = () => {
  return (
    <div className="max-w-[350px] h-auto m-3 mx-auto rounded-md bg-slate-100 shadow">
      <img
        className="w-full rounded-md"
        src="https://i.ibb.co/CHC3m9M/laptop-2.jpg"
        alt="laptop"
      />
      <div className="mx-3 py-4">
        <h2 className="text-2xl font-bold">Product Name</h2>
        <div className="flex justify-between font-medium">
          <p>
            Seller Name{" "}
            <span className="text-blue-500 font-semibold">verified</span>
          </p>
          <p className=" text-gray-500">
            <IoLocation className="inline-block w-6 h-6 mb-1"></IoLocation>
            <span className="text-[16px]">Dhaka</span>
          </p>
        </div>
        <div className="my-3 flex justify-between">
          <div>
            <p>Resell Price: $200</p>
            <p>Original Price: $700</p>
          </div>
          <div>
            <p>Used Years: 2 years</p>
            <p>Purchased Year: 2020</p>
          </div>
        </div>
        <button className="btn btn-primary mt-1">book now</button>
      </div>
    </div>
  );
};

export default ItemCard;
