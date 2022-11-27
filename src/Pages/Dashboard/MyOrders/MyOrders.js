import React, { useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "../../../Contexts/AuthProvider";
import { Link } from "react-router-dom";

const MyOrders = () => {
  const { user } = useContext(AuthContext);
  const { data } = useQuery({
    queryKey: ["bookings", user?.email],
    queryFn: () => {
      return fetch(`http://localhost:5000/bookings?email=${user?.email}`, {
        headers: {
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
      }).then(res => res.json());
    },
  });

  return (
    <div className="min-h-[70vh] w-full">
      <h1 className="text-center text-xl md:text-3xl mb-4 mt-5">My Orders:</h1>
      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          <thead>
            <tr className="text-center">
              <th></th>
              <th></th>
              <th>Laptop Name</th>
              <th>Price</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((product, index) => (
              <tr key={product._id} className="text-center">
                <th>{index + 1}</th>
                <th className="w-[150px]">
                  <img
                    src={product.image}
                    alt="booked"
                    className="w-full h-20 rounded-md border border-primary"
                  />
                </th>
                <td>{product.item}</td>
                <td>{product.price}</td>
                <td className="uppercase font-semibold text-red-600">
                  {product.status}
                </td>
                <td>
                  <Link
                    to={`/payment/${product._id}`}
                    className="btn btn-sm btn-primary"
                  >
                    pay
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrders;
