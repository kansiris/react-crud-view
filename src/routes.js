
import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Content from './components/Results/Content';
import Home from './components/Home/Home';
import Notfound from './components/Notfound/Notfound';
import Login from './components/login/Login';
import checkout from './components/checkout/Checkout';

import shopingcart from './components/shopingcart/Shoppingcart'
import cosign from './components/cosign/Cosignin'
import  Productlist from './components/products/Products'
// import  Productimages from './products'

import products from './components/products/Products';

const Routes =()=>(
    <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/Results" component={Content}/>
      <Route exact path="/Login" component={Login}/>

      {/* <Route exact path="/VDb" component={VContent}/> */}
      <Route exact path="/Productlist" component={Productlist}/>
      {/* <Route exact path="/Productimages" component={Productimages}/> */}

      <Route exact path="/checkout" component={checkout}/>
      <Route exact path="/shopingcart" component={shopingcart}/>
      <Route exact path="/cosign" component={cosign}/>


      <Route exact path="/products" component={products}/>

      <Route exact path="*" component={Notfound}/>

      </Switch>
    </BrowserRouter>
    
    )

    export default Routes;
