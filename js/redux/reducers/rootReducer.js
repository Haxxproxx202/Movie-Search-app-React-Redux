import { combineReducers } from "redux";
import {
    ADD_TO_LIST,
    ADD_WATCHED,
    DELETE_ITEM,
    ADD_TO_WATCH,
    DELETE_ITEM_WATCHED
} from "../actions/actions";



const initialState = [];
const list = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_LIST:
            let hasObject = state.some(el => el.imdbID === action.payload.imdbID)
            if (!hasObject) {
                const newPayload = action.payload;
                newPayload.towatch = false;
                newPayload.watched = false;
                newPayload.searched = true;
                return [
                    ...state,
                    newPayload
                ]
            } else {
                const newPayload = action.payload;
                newPayload.searched = true;
                return state.map(el => {
                    if (el.imdbID === action.payload.imdbID) {
                        let newElement = el;
                        newElement.searched = true;
                        return newElement
                    } else return el
                })
            }
        case DELETE_ITEM:
            return state.map(el => {
                if (el.imdbID === action.payload) {
                    el.searched = false;
                    return el;
                } else return el;
            })
        case DELETE_ITEM_WATCHED:
            return state.map(el => {
                if (el.imdbID === action.payload) {
                    el.watched = false;
                    return el;
                } else return el;
            })
        case ADD_TO_WATCH:
            return state.map(el => {
                if (el.imdbID === action.payload.imdbID) {
                    return action.payload;
                } else return el;
            })
        case ADD_WATCHED:
            return state.map(el => {
                if (el.imdbID === action.payload.imdbID) {
                    console.log("Rowna się")
                    return action.payload;
                } else {
                    console.log("Nie równa się");
                    return el;
                }
            })
        default:
            return state;
    }
}

export default combineReducers({
    list
})