import './App.css';
import Navigation from './Navigation';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './components/Home';
import Menu from './components/Menu';
import Account from './containers/Account';
import Cart from './components/Cart';
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
        <Route exact path= '/' render={() => <Home/>}/>
        <Route exact path="/menu" render={() => <Menu/>}/>
        <Route exact path="/account" render={() => <Account/>}/>
        <Route exact path="/cart" render={() => <Cart/>}/>
      </Router>
    </div>
  );
};

export default App;
