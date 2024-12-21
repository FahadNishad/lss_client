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
import { useSelector } from "react-redux";

export default function ReserveSquareDrawer({
  isOpen,
  toggleDrawer,
  squareId,
}) {
  const { contestId } = useParams();
  const [loading, setLoading] = useState(false);
  const { currentUser } = useSelector((state) => state.user);

  const handleSave = async () => {
    console.log("this is square id", squareId);
    const dataToSend = {
      contestId,
      squareId,
      userId: currentUser?._id,
      userName: currentUser?.firstName,
    };

    try {
      setLoading(true);
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/api/contest/reserveSquare`,
        dataToSend
      );

      console.log("square reserved go to pay amount:", response.data);
      setLoading(false);
      toast.success("square reserved go to pay amount");
      toggleDrawer(false);
    } catch (error) {
      console.error(
        "Error updating contest:",
        error.response?.data || error.message
      );
      setLoading(false);
      toast.error("Something went wrong please try latter");
    }
  };

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
          Are u sure you want to reserve this square?
        </Typography>
        <ButtonUI loading={loading} className={"py-3"} onClick={handleSave}>
          Submit
        </ButtonUI>
      </Box>
    </Drawer>
  );
}
