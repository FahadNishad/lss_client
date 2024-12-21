import React from "react";

const Players = () => {
  const tableData = [
    {
      box: 5,
      username: <i>Added by you</i>,
      name: "",
      boxText: "squad",
      payment: <span className="bg-red-500 text-white px-2 py-1 rounded">Not Paid!</span>,
      actions: (
        <>
          <button className="bg-blue-500 text-white px-3 py-1 rounded mr-2">Edit</button>
          <button className="bg-sky-400 text-white px-3 py-1 rounded">Email</button>
        </>
      ),
    },
  ];

  return (
    <div className="rounded-lg shadow-lg">
      {/* Header */}
      <div className="bg-gray-900 text-white p-3 rounded-t-lg font-medium text-md flex items-center justify-between">
        <p>Player Management - Listing View</p>
        <button className="bg-blue-500 text-white px-3 py-1.5 rounded-md">
          Player Email List
        </button>
      </div>

      {/* Table */}
      <table className="w-full border-collapse mt-0">
        <thead>
          <tr className="bg-gray-700 text-white">
            <th className="px-4 py-2 text-left">Box</th>
            <th className="px-4 py-2 text-left">Username</th>
            <th className="px-4 py-2 text-left">Name</th>
            <th className="px-4 py-2 text-left">Box Text</th>
            <th className="px-4 py-2 text-left">Payment</th>
            <th className="px-4 py-2 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((player, index) => (
            <tr
              key={index}
              className={`bg-white border-b`}
            >
              <td className="px-4 py-3">{player.box}</td>
              <td className="px-4 py-3">{player.username}</td>
              <td className="px-4 py-3">{player.name}</td>
              <td className="px-4 py-3">{player.boxText}</td>
              <td className="px-4 py-3">{player.payment}</td>
              <td className="px-4 py-3 flex">{player.actions}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Players;
