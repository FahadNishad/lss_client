import React from "react";

const GridStepUp = () => {
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
    <>
      <div className="rounded-lg shadow-lg">
        {/* Header */}
        <div className="bg-gray-900 text-white p-3 rounded-t-lg font-medium text-md flex items-center justify-between">
          <p>Contest Defaults</p>
        </div>
        <div className="p-4 flex flex-col gap-3">
          <div className="flex flex-col gap-2 border-1 border-gray-100 rounded p-4 mt-3 bg-blue-200">
            <p className="text-lg font-bold">Please Note:</p>
            <p>
              Many people have slight issues with this process. We have a
              fully-detailed article about it, along with a help video, that
              will save us all a ton of time. Please read it!
            </p>
            <button className="bg-blue-500 text-white px-3 py-1.5 rounded-lg w-[15%]">
              Help on Images
            </button>
          </div>

          {/* Table */}
          <table className="w-full border-collapse mt-0">
            <thead>
              <tr className="bg-gray-700 text-white">
                <th className="px-4 py-2 text-left">Top Team Label</th>
                <th className="px-4 py-2 text-left">Left Team Label </th>
                <th className="px-4 py-2 text-left">Scoreboard Link</th>
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

      {/* Box - 2 */}
      <div className="rounded-lg shadow-lg mt-10">
        {/* Header */}
        <div className="bg-gray-900 text-white p-3 rounded-t-lg font-medium text-md flex items-center justify-between">
          <p>Grid Setup</p>
          <button className="bg-blue-500 text-white px-3 py-1.5 rounded-md">
            Add a Grid
          </button>
        </div>
        <div className="p-4 flex flex-col gap-3">
          <p className="text-gray-500">
            You currently only have one grid in your contest, which means
            players will have their one set of numbers for the entire contest
            duration. If you are interested in utilizing the SBPS "multiple
            grids" functionality, please carefully read the section below for
            details and then proceed to add as many grids as you need.
          </p>
          <div className="flex flex-col gap-4 border-1 border-gray-100 rounded p-4 mt-3 bg-blue-200 text-gray-700">
            <p>
              SBPS features allow your single Squares Contest to have multiple
              grids, if you wish. Your players still own the same box location
              in each grid, so their process of joining a contest is still as
              simple as selecting the box(es) that they want for the duration of
              the contest.
            </p>

            <h3 className="text-md font-semibold">
              Why would I want to add "multiple grids"?
            </h3>
            <p>
              One of the biggest complaints you will hear from players is that
              they "got stuck with terrible numbers and never had a chance to
              win any of the prizes". Using multiple grids at SBPS, your contest
              can feature different grid numbers for every quarter of the Super
              Bowl, giving your players four different chances at securing
              better numbers for the next quarter or half!
            </p>
            <p>
              Another popular use of multiple grids is for a series of games,
              such as contests that use Monday Night Football games for the
              entire season. Rather than stick every player with one set of good
              or bad numbers to own for the duration of the 16 games, you can
              create a 16-grid contest that automatically assigns different
              numbers on the Top and Left Axis for every week of the season. Far
              more exciting? Absolutely!
            </p>

            <h3 className="text-md font-semibold">
              Do I have to use "multiple grids"?
            </h3>
            <p>
              Of course not. If you want just one set of numbers for the entire
              Super Bowl, or duration of your contest, simply don't add any
              additional grids. It's that easy.
            </p>
          </div>
          <p className="text-gray-500 italic">
            Note -- Any italicized values below with asterisks (*) denote that
            they inherited the value from the default Contest Values above.
          </p>

          {/* Table */}
          <table className="w-full border-collapse mt-0">
            <thead>
              <tr className="bg-gray-700 text-white">
                <th className="px-4 py-2 text-left">Top Team Label</th>
                <th className="px-4 py-2 text-left">Left Team Label </th>
                <th className="px-4 py-2 text-left">Scoreboard Link</th>
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
    </>
  );
};

export default GridStepUp;
