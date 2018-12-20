import React, { Component } from 'react';
import './App.css';
import Home from './components/Home/Home';
// import Filter from './components/Results/Filter';
// import Header from './components/Results/Header';
// import Results from './components/Results/Results';
// import Content from './components/Results/Content';
// import "font-awesome/css/font-awesome.min.css";
// import "bootstrap-css-only/css/bootstrap.min.css";
// import "mdbreact/dist/css/mdb.css";
// import { Navbar, NavbarBrand, NavbarNav, NavItem, NavLink, NavbarToggler, Collapse,  Dropdown, DropdownToggle, DropdownMenu,  DropdownItem } from "mdbreact";
// import {Input, MDBCol, MDBContainer, MDBRow,Button, Card, CardBody, CardImage, CardTitle, CardText, Col, MDBBtn } from 'mdbreact';

class App extends Component {
  render() {
    return (
      <div>
        {/* <Header />
        <Content /> */}
        <Home/>
      </div>
    );
  }
}
export default App;
