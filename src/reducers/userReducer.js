const userReducer = (
  state = {
    loggedIn: false,
    currentUser: {},
    loadingAuthStatus: false,
    loadingUserStatus: false
  },
  action
) => {
  switch (action.type) {
    case "AUTHENTICATING_USER":
      return {
        ...state,
        loadingAuthStatus: true
      };
    case "USER_AUTHENTICATED":
      return {
        ...state,
        loggedIn: true,
        loadingAuthStatus: false
      };
    case "FETCHING_USER":
      return {
        ...state,
        loadingUserStatus: true
      };
    case "FETCHED_USER":
      return {
        ...state,
        loadingUserStatus: false,
        currentUser: {
          id: action.user.data.id,
          name: action.user.data.attributes.name,
          email: action.user.data.attributes.email,
          plans: action.user.data.attributes.plans
        }
      };
    default:
      return state;
  }
};

export default userReducer;
