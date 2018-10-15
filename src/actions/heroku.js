const pingUrl = "http://localhost:3000/api/v1/ping";

export const pingServer = () => {
  return dispatch => {
    dispatch({ type: "START_PINGING_HEROKU" });
    return fetch(pingUrl, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      }
    }).then(resp => {
      resp.status === 200
        ? resp.json().then(json => {
            console.log(json);
            dispatch({ type: "HEROKU_PING_SUCCESS" });
          })
        : dispatch({ type: "HEROKU_PING_FAIL" });
    });
  };
};
