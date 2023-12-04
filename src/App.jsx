import React, { useState } from "react";
import MainSection from "./components/MainSection";
import Navbar from "./components/Navbar";
import "./App.css";
import "./index.css";

const App = () => {
  const links = [
    {
      href: "/",
      text: "Home",
      id: 0,
    },
    {
      href: "/contacts",
      text: "Contacts",
      id: 1,
    },
    {
      href: "/about",
      text: "About Us",
      id: 2,
    },
  ];

  const [mode, setMode] = useState("light");
  const changeMode = () => {
    setMode(mode === "light" ? "dark" : "light");
  };
  return (
    <div className={mode}>
      <Navbar links={links} changeMode={changeMode} />
      <MainSection />
    </div>
  );
};

export default App;
