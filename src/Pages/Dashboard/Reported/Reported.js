import { useQuery } from "@tanstack/react-query";
import React from "react";
import { config } from "../../../utilities/authToken/authToken";
import Spinner from "../../Shared/Spinner/Spinner";

const Reported = () => {
  const { data, isLoading } = useQuery({
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

  console.log(data);

  const tableStyle = {
    maxWidth: "15px",
    overflowWrap: "break-word",
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
                  <button className="btn btn-sm btn-error">delete</button>
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
