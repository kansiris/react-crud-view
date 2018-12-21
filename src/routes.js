
import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Content from './components/Results/Content';
import Home from './components/Home/Home';
import Notfound from './components/Notfound/Notfound';
import Login from './components/login/Login';

const Routes =()=>(
    <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/Results" component={Content}/>
      <Route exact path="/Login" component={Login}/>

      <Route exact path="*" component={Notfound}/>
      </Switch>
    </BrowserRouter>
    
    )

    export default Routes;