import React from "react";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { useForm } from "react-hook-form";

const Signup = () => {
  const inputStyle =
    "form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-primary focus:outline-none";
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const signUpHandler = data => {
    console.log(data);
  };

  return (
    <div className="min-h-[80vh] flex flex-col justify-center items-center">
      <h2 className="text-2xl mb-3">Sign Up</h2>
      <div className="p-6 rounded-lg shadow-md bg-white min-w-[340px] md:min-w-[400px]">
        <form onSubmit={handleSubmit(signUpHandler)}>
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
              {...register("email", { required: "Email Address is required" })}
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            ></input>
            {errors?.email && (
              <small id="emailHelp" className="block mt-1 text-xs text-error">
                {errors?.email.message}
              </small>
            )}
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
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Minimum password length 6 characters",
                },
              })}
              id="exampleInputPassword1"
              placeholder="Password"
            ></input>
            {errors?.password && (
              <small id="emailHelp" className="block mt-1 text-xs text-error">
                {errors?.password.message}
              </small>
            )}
          </div>
          {/* user type option */}
          <div className="form-group mb-6">
            <label
              htmlFor="exampleInputPassword1"
              className="form-label inline-block mb-2 text-gray-700"
            >
              Select a user type
            </label>
            <select
              className={`${inputStyle} cursor-pointer`}
              {...register("userType")}
            >
              <option value="user" defaultValue>
                User
              </option>
              <option value="seller">Seller</option>
            </select>
            <small className="block mt-2 text-sm text-primary">
              Already have an account?{" "}
              <Link to="/login" className="hover:font-semibold hover:underline">
                Login now
              </Link>
            </small>
          </div>

          <button className="btn btn-primary">signup</button>
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
