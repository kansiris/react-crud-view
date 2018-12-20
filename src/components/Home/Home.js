import React, { Component } from 'react';
import './Home.css';
import convention1 from '../../images/convention1.jpg';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import { Button, Card, CardBody, CardImage, CardTitle, CardText } from 'mdbreact';
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import "font-awesome/css/font-awesome.min.css";
import { Fa } from "mdbreact";
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdbreact';

class Home extends Component {

  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-sm navbar-dark fixed-top -navbar">
          <div className="container col-md-6 lgim">
            <a className="navbar-brand" href="#">
              <img src={require('../../images/logo.png')} style={{ width: '35%' }} />
            </a>
          </div>
          <div className="col-md-6 " >
            <div className="row">
              <div className="col-md-2" style={{ marginTop: '6px' }}>
                <span> <a href="#0" style={{ fontsize: '16px', fontfamily: 'lato', fontweight: '600' }}>Login/Register</a></span>
              </div>&nbsp;
            <div className="col-md-3" style={{ marginTop: '6px' }}>
                <span> <a href="#0" style={{ fontsize: '16px', fontfamily: 'lato', fontweight: '600' }}>Pathner&nbsp;Registeration</a></span>
              </div>&nbsp;&nbsp;
            <div className="col-md-5">
                <div className="row">
                  <button type="button" className="btn btn-danger btn-sm waves-effect waves-light" style={{ fontsize: '11px', fontweight: '1000' }}>Call: +91 7032199007</button>
                  <div className="col-md-1" style={{ marginTop: '10px' }}>
                    <img className="indiaimage" src={require('../../images/india.png')} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>

        <div className="row imageconvention">
          <section style={{
            backgroundImage: 'url(' + convention1 + ')', width: '100%',
            height: '550px'
          }}>
            <div className="mask  d-flex justify-content-center align-items-center">
              <div className="container">
                <div className="row searchbar container-fluid" >
                  <div className="col-md-2" >
                    <form className="form-inline mt-4 mb-4">
                      <i class="fa fa-1x fa-map-marker"></i>
                      <input
                        className="form-control form-control-sm ml-3 w-75"
                        type="text"
                        placeholder="Hyderbad" id="location" name="location" style={{ border: 'none' }} />
                    </form>
                  </div>
                  <div className="col-md-3" >
                    <form className="form-inline mt-4 mb-4">
                      <i class="fa fa-1x fa-list"></i>
                      <select className="form-control form-control-sm ml-3 w-75" id="eventtype" style={{ border: 'none' }} >
                        <option value="select">Select Event</option>
                        <option value="Wedding">Wedding</option>
                        <option value="Engagement">Engagement</option>
                        <option value="BirthDay">BirthDay</option>
                        <option value="Corporate">Corporate</option>
                        <option value="Baby Function">Baby Function</option>
                        <option value="other">other</option>
                      </select>
                    </form>
                  </div>
                  <div className="col-md-2" >
                    <form className="form-inline mt-4 mb-4">
                      <i class="fa fa-1x fa-users"></i>
                      <input className="form-control form-control-sm ml-3 w-75" type="number" id="guestes" name="gusets" placeholder="Guests" style={{ border: 'none' }} />
                    </form>
                  </div>
                  <div className="col-md-3" >
                    <form className="form-inline mt-4 mb-4">
                      <i class="fa fa-1x fa-calendar-check-o"></i>
                      <input
                        className="form-control form-control-sm ml-3 w-75"
                        type="text"
                        placeholder="Date" style={{ border: 'none' }}
                      />
                    </form>
                  </div>
                  <div className="col-md-2" >
                    <button type="button" className="btn btn-danger btn-md searchexbtn" style={{ marginTop: '0px' }}>Search</button>
                  </div>
                </div>

