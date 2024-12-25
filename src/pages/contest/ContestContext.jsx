import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

// Create the context
const ContestContext = createContext();

// Provider component
export const ContestProvider = ({ children, contestId }) => {
  const [contestData, setContestData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchContestData = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_URL}/api/contest/getContest/${contestId}`
        );
        setContestData(response.data);
      } catch (err) {
        console.error("Error fetching contest data:", err);
        setError(err?.response?.data?.message);
      } finally {
        setLoading(false);
      }
    };

    if (contestId) {
      fetchContestData();
    }
  }, [contestId]);

  return (
    <ContestContext.Provider value={{ contestData, loading, error }}>
      {children}
    </ContestContext.Provider>
  );
};

// Custom hook for accessing context
export const useContest = () => {
  return useContext(ContestContext);
};
