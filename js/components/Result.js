import React, {useEffect, useState} from 'react';
import RateWidget from "./RateWidget";

const Result = ({data, addToToWatch, addWatched}) => {
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


    return (
        <span className="single-item">
            <img src={data.Poster} alt="Nie działa"/>
            {/*<p>Title: {data.Title}</p>*/}
            <RateWidget data={data} addWatched={addWatched}/>
            <input className="checkbox" type="checkbox" onChange={handleChange}/>
        </span>

    );
};

export default Result;