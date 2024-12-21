import React, { useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import ButtonUI from "../../Button/Button";
import toast from "react-hot-toast";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function TopLeftTeamsDrawer({ isOpen, toggleDrawer }) {
  const { contestId } = useParams();
  const [labels, setLabels] = useState({
    topTeamName: "",
    leftTeamName: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (field, value) => {
    setLabels({ ...labels, [field]: value });
  };

  const handleSave = async () => {
    setLoading(true);
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/api/contest/updateContest`,
        {
          contestId,
          ...labels,
        }
      );
      toast.success("Contest labels updated successfully");
      console.log("Updated contest:", response.data);
      toggleDrawer(false);
    } catch (error) {
      console.error(
        "Error updating contest:",
        error.response?.data || error.message
      );
      toast.error("Error updating contest labels");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Drawer anchor="right" open={isOpen} onClose={() => toggleDrawer(false)}>
      <Box sx={{ width: 400, padding: 3 }} role="presentation">
        <Typography variant="h6" sx={{ marginBottom: 2 }}>
          Edit Top and Left Teams
        </Typography>
        <TextField
          fullWidth
          label="Top Label"
          value={labels.topTeamName}
          onChange={(e) => handleChange("topTeamName", e.target.value)}
          sx={{ marginBottom: 3 }}
        />
        <TextField
          fullWidth
          label="Left Label"
          value={labels.leftTeamName}
          onChange={(e) => handleChange("leftTeamName", e.target.value)}
          sx={{ marginBottom: 3 }}
        />
        <Typography
          variant="body2"
          sx={{
            color: "red",
            backgroundColor: "rgba(255, 0, 0, 0.1)",
            padding: 1,
            borderRadius: 1,
            marginBottom: 3,
          }}
        >
          <b>PLEASE NOTE:</b> If you have team names defined at the Grid level,
          those will override these Contest-level default settings. Check the
          bottom of the Grid Setup page if these aren't sticking.
        </Typography>

        <ButtonUI loading={loading} onClick={handleSave} className={"py-3"}>
          Save Changes
        </ButtonUI>
      </Box>
    </Drawer>
  );
}
