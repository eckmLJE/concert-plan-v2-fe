const navReducer = (
  state = {
    activeNav: ""
  },
  action
) => {
  switch (action.type) {
    case "SET_ACTIVE_NAV":
      return {
        ...state,
        activeNav: action.nav
      };
    default:
      return state;
  }
};

export default navReducer;
