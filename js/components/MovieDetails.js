import React from 'react';
import {useLocation, useParams} from "react-router-dom";

const MovieDetails = () => {
    let {state} = useLocation();
    return (
        <div className="movie-details">
            <div className="title">Title: {state.Title}</div>
            <img src={state.Poster} />
            <div className="details">
                <p>Year: {state.Year}</p>
                <p>Director: {state.Director}</p>
                <p>Actors: {state.Actors}</p>
                <p>Description: {state.Plot}</p>
                <p>Runtime: {state.Runtime}</p>
                <p>Rating: </p>
            </div>
        </div>
    );
};

export default MovieDetails;