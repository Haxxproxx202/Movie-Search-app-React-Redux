import {combineReducers} from "redux";
import store from "../store";
import {ADD_TO_LIST, ADD_TO_WATCHED_LIST} from "../actions/actions";


const initialState = [];
const list = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_LIST:
            return [
                ...state,
                action.payload
            ]
        default:
            return state;
    }
}

const watchedList = (state = [], action) => {
    switch (action.type) {
        case ADD_TO_WATCHED_LIST:
            return [
                ...state,
                action.payload
            ]
        default:
            return state;
    }
}

export default combineReducers({
    list,
    watchedList
})