import React, { useState } from 'react';
import {addChecked, addToList, deleteItem} from "../redux/actions/actions";
import Result from "./Result";
import {getMovie} from "../api/getMovie";

const Form = ({add, list, addToToWatch, addWatched, deleteItem, addToWatch}) => {
    const [item, setItem] = useState("");
    const [loader, setLoader] = useState(false);

    const handleChange = (e) => {
        setItem(e.target.value);
    }
    const checkSubmit = (item) => {
        setLoader(false);
        if (list.some(el => el.imdbID === item.imdbID)) {
            console.log("Object already added!")
        } else {
            add(item);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoader(true);
        getMovie(item, checkSubmit)
    }


    return (
        <>
            <form className="form" onSubmit={handleSubmit}>
                <input type="text" value={item} placeholder="Enter movie name" onChange={handleChange}/>
                <input id="kk" type="image" src="../../src/images/searchicon.png" alt="Search icon"></input>
                {loader && <img className="loader" src="../../src/images/VAyR.gif" />}
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