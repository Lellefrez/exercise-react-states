import { useState } from "react";
import "./Footer.css";
const Footer = () => {
  const [count, setCount] = useState({
    name: "Tizio",
    age: 40,
    occupation: "student",
  });
  const [newValue, setNewValue] = useState("");
  const [selectedKey, setselectedKey] = useState("");

  return (
    <article className="log-in">
      <div>
        <h1>REGISTRATI QUI</h1>
        <ul>
          <li>Name: {count.name}</li>
          <li>Age: {count.age}</li>
          <li>Occupation: {count.occupation}</li>
        </ul>
      </div>
      <div className="registrazione">
        <h3>sostituisci i dati</h3>
        <select
          value={selectedKey}
          onChange={(e) => setselectedKey(e.target.value)}
        >
          <option value="name">Name</option>
          <option value="age">Age</option>
          <option value="occupation">Occupation</option>
        </select>
        <input
          type="text"
          value={newValue}
          onChange={(e) => setNewValue(e.target.value)}
        />
        <button
          onClick={() => {
            setCount((c) => ({
              ...c,
              [selectedKey]: newValue,
            }));
          }}
        >
          sostituisci
        </button>
      </div>
    </article>
  );
};
export default Footer;