              </div>
            </div>
          </section>
        </div>
        <div className="displayimages" style={{ justifyContent: 'center' }}>
          <div className="row eximages">
            <MDBCol md="12">
              <MDBRow className="imagesall">
                <MDBCol md="1">
                  <img src={require('../../images/left.png')} />
                </MDBCol >
                <MDBCol md="1">
                  <img src={require('../../images/wedding.png')} />
                  <p className="imagestxt">WEDDING</p>
                </MDBCol >
                <MDBCol md="1">
                  <img src={require('../../images/decorator.png')} />
                  <p className="imagestxt">DECORATOR</p>
                </MDBCol>
                <MDBCol md="1">
                  <img src={require('../../images/florist.png')} />
                  <p className="imagestxt">FLORIST</p>
                </MDBCol>
                <MDBCol md="1">
                  <img src={require('../../images/cocktail.png')} />
                  <p className="imagestxt">COCKTAILPARTY</p>
                </MDBCol>
                <MDBCol md="1">
                  <img src={require('../../images/engagement.png')} />
                  <p className="imagestxt">ENGAGEMENT</p>
                </MDBCol>
                <MDBCol md="1">
                  <img src={require('../../images/buffet.png')} />
                  <p className="imagestxt">CATERING</p>
                </MDBCol>
                <MDBCol md="1">
                  <img src={require('../../images/right.png')} />
                </MDBCol>
              </MDBRow>
            </MDBCol>
          </div>
        </div>
        <div className="row maintxt">
          <MDBCol md="12">
            <div className="row maintitle">
              <h1>HOW IT WORKS
            <p className="ptxt">Make A Story Of Painless Celebrations</p>
              </h1>
            </div>
          </MDBCol>
        </div>
        <div className="row cardtxt" style={{ justifyContent: 'center' }}>
          <div className="row txtcard">
            <div className="col-md-4">
              <a className="cardimgtxt">
                <img src={require('../../images/1circle.png')} />
                <p className="cardstxt">Select a package &amp; Shortlist your venues</p>
              </a>
            </div>
            <div className="col-md-4">
              <a className="cardimgtxt">
                <img src={require('../../images/2circle.png')} />
                <p className="cardstxt">Fill your basic details to block venue</p>
              </a>
            </div>
            <div className="col-md-4">
              <a className="cardimgtxt">
                <img src={require('../../images/3circle.png')} />
                <p className="cardstxt">Pay the final amount &amp; start celebrations</p>
              </a>
            </div>
          </div>
        </div>
        <div className="row maintxt" style={{ justifyContent: 'center' }}>
          <div className="row maintitle">
            <h1>BEST DEALS FOR YOU
       <p className="ptxt">Get Best Deals Now From Our Website, Checkout.</p>
            </h1>
          </div>
        </div>
        <div className="row cardimages">
          <div className="row cardimgs1">
            <div className="col-md-4">
              <Card className="card">
                <CardImage className="cardimg" src={require('../../images/green.jpg')} />
              </Card>
            </div>
            <div className="col-md-4">
              <Card className="cardhghincrmnt1">
                <CardImage className="cardimghghincrmnt" src={require('../../images/banquet.jpg')} />
              </Card>
            </div>
            <div className="col-md-4">
              <Card className="card1">
                <CardImage className="cardimg" src={require('../../images/convention1.jpg')} />
              </Card>
            </div>
            <div className="twoimgs1 col-md-6">
              <Card className="card2">
                <CardImage className="cardimg2" src={require('../../images/banner1.jpg')} />
              </Card>
            </div>
            <div className="twoimgs1 col-md-6">
              <Card className="card2">
                <CardImage className="cardimg2" src={require('../../images/banner3.jpg')} />
              </Card>
            </div>
          </div>
        </div>
        <div className="row maintxt">
          <MDBCol md="12">
            <div className="row maintitle">
              <h1>HAND PICKED VENDORS
       <p className="ptxt">Get Best Deals Now From Our Website, Checkout.</p>
              </h1>
            </div>
          </MDBCol>
        </div>
        <div className="row maincardimges">
          <MDBCol md="12">
            <div className="row maincardimage">
              <MDBCol md="4">
                <Card className="maincardimg1">
                  <CardImage className="cardimageexamples" src={require('../../images/Venue_10512_10423_1.jpg')} />
                  <b style={{ fontSize: '20px' }}>Avasa Hotel</b>
                  <span style={{ fontSize: '15px' }}>Madhapur, Hyderabad</span>
                  <div className="row servicedtails">
                    <MDBCol md="6">
                      <span style={{ fontSize: '14px' }}>Veg per plate</span>
                    </MDBCol >
                    <MDBCol md="6">
                      <b style={{ fontSize: '15px' }}>₹1,250</b>
                    </MDBCol >
                  </div>
                  <div className="row servicedtails">
                    <MDBCol md="6">
                      <span style={{ fontSize: '14px' }}>Non-Veg per plate</span>
                    </MDBCol >
                    <MDBCol md="6">
                      <b style={{ fontSize: '15px' }}>₹1,650</b>
                    </MDBCol >

                  </div>
                  <hr />
                  <div className="row servicedtails">
                    <MDBCol md="8">
                      <span style={{ fontSize: '14px' }}>Capacity : 150-850</span>
                    </MDBCol >
                    <MDBCol md="4">
                      <span style={{ fontSize: '15px', color: 'red' }}>Book Now</span>
                    </MDBCol >
                  </div>
                </Card>
              </MDBCol >
              <MDBCol md="4">
                <Card className="maincardimg1">
                  <CardImage className="cardimageexamples" src={require('../../images/Venue_10512_10423_1.jpg')} />
                  <b style={{ fontSize: '20px' }}>Avasa Hotel</b>
                  <span style={{ fontSize: '15px' }}>Madhapur, Hyderabad</span>
                  <div className="row servicedtails">
                    <MDBCol md="6">
                      <span style={{ fontSize: '14px' }}>Veg per plate</span>
                    </MDBCol >
                    <MDBCol md="6">
                      <b style={{ fontSize: '15px' }}>₹1,250</b>
                    </MDBCol >
                  </div>
                  <div className="row servicedtails">
                    <MDBCol md="6">
                      <span style={{ fontSize: '14px' }}>Non-Veg per plate</span>
                    </MDBCol >
                    <MDBCol md="6">
                      <b style={{ fontSize: '15px' }}>₹1,650</b>
                    </MDBCol >

