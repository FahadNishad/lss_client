import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  FaAward,
  FaCog,
  FaHome,
  FaRegCommentDots,
  FaUsers,
} from "react-icons/fa";
import { MdOutlineRule, MdPersonAdd, MdShare } from "react-icons/md";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { mainColor } from "../../Components/styles";
import ContestGrid from "./ContesGrid";
import ContestPlayers from "./ContestPlayers";
import ContestRules from "./ContestRules";
import ContestWinners from "./ContestWinners";
import InviteContest from "./InviteContest";

const ContestPage = () => {
  const [contestData, setContestData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("home");
  const [squaresDetails, setSquaresDetails] = useState(null);
  const navigate = useNavigate();
  const { contestId } = useParams();
  const { currentUser } = useSelector((state) => state.user);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchContestData = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_URL}/api/contest/getContest/${contestId}`
        );
        setContestData(response.data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching contest data:", err);
        setError(err?.response?.data?.message);
        setLoading(false);
      }
    };

    const fetchContestDetails = async () => {
      try {
        setLoading(true);
        const response = await axios.post(
          `${process.env.REACT_APP_API_URL}/api/contest/getReservedSquare`,
          {
            contestId,
          }
        );
        setSquaresDetails(response.data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching contest data:", err);
        setError(err?.response?.data?.message);
        setLoading(false);
      }
    };

    fetchContestDetails();
    fetchContestData();
  }, [contestId]);

  const renderTabContent = () => {
    switch (activeTab) {
      case "home":
        return (
          <Home
            loading={loading}
            contestData={contestData}
            error={error}
            squaresDetails={squaresDetails}
          />
        );
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

          {contestData?.userId._id === currentUser._id && (
            <button
              onClick={() => navigate(`/settings/${contestId}`)}
              className="absolute bottom-4 right-4 bg-gray-200  rounded-full px-3 py-2 shadow-md hover:shadow-lg transition flex items-center gap-2"
            >
              <FaCog />
              Settings
            </button>
          )}
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
              {contestData?.contestName} Squares Contest
            </h1>
            <p className="text-lg text-gray-200 ">
              Created by{" "}
              <span className="font-bold">
                {contestData?.userId?.firstName} {""}
                {contestData?.userId?.lastName}
              </span>{" "}
              at SBPS
            </p>
            <p className="text-lg text-gray-200">
              {contestData?.userId?.email}
            </p>
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
const Home = ({ contestData, loading, error, squaresDetails }) => (
  <ContestGrid
    loading={loading}
    contestData={contestData}
    error={error}
    squaresDetails={squaresDetails}
  />
);
const Chat = () => <div>Chat Content</div>;
const Players = () => <ContestPlayers />;
const Rules = () => <ContestRules />;
const Winners = () => <ContestWinners />;
const Invite = () => <InviteContest />;
const ShareNearby = () => <div>Share Nearby Content</div>;

export default ContestPage;
