import { token } from "./index";

const plansUrl = "http://localhost:3000/api/v1/plans";

export const fetchPlans = () => {
  return dispatch => {
    dispatch({ type: "START_FETCHING_PLANS" });
    return fetch(plansUrl, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${token()}`
      }
    }).then(resp => {
      resp.status === 200
        ? resp
            .json()
            .then(json => dispatch({ type: "ADD_PLANS", plans: json.data }))
        : dispatch({ type: "PLANS_AUTH_FAILED" });
    });
  };
};

export const postPlan = plan => {
  return dispatch => {
    dispatch({ type: "START_POSTING_PLAN" });
    return fetch(plansUrl, {
      method: "POST",
      body: JSON.stringify(plan),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${token()}`
      }
    })
      .then(res => res.json())
      .then(console.log);
    // .then(resp => {
    //   resp.status === 200
    //     ? resp
    //         .json()
    //         .then(json => dispatch({ type: "ADD_POSTED_PLAN", plan: json.data }))
    //     : dispatch({ type: "PLANS_AUTH_FAILED" });
    // });
  };
};