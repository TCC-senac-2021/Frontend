import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './index.css';

import Home from '../views/Home/Home';
import Privacy from '../views/Privacy/Privacy';
import Login from '../views/Login/Login';


function Routes () {
    
  return (
      <BrowserRouter>
      
          <Switch>
              <Route path="/" exact component={Home}/>
              <Route path="/privacy" exact component={Privacy}/>
              <Route path="/login" exact component={Login}/>
          </Switch>
      </BrowserRouter> 
  );
}

export default Routes;