import React, { useState } from "react";
import {
  FaHome,
  FaUsers,
  FaRegCommentDots,
  FaAward,
  FaCog,
} from "react-icons/fa";
import { MdOutlineRule, MdShare, MdPersonAdd } from "react-icons/md";
import ContestGrid from "./ContesGrid";
import { mainColor } from "../../Components/styles";
import ContestPlayers from "./ContestPlayers";
import ContestRules from "./ContestRules";
import ContestWinners from "./ContestWinners";

const ContestPage = () => {
  const [activeTab, setActiveTab] = useState("home");

  const renderTabContent = () => {
    switch (activeTab) {
      case "home":
        return <Home />;
      case "chat":
        return <Chat />;
      case "players":
        return <Players />;
      case "rules":
        return <Rules />;
      case "winners":
        return <Winners />;
      case "invite":
        return <Invite />;
      case "shareNearby":
        return <ShareNearby />;
      case "settings":
        return <Settings />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 mt-20">
      {/* Banner Section */}
      <div className="relative">
        {/* Background Image with Overlay */}
        <div
          className="h-[50vh] w-full bg-no-repeat bg-cover bg-center"
          style={{
            backgroundImage: `url('https://www.shutterstock.com/image-photo/dynamic-image-man-american-football-600nw-2496387979.jpg')`, // Replace this with your banner URL
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>

        {/* Content */}
        <div className="absolute top-32 left-8 flex items-center gap-4 z-10">
          <img
            src="https://superbowlpoolsite.com/img/logos/sbps_light_100px.png" // Replace with your profile URL
            alt="Team Logo"
            className="rounded-full border-4 border-white w-32 h-32"
          />
          <div>
            <h1 className="text-3xl font-bold text-white">
              Fahad Squares Contest
            </h1>
            <p className="text-lg text-gray-200 ">
              Created by <span className="font-bold">Fahad Ahmed</span> at SBPS
            </p>
            <p className="text-lg text-gray-200">fahadnishad1122@gmail.com</p>
          </div>
        </div>
      </div>

      {/* Tabs Section */}
      <div className="bg-white shadow-md px-6 py-3 flex gap-4 justify-center items-center">
        {[
          { id: "home", label: "Home", icon: <FaHome /> },
          { id: "chat", label: "Chat", icon: <FaRegCommentDots /> },
          { id: "players", label: "Players", icon: <FaUsers /> },
          { id: "rules", label: "Rules", icon: <MdOutlineRule /> },
          { id: "winners", label: "Winners", icon: <FaAward /> },
          { id: "invite", label: "Invite", icon: <MdPersonAdd /> },
          { id: "shareNearby", label: "Share Nearby", icon: <MdShare /> },
          { id: "settings", label: "Settings", icon: <FaCog /> },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium text-sm transition ${
              activeTab === tab.id
                ? `bg-[${mainColor}] text-white`
                : "bg-gray-100 hover:bg-gray-200 text-gray-800"
            }`}
          >
            {tab.icon}
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="p-6 flex justify-center col-end-1 w-full">
        {renderTabContent()}
      </div>
    </div>
  );
};
// Tab Components
const Home = () => <ContestGrid />;
const Chat = () => <div>Chat Content</div>;
const Players = () => <ContestPlayers />;
const Rules = () => <ContestRules />;
const Winners = () => <ContestWinners />;
const Invite = () => <div>Invite Content</div>;
const ShareNearby = () => <div>Share Nearby Content</div>;
const Settings = () => <div>Settings Content</div>;

export default ContestPage;