                  </div>
                  <hr />
                  <div className="row servicedtails">
                    <MDBCol md="8">
                      <span style={{ fontSize: '14px' }}>Capacity : 150-850</span>
                    </MDBCol >
                    <MDBCol l md="4">
                      <span style={{ fontSize: '15px', color: 'red' }}>Book Now</span>
                    </MDBCol >
                  </div>
                </Card>
              </MDBCol >
              <MDBCol md="4">
                <Card className="maincardimg1">
                  <CardImage className="cardimageexamples" src={require('../../images/Venue_10512_10423_1.jpg')} />
                  <b style={{ fontSize: '20px' }}>Avasa Hotel</b>
                  <span style={{ fontSize: '15px' }}>Madhapur, Hyderabad</span>
                  <div className="row servicedtails">
                    <MDBCol md="6">
                      <span style={{ fontSize: '14px' }}>Veg per plate</span>
                    </MDBCol >
                    <MDBCol md="6">
                      <b style={{ fontSize: '15px' }}>₹1,250</b>
                    </MDBCol >
                  </div>
                  <div className="row servicedtails">
                    <MDBCol md="6">
                      <span style={{ fontSize: '14px' }}>Non-Veg per plate</span>
                    </MDBCol >
                    <MDBCol md="6">
                      <b style={{ fontSize: '15px' }}>₹1,650</b>
                    </MDBCol >

                  </div>
                  <hr />
                  <div className="row servicedtails">
                    <MDBCol md="8">
                      <span style={{ fontSize: '14px' }}>Capacity : 150-850</span>
                    </MDBCol >
                    <MDBCol md="4">
                      <span style={{ fontSize: '15px', color: 'red' }}>Book Now</span>
                    </MDBCol >
                  </div>
                </Card>
              </MDBCol >
            </div>
          </MDBCol>
        </div>
        <div className="row exploremore" style={{ justifyContent: 'center' }}>
          <a href="#" className="btn btn-danger">Explore More &emsp;<i class="fa fa-arrow-right"></i></a>
        </div>
        <div className="row maintitle">
          <h1><section className="letstxt" style={{ marginLeft: '35%' }}>LET'S TALK</section>
            <p className="ptxt">Get Personalized assistance to help you discover, book sample and supervise your event.</p>
          </h1>
        </div>
        <MDBContainer className="frmtxt">
          <MDBRow style={{ justifyContent: 'center' }}>
            <MDBCol md="5">
              <form>
                <input
                  type="text"
                  id="defaultFormContactNameEx"
                  className="form-control" placeholder="Your name"
                />
                <br />
                <MDBRow>
                  <MDBCol md="6">
                    <input
                      type="text"
                      id="defaultFormContactEmailEx"
                      className="form-control"
                      placeholder="Mobile"
                    />
                  </MDBCol>
                  <MDBCol md="6">
                    <input
                      type="email"
                      id="defaultFormContactEmailEx"
                      className="form-control"
                      placeholder="City"
                    />
                  </MDBCol>
                </MDBRow>
                <br />
                <MDBRow>
                  <MDBCol md="6">
                    <input
                      type="text"
                      id="defaultFormContactEmailEx"
                      className="form-control"
                      placeholder="Event Type"
                    />
                  </MDBCol>
                  <MDBCol md="6">
                    <input
                      type="text"
                      id="defaultFormContactEmailEx"
                      className="form-control"
                      placeholder="Date ?"
                    />
                  </MDBCol>
                </MDBRow>
                <br />
                <textarea
                  type="text"
                  id="defaultFormContactMessageEx"
                  className="form-control"
                  rows="5"
                  placeholder="Enter Your Requirements"
                />
                <br />
                <p classNmae="text-center" >
                  <button type="submit" name="command" className="btn btn-danger">Request Call Back</button>
                  <a href="#" className="btn btn-danger">Explore More &emsp;<i class="fa fa-arrow-right"></i></a>
                  <br />
                  <br />
                  <span className="txtex" style={{ justifyContent: 'center' }}> Whatsapp or Call Ahwanam.com at 7702053510 </span>
                  <br /><br />
                  <span className="txtex1"> (OR)</span>
                  <br /><br />
                  <span className="txtex2"> Are you a Vendor? <a href="#1">Register</a></span>
                </p>
              </form>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    );
  }
}

export default Home;