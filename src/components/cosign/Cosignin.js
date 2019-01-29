import React, { Component } from 'react';
import './co.css';
import Header from '../Results/Header';
// import { MDBContainer, MDBRow, MDBInput, MDBCol, MDBBtn } from 'mdbreact';
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';

class Cosignin extends Component {

    constructor(props){
        super(props);
        this.state={
            Email:'',Password:'',modal: false,sentemail:''
        }
        this.handleChange=this.handleChange.bind(this);
        this.login=this.login.bind(this);
        this.sendmail=this.sendmail.bind(this);
    }
    toggle = () => {
        this.setState({
          modal: !this.state.modal
        });
      }
    handleChange(e) {
        const state=this.state
      state[e.target.id]=e.target.value;
      this.setState(state);
    }
    sendmail(e){
        e.preventDefault();
        const{sentemail}=this.state;
        alert(sentemail)
        fetch('http://localhost:64017/api/Customer/SendPasswordmail?email='+ sentemail,{
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
        }).then((response) => response.json()).then((responseJson) => {
        //   window.location.reload();
        this.toggle();
          this.setState({sentemail:''});
          return responseJson.success;
        })
      
      }
    login(e)
    {
        const{Email,Password}=this.state
   e.preventDefault();
  fetch('http://localhost:64017/api/Customer/UserLogin?email='+Email +'&& password ='+Password,{
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
    this.setState({Email:'',Password:''});
    return responseJson.success;
  });
    }

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
                                <input type="text" placeholder="Email" id="Email" name="Email" className="maintxt form-control" onChange={this.handleChange} value={this.state.Email} />
                            </div>
                            <div className="col-sm-12 col-md-12 form-group">
                                <input type="password" placeholder="Password" id="Password" name="Password" className="maintxt form-control" onChange={this.handleChange} value={this.state.Password} />
                            </div>
                            <div className="col-sm-12  col-md-12 form-group">
                            <MDBContainer>
      <MDBBtn onClick={this.toggle} size="sm" color="#0c4d6c" className="btntxt">Forgot your Password?</MDBBtn>
      <MDBModal isOpen={this.state.modal} toggle={this.toggle} centered>
        <MDBModalHeader toggle={this.toggle}>Enter Email</MDBModalHeader>
        <MDBModalBody>
        <input type="text" placeholder="Email" id="sentemail" name="sentemail" className="maintxt form-control" onChange={this.handleChange} value={this.state.sentemail} />
        </MDBModalBody>
        <MDBModalFooter>
          <MDBBtn color="secondary" onClick={this.toggle}>Close</MDBBtn>
          <MDBBtn color="primary" onClick={this.sendmail}>Send</MDBBtn>
        </MDBModalFooter>
      </MDBModal>
      <button className="text" onClick={this.logindetails}>LOG IN <i className="fa fa-lock" aria-hidden="true"></i></button>
    </MDBContainer>

    
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
                    <button className="t">Continue As Guest <i className="fa fa-arrow-right" aria-hidden="true"></i></button>
                    <div>&emsp;
                        <h2 className="txt">Register Account</h2>
                        <p>Register a new account to save your order history.</p>
                        <a href="\Login"><button className="btntxt"> Register Now</button></a>
                    </div>

                </div>

</div>
</div>
</div>
</div>
      
        );
    }
}
export default Cosignin;