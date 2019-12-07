import {CHANGE_SEARCH_TEXT} from '../constants/constants'

export const searchTermChanged = text => ({
    type: CHANGE_SEARCH_TEXT,
    payload: text
})