import React, { useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ButtonUI from "../../Button/Button";
import axios from "axios";
import { useParams } from "react-router-dom";
import toast from "react-hot-toast";

export default function ContestDetailsDrawer({
  isOpen,
  toggleDrawer,
  contestData,
}) {
  const { contestId } = useParams();
  const [loading, setLoading] = useState(false);
  const [details, setDetails] = useState({
    contestName: "",
    entryCost: Number,
  });

  const handleChange = (field, value) => {
    setDetails({ ...details, [field]: value });
  };

  const handleSave = async () => {
    try {
      setLoading(true);
      const response = await axios.put(
        `${process.env.REACT_APP_API_URL}/api/contest/updateContest`,
        {
          contestId,
          ...details,
        }
      );

      console.log("Contest updated successfully:", response.data);
      setLoading(false);
      toast.success("Contest updated successfully");
      toggleDrawer(false);
    } catch (error) {
      console.error(
        "Error updating contest:",
        error.response?.data || error.message
      );
      setLoading(false);
      toast.error("Error updating contest");
    }
  };

  console.log("this is contest data", contestData);

  return (
    <Drawer
      slotProps={{
        backdrop: {
          sx: {
            backgroundColor: "rgb(255 255 255 / 45%)",
          },
        },
      }}
      anchor="right"
      open={isOpen}
      onClose={() => toggleDrawer(false)}
    >
      <Box sx={{ width: 400, padding: 3 }} role="presentation">
        <Typography variant="h6" sx={{ marginBottom: 2 }}>
          Edit Contest Details
        </Typography>
        <TextField
          fullWidth
          label="Contest Name"
          value={details.contestName}
          onChange={(e) => handleChange("contestName", e.target.value)}
          sx={{ marginBottom: 2 }}
        />

        <TextField
          fullWidth
          type="number"
          label="Entry Cost $"
          value={details.entryCost || contestData?.entryCost}
          onChange={(e) => handleChange("entryCost", e.target.value)}
          sx={{ marginBottom: 2 }}
        />

        <ButtonUI loading={loading} className={"py-3"} onClick={handleSave}>
          Save Changes
        </ButtonUI>
      </Box>
    </Drawer>
  );
}
