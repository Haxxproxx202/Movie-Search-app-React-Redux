import {API_KEY} from "./constants";

export const getMovie = (item, checkSubmit) => {
    setTimeout(() => {
        fetch('https://www.omdbapi.com/?t=' + item + '&apikey=' +API_KEY, {
            method: "GET"
        })
            .then(response => response.json())
            // .then(response => console.log(response))
            .then(res => checkSubmit(res))
            .catch(error => console.log(error))
    }, 500)
}