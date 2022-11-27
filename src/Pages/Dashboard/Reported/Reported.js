import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import { config } from "../../../utilities/authToken/authToken";
import Spinner from "../../Shared/Spinner/Spinner";
import { toast } from "react-hot-toast";

const Reported = () => {
  const { data, isLoading, refetch } = useQuery({
    queryKey: ["reportItem"],
    queryFn: () => {
      return fetch("http://localhost:5000/reportItem", config).then(res =>
        res.json()
      );
    },
  });

  if (isLoading) {
    return <Spinner></Spinner>;
  }

  const deleteHandler = (id, reportid) => {
    const confirmation = window.confirm(
      "Are your sure you want to delete this item?"
    );

    if (!confirmation) {
      return;
    }

    axios
      .delete(
        `http://localhost:5000/deleteItem?id=${id}&reportid=${reportid}`,
        config
      )
      .then(res => {
        if (res.data.deletedCount > 0) {
          refetch();
          toast.success("item deleted");
        }
      });
  };

  return (
    <div className="min-h-[70vh] w-full">
      <h1 className="text-center text-xl md:text-3xl mb-4 mt-5">
        All Reported Items:
      </h1>
      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          <thead>
            <tr className="text-center">
              <th></th>
              <th>Product Name</th>
              <th>Seller</th>
              <th>User</th>
              <th>Reason</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((item, index) => (
              <tr key={item._id} className="text-center">
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td>{item.sellerName}</td>
                <td>{item.userName}</td>
                <td>
                  <textarea
                    value={item?.reason}
                    className="textarea textarea-bordered max-h-[80px] min-h-[80px] font-semibold"
                    disabled
                  ></textarea>
                </td>
                <td>
                  <button
                    onClick={() => deleteHandler(item.itemId, item._id)}
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

export default Reported;
