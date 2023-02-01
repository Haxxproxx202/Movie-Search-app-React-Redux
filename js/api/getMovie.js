import {API_KEY} from "./constants";

const handleErrors = response => {
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return response;
}

export const getMovie = (item, checkSubmit) => {
    setTimeout(() => {
        fetch('https://www.omdbapi.com/?t=' + item + '&apikey=' +API_KEY, {
            method: "GET"
        })
            .then(handleErrors)
            .then(response => response.json())
            .then(res => checkSubmit(res))
            .catch(error => console.log(error))
    }, 500)
}