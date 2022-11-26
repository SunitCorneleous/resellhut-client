import React from "react";
import { IoLocation } from "react-icons/io5";
import { MdVerified } from "react-icons/md";

const ItemCard = ({ laptop }) => {
  console.log(laptop);
  const {
    name,
    image,
    sellerName,
    sellerVerification,
    location,
    resellPrice,
    originalPrice,
    yearUsed,
    purchaseYear,
    posted,
    condition,
  } = laptop;

  return (
    <div className="min-w-[350px] max-w-[350px] h-auto m-3 mx-auto rounded-md bg-slate-100 shadow">
      <img
        className="w-full rounded-md h-[230px] object-cover"
        src={image}
        alt="laptop"
      />
      <div className="mx-3 py-4">
        <h2 className="text-2xl font-bold">{name}</h2>
        <div className="flex justify-between font-medium">
          <p>
            {sellerName}{" "}
            {sellerVerification && (
              <MdVerified className="text-blue-600 inline-block mb-1"></MdVerified>
            )}
          </p>
          <p className=" text-gray-500">
            <IoLocation className="inline-block w-6 h-6 mb-1"></IoLocation>
            <span className="text-[16px]">{location}</span>
          </p>
        </div>
        <div className="my-3 flex justify-between">
          <div>
            <p>Resell Price: ${resellPrice}</p>
            <p>Original Price: ${originalPrice}</p>
          </div>
          <div>
            <p>
              Used Years: {yearUsed} {yearUsed > 1 ? "years" : "year"}
            </p>
            <p>Purchased Year: {purchaseYear}</p>
          </div>
        </div>
        <div className="flex items-end justify-between">
          <button className="btn btn-primary mt-1">book now</button>
          <div>
            <p className="text-sm">Condition: {condition}</p>
            <p className="text-sm">Date posted: {posted.slice(0, 10)}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
