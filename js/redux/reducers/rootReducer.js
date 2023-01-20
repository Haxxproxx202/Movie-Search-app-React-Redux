import {combineReducers} from "redux";
import store from "../store";

const rootReducer = (state = [], action) => {
    switch (action.type) {
        default:
            return state;
    }
}

export default combineReducers({
    rootReducer
})