import React from "react";
import "../css/Home.css";

const Home = () => {
  return (
    <div className="home">
      <h1>Welcome to ConcertPlan!</h1>
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
        <p>
          <strong>
            The user names are lucas, josh, alex, and conor. You can log in as
            any of these users with the following pattern:
          </strong>
        </p>
        <p>Email: name@example.com </p>
        <p>Password: name</p>
        <h4>
          NB: Heroku sometimes takes 15 seconds to spool up the free server this
          project is hosted on. Please be patient while logging in. :)
        </h4>
      </div>
    </div>
  );
};

export default Home;
