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
      </div>
    </div>
  );
};

export default Home;
