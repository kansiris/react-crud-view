
// import FaceBookLogin from 'react-facebook-login';
// import GoogleLogin from 'react-google-login';
// import {PostData} from './postdata';
// import {Redirect} from 'react-router-dom';

import React, { Component } from 'react';
import './login.css';
import Header from '../Results/Header';



class Login extends Component {

  constructor(props)
  {
    super(props);
    this.state={
      Firstname:'',Lastname:'',Email:'',Password:'',confirmpassword:'',email:'',password:''

    }
    this.handleChange=this.handleChange.bind(this);
    this.Savedetails=this.Savedetails.bind(this);
    this.logindetails=this.logindetails.bind(this);
  }

  handleChange(e) {
    const state=this.state
  state[e.target.id]=e.target.value;
  this.setState(state);
}

logindetails(e)
{
   const{email,password}=this.state
   e.preventDefault();
  fetch('http://localhost:64017/api/Customer/UserLogin?email='+email +'&& password ='+password,{
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
  }
  }).then((response) => response.json())
  .then((responseJson) => { 
    localStorage.setItem('Firstname',responseJson.Firstname);
   localStorage.setItem('Email',responseJson.Email);
    window.location.reload();
    alert('Login Successfully');
    this.setState({email:'',password:''});
    return responseJson.success;
  });
}
Savedetails(e)
{
   const{Firstname,Lastname,Email,Password,confirmpassword}=this.state;
   e.preventDefault();
   fetch('http://localhost:64017/api/Customer/UserRegister',{
    method: 'POST',
    body:JSON.stringify({Firstname:Firstname,Lastname:Lastname,Email:Email,Password:Password,confirmpassword:confirmpassword}),
     headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
  }
   }).then((response) => response.json())
   .then((responseJson) => {
  
     window.location.reload();
           
          this.setState({Firstname:'',Lastname:'',Email:'',Password:'',confirmpassword:''});
          alert('Registered Successfully');
          return responseJson.success;
         
   })
   .catch((error) => {
     console.error(error);
     alert('failed');
   });
   
}

  render() {
    return (
    <div className="ln">
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
                  <input type="text" placeholder="Email" id="email" name="email" className="form-control" onChange={this.handleChange} value={this.state.email} />
                </div>
                <div className="col-sm-12 col-md-12 form-group">
                  <input type="password" placeholder="Password" id="password" name="password" className="form-control" onChange={this.handleChange} value={this.state.password} />
                </div>
                <div className="col-sm-12  col-md-12 form-group">
                  <button className="btntxt">
                    Forgot your password?
                  </button>
                  
                  <button className="text" onClick={this.logindetails}>LOG IN <i className="fa fa-lock" aria-hidden="true"></i></button>
                </div>
              </div>
            </form>
          </div>
          <div className="col-sm-6 col-md-6">
            <form>
              <h2 className="txt">Register a New Account</h2>
              <div className="row">
                <div className="col-sm-12 col-md-12 form-group">
                  <input type="text" id="Firstname" name="Firstname" placeholder="First Name" className="form-control" onChange={this.handleChange} value={this.state.FirstName}  />
                </div>
                <div className="col-sm-12 col-md-12 form-group">
                  <input type="text" id="Lastname" name="Lastname" placeholder="Last Name" className="form-control" onChange={this.handleChange} value={this.state.LastName} />
                </div>
                <div className="col-sm-12 col-md-12 form-group">
                  <input type="text" id="Email" name="Email" placeholder="Email" className="form-control" onChange={this.handleChange} value={this.state.Email} />
                </div>
                <div className="col-sm-12 col-md-12 form-group">
                  <input type="password" id="Password" name="Password" placeholder="Password" className="form-control" onChange={this.handleChange} value={this.state.Password} />
                </div>
                <div className="col-sm-12 col-md-12 form-group">
                  <input type="password" id="confirmpassword" name="confirmpassword" placeholder="Confirm Password" className="form-control" onChange={this.handleChange} value={this.state.ConfirmPassword} />
                </div>
                <div className="col-sm-12 col-md-12 form-group">
                  {/* <input type="checkbox" /> &nbsp; Recieve promotional emails */}
                </div>
                <div className="col-sm-12 col-md-12 form-group">
                  <button className="submit" onClick={this.Savedetails}>
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