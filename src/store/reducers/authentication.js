import * as actionType from "../actions/actionTypes";

const initialState = {
  // complete me
  user: null
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    // complete me
    case actionType.SET_CURRENT_USER:
      return {
        ...state,
        user: action.payload
      };
    default:
      return state;
  }
};

export default authReducer;
