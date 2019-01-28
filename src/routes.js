
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
import Shipping from './components/Shipping/Shipping';
// import  Productimages from './products'
import Userdetails from './components/Userprofile/Userprofile';
import UserOrderlist from './components/Userorders/Userorderlist';
import VProduct from './components/Vproducts/vproducts';
import vorder from './components/Vorders/Vorder';
import vcustomer from './components/Vcustomer/Vcustomer';
import dropdown from './components/Results/dropdown'
import products from './components/products/Products';

const Routes =()=>(
    <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/Results" component={Content}/>
      <Route exact path="/Login" component={Login}/>
      <Route exact path="/Userdetails" component={Userdetails}/>
      <Route exact path="/UserOrderlist" component={UserOrderlist}/>
      <Route exact path="/vorder" component={vorder}/>
      <Route exact path="/vcustomer" component={vcustomer}/>
      <Route exact path="/dropdown" component={dropdown}/>
      {/* <Route exact path="/VDb" component={VContent}/> */}
      {/* <Route exact path="/Productlist" component={Productlist}/> */}
      {/* <Route exact path="/Productimages" component={Productimages}/> */}
      <Route exact path="/VProduct" component={VProduct}/>
      <Route exact path="/checkout" component={checkout}/>
      <Route exact path="/shopingcart" component={shopingcart}/>
      <Route exact path="/cosign" component={cosign}/>

      <Route exact path="/Shipping" component={Shipping}/>
      <Route exact path="/products" component={products}/>

      <Route exact path="*" component={Notfound}/>

      </Switch>
    </BrowserRouter>

    )

    export default Routes;
