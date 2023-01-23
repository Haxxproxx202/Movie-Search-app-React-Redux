const ADD_TO_LIST = "ADD_TO_LIST";
const ADD_TO_TO_WATCH_LIST = "ADD_TO_TO_WATCH_LIST";

const addToList = (item) => {
    return {
        type: ADD_TO_LIST,
        payload: item
    }
}

const addToToWatch = (item) => {
    return {
        type: ADD_TO_TO_WATCH_LIST,
        payload: item
    }
}

export {
    ADD_TO_LIST,
    ADD_TO_TO_WATCH_LIST,
    addToList,
    addToToWatch
}