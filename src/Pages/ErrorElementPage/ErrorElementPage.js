import React from "react";
import { useRouteError } from "react-router-dom";

const ErrorElementPage = () => {
  const error = useRouteError();

  return (
    <div className="max-w-[1440px] mx-auto min-h-[70vh] flex flex-col justify-center items-center my-[50px]">
      <p className="text-5xl text-red-600 font-bold">{error.message}</p>
      <button
        className="btn btn-primary mt-5"
        onClick={() => window.location.reload()}
      >
        Reload Page
      </button>
    </div>
  );
};

export default ErrorElementPage;
