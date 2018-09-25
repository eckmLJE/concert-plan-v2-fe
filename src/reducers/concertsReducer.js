const concertsReducer = (
  state = {
    concerts: [],
    currentConcert: null,
    loadingConcertsStatus: false,
    loadingConcertStatus: false
  },
  action
) => {
  switch (action.type) {
    case "START_FETCHING_CONCERTS":
      return {
        ...state,
        loadingConcertsStatus: true
      };
    case "ADD_CONCERTS":
      return {
        ...state,
        loadingConcertsStatus: false,
        concerts: action.concerts
      };
    default:
      return state;
  }
};

export default concertsReducer;
