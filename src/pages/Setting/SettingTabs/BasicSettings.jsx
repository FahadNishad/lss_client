import React, { useState } from "react";
import PasswordDrawer from "../../../Components/setting/Drawers/PassowrdDrawer";
import ContestDetailsDrawer from "../../../Components/setting/Drawers/ContestDetailDrawer";
import PlayerPermissionsDrawer from "../../../Components/setting/Drawers/PlayerPermissions";
import TopLeftTeamsDrawer from "../../../Components/setting/Drawers/TopLeftTeamDrawer";
import PostNumbersDrawer from "../../../Components/setting/Drawers/PostNumbersDrawer";

const BasicSettings = () => {
  const [isPasswordDrawerOpen, setPasswordDrawerOpen] = useState(false);
  const [isContestDetailsDrawerOpen, setContestDetailsDrawerOpen] =
    useState(false);
  const [isPlayerPermissionsDrawerOpen, setPlayerPermissionsDrawerOpen] =
    useState(false);
  const [isTopLeftTeamsDrawerOpen, setTopLeftTeamsDrawerOpen] = useState(false);
  const [isPostNumbersDrawerOpen, setPostNumbersDrawerOpen] = useState(false);
  const [password, setPassword] = useState("MPHYQGDX");

  return (
    <div className="flex flex-col gap-5">
      <div className="border-1 border-gray-500 rounded-lg">
        <div className="bg-orange-400 text-white p-4 rounded-t-lg font-medium text-md">
          Ready to Post Your Numbers?
        </div>
        <div className="p-4">
          <iframe
            width="full"
            height="415"
            className="w-full"
            src="https://www.youtube.com/embed/tmg6d3T_T6Q"
            title="GeeksforGeeks"
          ></iframe>
          <p className="mt-3 font-medium">
            When you are ready to set your numbers manually or randomly, follow
            the link below to the Numbers Management page.
          </p>
          <button className="bg-orange-400 text-white px-4 py-2 mt-2 rounded-lg">
            Click Here
          </button>
        </div>
      </div>

      <div className="rounded-lg shadow-lg">
        <div className="bg-gray-800 text-white p-3 rounded-t-lg font-medium text-md flex items-center justify-between">
          <p>Password to Join</p>
          <button
            className="bg-blue-500 text-white px-3 py-1.5 rounded-lg"
            onClick={() => setPasswordDrawerOpen(true)}
          >
            Edit
          </button>
        </div>
        <div className="p-3">
          <p className="mt-1">
            Set the password needed for your players to reserve a square in your
            Contest.
          </p>
          <p className="text-red-500 mt-2">
            Be careful! If you leave this blank, anyone with the link can jump
            in.
          </p>
          <p className="font-bold mt-2">Password to Join</p>
          <p className="ml-3">{password}</p>
        </div>

        <PasswordDrawer
          isOpen={isPasswordDrawerOpen}
          toggleDrawer={setPasswordDrawerOpen}
          password={password}
          setPassword={setPassword}
        />
      </div>

      <div className="rounded-lg shadow-lg">
        <div className="bg-gray-800 text-white p-3 rounded-t-lg font-medium text-md flex items-center justify-between">
          <p>Contest Details</p>
          <button
            className="bg-blue-500 text-white px-3 py-1.5 rounded-lg"
            onClick={() => setContestDetailsDrawerOpen(true)}
          >
            Edit
          </button>
        </div>
        <div className="p-3">
          <div className="text-md">
            <p className="font-bold text-gray-900 mt-2">Contest Name</p>
            <p className="ml-2">Pro_gamer</p>
          </div>
          <div className="text-md mt-1">
            <p className="font-bold text-gray-900 mt-2">Commissioner</p>
            <p className="ml-2">Pro Gamer</p>
          </div>
          <div className="text-md mt-1">
            <p className="font-bold text-gray-900 mt-2">Email</p>
            <p className="ml-2">user3@gmail.com</p>
          </div>
          <div className="text-md mt-1">
            <p className="font-bold text-gray-900 mt-2">Entry Cost</p>
            <p className="ml-2">Not provided</p>
          </div>
          <div className="text-md mt-1">
            <p className="font-bold text-gray-900 mt-2">Password to Join</p>
            <p className="ml-2">MPHYQGDX</p>
          </div>
        </div>
        <ContestDetailsDrawer
          isOpen={isContestDetailsDrawerOpen}
          toggleDrawer={setContestDetailsDrawerOpen}
        />
      </div>

      <div className="rounded-lg shadow-lg">
        <div className="bg-gray-800 text-white p-3 rounded-t-lg font-medium text-md flex items-center justify-between">
          <p>Player Permissions</p>
          <button
            className="bg-blue-500 text-white px-3 py-1.5 rounded-lg"
            onClick={() => setPlayerPermissionsDrawerOpen(true)}
          >
            Edit
          </button>
        </div>
        <div className="p-3">
          <div className="text-md">
            <p className="font-bold text-gray-900 mt-2">Contest Status</p>
            <p className="ml-2">Open</p>
          </div>
          <div className="text-md mt-1">
            <p className="font-bold text-gray-900 mt-2">
              Players Edit/Delete Themselves?
            </p>
            <p className="ml-2">Yes</p>
          </div>
        </div>
        <PlayerPermissionsDrawer
          isOpen={isPlayerPermissionsDrawerOpen}
          toggleDrawer={setPlayerPermissionsDrawerOpen}
        />
      </div>

      <div className="rounded-lg shadow-lg">
        <div className="bg-gray-800 text-white p-3 rounded-t-lg font-medium text-md flex items-center justify-between">
          <p>Top and Left Teams</p>
          <button
            className="bg-blue-500 text-white px-3 py-1.5 rounded-lg"
            onClick={() => setTopLeftTeamsDrawerOpen(true)}
          >
            Edit
          </button>
        </div>
        <div className="p-3">
          <div className="text-md">
            <p className="font-bold text-gray-900 mt-2">Top Label</p>
            <p className="ml-2">CHIEFS</p>
          </div>
          <div className="text-md">
            <p className="font-bold text-gray-900 mt-2">Left Label</p>
            <p className="ml-2">49ERS</p>
          </div>
        </div>
        <TopLeftTeamsDrawer
          isOpen={isTopLeftTeamsDrawerOpen}
          toggleDrawer={setTopLeftTeamsDrawerOpen}
        />
      </div>

      <div className="rounded-lg shadow-lg">
        <div className="bg-gray-800 text-white p-3 rounded-t-lg font-medium text-md flex items-center justify-between">
          <p>Posting the Numbers</p>
        </div>
        <div className="p-3">
          <p>
            Are you ready to assign the numbers to the Top and Left side of the
            Contest Grid?
          </p>
          <button
            className="bg-blue-500 text-white px-3 py-1.5 rounded-md mt-3"
            onClick={() => setPostNumbersDrawerOpen(true)}
          >
            Assign Numbers
          </button>
        </div>
        <PostNumbersDrawer
          isOpen={isPostNumbersDrawerOpen}
          toggleDrawer={setPostNumbersDrawerOpen}
        />
      </div>
    </div>
  );
};

export default BasicSettings;
