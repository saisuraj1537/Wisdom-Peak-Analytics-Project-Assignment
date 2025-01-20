import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import UserDetail from "./components/UserDetail";
import ThemeToggle from "./components/ThemeToggle";

const App = () => {
  return (
    <Router>
      <ThemeToggle />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user/:userId" element={<UserDetail />} />
      </Routes>
    </Router>
  );
};

export default App;
