import React from "react";
import toast from "react-hot-toast";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = ({ currentUser }) => {
  if (!currentUser) {
    return <Navigate to="/" replace />;
  }
  return <Outlet />;
};

export default ProtectedRoute;
