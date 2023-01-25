import React, {useEffect, useState} from 'react';
import RateWidget from "./RateWidget";

const Result = ({data, addToToWatch, addWatched, deleteItem}) => {
    // const [data, setData] = useState({
    //     id: data.imdbID,
    //     ratings: ""
    // })

    const handleChange = (e) => {
        if (typeof addToToWatch === "function") {
            addToToWatch(data)
        } else console.log("Not a function")
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
            {/*<p>Title: {data.Title}</p>*/}
            <RateWidget data={data} addWatched={addWatched}/>
            <p><button onClick={handleDelete}>Close</button></p>
            <p>Wanna watch?<input className="checkbox" type="checkbox" onChange={handleChange}/></p>
        </div>

    );
};

export default Result;