import React, {useEffect, useState} from 'react';
import {API_KEY, API_URL} from "../api/constants";
import {addChecked, addToList, deleteItem} from "../redux/actions/actions";
import Result from "./Result";

const Form = ({add, list, addToToWatch, addWatched, deleteItem, addToWatch}) => {
    const [item, setItem] = useState("");

    const handleChange = (e) => {
        setItem(e.target.value);
    }
    const checkSubmit = (item) => {
        if (list.some(el => el.imdbID === item.imdbID)) {
            console.log("Object already added!")
        } else {
            add(item);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch('https://www.omdbapi.com/?t=' + item + '&apikey=' +API_KEY, {
            method: "GET"
        })
            .then(response => response.json())
            // .then(response => console.log(response))
            .then(res => checkSubmit(res))
            .catch(error => console.log(error))
    }


    return (
        <>
            <form className="form" onSubmit={handleSubmit}>
                <input type="text" value={item} placeholder="Enter movie name" onChange={handleChange}/>
                <input id="kk" type="image" src="../../src/images/searchicon.png" alt="Search icon"></input>
            </form>
            {list.length === 0 && <div className="first-view">Hey! Start searching for movies :)</div>}
            <div className="grid-list">
                {
                    list.map((el, id) => (
                        <Result
                            key={id}
                            data={el}
                            addToToWatch={addToToWatch}
                            addWatched={addWatched}
                            deleteItem={deleteItem}
                            addToWatch={addToWatch}
                        />
                    ))
                }
            </div>

        </>

    );
};

export default Form;