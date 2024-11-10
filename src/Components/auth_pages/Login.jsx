import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const handleLogin = async (e) => {
    e.preventDefault(); // Prevent form submission
    setError(""); // Clear previous errors

    console.log("API URL:", process.env.REACT_APP_API_URL); // Debugging line

    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        // credentials: "include", // Include credentials for session management
        body: JSON.stringify({ email, password }), // Adjusted structure
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Login successful:", data.message);
        // Consider using a notification library instead of alert
        alert("Login successful");
        navigate("/"); // Redirect to homepage
        window.location.reload();
      } else {
        const errorData = await response.json();
        console.error("Login error:", errorData); // Log error details
        setError(errorData.message); // Display error message
      }
    } catch (error) {
      console.error("Error during login:", error);
      setError("An error occurred while logging in. Please try again."); // Handle network error
    }
  };

  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      {/* Left Section - Form */}
      <div className="w-full lg:w-1/2 flex justify-center items-center bg-white p-8">
        <div className="max-w-md w-full space-y-6">
          <h2 className="text-3xl font-bold">Account Login</h2>
          <p className="text-sm">
            New to SBPS?{" "}
            <a href="/register" className="text-blue-600 hover:underline">
              Create Your Account.
            </a>
          </p>
          {error && <p className="text-red-600">{error}</p>} {/* Error message display */}
          <form onSubmit={handleLogin}>
            <div className="mt-4">
              <label className="block text-sm">Email Address</label>
              <input
                type="email"
                className="w-full mt-1 p-3 border border-gray-300 rounded-lg"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)} // Handle input change
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
                onChange={(e) => setPassword(e.target.value)} // Handle input change
                required
              />
            </div>
            <button type="submit" className="w-full bg-[#6366f1] text-white font-bold py-3 mt-6 rounded-lg">
              Sign In
            </button>
          </form>
          <div className="mt-4 flex justify-between items-center">
            <a href="/forgot-password" className="text-blue-600 hover:underline">
              Forgot your password?
            </a>
          </div>
          {/* <div className="flex justify-center items-center">
            <p className="mt-4">Or sign in with:</p>
          </div>
          <div className="flex gap-4 justify-center mt-2">
            <button onClick={handleGoogleLogin} className="w-1/2 bg-gray-100 p-2 rounded-lg"><i className="bx bxl-google fs-xl me-2"></i>Google</button>
            <button className="w-1/2 bg-gray-100 p-2 rounded-lg" onClick={handleFacebookLogin}><i className="bx bxl-facebook fs-xl me-2"></i>Facebook</button>
          </div> */}
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
      >
        {/* You can add any overlay or content inside this div if needed */}
      </div>
    </div>
  );
};

export default Login;
