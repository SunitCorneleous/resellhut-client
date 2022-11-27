import React, { useEffect, useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { toast } from "react-hot-toast";
import axios from "axios";
import { config } from "../../utilities/authToken/authToken";
import { useNavigate } from "react-router-dom";

const CheckoutForm = ({ product, booking }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [cardError, setCardError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [processing, setProcessing] = useState(false);
  const navigate = useNavigate();

  const { resellPrice } = product;

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    fetch("https://resellx-server.vercel.app/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ price: resellPrice }),
    })
      .then(res => res.json())
      .then(data => setClientSecret(data.clientSecret));
  }, [resellPrice]);

  const handleSubmit = async event => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("[error]", error);
      setCardError(error.message);
    } else {
      setCardError("");
    }

    setProcessing(true);

    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: booking.buyer,
            email: booking.email,
          },
        },
      });

    if (confirmError) {
      setCardError(confirmError.message);
      setProcessing(false);
      return;
    }

    if (paymentIntent.status === "succeeded") {
      setProcessing(false);
      toast.success("payment successful");

      // save payment info in db
      const paymentInfo = {
        transactionId: paymentIntent.id,
        user: booking.buyer,
        email: booking.email,
        product: product.name,
        productId: product._id,
        bookingId: booking._id,
        sellerEmail: booking.sellerEmail,
      };

      axios
        .post("https://resellx-server.vercel.app/payment", paymentInfo, config)
        .then(res => {
          if (res.data.acknowledged) {
            console.log(res.data);
            navigate("/dashboard/myorders");
          }
        });
    }

    console.log("Payment Intent:", paymentIntent);
  };

  return (
    <div className="p-5 my-4 w-10/12 bg-white rounded">
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          type="submit"
          className="btn btn-primary mt-5"
          disabled={!stripe || !clientSecret || processing}
        >
          Pay
        </button>
      </form>
      <p className="text-error text-xl mt-4">{cardError}</p>
    </div>
  );
};

export default CheckoutForm;
