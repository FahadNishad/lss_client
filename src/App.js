import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './Components/Header';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import Dashboard from './Components/Dashboard';
import Register from './Components/auth_pages/Register';
import Login from './Components/auth_pages/Login';
import ForgotPassword from './Components/auth_pages/ForgotPassword';
import ViewContest from './Components/viewContest';

function App() {
  const [isSessionActive, setIsSessionActive] = useState(null);

  // Define a custom hook to access `useNavigate` after `Router` has been initialized
 


  const checkSession = async () => {
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/check-session`, {
        method: 'GET',
        credentials: 'include', // To send cookies with the request
      });
      if (response.ok) {
        const data = await response.json();
        setIsSessionActive(true);
        localStorage.setItem("email", data.user.email)
        localStorage.setItem("userName", data.user.userName)
      } else {
        setIsSessionActive(false);
        console.log('Session expired or inactive');
      }
    } catch (error) {
      console.error('Error checking session', error);
      setIsSessionActive(false);
    }
  };
  
  useEffect(() => {
    checkSession();
  }, []);
  

    // Redirect or handle session logic

  return (
    <Router>
      <>
       {/* This handles session checking and redirection */}

        <Header isSessionActive={isSessionActive} /> {/* Header is now correctly placed inside the Router */}

        {/* Define the Routes */}
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPassword />} /> {/* New route */}
          <Route path="/view_contest" element={<ViewContest />} />
        </Routes>
      </>
    </Router>
  );
}

export default App;
