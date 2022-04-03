import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Navbar from './Navbar';
import People from './People';
import Planets from './Planets';
import Starships from './Starships';
import NotFound from './NotFound';
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom'
import Vehicles from './Vehicles';

const routing = (
  <Router>
    <div>
        <Navbar></Navbar>
        <Switch>
          <Route exact path="/" component={App}></Route>
          <Route path="/people" component={People}></Route>
          <Route path="/planets" component={Planets}></Route>
          <Route path="/starships" component={Starships}></Route>
          <Route path="/vehicles" component={Vehicles}></Route>
          <Route component={NotFound}></Route>
        </Switch>
    </div>
  </Router>
)

ReactDOM.render(
  routing,
  document.getElementById('root')
);