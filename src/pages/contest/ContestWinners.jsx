import React from "react";

const ContestWinners = () => {
  const winners = [
    {
      box: 14,
      boxText: "Open Box",
      username: "Open Box",
      playerName: "Open Box",
      grid: "Grid ID 404408",
      score: 12,
      notes: "this is test",
      prize: 12,
    },
  ];

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      {/* Edit Winners Section */}
      <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
        <h2 className="text-2xl font-bold mb-4" style={{ color: "#474747" }}>
          Edit or Add Winners?
        </h2>
        <p className="text-gray-700 mb-4">
          As commissioner, you should let your participants know which squares
          won each prize.
        </p>
        <p className="text-gray-700 mb-4">
          There is a link to the Winners Settings screen in your Settings page,
          or you can simply click the button below to add or edit your Winner
          information, such as the prize, score, and general description.
        </p>
        <button className="text-white bg-red-500 hover:bg-red-600 px-6 py-2 rounded-lg">
          Edit Contest Winners
        </button>
      </div>

      {/* Contest Winners Table */}
      <div className="bg-white shadow-lg rounded-lg p-6">
        <h3 className="text-xl font-bold text-white bg-gray-900 px-4 py-2 rounded-lg mb-4">
          Contest Winners
        </h3>
        <p className="text-gray-700 mb-4">
          The commissioner has declared the winners found in the table below.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-900 text-white">
                <th className="px-4 py-2">Box</th>
                <th className="px-4 py-2">Box Text</th>
                <th className="px-4 py-2">Username</th>
                <th className="px-4 py-2">Player Name</th>
                <th className="px-4 py-2">Grid</th>
                <th className="px-4 py-2">Score</th>
                <th className="px-4 py-2">Notes</th>
                <th className="px-4 py-2">Prize</th>
              </tr>
            </thead>
            <tbody>
              {winners.map((winner, index) => (
                <tr
                  key={index}
                  className={`${
                    index % 2 === 0 ? "bg-gray-100" : "bg-white"
                  } border-b`}
                >
                  <td className="px-4 py-2">{winner.box}</td>
                  <td className="px-4 py-2">{winner.boxText}</td>
                  <td className="px-4 py-2">{winner.username}</td>
                  <td className="px-4 py-2">{winner.playerName}</td>
                  <td className="px-4 py-2 text-blue-500 underline cursor-pointer">
                    {winner.grid}
                  </td>
                  <td className="px-4 py-2">{winner.score}</td>
                  <td className="px-4 py-2">{winner.notes}</td>
                  <td className="px-4 py-2">{winner.prize}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ContestWinners;
