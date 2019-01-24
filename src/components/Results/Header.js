import React, { Component } from 'react';
import './results.css';
import "font-awesome/css/font-awesome.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import logo from '../../images/logo.jpg';

import { Navbar, NavbarBrand, NavbarNav, NavItem, NavLink, NavbarToggler, Collapse, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from "mdbreact";

class Header extends React.Component {
  constructor(){
    super();
  this.state = {
    name:''
  };
  //  this.state.name = localStorage.getItem('UserName');
   
 }


//  logout = ()=>{
//   localStorage.removeItem('UserName');
//   localStorage.removeItem('UserID');
//   window.location.reload();
//  }
 
//  renderButton1() {
 
//     if(this.state.name !== ''&& this.state.name !== null) {
//     return (
//       <div>
     
//               <NavItem>
//                 <Dropdown>
//                   <DropdownToggle nav caret>
//                     <div className="d-none d-md-inline"> <strong className="black-text">{this.state.name}</strong></div>
//                   </DropdownToggle>
//                   <DropdownMenu className="dropdown-default" right>
//                     <DropdownItem href="#!" > <strong className="black-text">Profile</strong></DropdownItem>
//                     <DropdownItem href="#!"onClick={this.logout}> <strong className="black-text">LogOut</strong></DropdownItem>
//                  </DropdownMenu>
//                 </Dropdown>
//               </NavItem>
//                    </div>
//     );
//   } else{
  //   return (
  //     <div>
        
    
  //             <NavLink to="/Login"> <strong className="black-text">Login<i className="fa fa-lock" aria-hidden="true"></i></strong></NavLink>
              
  //     </div>
  //   )

  // }}
 


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
      
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          SHOP
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <a className="dropdown-item" href="#">Action</a>
          <a className="dropdown-item" href="#">Another action</a>
          <div className="dropdown-divider"></div>
          <a className="dropdown-item" href="#">Something else here</a>
        </div>
      </li>
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
    <a href="/Login"><strong className="black-text">Login <i className="fa fa-lock" aria-hidden="true"></i></strong></a>
    {/* <i className="fa fa-shopping-cart fa-2x" aria-hidden="true"></i> */}
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
</nav>
</div>
);}
}
 
export default Header;