import {
  CHANGE_SEARCH_TEXT,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED
} from "../constants/constants";

const initialSearch = {
  search: {
    term: ""
  }
};

export const searchRobots = (state = initialSearch, action = {}) => {
  switch (action.type) {
    case CHANGE_SEARCH_TEXT:
      return { ...state, search: { term: action.payload } };
    default:
      return state;
  }
};

const initialRobots = {
  isPending: false,
  error: null,
  robots: []
};

export const requestRobots = (state = initialRobots, action = {}) => {
  switch (action.type) {
    case REQUEST_ROBOTS_PENDING:
      return { ...state, isPending: true };
    case REQUEST_ROBOTS_SUCCESS:
      return { ...state, robots: action.payload, isPending: false };
    case REQUEST_ROBOTS_FAILED:
      return { ...state, error: action.payload, isPending: false };
    default:
      return state;
  }
};
