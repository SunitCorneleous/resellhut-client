import React from "react";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";

const Signup = () => {
  const inputStyle =
    "form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-primary focus:outline-none";

  return (
    <div className="min-h-[80vh] flex justify-center items-center">
      <div className="p-6 rounded-lg shadow-md bg-white min-w-[340px] md:min-w-[400px]">
        <form>
          {/* email */}
          <div className="form-group mb-6">
            <label
              htmlFor="exampleInputEmail1"
              className="form-label inline-block mb-2 text-gray-700"
            >
              Email address
            </label>
            <input
              type="email"
              className={inputStyle}
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            ></input>
            {/* <small id="emailHelp" className="block mt-1 text-xs text-gray-600">
              We'll never share your email with anyone else.
            </small> */}
          </div>
          {/* password */}
          <div className="form-group mb-6">
            <label
              htmlFor="exampleInputPassword1"
              className="form-label inline-block mb-2 text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              className={inputStyle}
              id="exampleInputPassword1"
              placeholder="Password"
            ></input>
          </div>
          {/* user type option */}
          <div className="form-group mb-6">
            <label
              htmlFor="exampleInputPassword1"
              className="form-label inline-block mb-2 text-gray-700"
            >
              Select a user type
            </label>
            <select className={`${inputStyle} cursor-pointer`}>
              <option defaultValue>User</option>
              <option>Seller</option>
            </select>
            <small className="block mt-2 text-sm text-primary">
              Already have an account?{" "}
              <Link to="/login" className="hover:font-semibold hover:underline">
                Log in
              </Link>
            </small>
          </div>

          <button className="btn btn-primary">log in</button>
        </form>
        <div className="divider">OR</div>
        <button className="btn btn-outline btn-primary mx-auto flex">
          <FcGoogle className="inline-block w-5 h-5 mr-1"></FcGoogle>
          Continue with Google
        </button>
      </div>
    </div>
  );
};

export default Signup;
