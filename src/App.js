import React, { Component } from 'react';
import logo from './logo.svg';
import Home from './Home';
import About from './About';
import './App.css';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div className="App-intro">


        <Router>
          <div>
            <nav>
                <Link to='/'>Home</Link> ||
                <Link to='/about'>About</Link>
            </nav>

              <Route exact path='/' component={()=>(<Home description={'this is homepage'} users={['a','b']}/>)}
              />
              <Route exact path='/about' component={
                ()=>(
                  <About description={'aboutaboutabout'} />
                )}
              />
          </div>

        </Router>
        </div>
      </div>
    );
  }
}

export default App;
