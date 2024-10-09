import React from 'react';

const Login = () => {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      {/* Left Section - Form */}
      <div className="w-full lg:w-1/2 flex justify-center items-center bg-white p-8">
        <div className="max-w-md w-full space-y-6">
          <h2 className="text-3xl font-bold">Account Login</h2>
          <p className="text-sm">
            New to SBPS?{' '}
            <a href="/register" className="text-blue-600 hover:underline">
              Create Your Account.
            </a>
          </p>
          <form>
            <div className="mt-4">
              <label className="block text-sm">Email Address</label>
              <input
                type="email"
                className="w-full mt-1 p-3 border border-gray-300 rounded-lg"
                placeholder="Email Address"
              />
            </div>
            <div className="mt-4">
              <label className="block text-sm">Password</label>
              <input
                type="password"
                className="w-full mt-1 p-3 border border-gray-300 rounded-lg"
                placeholder="Password"
              />
            </div>
            <button className="w-full bg-[#6366f1] text-white font-bold py-3 mt-6 rounded-lg">
              Sign In
            </button>
          </form>
          <div className="mt-4 flex justify-between items-center">
            <a href="/forgot-password" className="text-blue-600 hover:underline">
              Forgot your password?
            </a>
          </div>
          <div className="flex justify-center items-center">
            <p className="mt-4">Or sign in with:</p>
          </div>
          <div className="flex gap-4 justify-center mt-2">
            <button className="w-1/2 bg-gray-100 p-2 rounded-lg"><i class="bx bxl-google fs-xl me-2"></i>Google</button>
            <button className="w-1/2 bg-gray-100 p-2 rounded-lg"> <i class="bx bxl-facebook fs-xl me-2"></i>Facebook</button>
          </div>
        </div>
      </div>

      {/* Right Section - Image */}
      <div 
          className="md:w-1/2 hidden md:flex items-center justify-center"
          style={{
            backgroundImage: `url('https://superbowlpoolsite.com/img/logos/Superbowl%20Poolsite%20Logo%20(Light%20-%20single%20color)%20FA.png'), radial-gradient(#555, #000000)`,
            backgroundSize: '50%, 100% 100%',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center'
          }}
        >
          {/* You can add any overlay or content inside this div if needed */}
        </div>
    </div>
  );
};

export default Login;
