import React from "react";
import { useParams } from "react-router-dom";
import { FaCopy } from "react-icons/fa"; // Import the copy icon from react-icons
import toast from "react-hot-toast";

const InviteContest = () => {
  const { contestId } = useParams(); // Take the contest ID from params

  // Dynamically construct the full URL
  const contestLink = `${window.location.origin}/contest/${contestId}`;

  const copyToClipboard = () => {
    navigator.clipboard
      .writeText(contestLink)
      .then(() => {
        toast.success("Link copied to clipboard!");
      })
      .catch((err) => {
        console.error("Failed to copy link: ", err);
        alert("Failed to copy link to clipboard.");
      });
  };

  return (
    <div className="flex w-full items-center justify-center bg-gradient-to-r from-blue-50 to-purple-50">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center w-[80%]">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Invite Contest
        </h1>
        <p className="text-gray-600 mb-6 text-lg">
          Share the contest link with your friends:
        </p>
        <div className="flex items-center justify-between bg-gray-100 px-4 py-2 rounded-lg mb-6">
          <p className="text-lg text-gray-700 truncate">{contestLink}</p>
          <button
            onClick={copyToClipboard}
            className="ml-4 p-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300 flex items-center justify-center"
          >
            <FaCopy className="h-6 w-6" /> {/* Use the FaCopy icon */}
          </button>
        </div>
        <p className="text-sm text-gray-500">
          Click the button to copy the link to your clipboard.
        </p>
      </div>
    </div>
  );
};

export default InviteContest;
