import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import Item from '../components/Item';
import Category from '../components/Category';
import Deal from '../components/Deal';
import OrderSummary from '../components/OrderSummary';
import { filterItems } from '../actions/items';

const Menu = () => {

    const itemsSelector = useSelector(state => state.items);
    const { items, filteredItems, filteredCategory } = itemsSelector
    const categories = useSelector(state => state.categories.categories);
    const dispatch = useDispatch();

    const handleClick = (category) => {
        dispatch(filterItems(items, category));
    };

    return (
        <div className='menu-wrapper'>
            <div className='category-navigation'>
                <ul> 
                    
                    {[{name: "VIEW ALL"}, ...categories].map((category, i) =>
                    <li key={i}>
                        <a onClick={() => handleClick(category.name)}><b>{category.name}</b></a>
                    </li>
                    )}
                </ul>
            </div>
            <div className='menu-wrapper'>
                <h1>{ filteredCategory?.toUpperCase() || "MENU" }</h1>
                <div className='menu-container'>
                    <div className='menu-left'>
                        <div className='deals-container'>
                            <Deal/>
                        </div>
                        <div className='category-container'>
                            {
                                filteredItems?.length ?
                                filteredItems.map((item, i) => <Category key={i} category={item}/>) : 
                                categories.map((category, i) => <Category key={i} category={category} handleClick={handleClick}/>)
                            }
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