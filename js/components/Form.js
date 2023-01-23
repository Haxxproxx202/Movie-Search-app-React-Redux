import React, {useEffect, useState} from 'react';
import {API_KEY, API_URL} from "../api/constants";
import {addToList} from "../redux/actions/actions";
import Result from "./Result";

const Form = ({add, list}) => {
    const [item, setItem] = useState("");

    const handleChange = (e) => {
        setItem(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch('https://www.omdbapi.com/?t=' + item + '&apikey=' +API_KEY, {
            method: "GET"
        })
            .then(response => response.json())
            // .then(response => console.log(response))
            .then(res => add(res))
            .catch(error => console.log(error))
    }




    return (
        <>
            <form className="form" onSubmit={handleSubmit}>
                <input type="text" value={item} placeholder="Enter movie name" onChange={handleChange}/>
                <button>Search</button>
            </form>
            {list.length === 0 && <div className="first-view">Hey! Start searching for movies :)</div>}
            {
                list.map((el, id) => (
                    <Result key={id} data={el}/>
                ))
            }
        </>

    );
};

export default Form;