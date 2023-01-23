import React, {useState} from 'react';

const Result = ({data}) => {
    // const [data, setData] = useState({
    //
    // })
    const img = data.Poster;
    console.log(img);

    return (
        <div className="single_item">
            <img src={img} alt="Nie działa"/>

        </div>

    );
};

export default Result;