import React, { Component } from "react";
import { connect } from "react-redux";
import "../css/Concerts.css";
import "../css/Buttons.css";

import { fetchConcerts } from "../actions/concerts";
import { fetchPlans } from "../actions/plans";

import ConcertList from "../containers/ConcertList";

class Concerts extends Component {
  componentDidMount = () => {
    this.props.fetchPlans();
    this.props.fetchConcerts("KovZ917A3Y7");
  };

  render() {
    return (
      <div className="concerts">
        {this.props.concerts.length ? (
          <ConcertList />
        ) : (
          <h1>Loading Concerts...</h1>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  concerts: state.concerts.concerts
});

const mapDispatchToProps = dispatch => ({
  fetchConcerts: venueId => dispatch(fetchConcerts(venueId)),
  fetchPlans: venueId => dispatch(fetchPlans()),
  clearPlans: () => dispatch({ type: "CLEAR_PLANS" })
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Concerts);
