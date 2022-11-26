import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import BookNowModal from "../Shared/BookNowModal/BookNowModal";
import ItemCard from "./ItemCard";

const Category = () => {
  const laptops = useLoaderData();
  const categoryName = laptops[0]?.category;
  const [productToBook, setProductToBook] = useState("");

  if (laptops.length === 0) {
    return (
      <div className="my-8 min-h-[80vh]">
        <h1 className="text-2xl md:text-4xl font-bold text-neutral text-center">
          Category page
        </h1>

        <div className="min-h-[500px] flex justify-center items-center">
          <p className="text-lg md:text-4xl font-bold text-error text-center">
            No Laptops for sale
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="my-8">
      <h1 className="text-2xl md:text-4xl font-bold text-neutral text-center">
        {categoryName} Laptops
      </h1>
      <div className="w-[95%] md:w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 gap-1 lg:grid-cols-3 mt-6">
        {/* item cards */}
        {laptops.map(laptop => (
          <ItemCard
            key={laptop._id}
            laptop={laptop}
            setProductToBook={setProductToBook}
          ></ItemCard>
        ))}
      </div>
      <BookNowModal productToBook={productToBook}></BookNowModal>
    </div>
  );
};

export default Category;
