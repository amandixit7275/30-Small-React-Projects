import React from "react";
import UseLocalStorage from "./UseLocalStorage";
import "./style.css";

export default function LightDarkMode() {
  const [theme, setTheme] = UseLocalStorage("theme", "dark");

  function handleToggleTheme() {
    setTheme(theme === "dark" ? "light" : "dark");
  }

  return (
    <div className="light-dark-mode" data-theme={theme}>
      <div className="container">
        <h2>Light Dark Mode</h2>
        <button onClick={handleToggleTheme}>Change Theme</button>
        <h2>handle click functionality</h2>
      </div>
    </div>
  );
}
