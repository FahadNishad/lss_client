import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import toast from "react-hot-toast";
import ButtonUI from "../../Components/Button/Button";
import { useSelector } from "react-redux";
import { FaEdit } from "react-icons/fa";
import { Skeleton } from "@mui/material";

const ContestRules = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const [currentRule, setCurrentRule] = useState(null);
  const [inputValue, setInputValue] = useState("");
  const [contestData, setContestData] = useState({});
  const [loading, setLoading] = useState(false);
  const [submitLoading, setSubmitLoading] = useState(false);
  const { currentUser } = useSelector((state) => state.user);

  const { contestId } = useParams();

  const fetchContestData = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/contest/getContest/${contestId}`
      );
      setContestData(response.data);
      setLoading(false);
    } catch (err) {
      console.error("Error fetching contest data:", err);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchContestData();
  }, []);

  const handleEditClick = (rule) => {
    setCurrentRule(rule);
    setInputValue(rule.description);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setCurrentRule(null);
    setInputValue("");
  };

  const rulesData = [
    {
      title: "General Rules",
      description: contestData?.contestGeneralRules,
      apiKey: "contestGeneralRules",
      buttonLabel: "Edit Rules",
    },
    {
      title: "Prizes",
      description: contestData?.prizesInstructions,
      apiKey: "prizesInstructions",
      buttonLabel: "Edit Prizes",
    },
    {
      title: "Payments",
      description: contestData?.paymentInstructions,
      apiKey: "paymentInstructions",
      buttonLabel: "Edit Payments",
    },
  ];

  const handleSubmit = async () => {
    if (currentRule) {
      try {
        setSubmitLoading(true);
        const payload = {
          contestId,
          [currentRule.apiKey]: inputValue,
        };

        const response = await axios.post(
          `${process.env.REACT_APP_API_URL}/api/contest/updateRules`,
          payload
        );

        setSubmitLoading(false);
        toast.success(`${currentRule?.title} updated successfully!`);
        fetchContestData();
        handleCloseDialog();
      } catch (error) {
        setSubmitLoading(false);
        console.error("Error updating rule:", error);
        toast.error("Error updating rule. Please try again.");
      }
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <h1 className="text-2xl font-bold mb-6" style={{ color: "#474747" }}>
        Rules
      </h1>
      {loading ? (
        <div className="space-y-6">
          {Array.from({ length: 3 }).map((_, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg p-6 flex flex-col space-y-4"
            >
              <Skeleton
                variant="text"
                width="600px"
                height={40}
                animation="wave"
              />
              <Skeleton
                variant="rectangular"
                height={100}
                width={"600px"}
                animation="wave"
                className="rounded-lg"
              />
              <Skeleton
                variant="rectangular"
                width={"600px"}
                height={40}
                animation="wave"
                className="rounded-lg self-end"
              />
            </div>
          ))}
        </div>
      ) : (
        <div className="space-y-6">
          {rulesData.map((rule, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg p-6 flex flex-col space-y-4"
            >
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-bold text-white bg-gray-900 px-4 py-2 rounded-lg">
                  {rule.title}
                </h3>
                {currentUser?.role === "business" &&
                  currentUser?._id === contestData?.userId && (
                    <button
                      className="text-sm text-white bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded flex justify-center items-center gap-2"
                      onClick={() => handleEditClick(rule)}
                    >
                      {rule.buttonLabel}
                      <FaEdit />
                    </button>
                  )}
              </div>
              <p className="text-gray-700 whitespace-pre-line">
                {rule.description || "No data available"}
              </p>
            </div>
          ))}
        </div>
      )}

      {openDialog && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white rounded-lg shadow-lg p-6 w-[30rem]">
            <h2 className="text-xl font-bold mb-4">{currentRule?.title}</h2>
            <textarea
              className="w-full border border-gray-300 rounded-lg p-2 mb-4"
              rows="4"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <div className="flex justify-end space-x-4">
              <button
                className="bg-gray-300 hover:bg-gray-400 px-4 py-2 rounded"
                onClick={handleCloseDialog}
              >
                Cancel
              </button>
              <ButtonUI
                className="text-white px-4 py-2 rounded"
                onClick={handleSubmit}
                loading={submitLoading}
              >
                Submit
              </ButtonUI>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContestRules;
