import React, {useEffect, useState} from 'react';
import RateWidget from "./RateWidget";

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

    // const handleState = (ratings) => {
    //     setData(prevState => {
    //         return {
    //             ...prevState,
    //             ratings: ratings
    //         }
    //     })
    // }

    const handleDelete = (e) => {
        if (typeof deleteItem === "function") {
            deleteItem(data.imdbID, window.location.href);
        } else console.log(window.location.href)
    }


    return (
        <div className="single-item">
            <img src={data.Poster} alt="Nie działa"/>
            <img className="xicon" src="../../src/images/xicon2.png" onClick={handleDelete}/>
            <div style={{color: "white"}}>{dataState.Title}</div>
            <RateWidget
                dataForWidget={dataState}
                addWatched={handleAddWatched}
            />
            {/*<p><button onClick={handleDelete}>Close</button></p>*/}
            <p style={{color: "whitesmoke"}}>Wanna watch?<input className="checkbox" type="checkbox" checked={data.towatch} onChange={handleChange}/></p>
        </div>

    );
};

export default Result;