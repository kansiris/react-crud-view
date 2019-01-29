import React, { Component } from 'react';
import './checkout.css';
import Header from '../Results/Header'



class Checkout extends Component {
    constructor(props) {
        super(props);
        this.state = { checked: false,  payment_amount: 0, amount: 0 };
        this.handleChange = this.handleChange.bind(this);
            this.paymentHandler = this.paymentHandler.bind(this);
            this.changeAmount = this.changeAmount.bind(this);
            // this.options = Object.assign(
            //     {}, 
            //     {
            //         "key": "rzp_test_3OHEkrM9aPMz5u",
            //         "amount": "2000", // 2000 paise = INR 20
            //         "name": "Merchant Name",
            //         "description": "Purchase Description",
            //         "image": "/your_logo.png",
            //         "handler": (response) => {
            //             alert(response.razorpay_payment_id);
            //         },
            //         "prefill": {
            //             "name": "Harshil Mathur",
            //             "email": "harshil@razorpay.com"
            //         },
            //         "notes": {
            //             "address": "Hello World"
            //         },
            //         "theme": {
            //             "color": "#F37254"
            //         }
            //     }, 
            //     props.rzp1 // any options you pass via props will override the defaults
            // );
        }
    
    componentDidMount () {
        const script = document.createElement("script");

        script.src = "https://checkout.razorpay.com/v1/checkout.js";
        script.async = true;

        document.body.appendChild(script);
    }
    handleChange() {
        this.setState({
            checked: !this.state.checked
        })
    }
    changeAmount(e) {
        this.setState({amount: e.target.value})
      }
    paymentHandler(e) {
        e.preventDefault();
        let options = {
            "key": "rzp_test_3OHEkrM9aPMz5u",
            "amount": this.state.amount, // 2000 paise = INR 20, amount in paisa
            "name": "Myvillagefoods",
            "description": "ordered Items",
            "image": "/your_logo.png",
            "handler": function (response){
              alert(response.razorpay_payment_id);
            },
            "prefill": {
              "name": "Harshil Mathur",
              "email": "harshil@razorpay.com"
            },
            "notes": {
              "address": "Hello World"
            },
            "theme": {
              "color": "#F37254"
            }
          };
          
          let rzp = new window.Razorpay(options);
          rzp.open();
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
                                        <input type="text" id="First Name" name="First Name" placeholder="First Name" className="chcktxt form-control" />
                                    </div>
                                    <div className="col-sm-6 col-md-6 form-group">
                                        <input type="text" id="Last Name" name="last Name" placeholder="Last Name" className="chcktxt form-control" />
                                    </div>
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
                                    {/* <div className="col-sm-12 col-md-12 form-group">
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
                                    </div> */}
                                {/* </div> */}
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
                        <div className="payments-form">
          
              <p>
                <label htmlFor="pay_amount" className="pay_amount">
                  Amount to be paid
                </label>
              </p>
              <input type='text' onChange={
           this.changeAmount
          } />
              <p>
              <button onClick={this.paymentHandler}>Pay Now</button> 
              </p>
          
                    </div> </div>
                </div>
            </div></div>
        );
    }
}
export default Checkout;