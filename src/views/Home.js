import React from "react";
import "../css/Home.css";

import ServerLoadingStatus from "../components/ServerLoadingStatus";

const Home = () => {
  return (
    <div className="home">
      <ServerLoadingStatus />

      <div className="home-info">
        <p>
          Visit Concerts to view upcoming concerts at DC venues pulled from
          TicketMaster.
        </p>
        <p>Log In to view plans among your friends to attend concerts.</p>
        <p>
          Visit Plans to view a list of plans started by you and your friends.
        </p>
        <p>View Plan details, and join and leave existing plans.</p>
      </div>
      <div className="home-sample-users">
        <p>
          <strong>
            The user names are lucas, josh, alex, and conor. You can log in as
            any of these users with the following pattern:
          </strong>
        </p>
        <p>Email: name@example.com </p>
        <p>Password: name</p>
      </div>
    </div>
  );
};

export default Home;
