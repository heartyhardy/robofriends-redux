import { CHANGE_SEARCH_TEXT } from "../constants/constants";

const initialState = {
  search: {
    term: ""
  }
};

export const searchRobots = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_SEARCH_TEXT:
      return { ...state, search: { term: action.payload } };
    default:
      return state;
  }
};
