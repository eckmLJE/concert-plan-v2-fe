import React from "react";
import "../css/Home.css";

import ServerLoadingStatus from "../components/ServerLoadingStatus";
import User from "../views/User";
import Instructions from "../components/Instructions.js"

const Home = () => {
  return (
    <div className="home">
      <ServerLoadingStatus />
      <User />
      <Instructions />
    </div>
  );
};

export default Home;
