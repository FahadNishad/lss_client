import React, { useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Alert from "@mui/material/Alert";
import ButtonUI from "../../Button/Button";
import axios from "axios";
import { useParams } from "react-router-dom";
import toast from "react-hot-toast";

export default function PasswordDrawer({
  isOpen,
  toggleDrawer,
  password,
  setPassword,
}) {
  const { contestId } = useParams();
  const [loading, setLoading] = useState(false);

  const handleSave = async () => {
    if (!password) {
      return;
    }

    try {
      setLoading(true);
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/api/contest/updateContest`,
        {
          contestId,
          playerPassword: password,
        }
      );

      console.log("Password updated successfully:", response.data);
      setLoading(false);
      toast.success("Contest updated successfully");
      toggleDrawer(false);
    } catch (error) {
      console.error(
        "Error updating password:",
        error.response?.data || error.message
      );
      setLoading(false);
      toast.error("Failed to update contest");
    }
  };

  return (
    <Drawer anchor="right" open={isOpen} onClose={() => toggleDrawer(false)}>
      <Box
        sx={{ width: 400, padding: 3 }}
        role="presentation"
        onKeyDown={(e) => e.key === "Escape" && toggleDrawer(false)}
      >
        <Typography variant="h6" sx={{ marginBottom: 2 }}>
          Contest Password
        </Typography>
        <Typography variant="body2" sx={{ marginBottom: 2 }}>
          Need to change the password required for players to reserve squares?
        </Typography>
        <Alert
          severity="warning"
          sx={{
            marginBottom: 2,
            color: "rgba(255, 0, 0, 0.7)",
            backgroundColor: "rgba(255, 0, 0, 0.1)",
          }}
        >
          Please note that if you leave this password blank, anyone with the
          link can join!
        </Alert>
        <TextField
          fullWidth
          label="Player Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          sx={{ marginBottom: 3 }}
        />
        <ButtonUI loading={loading} className={"py-3"} onClick={handleSave}>
          Save Changes
        </ButtonUI>
      </Box>
    </Drawer>
  );
}
