import { push } from "connected-react-router";

export const setActiveNav = nav => ({
  type: "SET_ACTIVE_NAV",
  nav
});

export const navTo = nav => {
  return dispatch => {
    dispatch({ type: "CLEAR_PLANS" });
    dispatch({ type: "SET_ACTIVE_NAV", nav });
    dispatch(push(`/${nav}`));
  };
};

export const navToPlanId = id => {
  return dispatch => {
    dispatch(push(`/plans/${id}`));
    dispatch(setActiveNav("plans"));
  };
};
