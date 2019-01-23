import React, { Component } from 'react';
import './checkout.css';
import Header from '../Results/Header'

class Checkout extends Component {
    constructor() {
        super();
        this.state = { checked: false };
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange() {
        this.setState({
            checked: !this.state.checked
        })
    }
    render() {
        return (<div>
            <Header/>
            <div className="bg">
                <h1 className="heading">Checkout</h1>
                {/* <div className="checkout-progress">
                <ul className="list">
                    <li className="active">1.BILLING ADDRESS</li>
                    <li>2.SHIPPING METHOD</li>
                    <li>3.PAY</li>
                </ul>
                </div> */}
                <div className="container" style={{backgroundColor:"white"}}>
                    <div className="row cpage">
                        <div className="col-sm-8 col-md-8">
                            <form>
                                <h2 className="txt">Billing Information</h2>
                                <div className="row">
                                    <div className="col-sm-6 col-md-6 form-group">
                                        <input type="text" id="First Name" name="First Name" placeholder="First Name" className="form-control chcktxt" />
                                    </div>
                                    <div className="col-sm-6 col-md-6 form-group">
                                        <input type="text" id="Last Name" name="last Name" placeholder="Last Name" className="form-control" />
                                    </div>
                                    <div className="col-sm-6 col-md-6 form-group">
                                        <input type="text" id="Email" name="Email" placeholder="Email" className="form-control" />
                                    </div>
                                    <div className="col-sm-6 col-md-6 form-group">
                                        <input type="text" id="Phone Number" name="Phone Number" placeholder="Phone Number" className="form-control" />
                                    </div>
                                    <div className="col-sm-12 col-md-12 form-group">
                                        <input type="text" id="Address Line1" name="Address Line1" placeholder="Address Line1" className="form-control" />
                                    </div>
                                    <div className="col-sm-12 col-md-12 form-group">
                                        <input type="text" id="Optional" name="Optional" placeholder="Optional" className="form-control" />
                                    </div>
                                    <div className="col-sm-6 col-md-6 form-group">
                                        <input type="text" id="City" name="City" placeholder="City" className="form-control" />
                                    </div>
                                    <div className="col-sm-6 col-md-6 form-group">
                                        <input type="text" id="Zip Code" name="Zip Code" placeholder="Zip Code" className="form-control" />
                                    </div>
                                    <div className="col-sm-6 col-md-6 form-group">
                                        <input type="text" id="Zip Code" name="Zip Code" placeholder="Zip Code" className="form-control" />
                                    </div>
                                    <div className="col-sm-6 col-md-6 form-group">
                                        <input type="text" id="Zip Code" name="Zip Code" placeholder="Zip Code" className="form-control" />
                                    </div>
                                    <div className="col-sm-12 col-md-12 form-group">
                                        <input type="checkbox" /> &nbsp; <b>RECIEVE PROMOTIONAL EMAILS</b>
                                    </div>
                                    <div className="col-sm-12 col-md-12"><h2 className="txt">Shipping Information</h2></div>
                                    <div className="col-sm-12 col-md-12">
                                        <input type="checkbox" checked={this.state.checked}
                                            onChange={this.handleChange} /> <b>SAME AS BILLING INFORMATION</b>
                                    </div>
                                    <div className="col-sm-6 col-md-6 form-group">
                                        <input type="text" id="First Name" name="First Name" placeholder="First Name" className="form-control" />
                                    </div>
                                    <div className="col-sm-6 col-md-6 form-group">
                                        <input type="text" id="Last Name" name="last Name" placeholder="Last Name" className="form-control" />
                                    </div>
                                    <div className="col-sm-6 col-md-6 form-group">
                                        <input type="text" id="Phone Number" name="Phone Number" placeholder="Phone Number" className="form-control" />
                                    </div>
                                    <div className="col-sm-12 col-md-12 form-group">
                                        <input type="text" id="Address Line1" name="Address Line1" placeholder="Address Line1" className="form-control" />
                                    </div>
                                    <div className="col-sm-12 col-md-12 form-group">
                                        <input type="text" id="Optional" name="Optional" placeholder="Optional" className="form-control" />
                                    </div>
                                    <div className="col-sm-6 col-md-6 form-group">
                                        <input type="text" id="City" name="City" placeholder="City" className="form-control" />
                                    </div>
                                    <div className="col-sm-6 col-md-6 form-group">
                                        <input type="text" id="Zip Code" name="Zip Code" placeholder="Zip Code" className="form-control" />
                                    </div>
                                    <div className="col-sm-6 col-md-6 form-group">
                                        <input type="text" id="Zip Code" name="Zip Code" placeholder="Zip Code" className="form-control" />
                                    </div>
                                    <div className="col-sm-6 col-md-6 form-group">
                                        <input type="text" id="Zip Code" name="Zip Code" placeholder="Zip Code" className="form-control" />
                                    </div>
                                    <div className="col-sm-12 col-md-12 ">
                                        <button className="submit float-right">
                                            Next Step &nbsp;<i className="fa fa-arrow-right" aria-hidden="true"></i>
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="col-sm-4 col-md-4">
                            <h2 className="txt">Order Summary</h2>
                            <ul className="list-group">
                                <li className="list-group-item"> Subtotal:
                         </li>
                                <li className="list-group-item">Tax:</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div></div>
        );
    }
}
export default Checkout;