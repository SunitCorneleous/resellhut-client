import React from "react";

const AddProduct = () => {
  return (
    <div className="min-h-[70vh] w-full">
      <div className="py-7">
        <h1 className="text-center text-xl md:text-3xl mt-3">
          Add A Laptop to Sell
        </h1>

        <form className="p-5 bg-slate-300 rounded-md my-4 w-10/12 mx-auto">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Product Name:</span>
            </label>
            <input
              type="text"
              placeholder="Enter Product Name"
              className="input input-bordered w-full"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Category:</span>
            </label>
            <select className="select text-base">
              <option value="user" defaultValue>
                Budget
              </option>
              <option value="seller">Mid-range</option>
              <option value="seller">Gaming</option>
            </select>
          </div>
          <div className="flex flex-col md:flex-row">
            <div className="form-control flex-1">
              <label className="label">
                <span className="label-text">Resell Price:</span>
              </label>
              <input
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
                type="text"
                placeholder="Enter how long used"
                className="input input-bordered w-full"
              />
            </div>
            <div className="form-control flex-1 ml-0 md:ml-3">
              <label className="label">
                <span className="label-text">Upload a picture:</span>
              </label>
              <input type="file" className="file-input file-input-secondary" />
            </div>
          </div>
          <div className="flex flex-col md:flex-row">
            <div className="form-control flex-1">
              <label className="label">
                <span className="label-text">Phone number</span>
              </label>
              <input
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
              className="textarea min-h-[100px] max-h-[100px]"
              placeholder="Enter details about your laptop"
            ></textarea>
          </div>
          <button className="btn btn-primary mt-3">add laptop</button>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
