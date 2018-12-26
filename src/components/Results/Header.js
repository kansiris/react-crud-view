import React, { Component } from 'react';
import './results.css';
import "font-awesome/css/font-awesome.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import { Navbar, NavbarBrand, NavbarNav, NavItem, NavLink, NavbarToggler, Collapse, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from "mdbreact";

class Header extends React.Component {
  constructor(){
    super();
  this.state = {
    name:''
  };
   this.state.name = localStorage.getItem('UserName');
   
 }
 logout = ()=>{
  localStorage.removeItem('UserName');
  localStorage.removeItem('UserID');
  window.location.reload();
 }
 
 renderButton1() {
 
    if(this.state.name !== ''&& this.state.name !== null) {
    return (
      <div>
     
              <NavItem>
                <Dropdown>
                  <DropdownToggle nav caret>
                    <div className="d-none d-md-inline"> <strong className="black-text">{this.state.name}</strong></div>
                  </DropdownToggle>
                  <DropdownMenu className="dropdown-default" right>
                    <DropdownItem href="#!" > <strong className="black-text">Profile</strong></DropdownItem>
                    <DropdownItem href="#!"onClick={this.logout}> <strong className="black-text">LogOut</strong></DropdownItem>
                 </DropdownMenu>
                </Dropdown>
              </NavItem>
                   </div>
    );
  } else{
    return (
      <div>
    
              <NavLink to="/Login"> <strong className="black-text">Login/Register</strong></NavLink>
              
      </div>
    )

  }}
 


render(){ 

  
  return(<div>

<Navbar color="white" dark expand="md" style={{ marginTop: "0px" }}>
          <NavbarBrand><a href='/'>
            <img style={{ height: "27px" }} src='http://design.maa-aahwanam.com/responsivedesign/img/logo.png' />
            <strong className="black-text">Ahwanam</strong></a>
          </NavbarBrand>
          <NavbarToggler onClick={this.toggleCollapse} />
          <Collapse id="navbarCollapse3" navbar>
            <NavbarNav left style={{ marginLeft: "50%" }}>
              <NavItem active>
{this.renderButton1()}
              </NavItem>
              <NavItem>
                <NavLink to="#!"> <strong className="black-text"><button type="button" className="btn btn-danger btn-sm waves-effect waves-light" style={{
                  fontsize: "11px", fontweight: "1000"
                }}>Call: +91 7032199007</button></strong></NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="#!"> <img src='http://design.maa-aahwanam.com/responsivedesign/img/india.png' /></NavLink>
              </NavItem>
              <NavItem>
                <Dropdown>
                  <DropdownToggle nav caret>
                    <div className="d-none d-md-inline"> <strong className="black-text">Dropdown</strong></div>
                  </DropdownToggle>
                  <DropdownMenu className="dropdown-default" right>
                    <DropdownItem href="#!"> <strong className="black-text">Action</strong></DropdownItem>
                    <DropdownItem href="#!"> <strong className="black-text">Another Action</strong></DropdownItem>
                    <DropdownItem href="#!"> <strong className="black-text">Something else here</strong></DropdownItem>
                    <DropdownItem href="#!"> <strong className="black-text">Something else here</strong></DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </NavItem>
            </NavbarNav>
          </Collapse>
        </Navbar>
    
</div>);}
}
export default Header;