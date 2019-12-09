import { CHANGE_SEARCH_TERM, ROBO_REQUEST_FAILED, ROBO_REQUEST_SUCCESS, ROBO_REQUEST_PENDING } from "../constants/constants";

const initialState = {
  search: {
    term: ""
  }
};

export const searchRobots = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_SEARCH_TERM:
      return {
        ...state,
        search: {
          term: action.payload
        }
      };
    default:
      return initialState;
  }
};

const initialRobots = {
  isPending: true,
  erorr : null,
  robots :[]
}


export const requestRobots = (state = initialRobots, action={}) => {
  switch (action.type) {
    case ROBO_REQUEST_FAILED:
      return {...state, isPending:false, error: action.payload, robots: []}
    case ROBO_REQUEST_SUCCESS:
      return {...state, isPending:false, robots: action.payload}
      case ROBO_REQUEST_PENDING:
        return state
    default:
      return state
  }
};
