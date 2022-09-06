import React from "react";

const Item = ({item}) => {
    return (
        <div className="item">
            <img src={item.image}/>
            <h2>{item.name}</h2>
        </div>
    )
};

export default Item;