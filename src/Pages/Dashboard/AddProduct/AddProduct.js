import axios from "axios";
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "./../../../Contexts/AuthProvider";

const AddProduct = () => {
  const { user } = useContext(AuthContext);
  const { register, handleSubmit } = useForm();
  const imageHostKey = process.env.REACT_APP_imageHostKey;
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const addProductHandler = data => {
    const image = data.img[0];
    const formData = new FormData();

    formData.append("image", image);

    setLoading(true);

    const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;

    //save image to image hosting
    axios
      .post(url, formData)
      .then(imgData => {
        if (imgData.data.success) {
          const product = {
            name: data.name,
            category: data.category,
            resellPrice: data.resellPrice,
            originalPrice: data.originalPrice,
            condition: data.condition,
            details: data.details,
            location: data.location,
            phone: data.phone,
            purchaseYear: data.purchaseYear,
            yearUsed: data.yearUsed,
            image: imgData.data.data.url,
            sellerName: user.displayName,
            sellerEmail: user.email,
          };

          const config = {
            headers: {
              authorization: `bearer ${localStorage.getItem("accessToken")}`,
            },
          };

          axios
            .post("http://localhost:5000/products", product, config)
            .then(res => {
              console.log(res.data);
              setLoading(false);
              if (res.data.acknowledged) {
                navigate("/dashboard/myproducts");
              }
            });
        }
      })
      .catch(error => {
        console.error(error.response);
      });
    setLoading(false);
  };

  return (
    <div className="min-h-[70vh] w-full">
      <div className="py-7">
        <h1 className="text-center text-xl md:text-3xl mt-3">
          Add A Laptop to Sell
        </h1>

        <form
          onSubmit={handleSubmit(addProductHandler)}
          className="p-5 bg-slate-300 rounded-md my-4 w-10/12 mx-auto"
        >
          <div className="form-control">
            <label className="label">
              <span className="label-text">Product Name:</span>
            </label>
            <input
              {...register("name")}
              type="text"
              placeholder="Enter Product Name"
              className="input input-bordered w-full"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Category:</span>
            </label>
            <select
              {...register("category")}
              className="select text-base"
              required
            >
              <option value="Budget" defaultValue>
                Budget
              </option>
              <option value="Mid-range">Mid-range</option>
              <option value="Gaming">Gaming</option>
              <option value="Apple">Apple</option>
            </select>
          </div>
          <div className="flex flex-col md:flex-row">
            <div className="form-control flex-1">
              <label className="label">
                <span className="label-text">Resell Price:</span>
              </label>
              <input
                {...register("resellPrice")}
                type="number"
                placeholder="Enter Resell Price"
                className="input input-bordered w-full"
              />
            </div>
            <div className="form-control flex-1 md:ml-3 ml-0">
              <label className="label">
                <span className="label-text">Original Price:</span>
              </label>
              <input
                {...register("originalPrice")}
                type="number"
                placeholder="Original Price"
                className="input input-bordered w-full"
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row">
            <div className="form-control flex-1">
              <label className="label">
                <span className="label-text">Year of purchase:</span>
              </label>
              <input
                {...register("purchaseYear")}
                type="number"
                placeholder="Enter Year of purchase"
                className="input input-bordered w-full"
              />
            </div>
            <div className="form-control flex-1 md:ml-3 ml-0">
              <label className="label">
                <span className="label-text">Condition:</span>
              </label>
              <input
                {...register("condition")}
                type="text"
                placeholder="Laptop condition"
                className="input input-bordered w-full"
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row">
            <div className="form-control flex-1">
              <label className="label">
                <span className="label-text">Year used:</span>
              </label>
              <input
                {...register("yearUsed")}
                type="text"
                placeholder="Enter how long used"
                className="input input-bordered w-full"
              />
            </div>
            <div className="form-control flex-1 ml-0 md:ml-3">
              <label className="label">
                <span className="label-text">Upload a picture:</span>
              </label>
              <input
                {...register("img")}
                type="file"
                className="file-input file-input-secondary"
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row">
            <div className="form-control flex-1">
              <label className="label">
                <span className="label-text">Phone number</span>
              </label>
              <input
                {...register("phone")}
                type="number"
                placeholder="Enter your phone number"
                className="input input-bordered w-full"
              />
            </div>
            <div className="form-control flex-1 md:ml-3 ml-0">
              <label className="label">
                <span className="label-text">Enter your location:</span>
              </label>
              <input
                {...register("location")}
                type="text"
                placeholder="Enter your location"
                className="input input-bordered w-full"
              />
            </div>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Laptop details:</span>
            </label>
            <textarea
              {...register("details")}
              className="textarea min-h-[100px] max-h-[100px]"
              placeholder="Enter details about your laptop"
            ></textarea>
          </div>
          <button disabled={loading} className="btn btn-primary mt-3">
            {loading ? "loading..." : "add product"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
