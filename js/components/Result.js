import React, {useState} from 'react';
import RateWidget from "./RateWidget";

const Result = ({data, addToToWatch}) => {
    // const [data, setData] = useState({
    //
    // })
    // const img = data.Poster;

    const handleChange = (e) => {
        if (typeof addToToWatch === "function") {
            addToToWatch(data)
        } else console.log("Not a function")
    }

    return (
        <span className="single-item">
            <img src={data.Poster} alt="Nie działa"/>
            {/*<p>Title: {data.Title}</p>*/}
            <RateWidget />
            <input className="checkbox" type="checkbox" onChange={handleChange}/>

        </span>

    );
};

export default Result;