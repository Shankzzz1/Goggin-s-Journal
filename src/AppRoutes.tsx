import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./login";
import SignUp from "./Signup";
import Calendarc from "./Calendarc";
import JournalPage from "./JournalPage";

const AppRoutes: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/journal" element={<JournalPage/>} />
        <Route path="/calendarc" element={<Calendarc/>} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;

