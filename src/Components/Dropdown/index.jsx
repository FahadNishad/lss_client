import React, { useState } from "react";
import {
  FaUserCircle,
  FaPlusCircle,
  FaTrophy,
  FaSignOutAlt,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const CustomDropdown = ({
  currentUser,
  handleLogout,
  mainColor,
  lighterColor,
}) => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <div className="relative">
      {/* Dropdown Button */}
      <button
        className={`flex items-center bg-[${mainColor}] text-white rounded-lg px-3 py-2 hover:opacity-90 duration-200 gap-3 text-md font-semibold`}
        onClick={toggleMenu}
      >
        <FaUserCircle size={18} /> {/* Profile Icon */}
        Hi, {currentUser?.firstName || "Menu"}
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div
          className="absolute bg-white shadow-lg rounded-lg mt-2 right-0 w-60 z-10"
          onMouseLeave={closeMenu} // Close dropdown if mouse leaves
        >
          {/* Show Create Contest only for business users */}
          {currentUser?.role === "business" && (
            <button
              className="flex items-center w-full p-3 text-left text-md hover:bg-gray-100 transition duration-200"
              onClick={() => {
                navigate("/create-contest");
                closeMenu();
              }}
            >
              <FaPlusCircle className="mr-3 text-primary-dark" size={18} />{" "}
              Create Contest
            </button>
          )}

          {/* Block My Contests for inactive players */}
          {currentUser?.role === "player" && !currentUser?.isActive ? (
            <button
              className="flex items-center w-full p-3 text-left text-md text-gray-500 cursor-not-allowed"
              disabled
            >
              <FaTrophy className="mr-3 text-primary-dark" size={18} /> My
              Contests (Inactive)
            </button>
          ) : (
            <button
              className="flex items-center w-full p-3 text-left text-md hover:bg-gray-100 transition duration-200"
              onClick={() => {
                console.log("Dashboard");
                closeMenu();
              }}
            >
              <FaTrophy className="mr-3 text-primary-dark" size={18} /> My
              Contests
            </button>
          )}

          {/* Profile link */}
          <button
            className="flex items-center w-full p-3 text-left text-md hover:bg-gray-100 transition duration-200"
            onClick={() => {
              navigate("/dashboard/account-details");
              closeMenu();
            }}
          >
            <FaUserCircle className="mr-3 text-primary-dark" size={18} />{" "}
            Profile
          </button>

          {/* Logout Button */}
          <button
            className="flex items-center w-full p-3 text-left text-lg hover:bg-gray-100 transition duration-200"
            onClick={() => {
              handleLogout();
              closeMenu();
            }}
          >
            <FaSignOutAlt className="mr-3 text-primary-dark" size={18} /> Logout
          </button>
        </div>
      )}
    </div>
  );
};

export default CustomDropdown;
