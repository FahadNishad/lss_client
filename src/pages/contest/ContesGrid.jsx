import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { CircularProgress } from "@mui/material"; // Import CircularProgress from MUI
import ContestGridCard from "../../Components/contets_compo/ContestCardTopCards";
import ReserveSquareDrawer from "../../Components/setting/Drawers/ReserveSquareDrawer";
import { useSelector } from "react-redux";
import toast from "react-hot-toast";
import { FaCheck, FaCheckCircle } from "react-icons/fa";
import { IoTimeOutline } from "react-icons/io5";

const ContestGrid = () => {
  const [contestData, setContestData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedSquare, setSelectedSquare] = useState("");
  const [error, setError] = useState(null);
  const [isReserveDrawerOpen, setIsReserveDrawerOpen] = useState(false);
  const { contestId } = useParams();
  const { currentUser } = useSelector((state) => state.user);

  useEffect(() => {
    const fetchContestData = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_URL}/api/contest/getContest/${contestId}`
        );
        setContestData(response.data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching contest data:", err);
        setError(err?.response?.data?.message);
        setLoading(false);
      }
    };

    fetchContestData();
  }, [contestId]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <CircularProgress size={60} color="primary" />{" "}
        {/* MUI CircularProgress */}
      </div>
    );
  }

  if (error) {
    return <div className="text-center text-red-500">{error}</div>;
  }

  if (!contestData || !contestData.square) {
    return <div className="text-center text-gray-500">No data available.</div>;
  }

  const {
    contestName,
    topTeamName,
    leftTeamName,
    square,
    randomColNumbers,
    randomRowNumbers,
  } = contestData;

  // Use square[0].length to get the number of columns or rows (since square is a 2D array)
  const gridSize = square.length; // This is the number of rows in the square grid
  const topRowNumbers =
    randomColNumbers.length > 0 ? randomColNumbers : Array(gridSize).fill("?");
  const leftColumnNumbers =
    randomRowNumbers.length > 0 ? randomRowNumbers : Array(gridSize).fill("?");

  const handelSquareClick = (cell) => {
    if (currentUser.role === "business") {
      // If the user is a business user, they can only view the square
      return toast.error("You cant reserve square please login as a player");
    }
    if (!cell.reserved) {
      handleSquareOpen(cell);
    } else if (cell.userId === currentUser._id) {
      handleSquareOpen(cell);
    } else {
      toast.error("This square is reserved by another user.");
    }
  };
  const handleSquareOpen = (square) => {
    setIsReserveDrawerOpen(true);
    setSelectedSquare(square);
  };

  return (
    <div className="p-6 w-[90%] flex justify-center items-center flex-col">
      <ContestGridCard />
      {/* Contest Info */}
      <div className="text-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">{contestName}</h1>
        <p className="text-gray-600">
          {topTeamName} vs {leftTeamName}
        </p>
      </div>

      <div className="w-full flex justify-center items-center gap-2">
        {topTeamName.split("").map((char, index) => (
          <p
            key={index}
            className="uppercase text-4xl font-extrabold [text-shadow:_0_2px_4px_rgb(99_102_241_/_0.8)]"
          >
            {char}
          </p>
        ))}
      </div>

      <div className="w-full flex justify-center items-center gap-3">
        {/* left team name  */}
        <div className="flex flex-col gap-2 justify-center items-center">
          {leftTeamName.split("").map((char, index) => (
            <p
              key={index}
              className="uppercase text-4xl font-extrabold [text-shadow:_0_2px_4px_rgb(99_102_241_/_0.8)]"
            >
              {char}
            </p>
          ))}
        </div>

        {/* Grid Layout */}
        <div className="overflow-x-auto">
          <div className="inline-block min-w-full">
            <div className="flex">
              {/* Empty Corner Cell */}
              <div className="w-24 h-12 m-1"></div>
              {/* Top Team Numbers */}
              <div className="flex flex-1 ">
                {topRowNumbers.map((number, index) => (
                  <div
                    key={`top-${index}`}
                    className="w-24 m-1 rounded-lg h-12 text-center font-semibold text-sm text-white bg-purple-900 flex items-center justify-center"
                  >
                    {number}
                  </div>
                ))}
              </div>
            </div>

            {/* Rows */}
            {square.map((row, rowIndex) => (
              <div key={`row-${rowIndex}`} className="flex">
                {/* Left Team Numbers */}
                <div className="w-24 h-24 m-1 rounded-lg text-center font-semibold text-sm bg-gray-800 text-white border flex items-center justify-center">
                  {leftColumnNumbers[rowIndex]}
                </div>
                {/* Row Cards */}
                <div className="flex flex-1">
                  {row.map((cell, colIndex) => {
                    const globalIndex =
                      rowIndex * square[0].length + colIndex + 1; // Calculate global index
                    return (
                      <div
                        key={cell._id}
                        onClick={() => handelSquareClick(cell)}
                        className={`w-24 m-1 h-24 flex items-center justify-center font-semibold text-sm rounded-lg cursor-pointer transition-all duration-100 ease-in-out ${
                          cell.reserved
                            ? cell.paymentStatus === "pending"
                              ? "bg-yellow-200 border text-yellow-800 "
                              : "bg-green-400 border-green-300  "
                            : "bg-gray-100 text-green-600 border-gray-300 border hover:bg-green-200"
                        }`}
                      >
                        {cell.reserved ? (
                          <div className="text-center">
                            <div className="font-bold">
                              {cell.userName || "Reserved"}
                            </div>
                            {cell.paymentStatus === "pending" && (
                              <div className="text-xs text-yellow-700 flex justify-center items-center gap-1">
                                <span>$</span>
                                <IoTimeOutline className="" />
                                <span>pending</span>
                              </div>
                            )}
                            {cell.paymentStatus === "completed" && (
                              <div className="text-xs text-gray-800 flex justify-center items-center gap-1">
                                <span>$</span>
                                <FaCheckCircle className="" />
                                <span>paid</span>
                              </div>
                            )}
                          </div>
                        ) : (
                          <div className="flex flex-col justify-center items-center">
                            <div className="text-gray-600">Open</div>
                            <div className="text-gray-600">{globalIndex}</div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <ReserveSquareDrawer
        squareData={selectedSquare}
        isOpen={isReserveDrawerOpen}
        entryCost={contestData?.entryCost}
        toggleDrawer={setIsReserveDrawerOpen}
      />
    </div>
  );
};

export default ContestGrid;
