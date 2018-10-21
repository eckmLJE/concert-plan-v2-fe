import React from "react";
import "../css/Home.css";

import User from "../views/User";
import Instructions from "../components/Instructions.js";

const Home = () => {
  return (
    <div className="home">
      <User />
      <Instructions />
    </div>
  );
};

export default Home;
