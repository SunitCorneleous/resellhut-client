import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { AuthContext } from "../../../Contexts/AuthProvider";
import Spinner from "../../Shared/Spinner/Spinner";

const MyBuyers = () => {
  //allbuyers

  const { user } = useContext(AuthContext);

  const { data, isLoading } = useQuery({
    queryKey: ["email", user.email],
    queryFn: () => {
      return fetch(`http://localhost:5000/allbuyers?email=${user.email}`, {
        headers: {
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
      }).then(res => res.json());
    },
  });

  if (isLoading) {
    return <Spinner></Spinner>;
  }

  return (
    <div className="min-h-[70vh] w-full">
      <h1 className="text-center text-xl md:text-3xl mb-4 mt-5">All Buyers</h1>
      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          <thead>
            <tr className="text-center">
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Bought Product</th>
              <th>Transaction Id</th>
            </tr>
          </thead>
          <tbody>
            {data.map((laptop, index) => (
              <tr key={laptop._id} className="text-center">
                <th>{index + 1}</th>

                <td>{laptop.user}</td>
                <td>{laptop.email}</td>
                <td>{laptop.product}</td>
                <td>{laptop.transactionId}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyBuyers;
