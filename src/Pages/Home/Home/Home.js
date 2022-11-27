import React from "react";
import Advertised from "../Advertised/Advertised";
import Categories from "../Categories/Categories";
import HomeBanner from "../HomeBanner/HomeBanner";
import { useQuery } from "@tanstack/react-query";
import UserReview from "../UserReview/UserReview";

const Home = () => {
  const { data: laptops } = useQuery({
    queryKey: ["advertisement"],
    queryFn: () => {
      return fetch("http://localhost:5000/advertisement", {
        headers: {
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
      }).then(res => res.json());
    },
  });

  return (
    <div>
      <div className="bg-secondary py-6">
        <div className="max-w-[1440px] mx-auto">
          <HomeBanner></HomeBanner>
          {/* One Extra section */}
        </div>
      </div>
      <div className="max-w-[1440px] mx-auto">
        {/* advertised section will render if advertised laptops exists */}
        {laptops?.length > 0 ? <Advertised laptops={laptops}></Advertised> : ""}
        <Categories></Categories>
        <UserReview></UserReview>
      </div>
    </div>
  );
};

export default Home;
