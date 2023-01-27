import {combineReducers} from "redux";
import {
    ADD_TO_LIST,
    ADD_WATCHED,
    DELETE_ITEM,
    ADD_TO_WATCH
} from "../actions/actions";


const initialState = [];
const list = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_LIST:
            const newPayload = action.payload;
            newPayload.towatch = false;
            newPayload.watched = false;
            return [
                ...state,
                newPayload
            ]
        case DELETE_ITEM:
            return state.filter(el => el.imdbID !== action.payload)
        case ADD_TO_WATCH:
            return state.map(el => {
                if (el.imdbID === action.payload.imdbID) {
                    return action.payload;
                } else return el;
            })
        case ADD_WATCHED:
            return state.map(el => {
                if (el.imdbID === action.payload.imdbID) {
                    return action.payload;
                } else return el
            })
        default:
            return state;
    }
}

export default combineReducers({
    list
})