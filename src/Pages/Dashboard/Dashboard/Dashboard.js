import React, { useContext } from "react";
import { AuthContext } from "../../../Contexts/AuthProvider";
import useUser from "../../../hooks/useUser";

const Dashboard = () => {
  const { user } = useContext(AuthContext);
  const [userType] = useUser(user?.email);

  return (
    <div className="min-h-[70vh] w-full flex justify-center">
      <div className="mt-[150px] text-xl md:text-3xl text-primary">
        <h1 className="text-center mb-6 font-semibold">Profile</h1>
        <p>
          Name: <span>{user.displayName}</span>
        </p>
        <p>
          Email: <span>{user.email}</span>
        </p>
        <p className="mt-5">
          You are using as{" "}
          <span className="font-semibold uppercase">{userType}</span>
        </p>
      </div>
    </div>
  );
};

export default Dashboard;
