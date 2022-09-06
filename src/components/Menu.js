import React from 'react';
import { useSelector } from "react-redux";
import Item from './Item';

const Menu = () => {

    const items = useSelector(state => state.items.items);
    return (
        <div className='item-container'>
            {items.map(item => <Item item={item}/>)}
        </div>
    );
};


export default Menu;