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
      <select className="form-control form-control-sm ml-3 w-75" id="eventtype" style={{ border: 'none' }}  onClick={this.handleSelectChange} required>
                        <option value="select">Shop Products</option>
                        <option value="Wedding">Basmati</option>
                        <option value="Engagement">Matta</option>
                        <option value="BirthDay">Ponni</option>
                        <option value="Corporate">Sona-masoori</option>
                        <option value="Baby Function">Idly rice</option>
                        <option value="other">other</option>
                        {this.state.result}
                      </select>
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
    <a href="/Shopingcart" style={{color:'black'}}> <i className="fa fa-shopping-cart fa-2x" aria-hidden="true"></i> </a>
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
</nav>
</div>
);}
}
 
export default Header;
