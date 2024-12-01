import React, { useEffect, useState, Suspense, lazy } from "react";
import { Toaster } from "react-hot-toast";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import "./App.css";

// Lazy load components
const Dashboard = lazy(() => import("./Components/Dashboard"));
const Header = lazy(() => import("./Components/Header"));
const ForgotPassword = lazy(() =>
  import("./Components/auth_pages/ForgotPassword")
);
const Login = lazy(() => import("./Components/auth_pages/Login"));
const Register = lazy(() => import("./Components/auth_pages/Register"));
const ProfileInReview = lazy(() => import("./pages/Business/ProfileInReview"));
const LiveGames = lazy(() => import("./pages/LiveGames"));
const Contest = lazy(() => import("./pages/contest/Contest"));
const CreateContest = lazy(() => import("./pages/contest/CreateContest"));

function App() {
  const [isSessionActive, setIsSessionActive] = useState(null);

  const checkSession = async () => {
    try {
      const user = localStorage.getItem("user");
      if (user) {
        const parsedUser = JSON.parse(user);
        setIsSessionActive(Boolean(parsedUser));
        return;
      }

      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/check-session`,
        {
          method: "GET",
          credentials: "include",
        }
      );
      if (response.ok) {
        const data = await response.json();
        setIsSessionActive(true);
        localStorage.setItem("email", data.user.email);
        localStorage.setItem("userName", data.user.userName);
      } else {
        setIsSessionActive(false);
        console.log("Session expired or inactive");
      }
    } catch (error) {
      console.error("Error checking session", error);
      setIsSessionActive(false);
    }
  };

  useEffect(() => {
    checkSession();
  }, []);

  return (
    <Router>
      <Suspense
        fallback={
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              minHeight: "100vh",
            }}
          >
            <CircularProgress />
          </Box>
        }
      >
        <Header isSessionActive={isSessionActive} />
        <Toaster position="top-center" />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile-in-review" element={<ProfileInReview />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/contest/:contestId" element={<Contest />} />
          <Route path="/create-contest" element={<CreateContest />} />
          <Route path="/live-games" element={<LiveGames />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
