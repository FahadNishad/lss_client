import React, { useEffect } from "react";
import { NavLink, Outlet } from "react-router-dom";
import {
  FaUserAlt,
  FaLock,
  FaTrophy,
  FaPlusCircle,
  FaSignOutAlt,
} from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { setIsDropDownOpen } from "../../redux/misc/miscSlice";

const DashboardLayout = () => {
  // Theme colors
  const mainColor = "rgb(99,102,241)";
  const lighterColor = "rgb(126, 130, 251)";
  const darkerColor = "rgb(61, 65, 185)";
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.user);

  // Navigation links for different roles
  const navLinks = [
    { path: "account-details", label: "Account Details", icon: <FaUserAlt /> },
    { path: "password-management", label: "Password", icon: <FaLock /> },
    ...(currentUser?.role === "player" && currentUser?.isActive
      ? [{ path: "my-contests", label: "My Contests", icon: <FaTrophy /> }]
      : []),
    ...(currentUser?.role === "business"
      ? [
          {
            path: "create-contest",
            label: "Create a Contest",
            icon: <FaPlusCircle />,
          },
        ]
      : []),
  ];

  useEffect(() => {
    dispatch(setIsDropDownOpen(false));
  }, [dispatch]);

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-gray-100 text-gray-800 mt-20">
      {/* Sidebar */}
      <div className="w-full lg:w-80 bg-white shadow-md flex flex-col p-5">
        {/* Profile Section */}
        <div className="text-center mb-8">
          <div className="w-24 h-24 lg:w-32 lg:h-32 rounded-full bg-gray-200 mx-auto overflow-hidden">
            <img
              src="https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
          <h2 className="mt-4 text-lg font-semibold text-gray-700">
            {currentUser?.firstName} {currentUser?.lastName}
          </h2>
          <p className="text-sm text-gray-500">{currentUser?.email}</p>
        </div>

        {/* Account Status */}
        {currentUser?.role === "player" && (
          <div
            className={`text-center p-2 rounded-lg ${
              currentUser?.isActive ? "" : "bg-gray-200"
            }`}
          >
            <p
              className={`text-sm font-semibold ${
                currentUser?.isActive ? "text-green-600" : "text-red-600"
              }`}
            >
              {currentUser?.isActive ? "Activated" : "Account Inactive"}
            </p>
            {!currentUser?.isActive && (
              <p className="text-xs text-red-500">
                Your account is inactive. Please activate it to participate in
                contests.
              </p>
            )}
          </div>
        )}

        {/* Navigation Links */}
        <nav className="flex flex-col gap-3 mt-3">
          {navLinks.length > 0 ? (
            navLinks.map(({ path, label, icon }) => (
              <NavLink
                key={path}
                to={path}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-4 py-2 rounded-lg transition-all ${
                    isActive
                      ? `bg-[${mainColor}] text-white`
                      : `text-gray-700 hover:bg-[${lighterColor}] hover:${mainColor}`
                  }`
                }
              >
                {icon} {label}
              </NavLink>
            ))
          ) : (
            <p className="text-center text-sm text-gray-500">
              No links available
            </p>
          )}

          {/* Sign Out Button */}
          <button className="mt-auto flex items-center gap-3 px-4 py-2 text-red-500 hover:bg-red-100 rounded-lg">
            <FaSignOutAlt /> Sign Out
          </button>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
