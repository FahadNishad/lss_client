import React, { useState } from "react";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { updateProfile } from "../redux/user/userSlice";

const ActivateAccount = () => {
  const stripe = useStripe();
  const elements = useElements();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const { currentUser } = useSelector((state) => state.user);
  const userId = currentUser?._id;

  const handlePayment = async () => {
    if (!stripe || !elements) return;
    setLoading(true);
    try {
      const { data } = await axios.post(
        `${process.env.REACT_APP_API_URL}/api/stripe/create-payment-intent`,
        {
          userId,
        }
      );
      const clientSecret = data.clientSecret;
      const result = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      });

      if (result.error) {
        setMessage(result.error.message);
      } else if (result.paymentIntent.status === "succeeded") {
        const response = await axios.post(
          `${process.env.REACT_APP_API_URL}/api/stripe/payment-success`,
          { userId }
        );
        setMessage("Payment successful! Your account has been activated.");
        toast.success(response?.data?.message || "Payment successful!");
        dispatch(updateProfile(response?.data?.user));
        navigate("/dashboard/account-details");
      }
    } catch (error) {
      setMessage("Something went wrong. Please try again.");
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500">
      <div className="w-full max-w-md p-8 bg-white shadow-2xl rounded-lg">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Activate Your Account
        </h2>
        <p className="text-center text-gray-600 mb-6">
          Pay <span className="font-semibold">$9.99</span> to activate your
          account and participate in contests.
        </p>
        <div className="bg-gray-50 p-4 rounded-lg shadow-inner mb-4">
          <CardElement
            className="text-gray-800 text-sm"
            options={{
              style: {
                base: {
                  fontSize: "16px",
                  color: "#333",
                  "::placeholder": { color: "#888" },
                },
                invalid: { color: "#e3342f" },
              },
            }}
          />
        </div>
        <button
          className={`w-full py-3 mt-4 rounded-lg text-white font-semibold transition ${
            loading
              ? "bg-blue-300 cursor-not-allowed"
              : "bg-blue-600 hover:bg-blue-700"
          }`}
          onClick={handlePayment}
          disabled={!stripe || loading}
        >
          {loading ? "Processing..." : "Pay $9.99"}
        </button>
        {message && (
          <p
            className={`mt-4 text-center text-sm ${
              message.includes("successful") ? "text-green-600" : "text-red-600"
            }`}
          >
            {message}
          </p>
        )}
      </div>
    </div>
  );
};

export default ActivateAccount;
