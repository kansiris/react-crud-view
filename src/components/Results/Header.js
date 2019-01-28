import React, { Component } from 'react';
import './results.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import logo from '../../images/logo.jpg';

import { Navbar, NavbarBrand, NavbarNav, NavItem, NavLink, NavbarToggler, Collapse, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from "mdbreact";

class Header extends React.Component {
  constructor(){
    super();
  this.state = {
    name:'',isOpen: false
  };
    this.state.name = localStorage.getItem('Firstname');
   
 }

 logout = ()=>{
  localStorage.removeItem('Firstname');
  localStorage.removeItem('Email');
  window.location.reload();
 }
 toggleOpen = () => this.setState({ isOpen: !this.state.isOpen });

 
  renderButton1() {
 
    if(this.state.name !== ''&& this.state.name !== null) {
    return (
      <div>
     
      {/* <select className="form-control form-control-sm ml-3 w-75" id="eventtype" style={{ border: 'none' }}  onClick={this.handleSelectChange} required>
                        <option value="select">{this.state.name}</option>
                        <option value="Wedding"> <a href="/Userdetails"><strong className="black-text">Profile</strong></a></option>
                        <option value="Engagement"> <a href="#" onClick={this.logout}><strong className="black-text">Logout</strong></a></option>
                        
                      </select>
     */}
    
    <div className="dropdown" onClick={this.toggleOpen}>
        <button
          className="btn btn-secondary dropdown-toggle"
          type="button"
          id="dropdownMenuButton"
          data-toggle="dropdown"
          aria-haspopup="true"
        >
          {this.state.name}
        </button>
        <div aria-labelledby="dropdownMenuButton">
          <a className="dropdown-item" href="/Userdetails">
          Profile
          </a>
          <a className="dropdown-item" href="#nogo" onClick={this.logout}>
          Logout          </a>
          {/* <a className="dropdown-item" href="#nogo">
            Item 3
          </a> */}
        </div>
      </div>
                   </div>
    );
  } else{
    return (
      <div>
    
    <a href="/Login"><strong className="black-text">Login <i className="fa fa-lock" aria-hidden="true"></i></strong></a>
              
      </div>
    )

  }}
 


render(){ 

  
  return(


<div>
<nav className="navbar navbar-expand-lg navbar-light bg-white">
<a href='/'>
            <img style={{ height: "27px" }} src={logo} />
            <strong className="black-text">My Village Foods</strong></a> 
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent" style={{ marginLeft: "10%" }}>
    <ul className="navbar-nav mr-auto">
      {/* <select className="form-control form-control-sm ml-3 w-75" id="eventtype" style={{ border: 'none' }}  onClick={this.handleSelectChange} required>
                        <option value="select">Shop Products</option>
                        <option value="Wedding">Basmati</option>
                        <option value="Engagement">Matta</option>
                        <option value="BirthDay">Ponni</option>
                        <option value="Corporate">Sona-masoori</option>
                        <option value="Baby Function">Idly rice</option>
                        <option value="other">other</option>
                        {this.state.result}
                      </select> */}
                       <div className="nav">
      <Link />
      </div>
      <li className="nav-item">
        <a className="nav-link" href="#">ABOUT <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">BLOG</a>
      </li>
      <li className="nav-item">
        <a className="nav-link disabled" href="#">CONTACT</a>
      </li>
    </ul>
   
    <form className="form-inline my-2 my-lg-0">
{this.renderButton1()}
    <a href="/Shopingcart" style={{color:'black'}}> <i className="fa fa-shopping-cart fa-2x" aria-hidden="true"></i> </a>
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
</nav>
</div>
);}
}
 
class Link extends React.Component {
	state = {
  	open: false
  }
  handleClick = () => {
  	this.setState({ open: !this.state.open });
  }
  render () {
  	const { open } = this.state;
  	return (
    	<div className="link">
    	  <span onClick={this.handleClick}>Click Me</span>
        <div className={`menu ${open ? 'open' : ''}`}>
          <ul>
            <li>Test 1</li>
            <li>Test 2</li>
            <li>Test 3</li>
          </ul>
        </div>
    	</div>
    )
  }
}




export default Header;
