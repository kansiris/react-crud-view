
// import FaceBookLogin from 'react-facebook-login';
// import GoogleLogin from 'react-google-login';
import {PostData} from './postdata';
import {Redirect} from 'react-router-dom';

import React, { Component } from 'react';
import './login.css';
import Header from '../Results/Header';
class Login extends Component {
  render() {
    return (
    <div>
      <Header/>
      <div className="bg">
      <h1 className="heading">Sign In/Register</h1> 
      <div className="container" style={{backgroundColor:"white"}}>
      <section>
        <div className="row loginpage">
          <div className="col-sm-6 col-md-6">
            <form>
              <h2 className="txt">Sign In</h2>
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
                  <button className="text">LOG IN <i className="fa fa-lock" aria-hidden="true"></i></button>
                </div>
              </div>
            </form>
          </div>
          <div className="col-sm-6 col-md-6">
            <form>
              <h2 className="txt">Register a New Account</h2>
              <div className="row">
                <div className="col-sm-12 col-md-12 form-group">
                  <input type="text" id="First Name" name="First Name" placeholder="First Name" className="form-control" />
                </div>
                <div className="col-sm-12 col-md-12 form-group">
                  <input type="text" id="Last Name" name="last Name" placeholder="Last Name" className="form-control" />
                </div>
                <div className="col-sm-12 col-md-12 form-group">
                  <input type="text" id="Email" name="Email" placeholder="Email" className="form-control" />
                </div>
                <div className="col-sm-12 col-md-12 form-group">
                  <input type="password" id="Password" name="Password" placeholder="Password" className="form-control" />
                </div>
                <div className="col-sm-12 col-md-12 form-group">
                  <input type="password" id="Confirm Password" name="Confirm Password" placeholder="Confirm Password" className="form-control" />
                </div>
                <div className="col-sm-12 col-md-12 form-group">
                  <input type="checkbox" /> &nbsp; Recieve promotional emails
                </div>
                <div className="col-sm-12 col-md-12 form-group">
                  <button className="submit">
                    Submit &nbsp;<i className="fa fa-arrow-right" aria-hidden="true"></i>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
      </div>
      </div></div>
    );
  }
}
export default Login;