import React, {useEffect, useState} from 'react';
import RateWidget from "./RateWidget";
import {Link, NavLink} from "react-router-dom";

const Result = ({data, addWatched, deleteItem, addToWatch}) => {
    const [dataState, setDataState] = useState(data);
    const [checkChecked, setCheckChecked] = useState(true);


    const handleChange = (e) => {
        setCheckChecked(!checkChecked);
        const newData = dataState;
        newData.towatch = !newData.towatch;
        setDataState(newData);
        if (typeof addToWatch === "function") {
            addToWatch(newData)
        } else console.log("Not a function")
    }


    const handleAddWatched = (object) => {
        if (typeof addWatched === "function") {
            addWatched(object);
        } else console.log("Not a function 2")
    }


    const handleDelete = (e) => {
        if (typeof deleteItem === "function") {
            deleteItem(dataState.imdbID, window.location.href);
        } else console.log(window.location.href)
    }


    return (
        <div className="single-item">
            <Link to={`/details/${dataState.imdbID}`} state={dataState}>
                {
                    dataState.Poster === "N/A"?
                    <img id="not-found" src="../../src/images/no_image.png" alt="Not found"/>:
                    <img src={dataState.Poster} alt="Not found" />
                }
            </Link>
            <img className="xicon" src="../../src/images/xicon2.png" onClick={handleDelete}/>
            <div style={{color: "gray", fontSize: "17px", fontWeight: "bold", textAlign: "center"}}>{dataState.Title}, {dataState.Year}</div>

            <RateWidget
                dataForWidget={dataState}
                addWatched={handleAddWatched}
            />
            <label className="switch">
                {window.location.href.includes('towatch')?
                    <input type="checkbox" checked={checkChecked} onChange={handleChange}/>:
                    <input type="checkbox" checked={dataState.towatch} onChange={handleChange}/>
                }
                <span className="slider round"></span>
            </label>
            {/*<label className="switch">*/}
            {/*    <input type="checkbox" checked={dataState.towatch} onChange={handleChange}/>*/}
            {/*        <span className="slider round"></span>*/}
            {/*</label>*/}
        </div>

    );
};

export default Result;