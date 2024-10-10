import React, { useState } from 'react';

const ForgotPassword = () => {
  const [step, setStep] = useState(1); // Step state to track the current step
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleEmailSubmit = async (e) => {
    e.preventDefault();
    setError(''); // Reset error message
    setSuccessMessage(''); // Reset success message

    // API call to send OTP to the email
    const response = await fetch(`${process.env.REACT_APP_API_URL}/forgot_password/send-otp`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
    });

    if (response.ok) {
      setStep(2); // Move to the next step
    } else {
      const errorData = await response.json();
      setError(errorData.message);
    }
  };

  const handleOtpSubmit = async (e) => {
    e.preventDefault();
    setError(''); // Reset error message
    setSuccessMessage(''); // Reset success message

    // API call to verify OTP
    const response = await fetch(`${process.env.REACT_APP_API_URL}/forgot_password/verify-otp`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, otp }),
    });

    if (response.ok) {
      setStep(3); // Move to the next step
    } else {
      const errorData = await response.json();
      setError(errorData.message);
    }
  };

  const handlePasswordChange = async (e) => {
    e.preventDefault();
    setError(''); // Reset error message
    setSuccessMessage(''); // Reset success message

    if (newPassword !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    // API call to change the password
    const response = await fetch(`${process.env.REACT_APP_API_URL}/forgot_password/change-password`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, newPassword }),
    });

    if (response.ok) {
      setSuccessMessage('Password changed successfully!');
      setEmail('');
      setOtp('');
      setNewPassword('');
      setConfirmPassword('');
      setStep(1); // Reset to initial state
    } else {
      const errorData = await response.json();
      setError(errorData.message);
    }
  };

  return (
    <div className="flex flex-row min-h-screen">
      {/* Left Side - Form */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center bg-white p-4 lg:p-12">
        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-700 text-center">
          {step === 1 && 'Forgot Your Password?'}
          {step === 2 && 'Enter the OTP'}
          {step === 3 && 'Change Your Password'}
        </h2>
        <p className="text-sm sm:text-base text-gray-600 text-center mt-2">
          {step === 1
            ? 'Enter your email address below and we’ll send you a link to reset your password.'
            : step === 2
            ? 'Enter the OTP sent to your email.'
            : 'Enter your new password.'}
        </p>
        {error && <p className="text-red-600">{error}</p>} {/* Error message display */}
        {successMessage && <p className="text-green-600">{successMessage}</p>} {/* Success message display */}
        <form className="mt-6 w-full sm:w-[80%] md:w-[70%] lg:w-[60%]" onSubmit={step === 1 ? handleEmailSubmit : step === 2 ? handleOtpSubmit : handlePasswordChange}>
          {step === 1 && (
            <>
              <div className="mb-4">
                <label className="block text-sm font-semibold text-gray-600">Email Address</label>
                <input
                  type="email"
                  className="border border-gray-300 rounded-lg w-full p-3 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <button className="w-full bg-[#6366f1] text-white p-3 rounded-lg font-semibold hover:bg-purple-700">
                Request Reset
              </button>
            </>
          )}
          {step === 2 && (
            <>
              <div className="mb-4">
                <label className="block text-sm font-semibold text-gray-600">OTP</label>
                <input
                  type="text"
                  className="border border-gray-300 rounded-lg w-full p-3 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  required
                />
              </div>
              <button className="w-full bg-[#6366f1] text-white p-3 rounded-lg font-semibold hover:bg-purple-700">
                Verify OTP
              </button>
            </>
          )}
          {step === 3 && (
            <>
              <div className="mb-4">
                <label className="block text-sm font-semibold text-gray-600">New Password</label>
                <input
                  type="password"
                  className="border border-gray-300 rounded-lg w-full p-3 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-semibold text-gray-600">Confirm Password</label>
                <input
                  type="password"
                  className="border border-gray-300 rounded-lg w-full p-3 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
              </div>
              <button className="w-full bg-[#6366f1] text-white p-3 rounded-lg font-semibold hover:bg-purple-700">
                Change Password
              </button>
            </>
          )}
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
