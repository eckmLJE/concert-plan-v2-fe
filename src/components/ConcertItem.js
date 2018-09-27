import React from "react";
import { connect } from "react-redux";

import moment from "moment";

import PlanButton from "./PlanButton";

const findImageByRatio = images => {
  const image = images.find(img => img.ratio === "16_9");
  return image.url;
};

const ConcertItem = props => {
  const imgUrl = findImageByRatio(props.concert.images);
  return (
    <div className="concert-item">
      <img src={imgUrl} alt="" />
      <div className="concert-item-details">
        <h3>{props.concert.name}</h3>
        <p>
          {moment(props.concert.dates.start.dateTime).format(
            "MMMM Do YYYY, h:mm a"
          )}
        </p>
        <p>{props.concert._embedded.venues[0].name}</p>
        {props.loggedIn ? (
          <PlanButton
            imgUrl={imgUrl}
            key={props.concert.tmid}
            concert={props.concert}
          />
        ) : null}
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  loggedIn: state.user.loggedIn
});

// const mapDispatchToProps = dispatch => ({
// });

export default connect(
  mapStateToProps,
  null
)(ConcertItem);
