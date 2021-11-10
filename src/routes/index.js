import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './index.css';

import Home from '../views/Home/Home';
import Privacy from '../views/Privacy/Privacy';
import Coupon from '../views/Coupon/Coupon';


function Routes () {
  return (
      <BrowserRouter>
          <Switch>
              <Route path="/" exact component={Home}/>
              <Route path="/privacy" exact component={Privacy}/>
              <Route path="/coupon" exact component={Coupon}/>
          </Switch>
      </BrowserRouter> 
  );
}

export default Routes;