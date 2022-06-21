import './App.css';
import Navigation from './Navigation';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './components/Home';
import Menu from './components/Menu';
import Account from './containers/Account';
import Cart from './components/Cart';
import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {

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
