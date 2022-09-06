import React from 'react';
import { useSelector } from "react-redux";
import Item from './Item';

const Menu = () => {

    const items = useSelector(state => state.items.items);
    const categories = useSelector(state => state.categories.categories);
    return (
        <div className='menu-container'>
            <div className='menu-sidebar'>
                {categories.map(category => <ul>
                    <li><button>{category.name}</button></li>
                </ul>)}
            </div>
            <div className='item-container'>
                {items.map(item => <Item item={item}/>)}
            </div>
        </div>
    );
};


export default Menu;