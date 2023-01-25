import React from 'react';
import Result from "./Result";

const ToWatch = ({toWatchList, deleteItem}) => {
    return (
        <div className="grid-list">
            {
                toWatchList.map((el, i) => (
                    <Result key={i}
                            data={el}
                            deleteItem={deleteItem}
                    />
                ))
            }

        </div>
    );
};

export default ToWatch;