import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import moment from "moment";
import ButtonUI from "../../Components/Button/Button";
import Loader from "../../Components/Loader";
import { useSelector } from "react-redux";
import toast from "react-hot-toast";

const NFLGames = () => {
  const [upcomingGames, setUpcomingGames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadingStates, setLoadingStates] = useState({});
  const [contestId, setContestId] = useState("");
  const { teamID } = useParams();
  const [searchParams] = useSearchParams();
  const team = searchParams.get("team");
  const city = searchParams.get("city");
  const { currentUser } = useSelector((state) => state?.user);

  const navigate = useNavigate();

  const fetchNFLSchedules = async () => {
    try {
      setLoading(true);
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/api/nfl/getNFLTeamSchedules`,
        { teamID }
      );
      setUpcomingGames(response?.data?.games || []);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (teamID) {
      fetchNFLSchedules();
    }
  }, [teamID]);
  if (loading) return <Loader />;

  const createContest = async (game) => {
    if (!currentUser && currentUser.role === "business") {
      return toast.error("Please signin first as business to create contest");
    }
    const dataToSend = {
      topTeamName: game?.home,
      contestName: currentUser?.firstName,
      leftTeamName: game?.away,
      gameDate: game?.gameDate,
      gameId: game?.gameID,
      gameTime: game?.gameTime,
      gridSize: 100,
      userId: currentUser?._id,
      contestType: "NFL",
    };

    try {
      setLoadingStates((prev) => ({ ...prev, [game.gameID]: true }));
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/api/contest/create`,
        dataToSend,
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );

      toast.success(response?.data?.message || "Contest created successfully");
      setContestId(response?.data?.contestId);
      navigate(`/contest/${response?.data?.contestId}`);
    } catch (error) {
      if (error.response) {
        toast.error(error?.response?.data?.message || "An error occurred");
      } else if (error.request) {
        toast.error("No response received from the server");
      } else {
        toast.error(error.message);
      }
      console.log(error);
    } finally {
      setLoadingStates((prev) => ({ ...prev, [game.gameID]: false }));
    }
  };

  if (upcomingGames.length === 0) {
    return (
      <>
        <div className="mt-24 px-5  w-full mx-auto">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-8 text-center">
            No Upcoming Games for <span className="text-blue-600">{city}</span>{" "}
            <span className="text-gray-700">({team})</span>
          </h1>
        </div>
      </>
    );
  }
  return (
    <div className="mt-24 px-5  w-full mx-auto">
      <h1 className="text-4xl font-extrabold text-gray-900 mb-8 text-center">
        Upcoming Games for <span className="text-blue-600">{city}</span>{" "}
        <span className="text-gray-700">({team})</span>
      </h1>

      <p className="text-2xl font-bold mb-2">
        Create A Squares Contest For any {city} {team} Game
      </p>
      <p className="mb-4">
        If you want to create a Squares Contest for any individual upcoming
        {city} {team} game, you can do so by clicking on create button.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {upcomingGames?.map((game) => (
          <div
            key={game.gameID}
            className="bg-white shadow-md hover:shadow-lg rounded-lg overflow-hidden transition-shadow duration-300"
          >
            {/* Team Info */}
            <div className="flex justify-between items-center p-4 bg-gradient-to-r from-gray-50 to-gray-100 border-b">
              <div className="flex items-center">
                <img
                  src={game.awayLogo}
                  alt={game.away}
                  className="w-14 h-14 object-cover rounded-full border border-gray-300 mr-3"
                />
                <span className="text-lg font-semibold text-gray-700">
                  {game.away}
                </span>
              </div>
              <span className="text-sm text-gray-500">vs</span>
              <div className="flex items-center">
                <img
                  src={game.homeLogo}
                  alt={game.home}
                  className="w-14 h-14 object-cover rounded-full border border-gray-300 ml-3"
                />
                <span className="text-lg font-semibold text-gray-700">
                  {game.home}
                </span>
              </div>
            </div>

            <div className="p-4">
              <p className="text-gray-600 text-sm mb-2">
                <strong>Date:</strong>{" "}
                {moment(game.gameDate, "YYYYMMDD").format("MMMM Do, YYYY")}
              </p>
              <p className="text-gray-600 text-sm mb-2">
                <strong>Time:</strong> {game.gameTime || "TBD"}
              </p>
              <p className="text-gray-600 text-sm mb-4">
                <strong>Week:</strong> {game.gameWeek}
              </p>
              <ButtonUI
                onClick={() => createContest(game)}
                className={"w-full py-2"}
                loading={loadingStates[game.gameID] || false}
              >
                Create{" "}
              </ButtonUI>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NFLGames;
