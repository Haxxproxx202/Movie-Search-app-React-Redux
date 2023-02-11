import React, { useState } from 'react';

const RateWidget = ({dataForWidget, addWatched}) => {
    const [dataState] = useState(dataForWidget);

    const handleChange = (e) => {
        e.preventDefault();
        if (typeof addWatched === "function") {
            const newState = dataState;
            newState.watched = !newState.watched;
            addWatched(newState);
        } else console.log("This is not a function")
    }

    return (
        <div className="rate" onClick={handleChange}>
            <input type="radio" id="star5" name="rate" value="5"/>
            <label htmlFor="star5" title="5">5 stars</label>
            <input type="radio" id="star4" name="rate" value="4"/>
            <label htmlFor="star4" title="4">4 stars</label>
            <input type="radio" id="star3" name="rate" value="3"/>
            <label htmlFor="star3" title="3">3 stars</label>
            <input type="radio" id="star2" name="rate" value="2"/>
            <label htmlFor="star2" title="2">2 stars</label>
            <input type="radio" id="star1" name="rate" value="1"/>
            <label htmlFor="star1" title="1">1 star</label>
        </div>
    );
};

export default RateWidget;