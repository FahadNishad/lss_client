import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { FaLock, FaEye, FaEyeSlash, FaTrashAlt } from "react-icons/fa";
import ButtonUI from "../../Components/Button/Button";
import InputField from "../../Components/inputs/InputField";
import { useNavigate } from "react-router-dom";
import { signOutSuccess } from "../../redux/user/userSlice";

const PasswordManagement = () => {
  const { currentUser } = useSelector((state) => state.user);
  const [loading, setLoading] = useState(false);
  const [deleteLoading, setDeleteLoading] = useState(false);
  const [showPassword, setShowPassword] = useState({
    current: false,
    new: false,
    confirm: false,
  });
  const [formData, setFormData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
    reason: "",
  });
  const [errors, setErrors] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isDeleting, setIsDeleting] = useState(false);

  // Handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" })); // Clear the error for this field
  };

  // Toggle password visibility
  const togglePassword = (field) =>
    setShowPassword((prev) => ({ ...prev, [field]: !prev[field] }));

  // Validate fields
  const validateFields = (fields) => {
    const newErrors = {};
    if (fields.includes("currentPassword") && !formData.currentPassword) {
      newErrors.currentPassword = "Current password is required";
    }
    if (fields.includes("newPassword")) {
      if (!formData.newPassword) {
        newErrors.newPassword = "New password is required";
      } else if (formData.newPassword.length < 6) {
        newErrors.newPassword = "Password must be at least 6 characters";
      }
    }
    if (
      fields.includes("confirmPassword") &&
      formData.newPassword !== formData.confirmPassword
    ) {
      newErrors.confirmPassword = "Passwords do not match";
    }
    if (fields.includes("reason")) {
      if (!formData.reason) {
        newErrors.reason = "Reason is required";
      } else if (formData.reason.length < 10) {
        newErrors.reason = "Reason must be at least 10 characters";
      }
    }
    return newErrors;
  };

  // Handle change password submission
  const handleChangePassword = async (e) => {
    e.preventDefault();
    const fieldErrors = validateFields([
      "currentPassword",
      "newPassword",
      "confirmPassword",
    ]);
    if (Object.keys(fieldErrors).length > 0) {
      setErrors(fieldErrors);
      return;
    }

    const apiUrl =
      currentUser.role === "business"
        ? `${process.env.REACT_APP_API_URL}/api/business/updatePassword/${currentUser._id}`
        : `${process.env.REACT_APP_API_URL}/api/user/updatePassword/${currentUser._id}`;

    try {
      setLoading(true);
      await axios.post(
        apiUrl,
        {
          currentPassword: formData.currentPassword,
          newPassword: formData.newPassword,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      toast.success("Password changed successfully");
      setFormData({
        currentPassword: "",
        newPassword: "",
        confirmPassword: "",
        reason: "",
      });
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to change password");
    } finally {
      setLoading(false);
    }
  };

  // Handle delete account submission
  const handleDeleteAccount = async (e) => {
    e.preventDefault();

    const apiUrl =
      currentUser.role === "business"
        ? `${process.env.REACT_APP_API_URL}/api/business/deleteAccount/${currentUser._id}`
        : `${process.env.REACT_APP_API_URL}/api/player/deleteAccount/${currentUser._id}`;

    try {
      setDeleteLoading(true);
      await axios.delete(
        apiUrl,
        {},
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      toast.success("Account deleted successfully");
      setDeleteLoading(false);
      dispatch(signOutSuccess());
      navigate("/");
    } catch (error) {
      setDeleteLoading(false);
      toast.error(error.response?.data?.message || "Failed to delete account");
    } finally {
      setDeleteLoading(false);
    }
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-8">
      <h1 className="text-3xl font-bold mb-8 text-black">
        Password Management
      </h1>

      {/* Change Password Form */}
      <form
        onSubmit={handleChangePassword}
        className="grid grid-cols-1 sm:grid-cols-2 gap-8"
      >
        <InputField
          label="Current Password"
          icon={<FaLock />}
          type={showPassword.current ? "text" : "password"}
          name="currentPassword"
          value={formData.currentPassword}
          onChange={handleInputChange}
          error={errors.currentPassword}
          appendIcon={
            showPassword.current ? (
              <FaEyeSlash onClick={() => togglePassword("current")} />
            ) : (
              <FaEye onClick={() => togglePassword("current")} />
            )
          }
        />
        <InputField
          label="New Password"
          icon={<FaLock />}
          type={showPassword.new ? "text" : "password"}
          name="newPassword"
          value={formData.newPassword}
          onChange={handleInputChange}
          error={errors.newPassword}
          appendIcon={
            showPassword.new ? (
              <FaEyeSlash onClick={() => togglePassword("new")} />
            ) : (
              <FaEye onClick={() => togglePassword("new")} />
            )
          }
        />
        <InputField
          label="Confirm Password"
          icon={<FaLock />}
          type={showPassword.confirm ? "text" : "password"}
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleInputChange}
          error={errors.confirmPassword}
          appendIcon={
            showPassword.confirm ? (
              <FaEyeSlash onClick={() => togglePassword("confirm")} />
            ) : (
              <FaEye onClick={() => togglePassword("confirm")} />
            )
          }
        />
        <div className="col-span-2 flex justify-end">
          <ButtonUI loading={loading} className="w-[160px] py-3">
            Save Password
          </ButtonUI>
        </div>
      </form>

      {/* Delete Account Section */}
      <div className="mt-16">
        {!isDeleting ? (
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-bold text-red-500">Delete Account</h2>
            <button
              onClick={() => setIsDeleting(true)}
              className="flex items-center gap-2 py-2 px-3 bg-red-500 text-white rounded-xl hover:bg-red-600 transition"
            >
              <FaTrashAlt /> Delete Account
            </button>
          </div>
        ) : (
          <form className="flex flex-col gap-4 mt-8">
            <p className="text-lg text-red-500 font-semibold">
              Warning: This action can only be undone if you contact SBPS
              Support.
            </p>
            <p className="text-lg text-red-500">
              This will remove your SBPS access and permanently halt all emails
              heading your way.
            </p>

            <div className="flex justify-between">
              <button
                type="button"
                onClick={() => setIsDeleting(false)}
                className="px-6 py-3 text-lg font-semibold border rounded-lg text-gray-700 hover:bg-gray-200"
              >
                Cancel
              </button>
              <button
                onClick={handleDeleteAccount}
                loading={loading}
                disabled={deleteLoading}
                className="w-[170px] bg-red-500 hover:bg-red-600 rounded-lg text-white"
              >
                {deleteLoading ? "Deleting..." : "  Confirm Deletion"}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default PasswordManagement;
