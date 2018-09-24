import { push } from "connected-react-router";

export const setActiveNav = nav => ({
  type: "SET_ACTIVE_NAV",
  nav
});

export const navToHome = () => {
  return dispatch => {
    dispatch(push("/"));
  };
};

export const navToConcerts = () => {
  return dispatch => {
    dispatch(push("/concerts"));
  };
};

export const navToPlans = () => {
  return dispatch => {
    dispatch(push("/plans"));
  };
};

export const navToUser = () => {
  return dispatch => {
    dispatch(push("/profile"));
  };
};
