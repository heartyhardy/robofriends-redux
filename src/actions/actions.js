import {
  CHANGE_SEARCH_TERM,
  ROBO_REQUEST_PENDING,
  ROBO_REQUEST_SUCCESS,
  ROBO_REQUEST_FAILED
} from "../constants/constants";
import axios from "axios";

export const searchTermChanged = text => ({
  type: CHANGE_SEARCH_TERM,
  payload: text
});

export const robotsRequested = () => dispatch => {
  dispatch({type: ROBO_REQUEST_PENDING});
  axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then(res => dispatch({ type: ROBO_REQUEST_SUCCESS, payload: res.data }))
    .catch(error => dispatch({ type: ROBO_REQUEST_FAILED, payload: error }));
};
