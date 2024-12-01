import React, { useState } from "react";
import { FaEye, FaEyeSlash, FaSpinner } from "react-icons/fa";
import img from "../../images/popupimg.jpg";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { signInStart, signInSuccess } from "../../redux/user/userSlice";

const CreateContestPopUp = ({ isOpen, setIsOpen, number }) => {
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const dispatch = useDispatch();
  const toggleSidebar = () => setIsOpen(!isOpen);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validateFields = () => {
    let validationErrors = {};
    if (!formData.firstName)
      validationErrors.firstName = "First name is required.";
    if (!formData.lastName)
      validationErrors.lastName = "Last name is required.";
    if (!formData.email) validationErrors.email = "Email is required.";
    if (!/\S+@\S+\.\S+/.test(formData.email))
      validationErrors.email = "Please enter a valid email address.";
    if (!formData.phone) validationErrors.phone = "Phone number is required.";
    if (!formData.password) validationErrors.password = "Password is required.";
    if (formData.password.length < 6)
      validationErrors.password = "Password must be at least 6 characters.";
    if (!formData.confirmPassword)
      validationErrors.confirmPassword = "Confirm password is required.";
    if (formData.password !== formData.confirmPassword)
      validationErrors.confirmPassword = "Passwords do not match.";
    return validationErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validateFields();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    try {
      setLoading(true);
      dispatch(signInStart());
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/api/business/createAccount`,
        formData,
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      console.log("this is the response", response?.data?.user);
      setLoading(false);
      toast.success("Account created successfully!");
      toggleSidebar();
      navigate("/login?role=business");
    } catch (err) {
      console.error("Error fetching contest data:", err);
      const errorMessage = err?.response?.data?.message;
      toast.error(errorMessage || "failed to register");
      setLoading(false);
    }

    setFormData({
      email: "",
      firstName: "",
      lastName: "",
      phone: "",
      password: "",
      confirmPassword: "",
    });
    setErrors({});
  };

  const handleNavigate = () => {
    toggleSidebar();
    navigate("/login?role=business");
  };

  return (
    <>
      {/* Sidebar */}
      <div
        style={{ scrollbarWidth: "none" }}
        className={`fixed top-0 right-0 h-full md:w-[25%] overflow-y-auto bg-white shadow-lg z-50 transition-transform duration-300 ease-in-out transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-4 bg-gray-100 border-b border-gray-200">
          <h2 className="text-lg font-bold">
            {number === "100"
              ? "100 Square Contest"
              : number === "25"
              ? "25 Square Contest"
              : number === "50"
              ? "50 Square Contest"
              : "League Square Squares"}
          </h2>
          <button className="text-gray-600 text-2xl" onClick={toggleSidebar}>
            &times;
          </button>
        </div>

        <div className="p-6">
          <h3 className="text-xl font-semibold mb-4">
            {number === null
              ? "Ready to Create Your FREE Online League Square Squares Contest for the 2025 League Square?"
              : "Ready to Begin?"}
          </h3>
          <img
            style={{
              display: number === "100" || number === null ? "" : "none",
            }}
            src={img}
            alt="Contest grid"
            className="w-full mb-4"
          />
          <p className="text-sm text-gray-600 mb-6">
            Register as a business and create contests to customize and profit!
          </p>

          <form className="space-y-4" onSubmit={handleSubmit}>
            {/* First Name */}
            <div>
              <label className="block text-gray-700 text-sm mb-2">
                First Name
              </label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className={`w-full p-2 border ${
                  errors.firstName ? "border-red-500" : "border-gray-300"
                } rounded-md`}
              />
              {errors.firstName && (
                <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>
              )}
            </div>

            {/* Last Name */}
            <div>
              <label className="block text-gray-700 text-sm mb-2">
                Last Name
              </label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className={`w-full p-2 border ${
                  errors.lastName ? "border-red-500" : "border-gray-300"
                } rounded-md`}
              />
              {errors.lastName && (
                <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>
              )}
            </div>

            {/* Email */}
            <div>
              <label className="block text-gray-700 text-sm mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full p-2 border ${
                  errors.email ? "border-red-500" : "border-gray-300"
                } rounded-md`}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>

            {/* Phone */}
            <div>
              <label className="block text-gray-700 text-sm mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className={`w-full p-2 border ${
                  errors.phone ? "border-red-500" : "border-gray-300"
                } rounded-md`}
              />
              {errors.phone && (
                <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
              )}
            </div>

            {/* Password */}
            <div>
              <label className="block text-gray-700 text-sm mb-2">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className={`w-full p-2 border ${
                    errors.password ? "border-red-500" : "border-gray-300"
                  } rounded-md`}
                />
                <button
                  type="button"
                  className="absolute right-2 top-2 text-gray-500"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">{errors.password}</p>
              )}
            </div>

            {/* Confirm Password */}
            <div>
              <label className="block text-gray-700 text-sm mb-2">
                Confirm Password
              </label>
              <div className="relative">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className={`w-full p-2 border ${
                    errors.confirmPassword
                      ? "border-red-500"
                      : "border-gray-300"
                  } rounded-md`}
                />
                <button
                  type="button"
                  className="absolute right-2 top-2 text-gray-500"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
              {errors.confirmPassword && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.confirmPassword}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <button
              disabled={loading}
              style={{ backgroundColor: "rgb(99, 102, 241)" }}
              type="submit"
              className={`w-full text-[16px] hover:bg-blue-700 text-white py-2 px-4 rounded-lg ${
                loading ? "cursor-not-allowed" : ""
              }`}
            >
              {loading ? (
                <div className="flex justify-center items-center gap-2">
                  <FaSpinner className="animate-spin " />
                  <p>Registering</p>
                </div>
              ) : (
                "Sign Up"
              )}
            </button>
            <p className="w-full text-[16px py-2 px-4 rounded-lg ">
              Already have an account?{" "}
              <span
                className="text-blue-500 cursor-pointer"
                onClick={handleNavigate}
              >
                Sign in
              </span>
            </p>
          </form>
        </div>
      </div>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={toggleSidebar}
        ></div>
      )}
    </>
  );
};

export default CreateContestPopUp;
