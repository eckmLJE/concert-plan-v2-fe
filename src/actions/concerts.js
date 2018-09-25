import url from "../TmApiKey";
const venueUrl = "&venueId=";
const sortUrl = "&sort=date,asc&page=0&size=20";

export const fetchConcerts = venueId => {
  return dispatch => {
    dispatch({ type: "START_FETCHING_CONCERTS" });
    return fetch(url + venueUrl + venueId + sortUrl)
      .then(res => res.json())
    //   .then(console.log)
      .then(json => dispatch({ type: "ADD_CONCERTS", concerts: json._embedded.events }));
  };
};
