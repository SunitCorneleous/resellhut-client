import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/categories")
      .then(res => setCategories(res.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div className="p-10 md:my-16 my-8">
      <h1 className="text-center text-primary text-2xl md:text-4xl font-bold">
        Browse Laptops by Categories
      </h1>
      <div className="w-10/12 mx-auto my-4 flex justify-around mt-12 flex-col md:flex-row">
        {categories.map(category => (
          <Link
            to="/category"
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
