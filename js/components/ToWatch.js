import React from 'react';
import Result from "./Result";

const ToWatch = ({toWatchList}) => {
    return (
        <div>
            {
                toWatchList.map((el, i) => (
                    <Result key={i} data={el} />
                ))
            }

        </div>
    );
};

export default ToWatch;