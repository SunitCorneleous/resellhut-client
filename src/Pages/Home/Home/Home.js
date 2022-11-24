import React from "react";

const Home = () => {
  return (
    <div className="bg-secondary py-6">
      <div className="max-w-[1440px] mx-auto">
        {/* advertised section */}
        <div className="bg-primary mx-3 p-10 rounded-md flex justify-between">
          <div>
            <button className="btn btn-neutral">Buy now</button>
            <button className="btn btn-outline btn-warning ml-2">
              book now
            </button>
            <h1 className="text-warning text-2xl mt-4 font-semibold">
              Get exciting offers on booking
            </h1>
          </div>
          <div>
            <h1>Advertised </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
