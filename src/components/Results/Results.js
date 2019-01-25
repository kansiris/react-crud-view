import React, { Component } from 'react';
import './results.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import {  MDBCol,  MDBRow,  Card, CardBody, CardImage,  CardText, Col } from 'mdbreact';

class Results extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: [], name: '', data: '',location : '',eventtype:'',guests:'',eventdate:'' };
    this.handleChange = this.handleChange.bind(this);
    this.onClick = this.onClick.bind(this);
this.state.location = localStorage.getItem('location');
this.state.eventtype = localStorage.getItem('eventtype');
this.state.guests = localStorage.getItem('guests');
this.state.eventdate = localStorage.getItem('eventdate');
if(this.state.location ===''){
    this.allvendors();
}
else{
  this.alsearch();
}
  }
  handleChange(e) {
    this.setState({ name: e.target.value })
  }
  alsearch(){
    fetch("http://localhost:49716/api/results/getallsearch?type=Venue&&loc=" + this.state.location + "&&eventtype=" + this.state.eventtype + "&&count=" + this.state.guests + "&&date=" + this.state.eventdate)
    .then((res) => res.json())
    .then((res) => { this.setState({items:res})})

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
                      <h6 className="card-title" id="name">{item.BusinessName}
                        <i className="fa fa-map-marker-alt" style={{ color: "red", paddingLeft: "22%" }}></i>
                        {item.Landmark}, {item.City}</h6>
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
