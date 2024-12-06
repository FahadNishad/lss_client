import React, { useState } from "react";
import {
  FaUser,
  FaEnvelope,
  FaUserTag,
  FaExclamationTriangle,
  FaCheckCircle,
} from "react-icons/fa";
import InputField from "../../Components/inputs/InputField";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import toast from "react-hot-toast";
import { signInSuccess } from "../../redux/user/userSlice";
import ButtonUI from "../../Components/Button/Button";
import { useNavigate } from "react-router-dom";

const AccountDetails = () => {
  const mainColor = "rgb(99,102,241)";
  const darkerColor = "rgb(61, 65, 185)";
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const { currentUser } = useSelector((state) => state.user);

  // State for the form values
  const [formData, setFormData] = useState({
    firstName: currentUser?.firstName || "",
    lastName: currentUser?.lastName || "",
    userName: currentUser?.userName || "",
  });

  console.log("this is data", formData);

  // Validation errors
  const [errors, setErrors] = useState({});

  // Validation logic
  const validateField = (name, value) => {
    let error = "";
    if (!value.trim()) {
      if (name === "firstName") error = "First Name is required";
      if (name === "lastName") error = "Last Name is required";
      if (name === "userName") error = "Username is required";
    } else if (name === "userName" && value.length < 4) {
      error = "Username must be at least 4 characters";
    }
    return error;
  };

  const validateForm = () => {
    const newErrors = {};
    Object.keys(formData).forEach((key) => {
      const error = validateField(key, formData[key]);
      if (error) newErrors[key] = error;
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // onChange function to update form data and validate dynamically
  const handleInputChange = (e) => {
    const { name, value } = e.target;

    // Update form data
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    // Validate the field
    const fieldError = validateField(name, value);
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: fieldError,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form
    if (!validateForm()) {
      toast.error("Please fix the errors before submitting.");
      return;
    }

    try {
      setLoading(true);
      const response = await axios.put(
        `${process.env.REACT_APP_API_URL}/api/business/updateAccount/${currentUser._id}`,
        formData
      );
      toast.success("Account details updated successfully");
      dispatch(signInSuccess(response?.data?.user));
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error(error);
      const errorMessage = error.response?.data?.message || "Failed to update";
      toast.error(errorMessage);
    }
  };

  const handleActivateAccount = () => {
    navigate("/activate-account");
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-8 relative">
      {/* Account Status */}
      {currentUser?.role === "player" && (
        <div className="flex w-full items-center gap-3 justify-end">
          <div className="flex items-center">
            {currentUser?.isActive ? (
              <>
                <FaCheckCircle className="text-green-500 mr-2" size={24} />
                <span className="text-green-500 font-semibold">
                  Your account is active
                </span>
              </>
            ) : (
              <>
                <FaExclamationTriangle
                  className="text-rose-500 mr-2"
                  size={24}
                />
                <span className="text-rose-500 font-semibold">
                  Your account is inactive
                </span>
              </>
            )}
          </div>
          {!currentUser?.isActive && (
            <button
              onClick={handleActivateAccount}
              className="flex items-center gap-2 py-2 rounded-xl px-3 bg-green-500 text-white hover:bg-green-600 transition"
            >
              <FaExclamationTriangle size={18} /> Activate Now
            </button>
          )}
        </div>
      )}

      <h1 className="text-3xl font-bold mb-8 text-black">Account Details</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-8">
        <InputField
          label="First Name"
          icon={<FaUser />}
          type="text"
          value={formData.firstName}
          onChange={handleInputChange}
          name={"firstName"}
          error={errors.firstName}
          onInputChange={() =>
            setErrors((prev) => ({ ...prev, firstName: "" }))
          }
        />
        <InputField
          label="Last Name"
          icon={<FaUser />}
          type="text"
          value={formData.lastName}
          onChange={handleInputChange}
          name={"firstName"}
          error={errors.lastName}
          onInputChange={() => setErrors((prev) => ({ ...prev, lastName: "" }))}
        />
        <InputField
          label="Username"
          icon={<FaUserTag />}
          type="text"
          value={formData.userName}
          onChange={handleInputChange}
          name={"userName"}
          error={errors.userName}
          onInputChange={() => setErrors((prev) => ({ ...prev, userName: "" }))}
        />
        <InputField
          label="Email Address"
          icon={<FaEnvelope />}
          type="email"
          value={currentUser?.email}
          name="email"
          disabled
        />
      </div>

      <div className="mt-8 flex gap-4">
        <button className="px-6 py-3 rounded-lg text-lg font-semibold border border-gray-300 text-gray-700 hover:bg-gray-200 transition">
          Cancel
        </button>
        <ButtonUI
          onClick={handleSubmit}
          loading={loading}
          className="w-[180px]"
        >
          Save Data
        </ButtonUI>
      </div>
    </div>
  );
};

export default AccountDetails;
