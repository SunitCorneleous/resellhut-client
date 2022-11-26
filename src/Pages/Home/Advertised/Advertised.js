import React from "react";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { BsArrowRightCircleFill, BsArrowLeftCircleFill } from "react-icons/bs";
import { IoLocation } from "react-icons/io5";

const Advertised = ({ laptops }) => {
  const buttonStyle = {
    width: "30px",
    background: "none",
    border: "0px",
    margin: "5px",
  };

  const properties = {
    prevArrow: (
      <button style={{ ...buttonStyle }} className="text-primary">
        <BsArrowLeftCircleFill fontSize={"35px"}></BsArrowLeftCircleFill>
      </button>
    ),
    nextArrow: (
      <button style={{ ...buttonStyle }} className="text-primary">
        <BsArrowRightCircleFill fontSize={"35px"}></BsArrowRightCircleFill>
      </button>
    ),
  };

  return (
    <div className="md:w-10/12 mx-auto mt-8 md:py-12 ">
      <h1 className="text-center text-4xl font-semibold text-primary">
        Laptops with great deals
      </h1>
      <div className="w-full md:w-11/12 mx-auto my-20">
        <Fade {...properties}>
          {laptops.map(laptop => (
            <div key={laptop._id} className="each-slide">
              <div className="flex flex-col md:flex-row items-center mx-auto md:w-10/12 md:justify-around">
                <img
                  src={laptop.image}
                  alt="carousel"
                  className="w-10/12 md:w-[40%] h-[300px] rounded-md"
                />
                <div className="text-xl mt-5 md:mt-0">
                  <h2 className="font-semibold text-2xl">{laptop.name}</h2>
                  <h2 className="">${laptop.resellPrice}</h2>
                  <div className="mt-3">
                    <IoLocation className="inline-block mb-1"></IoLocation>
                    <span>{laptop.location}</span>
                    <br />
                    <button className="btn btn-primary mt-5">book now</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Fade>
      </div>
    </div>
  );
};

export default Advertised;
