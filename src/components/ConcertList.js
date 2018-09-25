import React from "react";
import { connect } from "react-redux";

import ConcertItem from "./ConcertItem";

const ConcertList = props => {
  return (
    <div className="concert-list">
      {props.concerts.map(concert => (
        <ConcertItem key={concert.id} concert={concert} />
      ))}
    </div>
  );
};

const mapStateToProps = state => ({
  concerts: state.concerts.concerts
});

//   const mapDispatchToProps = dispatch => ({
//     fetchConcerts: venueId => dispatch(fetchConcerts(venueId))
//   });

export default connect(
  mapStateToProps,
  null
)(ConcertList);
