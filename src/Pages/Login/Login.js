import React from "react";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

const Login = () => {
  const inputStyle =
    "form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-primary focus:outline-none";

  return (
    <div className="min-h-[80vh] flex flex-col justify-center items-center">
      <h2>Log in</h2>
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
            <small className="block mt-2 text-sm text-primary">
              Don't have an account?{" "}
              <Link
                to="/signup"
                className="hover:font-semibold hover:underline"
              >
                Create an account
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

export default Login;
