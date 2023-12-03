import React from "react";

const ToggleButton = ({ onClick }) => {
  return (
    <button onClick={onClick} className="toggle-button">
      Cambia Modalità
    </button>
  );
};

export default ToggleButton;
