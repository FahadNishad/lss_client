import React from 'react';
import './App.css';
import Header from './Components/Header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './Components/Dashboard';
import Register from './Components/auth_pages/Register';
import Login from './Components/auth_pages/Login';
import ForgotPassword from './Components/auth_pages/ForgotPassword';

function App() {
  return (
    <Router>
      <>
        {/* Header should be inside the Router */}
        <Header />

        {/* Define the Routes */}
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route  path="/forgot-password"  element={<ForgotPassword />} />  {/* New route */}
        </Routes>
      </>
    </Router>
  );
}

export default App;
