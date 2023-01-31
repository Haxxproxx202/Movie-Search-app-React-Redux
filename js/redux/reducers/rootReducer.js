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
            console.log(action.payload.imdbID)
            let hasObject = state.some(el => el.imdbID === action.payload.imdbID)
            console.log("Czy ma objekt?", hasObject);
            if (!hasObject) {
                console.log("Nierowna sie")
                const newPayload = action.payload;
                newPayload.towatch = false;
                newPayload.watched = false;
                newPayload.searched = true;
                return [
                    ...state,
                    newPayload
                ]
            } else {
                console.log("rowna się")
                const newPayload = action.payload;
                newPayload.searched = true;
                state.map(el => {
                    if (el.imdbID === action.payload.imdbID) {
                        let newElement = el;
                        newElement.searched = true;
                        return newElement
                    } else return el;
                })

            }

        case DELETE_ITEM:
            // return state.filter(el => el.imdbID !== action.payload)
            return state.map(el => {
                if (el.imdbID === action.payload) {
                    el.searched = false;
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