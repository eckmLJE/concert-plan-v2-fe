import React, { Component } from "react";
import { connect } from "react-redux";

import moment from "moment";

import PlanButtonSwitcher from "../containers/PlanButtonSwitcher";

class ConcertItem extends Component {
  findImageByRatio = images => {
    const image = images.find(img => img.ratio === "16_9");
    return image.url;
  };

  render() {
    const imgUrl = this.findImageByRatio(this.props.concert.images);
    return (
      <div className="concert-item">
        <img src={imgUrl} alt="" />
        <div className="concert-item-details">
          <h3>{this.props.concert.name}</h3>
          <p>
            {moment(this.props.concert.dates.start.dateTime).format(
              "MMMM Do YYYY, h:mm a"
            )}
          </p>
          <p>{this.props.concert._embedded.venues[0].name}</p>
          {this.props.loggedIn ? (
            <PlanButtonSwitcher
              concert={this.props.concert}
              imgUrl={imgUrl}
              key={this.props.concert.tmid}
            />
          ) : null}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loggedIn: state.user.loggedIn
});

// const mapDispatchToProps = dispatch => ({
// });

export default connect(
  mapStateToProps,
  null
)(ConcertItem);
