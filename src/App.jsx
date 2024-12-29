import React, { useEffect, useState, Suspense, lazy } from "react";
import { Toaster } from "react-hot-toast";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import "./App.css";
import { Elements } from "@stripe/react-stripe-js";
import { stripePromise } from "./stripeConfig";
import ProtectedRoute from "./Components/ProtectedRoutes";
import { useSelector } from "react-redux";
import ActivateAccount from "./pages/ActivateAccount";
const SquareCheckout = lazy(() => import("./pages/SquareCheckout"));

const MyContestPage = lazy(() => import("./pages/contest/MyContests"));
const PasswordManagement = lazy(() =>
  import("./pages/Dashbaord/PasswordManagement")
);
const NotFoundPage = lazy(() => import("./pages/NotFound"));
const DashboardLayout = lazy(() => import("./pages/Dashbaord"));
const AccountDetails = lazy(() => import("./pages/Dashbaord/AccountDetails"));
const LandingPage = lazy(() => import("./Components/Dashboard"));
const Header = lazy(() => import("./Components/Header"));
const ForgotPassword = lazy(() =>
  import("./Components/auth_pages/ForgotPassword")
);
const Login = lazy(() => import("./Components/auth_pages/Login"));
const Register = lazy(() => import("./Components/auth_pages/Register"));
const ProfileInReview = lazy(() => import("./pages/Business/ProfileInReview"));
const NFLGames = lazy(() => import("./pages/Games/NflGames"));
const NBAGames = lazy(() => import("./pages/Games/NbsGames"));
const Contest = lazy(() => import("./pages/contest/Contest"));
const CreateContest = lazy(() => import("./pages/contest/CreateContest"));
const Setting = lazy(() => import("./pages/Setting/Setting"));
function App() {
  const [isSessionActive, setIsSessionActive] = useState(null);

  const { currentUser } = useSelector((state) => state?.user);

  // const checkSession = async () => {
  //   try {
  //     const user = localStorage.getItem("user");
  //     if (user) {
  //       const parsedUser = JSON.parse(user);
  //       setIsSessionActive(Boolean(parsedUser));
  //       return;
  //     }

  //     const response = await fetch(
  //       `${process.env.REACT_APP_API_URL}/check-session`,
  //       {
  //         method: "GET",
  //         credentials: "include",
  //       }
  //     );
  //     if (response.ok) {
  //       const data = await response.json();
  //       setIsSessionActive(true);
  //       localStorage.setItem("email", data.user.email);
  //       localStorage.setItem("userName", data.user.userName);
  //     } else {
  //       setIsSessionActive(false);
  //       console.log("Session expired or inactive");
  //     }
  //   } catch (error) {
  //     console.error("Error checking session", error);
  //     setIsSessionActive(false);
  //   }
  // };

  // useEffect(() => {
  //   checkSession();
  // }, []);

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
          <Route path="/" element={<LandingPage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/nfl-schedules/:teamID" element={<NFLGames />} />
          <Route path="/nba-games" element={<NBAGames />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route element={<ProtectedRoute currentUser={currentUser} />}>
            <Route path="/profile-in-review" element={<ProfileInReview />} />
            <Route path="/contest/:contestId" element={<Contest />} />
            <Route path="/settings/:contestId" element={<Setting />} />
            <Route path="/create-contest" element={<CreateContest />} />
            <Route path="/my-contests" element={<MyContestPage />} />
            <Route
              path="/activate-account"
              element={
                <Elements stripe={stripePromise}>
                  <ActivateAccount />
                </Elements>
              }
            />
            <Route
              path="/square-payment"
              element={
                <Elements stripe={stripePromise}>
                  <SquareCheckout />
                </Elements>
              }
            />
            <Route path="/dashboard/*" element={<DashboardLayout />}>
              <Route path="account-details" element={<AccountDetails />} />
              <Route
                path="password-management"
                element={<PasswordManagement />}
              />
            </Route>
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
