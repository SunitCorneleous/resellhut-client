import axios from "axios";
import React, { useContext } from "react";
import { IoLocation } from "react-icons/io5";
import { MdVerified } from "react-icons/md";
import { AiFillPhone } from "react-icons/ai";
import { AuthContext } from "../../Contexts/AuthProvider";
import { config } from "../../utilities/authToken/authToken";
import { toast } from "react-hot-toast";

const ItemCard = ({ laptop, setProductToBook }) => {
  const { user } = useContext(AuthContext);

  const {
    _id,
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
    details,
    sellerEmail,
    phone,
  } = laptop;

  const reportItemHandler = () => {
    const reason = window.prompt("Enter your reason: ");

    const confitmation = window.confirm(
      "Are you sure you want to report this item."
    );

    if (!confitmation) {
      return;
    }

    const reportItem = {
      itemId: _id,
      name,
      sellerName,
      sellerEmail,
      userName: user.displayName,
      userEmail: user.email,
      reason,
    };

    axios
      .post("http://localhost:5000/reportItem", reportItem, config)
      .then(res => {
        console.log(res.data);
        if (res.data.acknowledged) {
          toast.success("item reported");
        }
      });
  };

  return (
    <div className="min-w-[350px] max-w-[350px] h-auto m-3 mx-auto rounded-md bg-base-100 shadow-md">
      <img
        className="w-full rounded-md h-[230px] object-cover"
        src={image}
        alt="laptop"
      />
      <div className="mx-3 py-4">
        <h2 className="text-2xl font-bold">{name}</h2>
        <div className="flex justify-between font-medium">
          <div>
            <p>
              {sellerName}{" "}
              {sellerVerification && (
                <MdVerified className="text-blue-600 inline-block mb-1"></MdVerified>
              )}
            </p>
            <p className="text-gray-500 text-sm">
              {phone} <AiFillPhone className=" inline-block mb-1"></AiFillPhone>
            </p>
          </div>
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
        <p className="my-5">{details.slice(0, 80) + "..."}</p>
        <div className="flex items-end justify-between">
          <label
            onClick={() => setProductToBook(laptop)}
            htmlFor="book-now-modal"
            className="btn btn-primary mt-1"
          >
            book now
          </label>
          <div>
            <p className="text-sm">Condition: {condition}</p>
            <p className="text-sm">Date posted: {posted.slice(0, 10)}</p>
            <button
              className="btn btn-xs btn-ghost mt-3"
              onClick={reportItemHandler}
            >
              report product
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
