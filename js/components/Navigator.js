import React from 'react';
import {NavLink} from "react-router-dom";

const Navigator = () => {
    return (
        <div className="navigator">
            <p></p>
            <span><NavLink to="/">Search Field</NavLink></span>
            <span><NavLink to="/watched">Watched Movies</NavLink></span>
            <span><NavLink to="/towatch">To Watch</NavLink></span>
        </div>

    );
};

export default Navigator;