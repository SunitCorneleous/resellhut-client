import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";

const AllBuyers = () => {
  const { data, refetch } = useQuery({
    queryKey: ["buyers"],
    queryFn: () => {
      return fetch("http://localhost:5000/buyers", {
        headers: {
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
      }).then(res => res.json());
    },
  });

  const deleteHandler = (id, email) => {
    const confirmation = window.confirm(
      "Are you sure you want to delete this buyer?"
    );

    if (!confirmation) {
      return;
    }

    axios
      .delete(`http://localhost:5000/buyers?id=${id}&email=${email}`, {
        headers: {
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
      })
      .then(res => {
        console.log(res);
        refetch();
      });
  };

  return (
    <div className="min-h-[70vh] w-full">
      <h1 className="text-center text-xl md:text-3xl mb-4 mt-5">
        All Buyers: {data?.length}
      </h1>
      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          <thead>
            <tr className="text-center">
              <th></th>
              <th>Buyer Name</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((buyer, index) => (
              <tr key={buyer._id} className="text-center">
                <th>{index + 1}</th>
                <td>{buyer.name}</td>
                <td>{buyer.email}</td>
                <td>
                  <button
                    onClick={() => deleteHandler(buyer._id, buyer.email)}
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

export default AllBuyers;
