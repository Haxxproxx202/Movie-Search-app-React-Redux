import React from 'react';
import { useLocation } from "react-router-dom";

const MovieDetails = () => {
    let {state} = useLocation();
    return (
        <div className="movie-details">
            <div className="title">Title: {state.Title}</div>
            {
                state.Poster === "N/A"?
                    <img  id="not-found" src="../../src/images/no_image.png" alt="Not Found" />:
                    <img src={state.Poster} alt="Not Found"/>
            }
            <div className="details">
                <p>Year: {state.Year}</p>
                <p>Genre: {state.Genre}</p>
                <p>Director: {state.Director}</p>
                <p>Actors: {state.Actors}</p>
                <p>Description: {state.Plot}</p>
                <p>Runtime: {state.Runtime}</p>
                <p>Rating: {state.imdbRating}</p>
            </div>
        </div>
    );
};

export default MovieDetails;