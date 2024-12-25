import React, { useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ButtonUI from "../../Button/Button";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";
import { CheckBox } from "@mui/icons-material";

export default function ReserveSquareDrawer({
  isOpen,
  toggleDrawer,
  squareData,
  entryCost,
}) {
  const { contestId } = useParams();
  const [loading, setLoading] = useState(false);
  const { currentUser } = useSelector((state) => state.user);
  const navigate = useNavigate();

  const handleSave = async () => {
    const dataToSend = {
      contestId,
      squareId: squareData?._id,
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
      handlePayment();
    } catch (error) {
      console.error(
        "Error updating contest:",
        error.response?.data || error.message
      );
      setLoading(false);
      toast.error("Something went wrong or your limit is reached");
    }
  };

  const handlePayment = () => {
    navigate(
      `/square-payment?contest=${contestId}&square=${squareData?._id}&entryCost=${entryCost}`
    );
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
      {squareData?.reserved ? (
        <>
          <Box sx={{ width: 400, padding: 3 }} role="presentation">
            <Typography variant="h6" sx={{ marginBottom: 2 }}>
              You have already reserved this square
            </Typography>
            {squareData?.paymentStatus === "completed" ? (
              <>
                <Button
                  startIcon={<CheckBox />}
                  variant="contained"
                  sx={{ marginBottom: 2, textTransform: "capitalize" }}
                >
                  Payment Done
                </Button>
              </>
            ) : (
              <>
                <ButtonUI
                  loading={loading}
                  className={"py-3"}
                  onClick={handlePayment}
                >
                  Go to pay amount
                </ButtonUI>
              </>
            )}
          </Box>
        </>
      ) : (
        <Box sx={{ width: 400, padding: 3 }} role="presentation">
          <Typography variant="h6" sx={{ marginBottom: 2 }}>
            Are u sure you want to reserve this square?
          </Typography>
          <ButtonUI loading={loading} className={"py-3"} onClick={handleSave}>
            Submit
          </ButtonUI>
        </Box>
      )}
    </Drawer>
  );
}
