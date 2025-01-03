import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import {
  MdOutlineBusinessCenter,
  MdOutlineSportsEsports,
} from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signOutSuccess } from "../redux/user/userSlice";
import CustomDropdown from "./Dropdown";
import Sidebar from "./Sidebar";
import { lighterColor, mainColor } from "./styles";
import CreateContestPopUp from "./Widgets/CreateContestPopUp";

const Header = () => {
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
  const dispatch = useDispatch();
  const handleMouseEnter = (item) => setDropdownOpen(item);
  const { currentUser } = useSelector((state) => state.user);

  const [nflTeams, setNflTeams] = useState([]);
  const [nflLoading, setNflLoading] = useState(false);
  const [nbaTeams, setNBATeams] = useState([]);
  const [nbaLoading, setNBALoading] = useState(false);

  const handleFindClick = () => navigate("view_contest");

  const handleLogout = async () => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/api/business/logout`
      );
      dispatch(signOutSuccess());
      navigate("/");
      toast.success(response?.data?.message || "Logged out successfully");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const getNflTeams = async () => {
      setNflLoading(true);
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_URL}/api/nfl/getNFLTeams`
        );
        setNflTeams(response?.data?.body);
        setNflLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    const getNBATeams = async () => {
      setNBALoading(true);
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_URL}/api/nba/getNbaTeams`
        );
        setNBATeams(response?.data?.body);
        setNBALoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    getNflTeams();
    getNBATeams();
  }, []);

  const handleNflNavigate = (team) => {
    navigate(
      `/nfl-schedules/${team.teamID}?team=${team.teamName}&city=${team.teamCity}`
    );
  };
  const handleNblNavigate = (team) => {
    navigate(
      `/nba-schedules/${team.teamID}?team=${team.teamName}&city=${team.teamCity}`
    );
  };

  return (
    <div>
      <header className="bg-gray-900 fixed top-0 w-full z-50 shadow-md">
        <div
          className="flex justify-between items-center   py-3 max-w-screen-xl"
          style={{ margin: "0 5%" }}
        >
          {/* Logo Section */}
          <div
            className="flex ml-2 items-center cursor-pointer"
            onClick={() => navigate("/")}
          >
            <img
              className="mr-2"
              src="https://superbowlpoolsite.com/img/logos/sbps_light_100px.png"
              width="47"
              alt="SBPS Logo"
            />
            <span className="text-white text-2xl font-bold">LS</span>
          </div>
          <div className="block md:hidden">
            <button onClick={toggleSidebar} className="text-white">
              <svg
                width="24"
                height="24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3 6h18M3 12h18M3 18h18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>

          {/* Navigation Section */}
          <nav className="relative md:block hidden flex-1 ml-10">
            <ul className=" flex space-x-6">
              {["NFL", "NBA", "Sizes", "Find"].map((item) => (
                <li key={item} className="relative" style={{ color: "white" }}>
                  {item === "Find" ? (
                    <span
                      onClick={handleFindClick}
                      className=" cursor-pointer hover:text-[#6366f1]"
                    >
                      {item}
                    </span>
                  ) : (
                    <span
                      onMouseEnter={() => handleMouseEnter(item)}
                      className={` cursor-pointer hover:text-[#6366f1]`}
                    >
                      {item}
                      <span className="inline-block ml-1">
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 18 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="icon-md  text-token-text-tertiary"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M5.29289 9.29289C5.68342 8.90237 6.31658 8.90237 6.70711 9.29289L12 14.5858L17.2929 9.29289C17.6834 8.90237 18.3166 8.90237 18.7071 9.29289C19.0976 9.68342 19.0976 10.3166 18.7071 10.7071L12.7071 16.7071C12.5196 16.8946 12.2652 17 12 17C11.7348 17 11.4804 16.8946 11.2929 16.7071L5.29289 10.7071C4.90237 10.3166 4.90237 9.68342 5.29289 9.29289Z"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </span>
                    </span>
                  )}
                  {dropdownOpen === item && (
                    <ul
                      onMouseLeave={() => setDropdownOpen(null)}
                      style={{ width: "fit-content" }}
                      className="absolute left-0 mt-1 bg-gray-800 rounded shadow-lg"
                    >
                      {/* Different options for each navigation item */}
                      {item === "NFL" && (
                        <>
                          <div
                            style={{ width: "60vw" }}
                            className="absolute left-0 mt-2 bg-gray-800 rounded shadow-lg p-4"
                          >
                            <div className="py-1 grid md:grid-cols-4 grid-cols-1 gap-2">
                              <div>
                                <h4 className="text-light text-white px-3 mb-2">
                                  Popular Contests
                                </h4>
                                <ul className="list-unstyled text-[yellow]">
                                  <li>
                                    <a
                                      className="block px-3 py-1"
                                      href="/super-bowl-squares-contest-online"
                                    >
                                      2025 League Square
                                    </a>
                                  </li>
                                  <li>
                                    <a className="block px-3 py-1" href="/thx">
                                      Thanksgiving Squares
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      className="block px-3 py-1"
                                      href="/christmas-squares-fundraiser-online"
                                    >
                                      Christmas Squares
                                    </a>
                                  </li>
                                  <li>
                                    <a className="block px-3 py-1" href="/mnf">
                                      Monday Night Squares
                                    </a>
                                  </li>
                                </ul>
                              </div>
                              {nflLoading ? (
                                <div className="col-span-full flex justify-center items-center">
                                  <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full border-gray-300 border-t-white"></div>
                                  <span className="ml-2 text-white">
                                    Loading team data...
                                  </span>
                                </div>
                              ) : (
                                Array.from(
                                  { length: Math.ceil(nflTeams.length / 13) },
                                  (_, i) => (
                                    <div key={i}>
                                      <ul className="list-unstyled">
                                        {nflTeams
                                          .slice(i * 13, i * 13 + 13)
                                          .map((team, index) => (
                                            <li key={index}>
                                              <a
                                                className="block text-white hover:bg-gray-700 px-3 py-1 cursor-pointer"
                                                onClick={() =>
                                                  handleNflNavigate(team)
                                                }
                                              >
                                                {team.teamCity} {team.teamName}
                                              </a>
                                            </li>
                                          ))}
                                      </ul>
                                    </div>
                                  )
                                )
                              )}
                            </div>
                          </div>
                        </>
                      )}

                      {item === "NBA" && (
                        <>
                          <div
                            style={{ width: "60vw" }}
                            className="absolute left-0 mt-2 bg-gray-800 rounded shadow-lg p-4"
                          >
                            <div className="py-1 grid md:grid-cols-3 grid-cols-1 gap-2">
                              {nbaLoading ? (
                                <div className="col-span-full flex justify-center items-center">
                                  <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full border-gray-300 border-t-white"></div>
                                  <span className="ml-2 text-white">
                                    Loading nba team data...
                                  </span>
                                </div>
                              ) : (
                                Array.from(
                                  { length: Math.ceil(nbaTeams?.length / 13) },
                                  (_, i) => (
                                    <div key={i}>
                                      <ul className="list-unstyled">
                                        {nbaTeams
                                          ?.slice(i * 13, i * 13 + 13)
                                          .map((team, index) => (
                                            <li key={index}>
                                              <a
                                                className="block text-white hover:bg-gray-700 px-3 py-1 cursor-pointer"
                                                onClick={() =>
                                                  handleNblNavigate(team)
                                                }
                                              >
                                                {team.teamCity} {team.teamName}
                                              </a>
                                            </li>
                                          ))}
                                      </ul>
                                    </div>
                                  )
                                )
                              )}
                            </div>
                          </div>
                        </>
                      )}

                      {item === "Sizes" && (
                        <>
                          <ul className="absolute w-[15vw] text-center bg-gray-800 shadow-lg">
                            <li>
                              <a
                                className="block px-4 py-2 text-white hover:bg-gray-700"
                                href="#"
                              >
                                100 Squares
                              </a>
                            </li>
                          </ul>
                        </>
                      )}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          {/* Buttons Section */}
          <div className="md:flex hidden space-x-4 ml-8 relative">
            {currentUser ? (
              <CustomDropdown
                currentUser={currentUser}
                handleLogout={handleLogout}
                mainColor={mainColor}
                lighterColor={lighterColor}
              />
            ) : (
              <>
                <span
                  className="flex items-center gap-2 bg-green-500 text-white py-2 px-4 
                  rounded cursor-pointer hover:bg-green-600 duration-200"
                  onClick={() => setIsOpen(true)}
                >
                  <MdOutlineBusinessCenter size={18} /> {/* Business Icon */}
                  Business Sign In
                </span>
                <span
                  className={`flex items-center gap-2 bg-[${mainColor}] text-white py-2 px-4 rounded cursor-pointer hover:bg-[${lighterColor}] duration-200`}
                  onClick={() => navigate("/login?role=player")}
                >
                  <MdOutlineSportsEsports size={18} /> {/* Player Icon */}
                  Player Sign In
                </span>
              </>
            )}
          </div>
        </div>
        {sidebarOpen && (
          <div className="md:hidden block">
            {" "}
            <Sidebar closeSidebar={toggleSidebar} />{" "}
          </div>
        )}
      </header>
      <CreateContestPopUp
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        number={"100"}
      />
    </div>
  );
};

export default Header;
