import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { useForm } from "react-hook-form";
import useSaveUser from "../../hooks/useSaveUser";
import { inputStyle } from "../../utilities/styles/styles";
import { AuthContext } from "./../../Contexts/AuthProvider";

const Signup = () => {
  const { createUser, updateUser, googleLogin } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  // navigate to right route
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  // save user to db
  const [userToSave, setUserToSave] = useState("");
  const token = useSaveUser(userToSave);

  // after getting token redirect to right route
  useEffect(() => {
    if (token) {
      navigate(from, { replace: true });
    }
  }, [token, from, navigate]);

  const signUpHandler = data => {
    createUser(data.email, data.password)
      .then(result => {
        const user = result.user;

        console.log("CREATED USER: ", user);

        const profile = {
          displayName: data.name,
        };

        updateUser(profile)
          .then(() => {
            console.log("username added");

            const userToSave = {
              name: data.name,
              email: data.email,
              userType: data.userType,
            };

            setUserToSave(userToSave);
          })
          .catch(error => console.error("UPDATE USER ERROR: ", error));
      })
      .catch(error => console.error("CREATE USER ERROR: ", error));
  };

  const googleSignupHandler = () => {
    googleLogin()
      .then(result => {
        const user = result.user;

        const name = user.displayName;
        const email = user.email;

        // save to db
        setUserToSave({ name, email, userType: "user" });
      })
      .catch(error => console.error(error));
  };

  return (
    <div className="min-h-[85vh] flex flex-col justify-center items-center my-10">
      <h2 className="text-2xl mb-3">Sign Up</h2>
      <div className="p-6 rounded-lg shadow-md bg-white min-w-[340px] md:min-w-[400px]">
        <form onSubmit={handleSubmit(signUpHandler)}>
          {/* name */}
          <div className="form-group mb-6">
            <label
              htmlFor="exampleInputName"
              className="form-label inline-block mb-2 text-gray-700"
            >
              Full Name
            </label>
            <input
              type="text"
              className={inputStyle}
              {...register("name", { required: "Name is required" })}
              id="exampleInputName"
              aria-describedby="nameHelp"
              placeholder="Enter name"
            ></input>
            {errors?.name && (
              <small className="block mt-1 text-xs text-error">
                {errors?.name.message}
              </small>
            )}
          </div>
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
              <small className="block mt-1 text-xs text-error">
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
              <small className="block mt-1 text-xs text-error">
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
        <button
          onClick={googleSignupHandler}
          className="btn btn-outline btn-primary mx-auto flex"
        >
          <FcGoogle className="inline-block w-5 h-5 mr-1"></FcGoogle>
          Continue with Google
        </button>
      </div>
    </div>
  );
};

export default Signup;
