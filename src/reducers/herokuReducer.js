const herokuReducer = (
  state = {
    herokuLoadingStatus: false,
    herokuLoaded: false,
    loadFailed: false
  },
  action
) => {
  switch (action.type) {
    case "START_PINGING_HEROKU":
      return {
        ...state,
        herokuLoadingStatus: true
      };
    case "HEROKU_PING_SUCCESS":
      return {
        ...state,
        herokuLoadingStatus: false,
        herokuLoaded: true
      };
    case "HEROKU_PING_FAIL":
      return {
        ...state,
        herokuLoadingStatus: false,
        herokuLoaded: false,
        loadFailed: true
      };
    default:
      return state;
  }
};

export default herokuReducer;
