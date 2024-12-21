import axios from "axios";
import React, { useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Switch from "@mui/material/Switch";
import FormControlLabel from "@mui/material/FormControlLabel";
import ButtonUI from "../../Button/Button";
import { useParams } from "react-router-dom";
import toast from "react-hot-toast";

export default function PlayerPermissionsDrawer({ isOpen, toggleDrawer }) {
  const { contestId } = useParams();
  const [loading, setLoading] = useState(false);
  const [permissions, setPermissions] = useState({
    contestStatus: "open",
    canPlayersEdit: true,
  });

  console.log(permissions);

  const handleChange = (field, value) => {
    setPermissions({ ...permissions, [field]: value });
  };

  const handleSave = async () => {
    setLoading(true);
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/api/contest/updateContest`,
        {
          contestId,
          ...permissions,
        }
      );
      console.log("Contest updated successfully:", response.data);
      toast.success("Contest updated successfully");
      toggleDrawer(false);
    } catch (error) {
      console.error(
        "Error updating contest:",
        error.response?.data || error.message
      );
      toast.error("Error updating contest");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Drawer anchor="right" open={isOpen} onClose={() => toggleDrawer(false)}>
      <Box sx={{ width: 400, padding: 3 }} role="presentation">
        <Typography variant="h6" sx={{ marginBottom: 2 }}>
          Edit Player Permissions
        </Typography>
        <TextField
          fullWidth
          label="Contest Status"
          value={permissions.contestStatus}
          onChange={(e) => handleChange("contestStatus", e.target.value)}
          sx={{ marginBottom: 3 }}
        />
        <FormControlLabel
          control={
            <Switch
              checked={permissions.canPlayersEdit}
              onChange={(e) => handleChange("canPlayersEdit", e.target.checked)}
            />
          }
          label="Can Players Edit/Delete Themselves?"
          sx={{ marginBottom: 3 }}
        />
        <ButtonUI loading={loading} onClick={handleSave} className={"py-3"}>
          Save Changes
        </ButtonUI>
      </Box>
    </Drawer>
  );
}
