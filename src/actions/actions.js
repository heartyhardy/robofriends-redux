import { CHANGE_SEARCH_TERM } from "../constants/constants";

export const searchTermChanged = text => ({
  type: CHANGE_SEARCH_TERM,
  payload: text
});
