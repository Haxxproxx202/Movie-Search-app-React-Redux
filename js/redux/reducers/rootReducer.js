import {combineReducers} from "redux";
import store from "../store";
import {
    ADD_TO_LIST,
    ADD_TO_TO_WATCH_LIST,
    ADD_WATCHED,
    DELETE_ITEM,
    DELETE_ITEM_TO_WATCH,
    DELETE_ITEM_WATCHED,
    ADD_CHECKED
} from "../actions/actions";


const initialState = [];
const list = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_LIST:
            const newPayload = action.payload;
            newPayload.checked = false;
            return [
                ...state,
                newPayload
            ]
        case DELETE_ITEM:
            return state.filter(el => el.imdbID !== action.payload)
        case ADD_CHECKED:
            let newPayloadd = action.payload;
            console.log("tu z dupy dziala")
            newPayloadd.checked = true;
            return state.map(el => {
                if (el.imdbID === action.payload.imdbID) {
                    return newPayloadd;
                } else return el;
            })
        default:
            return state;
    }
}

const toWatchList = (state = [], action) => {
    switch (action.type) {
        case ADD_TO_TO_WATCH_LIST:
            return [
                ...state,
                action.payload
            ]
        case DELETE_ITEM_TO_WATCH:
            return state.filter(el => el.imdbID !== action.payload)
        default:
            return state;
    }
}

const watchedList = (state = [], action) => {
    switch (action.type) {
        case ADD_WATCHED:

            return [
                ...state, action.payload
            ]
        case DELETE_ITEM_WATCHED:
            return state.filter(el => el.imdbID !== action.payload)
        default:
            return state;
    }
}

export default combineReducers({
    list,
    toWatchList,
    watchedList
})