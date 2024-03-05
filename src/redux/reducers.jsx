import { combineReducers } from "redux";
import { initialState } from "./state";

const user = (state = null) => state;

export const listingsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_BUSINESS":
      return { ...state, businesses: [...state.businesses, action.value] };
    case "REMOVE_BUSINESS":
      return {
        ...state,
        businesses: state.businesses.filter(
          (business, idx) => idx !== action.value
        ),
      };

    default:
      return state;
  }
};

const rootReducer = combineReducers({
  businesses: listingsReducer,
  user: user,
});

export default rootReducer;
