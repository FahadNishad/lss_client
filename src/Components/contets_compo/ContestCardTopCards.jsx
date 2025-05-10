import React from "react";
import { darkerColor, lighterColor, mainColor } from "../styles";

const ContestGridCard = ({ squaresDetails }) => {
  return (
    <div className="p-6 space-y-6 w-full">
      {/* Welcome Section */}
      <div
        className="rounded-lg shadow-lg overflow-hidden"
        style={{ borderColor: darkerColor, borderWidth: 2 }}
      >
        <div
          className="p-6"
          style={{
            background: `linear-gradient(135deg, ${lighterColor}, ${mainColor})`,
            color: "#fff",
          }}
        >
          <h2 className="text-xl font-bold mb-2">Welcome to Our Contest!</h2>
          <p className="text-sm mb-4">
            <strong>Fahad Squares Contest</strong> is an online squares contest
            created for free at <em>Super Bowl Pool Site</em>.
          </p>
          <p className="text-sm mb-4">
            This contest was created by <strong>Fahad Ahmed</strong>. If you
            have any questions about this contest, please direct those questions
            via email to the commissioner at{" "}
            <strong>fahadnishad11@gmail.com</strong>.
          </p>
          <p className="text-sm italic">
            The commissioner has not defined the general rules yet.
          </p>
          <button className="mt-4 px-6 py-2 bg-white text-blue-600 font-bold rounded-lg shadow-md hover:bg-gray-100 transition duration-300">
            Full Contest Rules
          </button>
        </div>
      </div>

      {/* Contest Status Section */}
      <div
        className="rounded-lg shadow-lg overflow-hidden"
        style={{ borderColor: darkerColor, borderWidth: 2 }}
      >
        <div
          className="p-6"
          style={{
            backgroundColor: mainColor,
            color: "#fff",
          }}
        >
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-bold">Contest Status:</h3>
            <span
              className="px-3 py-1 text-sm font-semibold rounded-full"
              style={{ backgroundColor: lighterColor, color: "#fff" }}
            >
              Open
            </span>
          </div>
        </div>
        <div className="bg-gray-100 p-6 text-gray-700">
          <p className="text-sm mb-4">
            Please click on any <strong>Open</strong> boxes in the Contest Grid
            below to join this contest.
          </p>
          <p className="text-sm italic mb-4">
            The commissioner has not defined the cost to enter this contest.
          </p>
          <div className="flex justify-between items-center">
            <div className="text-sm font-bold text-green-600">
              Sold Boxes: <span>{squaresDetails?.squaresSold}</span>
            </div>
            <div className="text-sm font-bold text-red-600">
              Open Boxes: <span>{squaresDetails?.availableSquares}</span>
            </div>
          </div>
          <div className="mt-4 h-2 rounded-full bg-gray-200 overflow-hidden">
            <div
              className="h-full bg-green-500"
              style={{ width: `${squaresDetails?.squaresSold}%` }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContestGridCard;
