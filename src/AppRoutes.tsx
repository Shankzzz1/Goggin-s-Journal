import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./login";
import SignUp from "./Signup";
import Calendarc from "./Calendarc";
import JournalPage from "./JournalPage";
import Textimages from "./RichEditor";
import Home from "./Home"
import Contact  from "./Contact"

const AppRoutes: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/journal" element={<JournalPage/>} />
        <Route path="/calendarc" element={<Calendarc/>} />
        <Route path="/textImage" element={<Textimages/>}/>
        <Route path="/" element={<Home/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
    </Router>
  );
};

export default AppRoutes;

