import React, {useState} from 'react';
import RateWidget from "./RateWidget";

const Result = ({data}) => {
    // const [data, setData] = useState({
    //
    // })
    const img = data.Poster;

    return (
        <span className="single-item">
            <img src={img} alt="Nie działa"/>
            {/*<p>Title: {data.Title}</p>*/}
            <RateWidget />
            <input className="checkbox" type="checkbox"/>

        </span>

    );
};

export default Result;