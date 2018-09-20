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

export const navToFeed = () => {
  return dispatch => {
    dispatch(push("/feed"));
  };
};

export const navToProfile = () => {
  return dispatch => {
    dispatch(push("/profile"));
  };
};
