import React, { useState } from 'react';
import Result from "./Result";
import { getMovie } from "../api/getMovie";

const Form = ({add, list, addWatched, deleteItem, addToWatch}) => {
    const [item, setItem] = useState("");
    const [year, setYear] = useState("");
    const [loader, setLoader] = useState(false);
    const [movieNotFound, setMovieNotFound] = useState(false);


    const handleChange = (e) => {
        const {name, value} = e.target;
        if (name === "item") {
            setItem(value);
        } else {
            setYear(value);
        }
    }

    const checkSubmit = (item) => {
        if (item.Response === "True") {
            setLoader(false);
            if (list.some(el => el.imdbID === item.imdbID)) {
            } else {
                add(item);
            }
        } else {
            setLoader(false);
            setMovieNotFound(true);
            setTimeout(() => {
                setMovieNotFound(false);
            }, 2000)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoader(true);
        getMovie(item, year, checkSubmit);
        setItem("");
        setYear("");
    }


    return (
        <>
            <form className="form" onSubmit={handleSubmit}>
                <input type="text" name="item" value={item} placeholder="Enter movie title" onChange={handleChange}/>
                <input type="text" name="year" value={year} placeholder="Enter year" onChange={handleChange}/>
                <input id="kk" type="image" src="../../src/images/searchicon.png" alt="Search icon"></input>
            </form>
            {loader && <div className="loader"><img src="../../src/images/VAyR.gif" alt="spinner"/></div>}
            {movieNotFound && <div className="movie-not-found">Movie not found</div>}
            {list.length === 0 && <div className="first-view">Hey! Start searching for movies :)</div>}
            <div className="grid-list">
                {
                    list.map((el, id) => (
                        <Result
                            key={id}
                            data={el}
                            addWatched={addWatched}
                            deleteItem={deleteItem}
                            addToWatch={addToWatch}
                        />
                    ))
                }
            </div>
        </>
    );
};

export default Form;