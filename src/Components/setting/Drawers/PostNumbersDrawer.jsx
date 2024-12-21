import React, { useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Alert from "@mui/material/Alert";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useParams } from "react-router-dom";
import {
  mainColor,
  lighterColor,
  darkerColor,
} from "./../../../Components/styles";

export default function PostNumbersDrawer({ isOpen, toggleDrawer }) {
  const { contestId } = useParams();
  const [topNumbers, setTopNumbers] = useState("");
  const [leftNumbers, setLeftNumbers] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [loadingRandom, setLoadingRandom] = useState(false);
  const [loadingClear, setLoadingClear] = useState(false);
  const [loadingManual, setLoadingManual] = useState(false);

  const handleAssignManualNumbers = async () => {
    const randomRowNumbers = topNumbers.split(",").map((item) => item.trim());
    const randomColNumbers = leftNumbers.split(",").map((item) => item.trim());
    if (randomRowNumbers.length === 0 || randomColNumbers.length === 0) {
      setErrorMessage("Both top and left numbers are required.");
      return;
    }

    try {
      setLoadingManual(true);
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/api/contest/assignManualNumbers`,
        {
          contestId,
          randomRowNumbers,
          randomColNumbers,
        }
      );

      toast.success("Manual numbers assigned successfully!");
      toggleDrawer(false);
    } catch (error) {
      console.error("Error assigning manual numbers:", error);
      toast.error(
        error.response?.data?.message ||
          "Failed to assign manual numbers. Please try again."
      );
    } finally {
      setLoadingManual(false);
    }
  };

  const handleRandomNumber = async () => {
    try {
      setLoadingRandom(true);
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/api/contest/assignRandomNumbers`,
        { contestId }
      );
      setLoadingRandom(false);
      toast.success("Random numbers assigned successfully!");
    } catch (error) {
      setLoadingRandom(false);
      console.error("Error assigning random numbers:", error);
      toast.error("Failed to assign random numbers. Please try again.");
    }
  };

  const handleClear = async () => {
    try {
      setLoadingClear(true);
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/api/contest/clearNumbers`,
        { contestId }
      );
      toast.success("Random numbers cleared successfully!");
      setTopNumbers("");
      setLeftNumbers("");
    } catch (error) {
      console.log("this is error", error);
      toast.error("Failed to clear numbers. Please try again.");
    } finally {
      setLoadingClear(false);
    }
  };

  return (
    <Drawer anchor="right" open={isOpen} onClose={() => toggleDrawer(false)}>
      <Box sx={{ width: 400, padding: 3 }} role="presentation">
        <Typography variant="h6" sx={{ marginBottom: 2 }}>
          Posting the Numbers
        </Typography>

        {/* Generate Random Numbers Section */}
        <Button
          variant="outlined"
          fullWidth
          onClick={handleRandomNumber}
          sx={{
            backgroundColor: mainColor,
            color: "white",
            marginBottom: 2,
            "&:hover": { backgroundColor: darkerColor },
          }}
          disabled={loadingRandom}
        >
          {loadingRandom ? "Generating..." : "Generate Random Numbers"}
        </Button>

        {/* Clear Numbers Section */}
        <Button
          variant="outlined"
          fullWidth
          onClick={handleClear}
          sx={{
            backgroundColor: lighterColor,
            color: "white",
            marginBottom: 2,
            "&:hover": { backgroundColor: mainColor },
          }}
          disabled={loadingClear}
        >
          {loadingClear ? "Clearing..." : "Clear Numbers"}
        </Button>

        {/* Input Fields */}
        {/* <TextField
          fullWidth
          label="Top Numbers"
          value={topNumbers}
          onChange={(e) => setTopNumbers(e.target.value)}
          sx={{ marginBottom: 2 }}
        />
        <TextField
          fullWidth
          label="Left Numbers"
          value={leftNumbers}
          onChange={(e) => setLeftNumbers(e.target.value)}
          sx={{ marginBottom: 2 }}
        /> */}

        {/* Assign Manual Numbers Section */}
        {/* <Button
          variant="outlined"
          fullWidth
          onClick={handleAssignManualNumbers}
          sx={{
            backgroundColor: mainColor,
            color: "white",
            marginBottom: 2,
            "&:hover": { backgroundColor: darkerColor },
          }}
          disabled={loadingManual}
        >
          {loadingManual ? "Assigning..." : "Assign Manual Numbers"}
        </Button> */}

        {/* Error Message */}
        {/* {errorMessage && (
          <Alert severity="error" sx={{ marginBottom: 2 }}>
            {errorMessage}
          </Alert>
        )} */}
      </Box>
    </Drawer>
  );
}
