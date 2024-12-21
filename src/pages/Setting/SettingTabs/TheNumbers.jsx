import React from "react";

const TheNumbers = () => {
  const tableData = [
    {
      box: 5,
      username: <i>CHIEFS</i>,
      name: "",
      boxText: "squad",
      payment: (
        <span className="bg-red-500 text-white px-2 py-1 rounded">
          Not Paid!
        </span>
      ),
      actions: (
        <>
          <button className="bg-blue-500 text-white px-3 py-1 rounded mr-2">
            Edit
          </button>
          <button className="bg-sky-400 text-white px-3 py-1 rounded">
            Email
          </button>
        </>
      ),
    },
  ];

  return (
    <div>
      <div className="rounded-lg shadow-lg mt-10">
        {/* Header */}
        <div className="bg-gray-900 text-white p-3 rounded-t-lg font-medium text-md flex items-center justify-between">
          <p>Numbers Management</p>
        </div>
        <div className="p-4 flex flex-col gap-3">
          <p className="text-gray-500">
            You currently only have one grid in your contest, which means
            players will have their one set of numbers for the entire contest
            duration. If you are interested in utilizing the SBPS "multiple
            grids" functionality, you can manage that in the Grid Setup section
            of the Settings menu, or by clicking here.
          </p>
          <p className="text-gray-500 italic">
            Note -- Any italicized values below with asterisks (*) denote that
            they inherited the value from the default Contest Values above.
          </p>

          {/* Table */}
          <table className="w-full border-collapse mt-0">
            <thead>
              <tr className="bg-gray-600 text-white">
                <th className="px-4 py-2 text-left">Grid Title</th>
                <th className="px-4 py-2 text-left">Top Label </th>
                <th className="px-4 py-2 text-left">Left Label</th>
                <th className="px-4 py-2 text-left">Top Numbers</th>
                <th className="px-4 py-2 text-left"> Left Numbers</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((player, index) => (
                <tr key={index} className={`bg-white border-b`}>
                  <td className="px-4 py-3">{player.box}</td>
                  <td className="px-4 py-3">{player.username}</td>
                  <td className="px-4 py-3">{player.name}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TheNumbers;
