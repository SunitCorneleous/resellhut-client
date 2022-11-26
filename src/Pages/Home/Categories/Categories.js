import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";
import Spinner from "../../Shared/Spinner/Spinner";

const Categories = () => {
  const {
    data: categories,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["categories"],
    queryFn: () =>
      axios.get("http://localhost:5000/categories").then(res => res.data),
  });

  if (error) {
    return (
      <div className="p-10 md:my-12 my-8">
        <h1 className="text-red-600 text-center text-2xl">
          There is a problem getting the data
        </h1>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="p-10 md:my-16 my-8">
        <Spinner></Spinner>
      </div>
    );
  }

  return (
    <div className="p-10 md:my-16 my-8">
      <h1 className="text-center text-primary text-2xl md:text-4xl font-semibold">
        Browse Laptops by Categories
      </h1>
      <div className="w-10/12 mx-auto my-4 flex justify-around mt-12 flex-col md:flex-row">
        {categories.map(category => (
          <Link
            to={`/category/${category._id}`}
            key={category._id}
            className="w-52 border-4 text-2xl font-medium mb-3 md:mb-0 border-primary mx-auto py-3 px-1 rounded-md text-center hover:bg-primary text-primary  hover:text-warning cursor-pointer"
          >
            {category.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Categories;
