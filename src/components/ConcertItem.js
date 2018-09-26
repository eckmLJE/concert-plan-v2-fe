import React from "react";
import moment from "moment";

import PlanButton from "./PlanButton";

const findImageByRatio = images => {
  const image = images.find(img => img.ratio === "16_9");
  return image.url;
};

const ConcertItem = props => {
  return (
    <div className="concert-item">
      <img src={findImageByRatio(props.concert.images)} alt="" />
      <div className="concert-item-details">
        <h3>{props.concert.name}</h3>
        <p>
          {moment(props.concert.dates.start.dateTime).format(
            "MMMM Do YYYY, h:mm a"
          )}
        </p>
        <p>{props.concert._embedded.venues[0].name}</p>
        <PlanButton key={props.concert.tmid} concert={props.concert} />
      </div>
    </div>
  );
};

export default ConcertItem;
