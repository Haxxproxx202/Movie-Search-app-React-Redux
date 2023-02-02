import React, {useEffect, useState} from 'react';
import RateWidget from "./RateWidget";
import {Link, NavLink} from "react-router-dom";

const Result = ({data, addToToWatch, addWatched, deleteItem, addToWatch}) => {
    const [dataState, setDataState] = useState(data);


    const handleChange = (e) => {
        const newData = dataState;
        newData.towatch = !newData.towatch;
        setDataState(newData);
        if (typeof addToToWatch === "function") {
            addToWatch(newData)
        } else console.log("Not a function")
    }

    const handleAddWatched = (obiekt) => {
        const newData = dataState;
        newData.watched = !newData.towatch;
        if (typeof addWatched === "function") {
            addWatched(newData);
        } else console.log("Not a function 2")
    }


    const handleDelete = (e) => {
        if (typeof deleteItem === "function") {
            deleteItem(data.imdbID, window.location.href);
        } else console.log(window.location.href)
    }


    return (
        <div className="single-item">
            <Link to={`/details/${data.imdbID}`} state={data}>
                {
                    data.Poster === "N/A"?
                    <img id="not-found" src="../../src/images/no_image.png" alt="Not found"/>:
                    <img src={data.Poster} alt="Not found" />
                }
            </Link>
            <img className="xicon" src="../../src/images/xicon2.png" onClick={handleDelete}/>
            <div style={{color: "gray", fontSize: "17px", fontWeight: "bold", textAlign: "center"}}>{dataState.Title}, {dataState.Year}</div>
            <RateWidget
                dataForWidget={dataState}
                addWatched={handleAddWatched}
            />
            <p style={{color: "whitesmoke"}}>Wanna watch?<input className="checkbox" type="checkbox" checked={data.towatch} onChange={handleChange}/></p>
        </div>

    );
};

export default Result;