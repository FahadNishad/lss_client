import React, { useEffect, useState } from "react";
import axios from "axios";

const LiveGames = () => {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchLiveGames = async () => {
    const options = {
      method: "GET",
      url: "https://api-nba-v1.p.rapidapi.com/games",
      params: { live: "all" },
      headers: {
        "x-rapidapi-key": "7b31633b5cmshe94a1464401cc03p11396bjsn605ea4437da9",
        "x-rapidapi-host": "api-nba-v1.p.rapidapi.com",
      },
    };
    try {
      const response = await axios.request(options);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="border border-red-500 mt-32">
      <h1>Live NBA Games</h1>
      <button onClick={fetchLiveGames} className="text-red-300">
        Fetch Live Games
      </button>
      {/* {games.length > 0 ? (
        <ul>
          {games.map((game) => (
            <li key={game.id}>
              {game.teams.home.name} vs {game.teams.away.name} - {game.scores.home.points} :{' '}
              {game.scores.away.points}
            </li>
          ))}
        </ul>
      ) : (
        <p>No live games at the moment.</p>
      )} */}
    </div>
  );
};

export default LiveGames;
