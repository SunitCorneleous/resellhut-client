import React, { useContext, useEffect, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { AuthContext } from "./../../Contexts/AuthProvider";
import useSaveUser from "../../hooks/useSaveUser";
import { inputStyle } from "../../utilities/styles/styles";
import useToken from "./../../hooks/useToken";

const Login = () => {
  const { googleLogin, loginUser } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // navigate to right route
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  // get token
  const [createdUserEmail, setCreatedUserEmail] = useState("");
  const [token] = useToken(createdUserEmail);

  // save user to db
  const [userToSave, setUserToSave] = useState("");
  const tokenGoogleLogin = useSaveUser(userToSave);

  // after getting token redirect to right route
  useEffect(() => {
    if (tokenGoogleLogin || token) {
      navigate(from, { replace: true });
    }
  }, [token, from, navigate, tokenGoogleLogin]);

  const logInHandler = data => {
    loginUser(data.email, data.password)
      .then(result => {
        const user = result.user;

        console.log(user);

        setCreatedUserEmail(user.email);
      })
      .catch(error => console.log(error));
  };

  const googleLoginHandler = () => {
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
    <div className="min-h-[80vh] flex flex-col justify-center items-center">
      <h2 className="text-2xl mb-3">Log in</h2>
      <div className="p-6 rounded-lg shadow-md bg-white min-w-[340px] md:min-w-[400px]">
        <form onSubmit={handleSubmit(logInHandler)}>
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
          <button className="btn btn-primary">login</button>
        </form>
        <div className="divider">OR</div>
        <button
          onClick={googleLoginHandler}
          className="btn btn-outline btn-primary mx-auto flex"
        >
          <FcGoogle className="inline-block w-5 h-5 mr-1"></FcGoogle>
          Continue with Google
        </button>
      </div>
    </div>
  );
};

export default Login;
