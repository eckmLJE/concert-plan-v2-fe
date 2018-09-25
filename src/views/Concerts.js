import React, { Component } from "react";
import { connect } from "react-redux";

import { fetchConcerts } from "../actions/concerts";

import ConcertList from "../components/ConcertList"

class Concerts extends Component {
  componentDidMount = () => {
    this.props.fetchConcerts("KovZ917A3Y7");
  };

  render() {
    return (
      <div className="concerts">
        {this.props.concerts.length &&
          <ConcertList />}
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
)(Concerts);
