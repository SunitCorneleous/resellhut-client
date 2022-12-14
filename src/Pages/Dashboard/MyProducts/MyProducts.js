import React, { useContext } from "react";
import { AuthContext } from "../../../Contexts/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import Spinner from "../../Shared/Spinner/Spinner";
import axios from "axios";
import { toast } from "react-hot-toast";

const MyProducts = () => {
  const { user } = useContext(AuthContext);

  const {
    data: laptops,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["email", user.email],
    queryFn: () => {
      return fetch(
        `https://resellx-server.vercel.app/myproducts?email=${user.email}`,
        {
          headers: {
            authorization: `bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      ).then(res => res.json());
    },
  });

  const deleteHandler = id => {
    const confirmation = window.confirm(
      "Are you sure you want to delete this laptop?"
    );

    if (!confirmation) {
      return;
    }

    axios
      .delete(`https://resellx-server.vercel.app/products/${id}`, {
        headers: {
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
      })
      .then(res => {
        if (res.data.deletedCount > 0) {
          toast.success("product deleted");
        }
        refetch();
      });
  };

  const advertiseHandler = id => {
    fetch(`https://resellx-server.vercel.app/advertisement/${id}`, {
      headers: {
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then(res => res.json())
      .then(data => {
        if (data.modifiedCount > 0) {
          toast.success("Product advertised");
        }
        refetch();
      });
  };

  if (isLoading) {
    return <Spinner></Spinner>;
  }

  return (
    <div className="min-h-[70vh] w-full">
      <h1 className="text-center text-xl md:text-3xl mb-4 mt-5">
        My Products: {laptops.length}
      </h1>
      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          <thead>
            <tr className="text-center">
              <th></th>
              <th>Laptop Name</th>
              <th>Posted</th>
              <th>Resell Price</th>
              <th>Sale Status</th>
              <th>Action</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {laptops?.map((laptop, index) => (
              <tr key={laptop._id} className="text-center">
                <th>{index + 1}</th>
                <td>{laptop.name}</td>
                <td>{laptop.posted?.slice(0, 10)}</td>
                <td>{laptop.resellPrice}</td>
                <td>{laptop.saleStatus}</td>
                <td>
                  <button
                    disabled={laptop.advertised}
                    onClick={() => advertiseHandler(laptop._id)}
                    className="btn btn-sm btn-warning"
                  >
                    advertise
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => deleteHandler(laptop._id)}
                    className="btn btn-sm btn-error"
                  >
                    delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyProducts;
