import React from 'react';
import { useSelector } from "react-redux";
import Item from './Item';
import Category from './Category';
import Deal from './Deal';
import OrderSummary from './OrderSummary';

const Menu = () => {

    const items = useSelector(state => state.items.items);
    const categories = useSelector(state => state.categories.categories);

    return (
        <div className='menu-wrapper'>
            <div className='category-navigation'>
                <ul> 
                    
                    {[{name: "VIEW ALL"}, ...categories].map((category, i) =>
                    <li key={i}>
                        <a><b>{category.name}</b></a>
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
                            {categories.map(category => <Category category={category}/>)}
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