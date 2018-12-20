import React, { Component } from 'react';
// import { Navbar, NavbarBrand, NavbarNav, NavItem, NavLink, NavbarToggler, Collapse, FormInline, Dropdown, DropdownToggle, DropdownMenu,  DropdownItem } from "mdbreact";
import './Home.css';
import convention1 from '../../images/convention1.jpg';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import { Button, Card, CardBody, CardImage, CardTitle, CardText } from 'mdbreact';
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";

class Home extends Component {
    render() {
        return (
            <header>
                <div>
                    <div className="row">
                        <nav className="navbar navbar-expand-lg navbar-dark fixed-top -navbar">
                            <div className="container lgim">
                                <a className="navbar-brand" href="#">
                                    <img src={require('../../images/logo.png')} style={{ width: '40%' }} />
                                </a>
                            </div>
                            <span> <a href="#0" style={{ fontsize: '16px', fontfamily: 'lato', fontweight: '600' }}>Login/Register</a></span>&nbsp;&nbsp;
      <span> <a href="#0" style={{ fontsize: '16px', fontfamily: 'lato', fontweight: '600' }}>Pathner&nbsp;Registeration</a></span>&nbsp;
       <button type="button" className="btn btn-danger btn-sm waves-effect waves-light" style={{ fontsize: '11px', fontweight: '1000' }}>Call: +91 7032199007</button>&nbsp;
       <img className="indiaimage" src={require('../../images/india.png')} />

                        </nav>
                    </div>
                    <div className="row imageconvention">
                        <section style={{
                            backgroundImage: 'url(' + convention1 + ')', width: '100%',
                            height: '700px'
                        }}>
                            <div className="searchbar" style={{ justifyContent: 'center' }}>
                                <div className="container-fluid searchdiv" >
                                    <Row>
                                        <Col md={2} style={{ paddingTop: '18px' }}>
                                            <Row>
                                                <Col md={2} className="txtimg">
                                                    <img src={require('../../images/location.png')} />
                                                </Col>
                                                <Col md={2}>
                                                    <div className="locationtxt form-group">
                                                        <input className="form-control locatetxt" type="text" name="location" id="location" placeholder="Location" value="Hyderabad" style={{ border: 'none' }} />
                                                    </div>
                                                </Col>
                                            </Row>
                                        </Col>
                                        <Col md={2} className='second'>
                                            <Row>
                                                <Col md={2} className="txtimg">
                                                    <img src={require('../../images/checklist.png')} />
                                                </Col>
                                                <Col md={2}>
                                                    <div className="eventtxt form-group">
                                                        {/* <input className="form-control typetxt" type="text" name="eventtype" id="eventtype" Placeholder="What Type of event"/> */}
                                                        <select className="form-control typetxt" id="eventtype" style={{ border: 'none' }}>
                                                            <option value="select">Select Event</option>
                                                            <option value="Wedding">Wedding</option>
                                                            <option value="Engagement">Engagement</option>
                                                            <option value="BirthDay">BirthDay</option>
                                                            <option value="Corporate">Corporate</option>
                                                            <option value="Baby Function">Baby Function</option>
                                                            <option value="other">other</option>
                                                        </select>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </Col>
                                        <Col md={2} className='third'>
                                            <Row>
                                                <Col md={2} className="txtimg">
                                                    <img src={require('../../images/family.png')} />
                                                </Col>
                                                <Col md={2}>
                                                    <div className="Gueststxt form-group">
                                                        <input className="form-control Guesttxt" type="number" name="Guests" id="Guests" placeholder="Guests" value="Guests" />
                                                    </div>
                                                </Col>
                                            </Row>
                                        </Col>
                                        <Col md={2} className='fourth'>
                                            <Row>
                                                <Col md={2} className="txtimg">
                                                    <img src={require('../../images/calendar.png')} />
                                                </Col>
                                                <Col md={2}>
                                                    <div className="datetxt form-group">
                                                        <input className="form-control Datetxt" type="text" name="Guests" id="Guests" placeholder="Date ?" style={{ border: 'none' }} />
                                                    </div>
                                                </Col>
                                            </Row>
                                        </Col>
                                        <Col md={2} className='five'>
                                            <Col md={2} className="searchex">
                                                <button type="button" className="btn btn-danger searchex1 btn-lg waves-effect waves-light" >Search</button>
                                            </Col>
                                        </Col>
                                    </Row>
                                </div>
                            </div>
                        </section>
                        {/* <img href="/home" src={require('./convention1.jpg')} style={{width:'100%',height:'700px'}}/> */}
                    </div>
                    <div className="displayimages" style={{ justifyContent: 'center' }}>
                        <div className="row eximages">
                            <Col md={12}>
                                <Row className="imagesall">
                                    <Col md={1}>
                                        <img src={require('../../images/left.png')} />
                                    </Col>
                                    <Col md={1}>
                                        <img src={require('../../images/wedding.png')} />
                                        <p className="imagestxt">WEDDING</p>
                                    </Col>
                                    <Col md={1}>
                                        <img src={require('../../images/decorator.png')} />
                                        <p className="imagestxt">DECORATOR</p>
                                    </Col>
                                    <Col md={1}>
                                        <img src={require('../../images/florist.png')} />
                                        <p className="imagestxt">FLORIST</p>
                                    </Col>
                                    <Col md={1}>
                                        <img src={require('../../images/cocktail.png')} />
                                        <p className="imagestxt">COCKTAILPARTY</p>
                                    </Col>
                                    <Col md={1}>
                                        <img src={require('../../images/engagement.png')} />
                                        <p className="imagestxt">ENGAGEMENT</p>
                                    </Col>
                                    <Col md={1}>
                                        <img src={require('../../images/buffet.png')} />
                                        <p className="imagestxt">CATERING</p>
                                    </Col>
                                    <Col md={1}>
                                        <img src={require('../../images/right.png')} />
                                    </Col>
                                </Row>
                            </Col>
                        </div>
                    </div>
                    <div className="row maintxt">
                        <Col md={12}>
                            <div className="row maintitle">
                                <h1>HOW IT WORKS
       <p className="ptxt">Make A Story Of Painless Celebrations</p>
                                </h1>
                            </div>
                        </Col>
                    </div>
                    <div className="row cardtxt" style={{ justifyContent: 'center' }}>
                        <Col md={12}>
                            <div className="row txtcard">
                                <Col md={4}>
                                    <a className="cardimgtxt">
                                        <img src={require('../../images/1circle.png')} />
                                        <p className="cardstxt">Select a package &amp; Shortlist your venues</p>
                                    </a>
                                </Col>
                                <Col md={4}>
                                    <a className="cardimgtxt">
                                        <img src={require('../../images/2circle.png')} />
                                        <p className="cardstxt">Fill your basic details to block venue</p>
                                    </a>
                                </Col>
                                <Col md={4}>
                                    <a className="cardimgtxt">
                                        <img src={require('../../images/3circle.png')} />
                                        <p className="cardstxt">Pay the final amount &amp; start celebrations</p>
                                    </a>
                                </Col>
                            </div>
                        </Col>
                    </div>
                    <div className="row maintxt">
                        <Col md={12}>
                            <div className="row maintitle">
                                <h1>BEST DEALS FOR YOU
       <p className="ptxt">Get Best Deals Now From Our Website, Checkout.</p>
                                </h1>
                            </div>
                        </Col>
                    </div>
                    <div className="row cardimages">
                        <Col md={12}>
                            <div className="row cardimgs1">
                                <Col md={4}>
                                    <Card className="card">
                                        <CardImage className="cardimg" src={require('../../images/green.jpg')} />
                                    </Card>
                                </Col>
                                <Col md={4}>
                                    <Card className="cardhghincrmnt">
                                        <CardImage className="cardimghghincrmnt" src={require('../../images/banquet.jpg')} />
                                    </Card>
                                </Col>
                                <Col md={4}>
                                    <Card className="card1">
                                        <CardImage className="cardimg" src={require('../../images/convention2.jpg')} />
                                    </Card>
                                </Col>
                                <Col md={6} className="twoimgs1">
                                    <Card className="card2">
                                        <CardImage className="cardimg2" src={require('../../images/banner1.jpg')} />
                                    </Card>
                                </Col>
                                <Col md={6} className="twoimgs1">
                                    <Card className="card2">
                                        <CardImage className="cardimg2" src={require('../../images/banner3.jpg')} />
                                    </Card>
                                </Col>
                            </div>
                        </Col>
                    </div>
                    <div className="row maintxt">
                        <Col md={12}>
                            <div className="row maintitle">
                                <h1>HAND PICKED VENDORS
       <p className="ptxt">Get Best Deals Now From Our Website, Checkout.</p>
                                </h1>
                            </div>
                        </Col>
                    </div>
                    <div className="row maincardimges">
                        <Col md={12}>
                            <div className="row maincardimage">
                                <Col md={4}>
                                    <Card className="maincardimg1">
                                        <CardImage className="cardimageexamples" src={require('../../images/Venue_10512_10423_1.jpg')} />
                                        <b style={{ fontSize: '20px' }}>Avasa Hotel</b>
                                        <span style={{ fontSize: '15px' }}>Madhapur, Hyderabad</span>
                                        <div className="row servicedtails">
                                            <Col md={6}>
                                                <span style={{ fontSize: '14px' }}>Veg per plate</span>
                                            </Col>
                                            <Col md={6}>
                                                <b style={{ fontSize: '15px' }}>₹1,250</b>
                                            </Col>
                                        </div>
                                        <div className="row servicedtails">
                                            <Col md={6}>
                                                <span style={{ fontSize: '14px' }}>Non-Veg per plate</span>
                                            </Col>
                                            <Col md={6}>
                                                <b style={{ fontSize: '15px' }}>₹1,650</b>
                                            </Col>

                                        </div>
                                        <hr />
                                        <div className="row servicedtails">
                                            <Col md={8}>
                                                <span style={{ fontSize: '14px' }}>Capacity : 150-850</span>
                                            </Col>
                                            <Col md={4}>
                                                <span style={{ fontSize: '15px', color: 'red' }}>Book Now</span>
                                            </Col>
                                        </div>
                                    </Card>
                                </Col>
                                <Col md={4}>
                                    <Card className="maincardimg1">
                                        <CardImage className="cardimageexamples" src={require('../../images/Venue_10512_10423_1.jpg')} />
                                        <b style={{ fontSize: '20px' }}>Avasa Hotel</b>
                                        <span style={{ fontSize: '15px' }}>Madhapur, Hyderabad</span>
                                        <div className="row servicedtails">
                                            <Col md={6}>
                                                <span style={{ fontSize: '14px' }}>Veg per plate</span>
                                            </Col>
                                            <Col md={6}>
                                                <b style={{ fontSize: '15px' }}>₹1,250</b>
                                            </Col>
                                        </div>
                                        <div className="row servicedtails">
                                            <Col md={6}>
                                                <span style={{ fontSize: '14px' }}>Non-Veg per plate</span>
                                            </Col>
                                            <Col md={6}>
                                                <b style={{ fontSize: '15px' }}>₹1,650</b>
                                            </Col>

                                        </div>
                                        <hr />
                                        <div className="row servicedtails">
                                            <Col md={8}>
                                                <span style={{ fontSize: '14px' }}>Capacity : 150-850</span>
                                            </Col>
                                            <Col md={4}>
                                                <span style={{ fontSize: '15px', color: 'red' }}>Book Now</span>
                                            </Col>
                                        </div>
                                    </Card>
                                </Col>
                                <Col md={4}>
                                    <Card className="maincardimg1">
                                        <CardImage className="cardimageexamples" src={require('../../images/Venue_10512_10423_1.jpg')} />
                                        <b style={{ fontSize: '20px' }}>Avasa Hotel</b>
                                        <span style={{ fontSize: '15px' }}>Madhapur, Hyderabad</span>
                                        <div className="row servicedtails">
                                            <Col md={6}>
                                                <span style={{ fontSize: '14px' }}>Veg per plate</span>
                                            </Col>
                                            <Col md={6}>
                                                <b style={{ fontSize: '15px' }}>₹1,250</b>
                                            </Col>
                                        </div>
                                        <div className="row servicedtails">
                                            <Col md={6}>
                                                <span style={{ fontSize: '14px' }}>Non-Veg per plate</span>
                                            </Col>
                                            <Col md={6}>
                                                <b style={{ fontSize: '15px' }}>₹1,650</b>
                                            </Col>

                                        </div>
                                        <hr />
                                        <div className="row servicedtails">
                                            <Col md={8}>
                                                <span style={{ fontSize: '14px' }}>Capacity : 150-850</span>
                                            </Col>
                                            <Col md={4}>
                                                <span style={{ fontSize: '15px', color: 'red' }}>Book Now</span>
                                            </Col>
                                        </div>
                                    </Card>
                                </Col>
                            </div>
                        </Col>
                    </div>
                    <div className="row exploremore" style={{ justifyContent: 'center' }}>
                        <button type="button" className="btn btn-danger exploremore1 btn-sm waves-effect waves-light">Explore More  </button>
                    </div>
                    <div className="row maintitle">
                        <h1> &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;LET'S TALK
     <p className="ptxt">Get Personalized assistance to help you discover, book sample and supervise your event.</p>
                        </h1>
                    </div>
                    <form>
                        <div className="row exform">
                            <Col md={12}>
                                <div className="row" style={{ justifyContent: 'center' }}>
                                    {/* <input className="txtname" type="text" placeholder="Your Name"/> */}
                                    <div className="form-group" md={12}>
                                        <input type="text" className="form-control txtinput" id="formGroupExampleInput" placeholder="Your Name" />
                                    </div>
                                </div>
                            </Col>
                        </div>
                        <div className="row exform">
                            <Col md={12}>
                                <div className="row" style={{ justifyContent: 'center' }}>
                                    <div className="form-group" md={6}>
                                        <input type="number" className="form-control txtinput2" id="formGroupExampleInput" placeholder="Mobile" />
                                    </div> &nbsp;
    <div className="form-group" md={6}>
                                        <input type="text" className="form-control txtinput2" id="formGroupExampleInput" placeholder="City" />
                                    </div>
                                </div>
                            </Col>
                        </div>
                        <div className="row exform">
                            <Col md={12}>
                                <div className="row" style={{ justifyContent: 'center' }}>
                                    {/* <input className="txtname" type="text" placeholder="Your Name"/> */}
                                    <div className="form-group" md={6}>
                                        <input type="text" className="form-control txtinput2" id="formGroupExampleInput" placeholder="Event Type" />
                                    </div> &nbsp;
    <div className="form-group" md={6}>
                                        <input type="text" className="form-control txtinput2" id="formGroupExampleInput" placeholder="Date" />
                                    </div>
                                </div>
                            </Col>
                        </div>
                        <div className="row exform" style={{ justifyContent: 'center' }}>
                            <label></label>
                            <textarea
                                type="text"
                                id="defaultFormContactMessageEx"
                                className="form-control txtdiscription"
                                rows="6" placeholder="Enter your Requirements"
                            />
                        </div>
                        <br />
                        <div className="row exform">
                            <Col md={12}>
                                <div className="row" style={{ justifyContent: 'center' }}>
                                    <div className="btnrequest" md={7}>
                                        <button type="submit" className="btn btnrequest btn-danger btn-sm waves-effect waves-light">Request Call Back</button>
                                    </div>&nbsp;&nbsp;
    <div className="btnrequest" md={5}>
                                        <button type="submit" className="btn btnrequest btn-danger btn-sm waves-effect waves-light">Explore More ↦</button>
                                    </div>
                                </div>
                            </Col>
                        </div>&emsp;
    <div className="row" style={{ justifyContent: 'center' }}>
                            <p>Whatsapp or Call Ahwanam.com at 7702053510</p>
                        </div>
                        <div className="row" style={{ justifyContent: 'center' }}>
                            <p>(OR)</p>
                        </div>
                        <div className="row" style={{ justifyContent: 'center' }}>
                            <p>Are you a Vendor? <a style={{ color: 'red' }}>REGISTER</a></p>
                        </div>
                    </form>
                </div>
            </header>
        );
    }
}

export default Home;