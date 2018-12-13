import React, { Component } from 'react';
import './App.css';
import Filter from './components/Results/Filter';
import Header from './components/Results/Header';
import Results from './components/Results/Results';
import Content from './components/Results/Content';
import resultsside from './components/Results/resultsside';
// import "font-awesome/css/font-awesome.min.css";
// import "bootstrap-css-only/css/bootstrap.min.css";
// import "mdbreact/dist/css/mdb.css";
// import { Navbar, NavbarBrand, NavbarNav, NavItem, NavLink, NavbarToggler, Collapse,  Dropdown, DropdownToggle, DropdownMenu,  DropdownItem } from "mdbreact";
// import {Input, MDBCol, MDBContainer, MDBRow,Button, Card, CardBody, CardImage, CardTitle, CardText, Col, MDBBtn } from 'mdbreact';

class App extends Component {
 
  render() {
    return (
      <div>
        <Header/>
        <Content/>
   </div>
    );
  }
}






{/*class Content extends React.Component {
 
  render() {
     return (
        <div>
        <MDBContainer style={{marginTop: "20px"}}>
  <MDBRow style={{ marginLeft: "-82px",marginRight: "-71px"}}>
    <MDBCol md="3" className="block-example border"style={{padding: "20px 20px 15px",fontsize: "13px",fontweight: "500"}}>
    <div>
      <Filter/>
   

</div>

    
    </MDBCol>
    <MDBCol md="9" className="block-example border ">
    <Results/>
</MDBCol>
  </MDBRow>
</MDBContainer>
        </div>
     );
  }
}*/}
export default App;
