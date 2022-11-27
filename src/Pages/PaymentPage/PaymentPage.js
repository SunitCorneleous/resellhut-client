import React from "react";
import { useLoaderData } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";
import Spinner from "../Shared/Spinner/Spinner";

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);

const PaymentPage = () => {
  const data = useLoaderData();
  const { product, booking } = data;

  if (data === null) {
    return <Spinner></Spinner>;
  }

  return (
    <div className="max-w-[1440px] py-8 mx-auto min-h-[70vh]">
      <h2 className="text-primary text-4xl text-center">Payment</h2>
      <div className="w-10/12 md:w-11/12 lg:w-[70%]  mx-auto flex mt-4 md:flex-row flex-col-reverse">
        <div className="flex-auto">
          {/* card for payment */}
          <div className="text-xl md:text-xl p-5 m-3 bg-[#B5BBCD] shadow-md rounded leading-relaxed ">
            <h1>Enter your card details</h1>
            <Elements stripe={stripePromise}>
              <CheckoutForm product={product} booking={booking} />
            </Elements>
          </div>
        </div>
        <div className="flex-1">
          {/* product details */}
          <div className="text-xl md:text-xl p-5 m-3 bg-slate-300 shadow-md rounded leading-relaxed ">
            <div className=" mb-4">
              <h2 className="font-semibold text-3xl">{product?.name}</h2>
              <p className="text-lg">Category: {product?.category}</p>
            </div>
            <img
              src={product.image}
              alt="laptop"
              className="w-full h-40 my-3 rounded-md"
            />
            <p>Resell Price: ${product.resellPrice}</p>
            <p>Original Price: ${product.originalPrice}</p>
            <div className="mt-3">
              <p>Location: {product.location}</p>
              <p>Condition: {product.condition}</p>
              <p>Details: {product.details}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;
