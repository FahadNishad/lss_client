import axios from "axios";
import React, { useEffect, useState } from "react";
import { darkerColor, lighterColor, mainColor } from "../../Components/styles";
import { useParams } from "react-router-dom";
import Loader from "../../Components/Loader";

const Players = () => {
  const [contestDetails, setContestDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const { contestId } = useParams();
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchContestData = async () => {
      try {
        setLoading(true);
        const response = await axios.post(
          `${process.env.REACT_APP_API_URL}/api/contest/getReservedSquare`,
          {
            contestId,
          }
        );
        setContestDetails(response.data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching contest data:", err);
        setError(err?.response?.data?.message);
        setLoading(false);
      }
    };

    fetchContestData();
  }, [contestId]);
  if (loading) return <Loader />;
  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Section: Important Dates, NFL Schedule, NFL Standings */}
        <div className="space-y-6">
          {/* Important Dates */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-lg font-bold" style={{ color: darkerColor }}>
              Important Dates
            </h3>
            <ul className="mt-4 space-y-3">
              <li className="flex flex-col">
                <span className="font-semibold text-gray-800">
                  Super Bowl 2023
                </span>
                <span className="text-gray-600">Sunday Feb 11, 2024</span>
              </li>
              <li className="flex flex-col">
                <span className="font-semibold text-gray-800">
                  Conference Champ.
                </span>
                <span className="text-gray-600">Sunday Jan 28, 2024</span>
              </li>
              <li className="flex flex-col">
                <span className="font-semibold text-gray-800">
                  Thanksgiving NFL
                </span>
                <span className="text-gray-600">Thursday Nov 23, 2023</span>
              </li>
              <li className="flex flex-col">
                <span className="font-semibold text-gray-800">
                  Christmas NFL
                </span>
                <span className="text-gray-600">Monday Dec 25, 2023</span>
              </li>
            </ul>
          </div>

          {/* NFL Schedule */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-lg font-bold" style={{ color: darkerColor }}>
              NFL Schedule
            </h3>
            <ul className="mt-4 space-y-4">
              <li>
                <div className="flex justify-between text-gray-800">
                  <span>BUF</span>
                  <span>31</span>
                </div>
                <div className="flex justify-between text-gray-800">
                  <span>LAR</span>
                  <span>10</span>
                </div>
                <hr className="my-2 border-gray-300" />
              </li>
              <li>
                <div className="flex justify-between text-gray-800">
                  <span>JAX</span>
                  <span>22</span>
                </div>
                <div className="flex justify-between text-gray-800">
                  <span>WSH</span>
                  <span>28</span>
                </div>
                <hr className="my-2 border-gray-300" />
              </li>
              <li>
                <div className="flex justify-between text-gray-800">
                  <span>NO</span>
                  <span>27</span>
                </div>
                <div className="flex justify-between text-gray-800">
                  <span>ATL</span>
                  <span>26</span>
                </div>
              </li>
            </ul>
          </div>

          {/* NFL Standings */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-lg font-bold" style={{ color: darkerColor }}>
              NFL Standings
            </h3>
            <table className="w-full mt-4">
              <thead>
                <tr className="text-left text-gray-600 border-b border-gray-300">
                  <th className="py-2">Teams</th>
                  <th className="py-2">W</th>
                  <th className="py-2">L</th>
                  <th className="py-2">T</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-300">
                  <td className="py-2">BUF</td>
                  <td className="py-2">5</td>
                  <td className="py-2">2</td>
                  <td className="py-2">0</td>
                </tr>
                <tr className="border-b border-gray-300">
                  <td className="py-2">LAR</td>
                  <td className="py-2">4</td>
                  <td className="py-2">3</td>
                  <td className="py-2">0</td>
                </tr>
                <tr>
                  <td className="py-2">JAX</td>
                  <td className="py-2">3</td>
                  <td className="py-2">4</td>
                  <td className="py-2">0</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Right Section: Player Stats, Tips, and Player List */}
        <div className="col-span-2 space-y-6">
          {/* Tips Card */}
          <div
            className="bg-blue-100 shadow-lg rounded-lg p-6"
            style={{
              background: `linear-gradient(to right, ${lighterColor}, ${mainColor})`,
            }}
          >
            <h3 className="text-lg font-bold text-white">
              Helpful Commissioner Tip
            </h3>
            <p className="text-white mt-2">
              If you're here looking for more information about certain players
              in your contest, visit your Contest Settings page and navigate to
              the Players Page, which provides you with the player's username,
              actual name, and access to their email address!
            </p>
          </div>

          {/* Player Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center">
              <h2 className="text-2xl font-bold" style={{ color: mainColor }}>
                {contestDetails?.playerCount}
              </h2>
              <p className="text-gray-600">Players</p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center">
              <h2 className="text-2xl font-bold" style={{ color: mainColor }}>
                {contestDetails?.squaresSold}
              </h2>
              <p className="text-gray-600">Boxes Sold</p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center">
              <h2 className="text-2xl font-bold" style={{ color: mainColor }}>
                {contestDetails?.availableSquares}
              </h2>
              <p className="text-gray-600">Boxes Available</p>
            </div>
          </div>

          {/* Player List */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-lg font-bold" style={{ color: darkerColor }}>
              Player List
            </h3>
            <p className="text-gray-600 mt-2">
              No players have joined this contest yet.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Players;
