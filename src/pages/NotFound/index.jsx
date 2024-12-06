import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen  text-center">
      <h1 className="text-9xl font-extrabold mb-6">404</h1>
      <h2 className="text-3xl font-semibold mb-4">Page Not Found</h2>
      <p className="text-lg mb-8 max-w-md">
        Oops! The page you're looking for doesn't exist or has been moved. Let's
        get you back on track!
      </p>
      <Link
        to="/"
        className="bg-white text-darkerColor px-8 py-3 rounded-lg font-medium shadow-lg hover:scale-105 transition-transform duration-300"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFoundPage;
