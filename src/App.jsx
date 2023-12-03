import React, { useState } from "react";
import ToggleButton from "./components/ToggleButton";
import "./App.css";

const App = () => {
  const [isNightMode, setNightMode] = useState(false);

  const toggleNightMode = () => {
    setNightMode(!isNightMode);
  };

  return (
    <div className={`app ${isNightMode ? "night-mode" : "day-mode"}`}>
      <h1>{isNightMode ? "Modalità Notte" : "Modalità Giorno"}</h1>
      <ToggleButton onClick={toggleNightMode} />
    </div>
  );
};

export default App;
