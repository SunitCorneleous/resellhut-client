import React, { useState } from "react";
import BookNowModal from "../Shared/BookNowModal/BookNowModal";
import ItemCard from "./ItemCard";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import Spinner from "../Shared/Spinner/Spinner";

const Category = () => {
  const { id } = useParams();
  // const categoryName = laptops[0]?.category;
  const [productToBook, setProductToBook] = useState("");

  // get laptops
  const { data, isLoading } = useQuery({
    queryKey: ["category"],
    queryFn: () => {
      return fetch(`https://resellx-server.vercel.app/category/${id}`, {
        headers: {
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
      }).then(res => res.json());
    },
  });

  if (data?.length === 0) {
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

  if (isLoading) {
    return (
      <div className="h-[80vh]">
        <Spinner></Spinner>
      </div>
    );
  }

  return (
    <div className="my-8">
      <h1 className="text-2xl md:text-4xl font-bold text-neutral text-center">
        Laptops by category
      </h1>
      <div className="w-[95%] md:w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 gap-1 md:gap-5 lg:grid-cols-3 mt-6">
        {/* item cards */}
        {data?.map(laptop =>
          laptop.saleStatus === "sold" ? (
            ""
          ) : (
            <ItemCard
              key={laptop._id}
              laptop={laptop}
              setProductToBook={setProductToBook}
            ></ItemCard>
          )
        )}
      </div>
      <BookNowModal productToBook={productToBook}></BookNowModal>
    </div>
  );
};

export default Category;
