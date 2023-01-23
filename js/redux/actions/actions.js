const ADD_TO_LIST = "ADD_TO_LIST";
const ADD_TO_WATCHED_LIST = "ADD_TO_WATCHED_LIST";

const addToList = (item) => {
    return {
        type: ADD_TO_LIST,
        payload: item
    }
}

const addToWatchedList = (item) => {
    return {
        type: ADD_TO_WATCHED_LIST,
        payload: item
    }
}

export {
    ADD_TO_LIST,
    ADD_TO_WATCHED_LIST,
    addToList,
    addToWatchedList
}