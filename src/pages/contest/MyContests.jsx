import React, { useEffect, useState } from "react";
import { FaTrophy, FaExclamationCircle } from "react-icons/fa";
import { BsArrowRight } from "react-icons/bs";
import { darkerColor, lighterColor, mainColor } from "../../Components/styles";
import { useSelector } from "react-redux";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Skeleton } from "@mui/material";
const MyContestPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [email, setEmail] = useState("");
  const [contests, setContests] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const { currentUser } = useSelector((state) => state.user);

  useEffect(() => {
    const fetchContestData = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_URL}/api/contest/getContestsByUserId/${currentUser?._id}`
        );
        setContests(response.data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching contest data:", err);
        setError("Failed to load contest data.");
        setLoading(false);
      }
    };

    fetchContestData();
  }, [currentUser]);

  const filteredContests = contests.filter((contest) =>
    contest.contestName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearchByEmail = () => {
    console.log(`Searching contests by email: ${email}`);
    // Logic to fetch contests by email can be implemented here
  };

  const handleSearchMyContest = () => {
    console.log("these are the my contests");
  };

  const handleDetailContest = (contestId) => {
    navigate(`/contest/${contestId}`);
  };

  return (
    <div className="bg-gray-100 min-h-screen py-8 w-full mt-20">
      <div className="w-[90%] mx-auto px-4">
        {/* Page Title */}
        <h1
          className="text-4xl font-extrabold text-center mb-8"
          style={{ color: mainColor }}
        >
          My Contests
        </h1>

        {/* Search Bar */}
        <div className="mb-8 flex justify-center gap-2">
          <input
            type="text"
            className="w-full md:w-1/2 px-4 py-2 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring focus:ring-indigo-300"
            placeholder="Search your contests..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button
            className="px-6 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300"
            onClick={handleSearchMyContest}
          >
            Search
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {loading ? (
            // Loading skeletons
            Array.from({ length: 3 }).map((_, index) => (
              <div
                key={index}
                className="rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 border-2"
                style={{ borderColor: darkerColor }}
              >
                <div
                  className="p-6"
                  style={{
                    background: `linear-gradient(135deg, ${lighterColor}, ${mainColor})`,
                  }}
                >
                  <Skeleton variant="text" width="60%" height={30} />
                  <Skeleton variant="circular" width={40} height={40} />
                  <Skeleton variant="text" width="40%" height={20} />
                  <Skeleton variant="text" width="40%" height={20} />
                </div>
                <div className="bg-white p-4">
                  <Skeleton variant="rectangular" height={40} />
                </div>
              </div>
            ))
          ) : filteredContests.length === 0 ? (
            // No contests found, show message with icon
            <div className="col-span-2 flex flex-col items-center justify-center text-center py-8">
              <FaExclamationCircle size={50} color="#d9534f" />
              <h3 className="text-xl font-bold text-gray-600 mt-4">
                No contests available
              </h3>
            </div>
          ) : (
            // Display filtered contests
            filteredContests.map((contest) => (
              <div
                key={contest.id}
                className="rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 border-2"
                style={{ borderColor: darkerColor }}
              >
                <div
                  className="p-6"
                  style={{
                    background: `linear-gradient(135deg, ${lighterColor}, ${mainColor})`,
                  }}
                >
                  <div className="flex items-center justify-between mb-4">
                    <h2
                      className="text-2xl font-bold text-white"
                      style={{ color: "#fff" }}
                    >
                      {contest.contestName}
                    </h2>
                    <FaTrophy
                      size={28}
                      style={{
                        color: "#fff",
                        backgroundColor: darkerColor,
                        borderRadius: "50%",
                        padding: "6px",
                      }}
                    />
                  </div>
                  <p className="text-sm text-white mb-2">
                    <strong>Top Team:</strong> {contest.topTeamName}
                  </p>
                  <p className="text-sm text-white">
                    <strong>Left Team:</strong> {contest.leftTeamName}
                  </p>
                </div>
                <div className="bg-white p-4">
                  <button
                    className="flex items-center justify-center bg-blue-600 text-white px-4 py-2 w-full rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300"
                    onClick={() => handleDetailContest(contest._id)}
                  >
                    Take me there
                    <BsArrowRight className="ml-2" size={18} />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Search By Email Section */}
        <div className="mt-12 bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-bold mb-4" style={{ color: mainColor }}>
            Search by Email
          </h2>
          <p className="text-gray-600 mb-6">
            Find an SBPS Contest by entering an email address in the form below.
            Any SBPS Contest created by that user or joined by that user will
            appear in the list below.
          </p>
          <div className="flex flex-col md:flex-row items-center gap-4">
            <input
              type="email"
              className="flex-grow px-4 py-2 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring focus:ring-indigo-300"
              placeholder="Enter user email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button
              className="px-6 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300"
              onClick={handleSearchByEmail}
            >
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyContestPage;
