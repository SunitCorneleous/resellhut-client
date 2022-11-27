import React from "react";
import { useLoaderData } from "react-router-dom";

const PaymentPage = () => {
  const product = useLoaderData();

  console.log(product);

  return (
    <div className="max-w-[1440px] py-8 mx-auto min-h-[70vh]">
      <h2 className="text-primary text-4xl text-center">Payment</h2>
      <div className="w-10/12  mx-auto flex mt-4 md:flex-row flex-col-reverse">
        <div className="bg-primary flex-auto">
          {/* card for payment */}
          <h1>payment card</h1>
        </div>
        <div className="flex-1">
          {/* product details */}
          <div className="text-xl md:text-xl p-5 m-3 bg-slate-300 shadow-md rounded leading-relaxed ">
            <div className=" mb-4">
              <h2 className="font-semibold text-3xl">{product.name}</h2>
              <p className="text-lg">Category: {product.category}</p>
            </div>
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
