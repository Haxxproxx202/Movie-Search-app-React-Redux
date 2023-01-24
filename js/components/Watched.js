import React from 'react';
import Result from "./Result";

const Watched = ({list}) => {
    return (
        <div>
            {
                list.map((el, i) => (
                    <Result key={i} data={el}/>
                ))
            }
        </div>
    );
};

export default Watched;