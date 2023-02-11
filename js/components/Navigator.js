import React from 'react';
import { NavLink } from "react-router-dom";

const Navigator = () => {
    return (
        <div className="navigator">
            <span><NavLink className={({ isActive }) => isActive? 'active': "inactive"} exact to="/">Search Field</NavLink></span>
            <span><NavLink className={({ isActive }) => isActive? 'active': "inactive"} to="/watched">Watched Movies</NavLink></span>
            <span><NavLink className={({ isActive }) => isActive? 'active': "inactive"} to="/towatch">To Watch</NavLink></span>
        </div>
    );
};

export default Navigator;