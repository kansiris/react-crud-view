import React, { Component } from 'react';
import './co.css';
import Header from '../Results/Header';
class Cosignin extends Component {
    render() {
        return (<div>
            <Header/>
            <div className="bg">
            <h1 className="heading">CheckOut Sign In</h1>
            <div className="container" style={{backgroundColor:"white"}}>
           
            <div className="row checkout">
                <div className="col-sm-5 col-md-5">
                    <form>
                        <h2 className="txt">
                            Returning Customers
                         </h2>
                        <p>If you already have an account, please sign in here before checking out.</p>
                        <div className="row">
                            <div className="col-sm-12 col-md-12 form-group">
                                <input type="text" placeholder="Email" id="Email" name="Email" className="form-control" />
                            </div>
                            <div className="col-sm-12 col-md-12 form-group">
                                <input type="text" placeholder="Password" id="Password" name="Password" className="form-control" />
                            </div>
                            <div className="col-sm-12  col-md-12 form-group">
                                <button className="btntxt">
                                    Forgot your password?
                               </button>
                                <button className="text">LOG IN <i class="fa fa-lock" aria-hidden="true"></i></button>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="col-sm-2 col-md-2 txt1">
                    <p>Or</p>
                </div>
                <div className="col-sm-5 col-md-5">
                    <h2 className="txt">Guest CheckOut</h2>
                    <p>Checkout without logging in or registering an account.</p>
                    <button className="t">Continue As Guest <i class="fa fa-arrow-right" aria-hidden="true"></i></button>
                    <div>&emsp;
                        <h2 className="txt">Register Account</h2>
                        <p>Register a new account to save your order history.</p>
                        <a href="\Login">

                        <button className="btntxt">
                            Register Now
                  </button>
                        </a>
                    </div>

                </div>
            </div>
            </div>
            <h1>sadfsfd</h1>
            </div>
            </div>
      
        );
    }
}
export default Cosignin;