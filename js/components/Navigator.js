import React from 'react';
import {NavLink} from "react-router-dom";

const Navigator = () => {
    const activee = {
        color: "green",
        fontWeight: "bold"
    }
    return (
        <div className="navigator">
            <p></p>
            <span><NavLink className="navvv" activeStyle={activee} exact to="/">Search Field</NavLink></span>
            <span><NavLink className="navvv" activeStyle={activee} to="/watched">Watched Movies</NavLink></span>
            <span><NavLink className="navvv" activeStyle={activee} to="/towatch">To Watch</NavLink></span>
        </div>

    );
};

export default Navigator;