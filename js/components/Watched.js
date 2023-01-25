import React from 'react';
import Result from "./Result";

const Watched = ({list, deleteItem}) => {
    return (
        <div className="grid-list">
            {
                list.map((el, i) => (
                    <Result
                        key={i}
                        data={el}
                        deleteItem={deleteItem}
                    />
                ))
            }
        </div>
    );
};

export default Watched;