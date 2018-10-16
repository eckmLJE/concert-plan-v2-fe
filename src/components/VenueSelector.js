import React, { Component } from "react";
import { connect } from "react-redux";
import "../css/Buttons.css";

import { fetchConcerts } from "../actions/concerts";

const venues = {
  rockAndRollHotel: "KovZpZAEk7aA",
  nineThirtyClub: "KovZpZA7knFA",
  theAnthem: "KovZ917A3Y7",
  echoStage: "KovZpZAadt7A",
  blackCat: "KovZpZA1k1IA"
};

class VenueSelector extends Component {
  state = {
    activeVenue: "theAnthem"
  };

  handleClick = e => {
    e.preventDefault();
    const venueName = e.target.getAttribute("name");
    if (venueName) {
      this.props.fetchConcerts(venues[venueName]);
      this.setState({ activeVenue: venueName });
    }
  };

  activeButton = name => {
    return this.state.activeVenue === name
      ? "venue-button-active"
      : "venue-button-inactive";
  };

  render() {
    return (
      <div className="venue-selector" onClick={this.handleClick}>
        <div className="venue-selector-main">
          <div className={this.activeButton("theAnthem")}>
            <button name="theAnthem">The Anthem</button>
          </div>
          <div className={this.activeButton("nineThirtyClub")}>
            <button name="nineThirtyClub">9:30 Club</button>
          </div>
          <div className={this.activeButton("echoStage")}>
            <button name="echoStage">Echostage</button>
          </div>
          <div className={this.activeButton("blackCat")}>
            <button name="blackCat">Black Cat</button>
          </div>
          <div className={this.activeButton("rockAndRollHotel")}>
            <button name="rockAndRollHotel">Rock and Roll Hotel</button>
          </div>
        </div>
        <div className="venue-selector-mobile">
          <div className={this.activeButton("theAnthem")}>
            <button name="theAnthem">ANTH</button>
          </div>
          <div className={this.activeButton("nineThirtyClub")}>
            <button name="nineThirtyClub">930</button>
          </div>
          <div className={this.activeButton("echoStage")}>
            <button name="echoStage">ES</button>
          </div>
          <div className={this.activeButton("blackCat")}>
            <button name="blackCat">BC</button>
          </div>
          <div className={this.activeButton("rockAndRollHotel")}>
            <button name="rockAndRollHotel">{`R&R`}</button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  concerts: state.concerts.concerts
});

const mapDispatchToProps = dispatch => ({
  fetchConcerts: venueId => dispatch(fetchConcerts(venueId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(VenueSelector);
