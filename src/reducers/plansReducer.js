const plansReducer = (
  state = {
    plans: [],
    currentPlan: null,
    loadingPlansStatus: false,
    loadingPlanStatus: false,
    postingPlanStatus: false,
    plansNoAuth: false
  },
  action
) => {
  switch (action.type) {
    case "START_FETCHING_PLANS":
      return {
        ...state,
        loadingPlansStatus: true
      };
    case "ADD_PLANS":
      return {
        ...state,
        loadingPlansStatus: false,
        plans: action.plans
      };
    case "PLANS_AUTH_FAILED":
      return {
        ...state,
        plansNoAuth: true
      };
    case "START_POSTING_PLAN":
      return {
        ...state,
        postingPlanStatus: true
      };
    case "ADD_POSTED_PLAN":
      return {
        ...state,
        postingPlanStatus: false,
        plans: [...state.plans, action.plan]
      };
    case "CLEAR_PLANS":
      return {
        ...state,
        plans: []
      };
    default:
      return state;
  }
};

export default plansReducer;
