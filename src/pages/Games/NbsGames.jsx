import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // For navigation to contest page
import { mainColor } from "../contest/ContestPlayers";
import { lighterColor } from "../../Components/styles";

const NBAGames = () => {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  // Your API Key from TheSportsDB (Replace with your actual API key)
  const API_KEY = "3"; // Make sure this is your actual API Key

  const BASE_URL = `https://www.thesportsdb.com/api/v1/json/${API_KEY}/eventsnextleague.php?id=4387`; // NBA ID for TheSportsDB

  // Fetch NBA games
  const fetchNBAGames = async () => {
    try {
      const response = await axios.get(BASE_URL);
      setGames(response.data.events); // Store the events data in the state
      setLoading(false); // Set loading to false after data is fetched
    } catch (err) {
      setError("Error fetching games. Please try again.");
      setLoading(false); // Set loading to false even in case of error
    }
  };

  useEffect(() => {
    fetchNBAGames();
  }, []);

  // Show loading state or error
  if (loading) {
    return <p className="text-center mt-10 text-lg">Loading NBA games...</p>;
  }

  if (error) {
    return <p className="text-center mt-10 text-lg text-red-600">{error}</p>;
  }

  // Navigate to Contest page
  const handleAddToContest = (gameId) => {
    navigate(`/contest/${gameId}`);
  };

  return (
    <div className="w-full flex flex-col items-center mt-24">
      <h1 className="text-4xl font-bold mb-10">Upcoming NBA Games</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-[80%] py-10">
        {games.map((game) => (
          <div
            key={game.idEvent}
            className="bg-white shadow-lg rounded-lg p-6 flex flex-col justify-between hover:shadow-2xl transition duration-300"
          >
            {/* Team Logos */}
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center">
                <img
                  src={game.strHomeTeamBadge}
                  alt={game.strHomeTeam}
                  className="w-12 h-12 mr-4"
                />
                <span className="text-xl font-bold">{game.strHomeTeam}</span>
              </div>
              <span className="text-2xl font-bold">vs</span>
              <div className="flex items-center">
                <img
                  src={game.strAwayTeamBadge}
                  alt={game.strAwayTeam}
                  className="w-12 h-12 ml-4"
                />
                <span className="text-xl font-bold">{game.strAwayTeam}</span>
              </div>
            </div>

            {/* Game Date */}
            <p className="text-gray-600 text-center mb-4">
              {new Date(game.dateEvent).toLocaleString()}
            </p>

            {/* Scores */}
            <div className="text-center">
              <p className="font-semibold">
                Home Team Score: {game.intHomeScore || "N/A"}
              </p>
              <p className="font-semibold">
                Away Team Score: {game.intAwayScore || "N/A"}
              </p>
            </div>

            {/* Add to Contest Button */}
            <button
              onClick={() => handleAddToContest(game.idEvent)}
              className={`mt-4 bg-[${mainColor}] text-white py-2 px-4 rounded-full hover:bg-[${lighterColor}] transition duration-300`}
            >
              Add to Contest
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NBAGames;
