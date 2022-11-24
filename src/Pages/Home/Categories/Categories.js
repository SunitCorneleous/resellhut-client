import React from "react";
import { Link } from "react-router-dom";

const Categories = () => {
  return (
    <div className="p-10 md:my-32 my-16">
      <h1 className="text-center text-primary text-2xl md:text-4xl font-bold">
        Browse Laptops by Categories
      </h1>
      <div className="w-10/12 mx-auto my-4 flex justify-around mt-12 flex-col md:flex-row">
        <Link className="w-52 border-4 text-2xl font-medium mb-3 md:mb-0 border-primary mx-auto py-3 px-1 rounded-md text-center hover:bg-primary text-primary  hover:text-warning cursor-pointer">
          Budget
        </Link>

        <Link className="w-52 border-4 mb-3 md:mb-0 border-primary mx-auto py-3 px-1 rounded-md text-center hover:bg-primary text-primary  hover:text-warning cursor-pointer">
          <p className="text-2xl font-medium">Budget</p>
        </Link>
        <Link className="w-52 border-4 border-primary mx-auto py-3 px-1 rounded-md text-center hover:bg-primary text-primary  hover:text-warning cursor-pointer">
          <p className="text-2xl font-medium">Budget</p>
        </Link>
      </div>
    </div>
  );
};

export default Categories;
