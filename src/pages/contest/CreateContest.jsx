import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import ButtonUI from "../../Components/Button/Button";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const CreateContest = () => {
  const [loading, setLoading] = useState(false);
  const [contestId, setContestId] = useState("");
  const { currentUser } = useSelector((state) => state?.user);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    try {
      setLoading(true);
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/api/contest/create`,
        {
          ...data,
          userId: currentUser._id,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      toast.success(response?.data?.message || "Contest created successfully");
      setContestId(response?.data?.contestId);
      navigate(`/contest/${response?.data?.contestId}`);
    } catch (error) {
      if (error.response) {
        toast.error(error?.response?.data?.message || "An error occurred");
      } else if (error.request) {
        toast.error("No response received from the server");
      } else {
        toast.error(error.message);
      }
      console.log(error);
    } finally {
      setLoading(false);
    }
    reset();
  };

  return (
    <div
      className="h-[100vh] bg-cover bg-center flex justify-center items-center py-10"
      style={{
        backgroundImage: `url('https://wallpapers.com/images/featured/football-players-hd-emqpbm760h1avxrx.jpg')`, // Replace this URL with any image URL you like
      }}
    >
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-4xl opacity-95">
        <h2 className="text-3xl font-bold text-center mb-6">
          Create New Contest
        </h2>

        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Contest Name */}
            <div>
              <label htmlFor="contestName" className="block text-gray-700 mb-2">
                Contest Name
              </label>
              <input
                type="text"
                id="contestName"
                className={`w-full p-3 border rounded-lg focus:outline-none ${
                  errors.contestName ? "border-red-500" : "border-gray-300"
                }`}
                {...register("contestName", {
                  required: "Contest name is required",
                })}
              />
              {errors.contestName && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.contestName.message}
                </p>
              )}
            </div>

            {/* Top Team Name */}
            <div>
              <label htmlFor="topTeamName" className="block text-gray-700 mb-2">
                Top Team Name
              </label>
              <input
                type="text"
                id="topTeamName"
                className={`w-full p-3 border rounded-lg focus:outline-none ${
                  errors.topTeamName ? "border-red-500" : "border-gray-300"
                }`}
                {...register("topTeamName", {
                  required: "Top team name is required",
                })}
              />
              {errors.topTeamName && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.topTeamName.message}
                </p>
              )}
            </div>

            {/* Left Team Name */}
            <div>
              <label
                htmlFor="leftTeamName"
                className="block text-gray-700 mb-2"
              >
                Left Team Name
              </label>
              <input
                type="text"
                id="leftTeamName"
                className={`w-full p-3 border rounded-lg focus:outline-none ${
                  errors.leftTeamName ? "border-red-500" : "border-gray-300"
                }`}
                {...register("leftTeamName", {
                  required: "Left team name is required",
                })}
              />
              {errors.leftTeamName && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.leftTeamName.message}
                </p>
              )}
            </div>

            {/* Player Password */}
            <div>
              <label
                htmlFor="playerPassword"
                className="block text-gray-700 mb-2"
              >
                Player Password
              </label>
              <input
                type="password"
                id="playerPassword"
                className={`w-full p-3 border rounded-lg focus:outline-none ${
                  errors.playerPassword ? "border-red-500" : "border-gray-300"
                }`}
                {...register("playerPassword", {
                  required: "Password is required",
                })}
              />
              {errors.playerPassword && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.playerPassword.message}
                </p>
              )}
            </div>

            {/* Grid Size */}
            <div>
              <label htmlFor="gridSize" className="block text-gray-700 mb-2">
                Grid Size
              </label>
              <input
                type="number"
                id="gridSize"
                className={`w-full p-3 border rounded-lg focus:outline-none ${
                  errors.gridSize ? "border-red-500" : "border-gray-300"
                }`}
                {...register("gridSize", {
                  required: "Grid size is required",
                  validate: (value) =>
                    [25, 50, 100].includes(Number(value)) ||
                    "Grid size must be 25, 50, or 100",
                })}
              />
              {errors.gridSize && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.gridSize.message}
                </p>
              )}
            </div>
          </div>

          {/* Submit Button */}
          <div>
            <ButtonUI loading={loading} onClick={handleSubmit(onSubmit)}>
              Create Contest
            </ButtonUI>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateContest;
