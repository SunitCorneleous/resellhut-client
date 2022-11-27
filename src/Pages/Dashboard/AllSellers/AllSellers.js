import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import Spinner from "../../Shared/Spinner/Spinner";
import { toast } from "react-hot-toast";

const config = {
  headers: {
    authorization: `bearer ${localStorage.getItem("accessToken")}`,
  },
};

const AllSellers = () => {
  const { data, refetch, isLoading } = useQuery({
    queryKey: ["allsellers"],
    queryFn: () => {
      return fetch("http://localhost:5000/allsellers", config).then(res =>
        res.json()
      );
    },
  });

  const verifySellerHandler = email => {
    axios
      .get(`http://localhost:5000/verifyseller?email=${email}`, config)
      .then(res => {
        if (res.data.modifiedCount > 0) {
          toast.success("Seller verified");
          refetch();
        }
      });
  };

  const deleteHandler = (id, email) => {
    const confirmation = window.confirm(
      "Are you sure you want to delete this seller?"
    );

    if (!confirmation) {
      return;
    }

    axios
      .delete(
        `http://localhost:5000/allsellers?id=${id}&email=${email}`,
        config
      )
      .then(res => {
        if (res.data.deletedCount > 0) {
          toast.success("Seller deleted");
          refetch();
        }
      });
  };

  if (isLoading) {
    return <Spinner></Spinner>;
  }

  return (
    <div className="min-h-[70vh] w-full">
      <h1 className="text-center text-xl md:text-3xl mb-4 mt-5">
        All Sellers: {data?.length}
      </h1>
      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          <thead>
            <tr className="text-center">
              <th></th>
              <th>Seller Name</th>
              <th>Email</th>
              <th>Action</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((seller, index) => (
              <tr key={seller._id} className="text-center">
                <th>{index + 1}</th>
                <td>{seller.name}</td>
                <td>{seller.email}</td>

                <td>
                  <button
                    disabled={seller.verified}
                    className="btn btn-sm btn-warning"
                    onClick={() => verifySellerHandler(seller.email)}
                  >
                    {seller.verified ? "verified" : "unverified"}
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => deleteHandler(seller._id, seller.email)}
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

export default AllSellers;
