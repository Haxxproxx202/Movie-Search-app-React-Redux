const ADD_TO_LIST = "ADD_TO_LIST";
const ADD_TO_TO_WATCH_LIST = "ADD_TO_TO_WATCH_LIST";
const ADD_WATCHED = "ADD_WATCHED";

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

const addWatched = (item, rate) => {
    const itemm = {
        id: item,
        ratings: rate
    }
    return {
        type: ADD_WATCHED,
        payload: item
    }
}

export {
    ADD_TO_LIST,
    ADD_TO_TO_WATCH_LIST,
    ADD_WATCHED,
    addToList,
    addToToWatch,
    addWatched
}