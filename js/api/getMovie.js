import {API_KEY} from "./constants";

const handleErrors = response => {
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return response;
}

export const getMovie = (item, year, checkSubmit) => {
    if (year === "") {
        setTimeout(() => {
            fetch('https://www.omdbapi.com/?t=' + item + '&apikey=' +API_KEY, {
                method: "GET"
            })
                .then(handleErrors)
                .then(response => response.json())
                .then(res => checkSubmit(res))
                .catch(error => console.log(error))
        }, 500)
    } else {
        setTimeout(() => {
            fetch('https://www.omdbapi.com/?t=' + item + '&y=' + year + '&apikey=' +API_KEY, {
                method: "GET"
            })
                .then(handleErrors)
                .then(response => response.json())
                .then(res => checkSubmit(res))
                .catch(error => console.log(error))
        }, 500)
    }

}