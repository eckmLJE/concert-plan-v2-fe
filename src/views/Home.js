import React from "react";
import "../css/Home.css";

import ServerLoadingStatus from "../components/ServerLoadingStatus";

const Home = () => {
  return (
    <div className="home">
      <ServerLoadingStatus />
      <div className="home-card">
        <p>
          <strong>
            The user names are lucas, josh, alex, and conor. You can log in as
            any of these users with the following pattern:
          </strong>
        </p>
        <p>Email: name@example.com | Password: name</p>
      </div>
      <div className="home-card">
        <p>
          Visit CONCERTS to view upcoming concerts at DC venues pulled from
          TicketMaster.
        </p>
        <p>
          LOG IN to view plans among your friends to attend concerts. Logging in
          also allows you to start plans from CONCERTS.
        </p>
        <p>
          Visit PLANS to view a list of plans started by you and your friends,
          view Plan details, and join and leave existing plans.
        </p>
      </div>
    </div>
  );
};

export default Home;
