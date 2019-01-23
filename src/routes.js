
import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Content from './components/Results/Content';
import Home from './components/Home/Home';
import Notfound from './components/Notfound/Notfound';
import Login from './components/login/Login';
<<<<<<< HEAD
import VContent from './components/Vendordashbord/VContent';
import Productlist from './components/products/Products';
// import Productimages from './components/Productimages';
=======
import checkout from './components/checkout/Checkout';
import shopingcart from './components/shopingcart/Shoppingcart'
import cosign from './components/cosign/Cosignin'

>>>>>>> 4dbae34f311a98b260147245f9866a86b5b18ab2
const Routes =()=>(
    <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/Results" component={Content}/>
      <Route exact path="/Login" component={Login}/>
<<<<<<< HEAD
      <Route exact path="/VDb" component={VContent}/>
      <Route exact path="/Productlist" component={Productlist}/>
      {/* <Route exact path="/Productimages" component={Productimages}/> */}
=======
      <Route exact path="/checkout" component={checkout}/>
      <Route exact path="/shopingcart" component={shopingcart}/>
      <Route exact path="/cosign" component={cosign}/>
>>>>>>> 4dbae34f311a98b260147245f9866a86b5b18ab2
      <Route exact path="*" component={Notfound}/>

      </Switch>
    </BrowserRouter>
    
    )

    export default Routes;
