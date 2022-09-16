import './App.css';
import Navigation from './Navigation';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './containers/Home';
import Menu from './containers/Menu';
import Account from './containers/Account';
import Cart from './containers/Cart';
import React, {useState, useEffect} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { fetchItems } from './actions/items';
import { useDispatch } from 'react-redux';
import { fetchCategories } from './actions/categories';

const App = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchItems());
    dispatch(fetchCategories());
  }, []);


  return (
    <div className="App">
      <Navigation/>
      <Router>
        <Routes>
          <Route exact path= '/' element={<Home/>}/>
          <Route exact path="/menu" element={<Menu/>}/>
          <Route exact path="/account" element={<Account/>}/>
          <Route exact path="/cart" element={<Cart/>}/>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
