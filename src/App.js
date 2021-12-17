import React from "react";
import Search from "./components/Search.js";
import "./css/style.css";
import PersonalBar from "./components/PersonalBar.js";

const App = () => {
  return (
    <div className="main-container">
      <PersonalBar />
      <Search />
    </div>
  );
};

export default App;
