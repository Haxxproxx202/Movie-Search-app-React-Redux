import React from 'react';
import {useLocation, useParams} from "react-router-dom";

const MovieDetails = () => {
    let {state} = useLocation();
    return (
        <div className="movie-details">
            <div>Title: {state.Title}</div>
            <img src={state.Poster} />
            <div>
                <p>Year: {state.Year}</p>
                <p>Director: {state.Director}</p>
                <p>Description: {state.Plot}</p>
            </div>
        </div>
    );
};

export default MovieDetails;