import axios from "axios";
import {
  CHANGE_SEARCH_TEXT,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED
} from "../constants/constants";

export const searchTermChanged = text => ({
  type: CHANGE_SEARCH_TEXT,
  payload: text
});

export const robotsRequested = () => (dispatch) => {
  dispatch({ type: REQUEST_ROBOTS_PENDING });
    axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then(res => dispatch({ type: REQUEST_ROBOTS_SUCCESS, payload: res.data }))
    .catch(error => dispatch({ type: REQUEST_ROBOTS_FAILED, payload: error }));
};
