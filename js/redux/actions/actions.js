const ADD_TO_LIST = "ADD_TO_LIST";
const ADD_TO_TO_WATCH_LIST = "ADD_TO_TO_WATCH_LIST";
const ADD_WATCHED = "ADD_WATCHED";
const DELETE_ITEM = "DELETE_ITEM";
const DELETE_ITEM_WATCHED = "DELETE_ITEM_WATCHED";
const DELETE_ITEM_TO_WATCH = "DELETE_ITEM_TO_WATCH";

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

const deleteItem = (id, url) => {
    if (url.includes("watched")) {
        return {
            type: DELETE_ITEM_WATCHED,
            payload: id
        }
    } else if (url.includes("towatch")) {
        return {
            type: DELETE_ITEM_TO_WATCH,
            payload: id
        }
    } else {
        return {
            type: DELETE_ITEM,
            payload: id
        }
    }

}

// const deleteItemMainList = (id) => {
//     return {
//         type: DELETE_ITEM,
//         payload: id
//     }
// }
//
// const deleteItemMainList = (id) => {
//     return {
//         type: DELETE_ITEM,
//         payload: id
//     }
// }

export {
    ADD_TO_LIST,
    ADD_TO_TO_WATCH_LIST,
    ADD_WATCHED,
    DELETE_ITEM,
    DELETE_ITEM_WATCHED,
    DELETE_ITEM_TO_WATCH,
    addToList,
    addToToWatch,
    addWatched,
    deleteItem
}