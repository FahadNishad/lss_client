import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom"; // Import useNavigate hook
import BasicSettings from "./SettingTabs/BasicSettings";
import PlayerGrid from "./SettingTabs/Players";
import GridStepUp from "./SettingTabs/GridStepUp";
import TheNumbers from "./SettingTabs/TheNumbers";

export const mainColor = "rgb(99,102,241)";
export const lighterColor = "rgb(126, 130, 251)";
export const darkerColor = "rgb(61, 65, 185)";

const Setting = () => {
  const [activeTab, setActiveTab] = useState("Basic Settings");
  const navigate = useNavigate();
  const { contestId } = useParams();

  const renderContent = () => {
    switch (activeTab) {
      case "Basic Settings":
        return <BasicSettings />;
      case "Players":
        return <PlayerGrid />;
      case "Grid Setup":
        return <GridStepUp />;
      case "The Numbers":
        return <TheNumbers />;
      case "Winners":
        return <div className="p-6">This is the Winners content.</div>;
      case "Help":
        return <div className="p-6">This is the Help content.</div>;
      default:
        return null;
    }
  };

  return (
    <div className="mt-28">
      <div className="container mx-auto">
        <div className="bg-white shadow-md rounded-lg">
          <div className="p-6 border-2  border-gray-400 border-b-0 rounded-md mb-3">
            <h2 className="text-2xl font-medium text-gray-800">Pro_gamer</h2>
            <p className="text-gray-700 mt-2">
              Welcome to the <b>Settings Page</b> for your contest. Only you
              have access to these pages within your contest, because you are
              logged in as the commissioner of this contest.
            </p>
          </div>
          <div className="flex space-x-2 bg-gray-500 p-4">
            {/* Back to Contest button */}
            <button
              className="py-2 px-4 rounded-lg text-sm font-medium bg-white text-blue-500 focus:outline-none border-1 border-gray-300 hover:bg-blue-50"
              onClick={() => navigate(`/contest/${contestId}`)}
            >
              Back to Contest
            </button>

            {[
              "Basic Settings",
              "Players",
              "Grid Setup",
              "The Numbers",
              "Winners",
              "Help",
            ].map((tab) => (
              <button
                key={tab}
                className={`py-2 px-4 rounded-lg text-sm font-medium bg-white text-blue-500 focus:outline-none border-1 border-gray-300 ${
                  activeTab === tab ? "bg-blue-300" : "hover:bg-blue-50"
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
        <div className="p-6">{renderContent()}</div>
      </div>
    </div>
  );
};

export default Setting;
