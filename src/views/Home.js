import React from "react";
import "../css/Home.css";

import ServerLoadingStatus from "../components/ServerLoadingStatus";

const Home = () => {
  return (
    <div className="home">
      <ServerLoadingStatus />
      <div className="home-card">
        <p>
          LOG IN first in order to view plans among your friends to attend
          concerts. Logging in also allows you to start plans from CONCERTS.
        </p>
        <p>
          Visit CONCERTS to view upcoming concerts at DC venues pulled from
          TicketMaster.
        </p>
        <p>
          Visit PLANS to view a list of plans started by you and your friends,
          view Plan details, and join and leave existing plans.
        </p>
      </div>
      <div className="home-card">
        <p>The user names are lucas, josh, alex, and conor.</p>
        <p>Log in with the following pattern:</p>
        <p>
          <strong>Email:</strong> name@example.com | <strong>Password:</strong>{" "}
          name
        </p>
      </div>
    </div>
  );
};

export default Home;
