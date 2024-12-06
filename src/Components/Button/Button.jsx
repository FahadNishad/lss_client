import React from "react";
import { FaSpinner } from "react-icons/fa";

const ButtonUI = ({ onClick, loading, children, className }) => {
  return (
    <button
      onClick={onClick}
      disabled={loading}
      className={`w-full rounded-lg text-white font-semibold focus:outline-none transition-all duration-200 ${
        loading
          ? "bg-purple-400 cursor-wait"
          : "bg-[rgb(99,102,241)] hover:bg-[#6366f1] active:bg-[#4f46e5]"
      } ${className}`}
      style={{
        backgroundColor: loading ? "rgb(156, 163, 255)" : "rgb(99, 102, 241)",
      }} // Apply the background color dynamically
    >
      {loading ? (
        <span className="flex justify-center items-center">
          <FaSpinner className="w-5 h-5 mr-2 animate-spin" />
          Loading...
        </span>
      ) : (
        children
      )}
    </button>
  );
};

export default ButtonUI;
