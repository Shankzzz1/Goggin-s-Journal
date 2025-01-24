import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./login";
import SignUp from "./Signup";

const AppRoutes: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
