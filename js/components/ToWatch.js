import React from 'react';
import Result from "./Result";

const ToWatch = ({toWatchList, deleteItem, addToWatch}) => {

    const timer = (item) => {
        setTimeout(() => {
            addToWatch(item);
        }, 400)

    }
    return (
        <div className="grid-list">
            {
                toWatchList.map((el, i) => (
                    <Result key={i}
                            data={el}
                            deleteItem={deleteItem}
                            addToWatch={timer}
                    />
                ))
            }
        </div>
    );
};

export default ToWatch;