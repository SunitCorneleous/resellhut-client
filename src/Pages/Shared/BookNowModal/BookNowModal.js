import axios from "axios";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "./../../../Contexts/AuthProvider";
import { toast } from "react-hot-toast";

const BookNowModal = ({ productToBook }) => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleBooking = event => {
    event.preventDefault();
    const form = event.target;

    const bookingObj = {
      buyer: form.buyer.value,
      email: form.email.value,
      item: form.item.value,
      price: form.price.value,
      phone: form.phone.value,
      location: form.location.value,
      sellerEmail: productToBook.sellerEmail,
      productId: productToBook._id,
      image: productToBook.image,
      status: "unpaid",
    };

    axios
      .post("http://localhost:5000/bookings", bookingObj, {
        headers: {
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
      })
      .then(res => {
        if (res.data.acknowledged) {
          console.log(res);
          toast.success("product bookded");
          form.reset();
          navigate("/dashboard/myorders");
        } else {
          console.log(res);
          toast(res.data.product);
        }
      });
  };

  return (
    <div>
      <input type="checkbox" id="book-now-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="book-now-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="font-bold text-lg">Book Now</h3>
          <p className="py-4">
            After confirming booking the product will display in my orders
          </p>
          {/* booking form */}
          <form onSubmit={handleBooking}>
            <input
              type="text"
              name="buyer"
              defaultValue={user?.displayName}
              className="input input-bordered w-full"
              disabled
            />
            <input
              type="text"
              name="email"
              defaultValue={user?.email}
              className="input input-bordered w-full mt-3"
              disabled
            />
            <input
              type="text"
              name="item"
              defaultValue={productToBook.name}
              className="input input-bordered w-full mt-3"
              disabled
            />
            <input
              type="text"
              name="price"
              defaultValue={productToBook.resellPrice}
              className="input input-bordered w-full mt-3"
              disabled
            />
            <input
              type="number"
              name="phone"
              placeholder="Enter your phone number"
              className="input input-bordered w-full mt-3"
              required
            />
            <input
              type="text"
              name="location"
              placeholder="Enter your meeting location"
              className="input input-bordered w-full mt-3"
              required
            />
            <button type="submit" className="btn btn-success text-white mt-3">
              Confirm
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookNowModal;
