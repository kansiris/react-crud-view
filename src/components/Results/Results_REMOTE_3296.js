import React, { Component } from 'react';
//import logo from './logo.svg';
import './results.css';
import "font-awesome/css/font-awesome.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import { Navbar, NavbarBrand, NavbarNav, NavItem, NavLink, NavbarToggler, Collapse, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from "mdbreact";
import { Input, MDBCol, MDBContainer, MDBRow, Button, Card, CardBody, CardImage, CardTitle, CardText, Col, MDBBtn } from 'mdbreact';

class Results extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: [], name: '', data: '' };
    this.handleChange = this.handleChange.bind(this);
    this.onClick = this.onClick.bind(this);
    this.allvendors();
  }
  handleChange(e) {
    this.setState({ name: e.target.value })
  }

  allvendors() {
    fetch("http://localhost:49716/api/results/getall?type=Venue")
      .then((res) => res.json())
      .then((result) => { this.setState({ items: result }) })
  }

  onClick() {
    var search = this.state.name;
    fetch("http://localhost:49716/api/results/search?name=" + search + "&&type=Venue")
      .then((res) => res.json())
      .then((result) => this.setState({ items: result }))
  }

  render() {
    var i = 0;
    return (
      <div>
        <br />
        <input type="text" placeholder="Search Vendor" value={this.state.name} onChange={this.handleChange} />
        <input type="button" value="search" onClick={this.onClick} className="btn btn-primary btn-sm waves-effect waves-light" />
        <MDBRow style={{ marginBottom: "1rem" }}>
          {this.state.items.map(item =>
            (
              <MDBCol md="4"><Col>
                <Card style={{ width: "118%" }}>
                  <CardImage className="img-fluid" style={{ position: "relative", fontsize: "50px", zindex: "3" }} src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg" waves />
                  {/* <MDBRow>
                    <MDBCol size="4">	<div className="rating">
                      <i className="fas fa-star-half-alt" id="star"></i>
                      <i className="fas fa-star" id="star"></i>
                      <i className="fas fa-star" id="star"></i>
                      <i className="fas fa-star" id="star"></i>
                      <i className="fas fa-star" id="star"></i>
                    </div></MDBCol>
                    <MDBCol size="3">{item.subtype}</MDBCol>
                    <MDBCol size="5">58 Reviews</MDBCol>
                  </MDBRow> */}
                  <CardBody style={{ padding: "0" }}>
                    <CardText>
                      <h10 className="card-title" id="name">{item.BusinessName}
                        <i className="fa fa-map-marker-alt" style={{ color: "red", paddingLeft: "22%" }}></i>
                        {item.Landmark}, {item.City}</h10>
                      <div className="row">
                        <div className="card-text col-md-4">Veg</div>
                        <div className="col-md-8">
                          <strike className="strikeout">₹{item.cost1}</strike>
                          <input type="text" className="price" id="placeholder" value={"₹" + item.cost1} />
                          {/* <i className="fa fa-check active" style={{ marginLeft: "-16px", color: " green", fontsize: "11px" }}></i> */}
                        </div>

                        <div className="card-text col-md-4">Non-Veg</div>
                        <div className="col-md-8">
                          <strike className="strikeout">₹{item.cost2}</strike>
                          <input type="text" className="price" id="placeholder" value={"₹" + item.cost2} />
                          {/* <i className="fa fa-check active" style={{ marginLeft: "-16px", color: " green", fontsize: "11px" }}></i> */}
                        </div>
                      </div>
                      <div className="card-footer">
                        <small className="text-muted" id="description">Capacity : {item.Minimumseatingcapacity} - {item.Maximumcapacity}<a href="#" style={{ float: "right", paddingTop: "4px" }}>Book Now</a></small>
                      </div>
                    </CardText>
                  </CardBody>
                </Card>
              </Col>
              </MDBCol>))}
        </MDBRow>
      </div>
    )
  }
}

export default Results;
