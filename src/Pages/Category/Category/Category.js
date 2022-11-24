import React from "react";
import ItemCard from "./ItemCard";

const Category = () => {
  return (
    <div className="my-8">
      <h1 className="text-2xl md:text-4xl font-bold text-neutral text-center">
        Category page
      </h1>
      <div className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-6">
        {/* item cards */}
        <ItemCard></ItemCard>
        <ItemCard></ItemCard>
        <ItemCard></ItemCard>
      </div>
    </div>
  );
};

export default Category;
