import './App.css';
import Navbar from './Navbar';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './Home';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Router>
        <Route exact path= '/' render={() => <Home/>}/>
      </Router>
    </div>
  );
}

export default App;
