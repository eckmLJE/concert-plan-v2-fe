import { token } from "./index";

const plansUrl = "http://localhost:3000/api/v1/plans";
// const plansUrl = "https://concertplan.herokuapp.com/api/v1/plans"

// const commentsUrl = "http://localhost:3000/api/v1/comments";
const commentsUrl = "https://concertplan.herokuapp.com/api/v1/comments"

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

export const setCurrentPlan = plan => ({
  type: "SET_CURRENT_PLAN",
  plan
});

export const clearCurrentPlan = () => ({
  type: "CLEAR_CURRENT_PLAN"
});

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
    }).then(resp => {
      resp.status === 202
        ? resp
            .json()
            .then(json =>
              dispatch({ type: "ADD_POSTED_PLAN", plan: json.data })
            )
        : dispatch({ type: "PLANS_AUTH_FAILED" });
    });
  };
};

export const addPlanUser = planId => {
  return dispatch => {
    dispatch({ type: "START_ADDING_PLAN_USER" });
    return fetch(plansUrl + `/${planId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${token()}`
      }
    }).then(resp => {
      resp.status === 202
        ? resp
            .json()
            .then(json =>
              dispatch({ type: "UPDATE_PATCHED_PLAN", plan: json.data })
            )
        : console.log("initial auth failure");
    });
  };
};

export const removePlanUser = planId => {
  return dispatch => {
    dispatch({ type: "START_ADDING_PLAN_USER" });
    return fetch(plansUrl + `/remove_user/${planId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${token()}`
      }
    }).then(resp => {
      resp.status === 202
        ? resp
            .json()
            .then(json =>
              dispatch({ type: "UPDATE_PATCHED_PLAN", plan: json.data })
            )
        : console.log("initial auth failure");
    });
  };
};

export const postComment = comment => {
  return dispatch => {
    dispatch({ type: "START_POSTING_COMMENT" });
    return fetch(commentsUrl, {
      method: "POST",
      body: JSON.stringify(comment),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${token()}`
      }
    }).then(resp => {
      resp.status === 202
        ? resp
            .json()
            .then(json =>
              dispatch({ type: "ADD_POSTED_COMMENT", comment: json.data })
            )
        : dispatch({ type: "COMMENTS_AUTH_FAILED" });
    });
  };
};
