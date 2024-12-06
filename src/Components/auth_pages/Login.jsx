import React, { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { signInFailure, signInSuccess } from "../../redux/user/userSlice";
import { FaSpinner } from "react-icons/fa";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [searchParams] = useSearchParams();
  const role = searchParams.get("role") || "player";
  const dispatch = useDispatch();

  const navigate = useNavigate();

  let url;
  if (role === "player") {
    url = "api/user/login";
  } else {
    url = "api/business/login";
  }

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      setLoading(true);
      dispatch(signInSuccess());
      const loginUrl = `${process.env.REACT_APP_API_URL}/${url}`;
      const response = await axios.post(
        loginUrl,
        { email, password },
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );

      const { data } = response;
      localStorage.setItem("user", JSON.stringify(data.user));
      toast.success(data?.message || "Login successful");
      dispatch(signInSuccess(data?.user));
      setLoading(false);
      navigate("/");
    } catch (err) {
      const errorMessage = err.response?.data?.message || "Login failed";
      setError(errorMessage);
      setLoading(false);
      dispatch(signInFailure());
      toast.error(errorMessage);
    }
  };

  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      {/* Left Section - Form */}
      <div className="w-full lg:w-1/2 flex justify-center items-center bg-white p-8">
        <div className="max-w-md w-full space-y-6">
          <h2 className="text-3xl font-bold">Account Login as {role}</h2>
          <p className="text-sm">
            New to SBPS?{" "}
            <a href="/register" className="text-blue-600 hover:underline">
              Create Player Account.
            </a>
          </p>
          {error && <p className="text-red-600">{error}</p>}{" "}
          {/* Error message */}
          <form onSubmit={handleLogin}>
            <div className="mt-4">
              <label className="block text-sm">Email Address</label>
              <input
                type="email"
                className="w-full mt-1 p-3 border border-gray-300 rounded-lg"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mt-4">
              <label className="block text-sm">Password</label>
              <input
                type="password"
                className="w-full mt-1 p-3 border border-gray-300 rounded-lg"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className={`w-full bg-[#6366f1] text-white font-bold py-3 mt-6 rounded-lg ${
                loading
                  ? "cursor-not-allowed disabled:bg-slate-400 disabled:text-slate-500"
                  : ""
              }`}
            >
              {loading ? (
                <div className="flex justify-center items-center gap-2">
                  <FaSpinner className="animate-spin" />
                  <span>Loading...</span>
                </div>
              ) : (
                <span>Login</span>
              )}
            </button>
          </form>
          <div className="mt-4 flex justify-between items-center">
            <a
              href="/forgot-password"
              className="text-blue-600 hover:underline"
            >
              Forgot your password?
            </a>
          </div>
        </div>
      </div>

      {/* Right Section - Image */}
      <div
        className="md:w-1/2 hidden md:flex items-center justify-center"
        style={{
          backgroundImage: `url('https://superbowlpoolsite.com/img/logos/Superbowl%20Poolsite%20Logo%20(Light%20-%20single%20color)%20FA.png'), radial-gradient(#555, #000000)`,
          backgroundSize: "50%, 100% 100%",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      ></div>
    </div>
  );
};

export default Login;
