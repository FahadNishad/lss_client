import React, { useState } from 'react';

const Register = () => {
  // Define state for form data
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    userName: '',
    password: '',
    confirmPassword: '',
  });

  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  // Handle input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
  
    // Basic validation
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    const { firstName, lastName, email, userName, password } = formData;
    try {

        const response = await fetch(`${process.env.REACT_APP_API_URL}/register/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          userName,
          password,
          authtype: 1, // Example, can be dynamic if you implement OAuth later
        }),
      });

      const data = await response.json();

      if (response.status === 201) {
        setSuccess(data.message); // Registration successful
      } else {
        setError(data.message || 'Something went wrong');
      }
    } catch (error) {
      setError('An error occurred while registering');
    }
  };
  const handleGoogleLogin = () => {
    window.open('http://localhost:5000/google_auth/google/', '_self'); // Redirects to the backend for Google login
  };
  const handleFacebookLogin = () => {
    // Redirect the user to the backend route that handles Facebook login
    window.location.href = 'http://localhost:5000/facebook_auth/facebook'; // Your backend route for Facebook auth
  };
  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      {/* Left Section - Form */}
      <div className="w-full lg:w-1/2 mt-16 flex justify-center items-center bg-white p-8">
        <div className="max-w-md w-full space-y-6">
          <h2 className="text-3xl font-bold">Create Your Free Account</h2>
          <p className="text-sm">
            Already have one?{' '}
            <a href="/login" className="text-blue-600 hover:underline">
              Click here to sign in.
            </a>
          </p>
          {error && <p className="text-red-600">{error}</p>}
          {success && <p className="text-green-600">{success}</p>}
          <form onSubmit={handleSubmit}>
            <div className="flex gap-4">
              <div className="w-1/2">
                <label className="block text-sm">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full mt-1 p-3 border border-gray-300 rounded-lg"
                  placeholder="First Name"
                  required
                />
              </div>
              <div className="w-1/2">
                <label className="block text-sm">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full mt-1 p-3 border border-gray-300 rounded-lg"
                  placeholder="Last Name"
                  required
                />
              </div>
            </div>
            <div className="mt-4">
              <label className="block text-sm">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full mt-1 p-3 border border-gray-300 rounded-lg"
                placeholder="Email"
                required
              />
            </div>
            <div className="mt-4">
              <label className="block text-sm">Username</label>
              <input
                type="text"
                name="userName"
                value={formData.userName}
                onChange={handleChange}
                className="w-full mt-1 p-3 border border-gray-300 rounded-lg"
                placeholder="Username"
                required
              />
            </div>
            <div className="mt-4">
              <label className="block text-sm">Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full mt-1 p-3 border border-gray-300 rounded-lg"
                placeholder="Password"
                required
              />
            </div>
            <div className="mt-4">
              <label className="block text-sm">Confirm Password</label>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="w-full mt-1 p-3 border border-gray-300 rounded-lg"
                placeholder="Confirm Password"
                required
              />
            </div>
            <div className="mt-4">
              <label className="inline-flex items-center">
                <input type="checkbox" className="form-checkbox" required />
                <span className="ml-2 text-sm">
                  I agree to{' '}
                  <a href="/terms" className="text-blue-600 hover:underline">
                    Terms & Conditions
                  </a>
                </span>
              </label>
            </div>
            <button className="w-full bg-[#6366f1] text-white font-bold py-3 mt-6 rounded-lg" type="submit">
              Create Account
            </button>
          </form>
          <div className="flex justify-center items-center">
            <p className="mt-4">Or sign in with:</p>
          </div>
          <div className="flex gap-4 justify-center mt-2">
            <button className="w-1/2 bg-gray-100 p-2 rounded-lg" onClick={handleGoogleLogin}>
              <i className="bx bxl-google fs-xl me-2"></i>Google
            </button>
            <button className="w-1/2 bg-gray-100 p-2 rounded-lg" onClick={handleFacebookLogin}>
              <i className="bx bxl-facebook fs-xl me-2"></i>Facebook
            </button>
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

export default Register;
