import { CHANGE_SEARCH_TERM } from "../constants/constants";

const initialState = {
  search: {
    term: ""
  }
};

export const searchRobots = (state = initialState, action = {}) => {
  switch (action) {
    case CHANGE_SEARCH_TERM:
      return {
        ...state,
        search: {
          term: ""
        }
      };
  }
};
