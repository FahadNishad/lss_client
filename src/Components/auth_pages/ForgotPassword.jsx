import React from 'react';

const ForgotPassword = () => {
  return (
    <div className="flex  flex-row min-h-screen">
      {/* Left Side - Form */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center bg-white p-4 lg:p-12">
        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-700 text-center">Forgot Your Password?</h2>
        <p className="text-sm sm:text-base text-gray-600 text-center mt-2">
          Enter your email address below and we’ll send you a link to reset your password.
        </p>
        <form className="mt-6 w-full sm:w-[80%] md:w-[70%] lg:w-[60%]">
          <div className="mb-4">
            <label className="block text-sm font-semibold text-gray-600">Email Address</label>
            <input
              type="email"
              className="border border-gray-300 rounded-lg w-full p-3 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
          </div>
          <button className="w-full bg-[#6366f1] text-white p-3 rounded-lg font-semibold hover:bg-purple-700">
            Request Reset
          </button>
        </form>
        <div className="mt-6 text-sm text-center">
          <a href="#" className="text-purple-600 hover:underline">
            Having trouble? Contact us.
          </a>
        </div>
      </div>

      {/* Right Side - Background */}
      <div
        className="hidden md:flex w-full md:w-1/2 items-center justify-center bg-cover"
        style={{
          backgroundImage: `url('https://superbowlpoolsite.com/img/logos/Superbowl%20Poolsite%20Logo%20(Light%20-%20single%20color)%20FA.png'), radial-gradient(#555, #000000)`,
          backgroundSize: '50%, cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      ></div>
    </div>
  );
};

export default ForgotPassword;
