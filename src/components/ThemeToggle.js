import React, { useState, useEffect } from "react";
import "./ThemeToggle.css";

const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    document.body.className = isDarkMode ? "dark" : "";
  }, [isDarkMode]);

  return (
    <div className="theme-toggle">
      <button onClick={() => setIsDarkMode(!isDarkMode)}>
        {isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
      </button>
    </div>
  );
};

export default ThemeToggle;
