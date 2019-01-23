import React, { Component } from 'react';
import './shoppingcart.css';
class Shoppingcart extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-sm-8 col-md-8">
                    <table className="table">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Item</th>
                                <th>Quantity</th>
                                <th>Item total</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <div className="col-sm-12 col-md-12">
                                        <div className="img">

                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div className="col-sm-12 col-md-12">
                                        <div className="h6">
                                            <a href="#">PURPLE FITNESS TRACKER</a>
                                            <p><small>$89.00</small></p>
                                        </div>
                                        <p>Bulk Pricing</p>
                                    </div>
                                </td>
                                <td>
                                    <div className="col-sm-12 col-md-12">
                                        <div className="num">
                                            <div className="selectnumber">
                                                <button>
                                                    <i className="fa fa-minus" aria-hidden="true"></i>
                                                </button>
                                                <input type="text" id="" name="" placeholder="" className="form-control1" />
                                                <button>
                                                    <i className="fa fa-plus" aria-hidden="true"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>$50.00 </td>
                                <td><i className="fa fa-times fa-2x" aria-hidden="true"></i></td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="row">
                        <div className="col-sm-4 col-md-4">
                            <button className="btntxt">
                                <i className="fa fa-arrow-left" aria-hidden="true"></i>&nbsp;Continue Shopping
                        </button>
                        </div>
                        <div className="col-sm-4 col-md-4">
                            <input type="text" id="Coupon code" name="Coupon code" placeholder="Coupon code" className="form-control" />
                        </div>
                        <div className="col-sm-4 col-md-4">
                            <button className="btntxt">
                                Update cart &nbsp;<i className="fa fa-refresh" aria-hidden="true"></i>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="col-sm-4 col-md-4">
                    <h3 className="txt">Order Summary  </h3>
                    <p className="h6">SHIPPING COSTS AND TAXES WILL BE EVALUATED DURING CHECKOUT</p>
                    <ul className="list-group">
                        <li className="list-group-item"> Subtotal:
                         </li>
                        <li className="list-group-item">Total:</li>
                    </ul>
                    <button>Checkout</button>
                </div>
            </div>
        );

    }
}
export default Shoppingcart;