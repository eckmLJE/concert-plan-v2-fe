import React, { Component } from "react";
import { connect } from "react-redux";

import { fetchConcerts } from "../actions/concerts";

class Concerts extends Component {
  componentDidMount = () => {
    this.props.fetchConcerts("KovZ917A3Y7");
  };

  render() {
    return (
      <div>
        {this.props.concerts &&
          this.props.concerts.map(concert => <div>{concert.name}</div>)}
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
