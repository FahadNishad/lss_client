// components/Loader.js
import React, { useState, useEffect } from "react";
import { Box, CircularProgress } from "@mui/material";

const Loader = ({ children, development = false }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Box
      display="flex"
      justifyContent="center"
      flexDirection={"column"}
      alignItems="center"
      height="100vh"
    >
      <CircularProgress />
    </Box>
  );
};

export default Loader;
