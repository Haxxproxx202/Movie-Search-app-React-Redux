import {API_KEY, API_URL} from "./constants";

const handleErrors = response => {
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return response;
}

export const getMovie = (item, year, checkSubmit) => {
    if (year === "") {
        setTimeout(() => {
            fetch(API_URL + item + API_KEY, {
                method: "GET"
            })
                .then(handleErrors)
                .then(response => response.json())
                .then(res => checkSubmit(res))
                .catch(error => console.log(error))
        }, 500)
    } else {
        setTimeout(() => {
            fetch(API_URL + item + '&y=' + year + API_KEY, {
                method: "GET"
            })
                .then(handleErrors)
                .then(response => response.json())
                .then(res => checkSubmit(res))
                .catch(error => console.log(error))
        }, 500)
    }
}
