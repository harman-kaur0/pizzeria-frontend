import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import Item from './Item';
import Category from './Category';
import Deal from './Deal';
import OrderSummary from './OrderSummary';
import { filterItems } from '../actions/items';

const Menu = () => {

    const items = useSelector(state => state.items.items);
    const categories = useSelector(state => state.categories.categories);
    const dispatch = useDispatch();

    const handleClick = (category) => {
        dispatch(filterItems(items, category));
    };

    return (
        <div className='menu-wrapper'>
            <div className='category-navigation'>
                <ul> 
                    
                    {[{name: "VIEW ALL"}, ...categories].map(category =>
                    <li>
                        <a onClick={() => handleClick(category.name)}><b>{category.name}</b></a>
                    </li>
                    )}
                </ul>
            </div>
            <div className='menu-wrapper'>
                <h1>MENU</h1>
                <div className='menu-container'>
                    <div className='menu-left'>
                        <div className='deals-container'>
                            <Deal/>
                        </div>
                        <div className='category-container'>
                            {categories.map(category => <Category category={category} handleClick={handleClick}/>)}
                        </div>
                    </div>
                    <div className='menu-right'>
                        <div className='order-summary'>
                            <OrderSummary/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default Menu;