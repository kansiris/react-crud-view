import React, { Component } from 'react';
import './shoppingcart.css';
import Header from '../Results/Header'
import Basmati from '../../images/Basmati.jpg';
import Logindropdown from '../dropdown/logindropdown'
class Shoppingcart extends Component {
    constructor(props){
        super(props);
        this.state={counter: 0,price1:80,result:''};
         this.increment=this.increment.bind(this);
        this.decrement=this.decrement.bind(this);
    }
    // Total(){
    //     multiply=this.state.counter * price
    //     this.setState({
    //      result:multiply
    //     });
    // }
    increment() {
        this.setState({
          counter: this.state.counter + 1

        });
       const cal=this.state.counter * this.state.price1
            this.setState({
             result:cal
             });

      }
      decrement(){
          if(this.state.counter > 0){
            this.setState({
                counter: this.state.counter - 1
              });
              const cal=this.state.counter * this.state.price1
            this.setState({
             result:cal
             });
          }  
      }
    render() {
        return (
            <div>
                <Header/>
            <div className="bg">
            <h1 className="heading">Shopping Cart</h1>
            <div className="container" style={{backgroundColor:"white"}}>
            <div className="row shopping">
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
                                        <img style={{ height: "130px" }} src={Basmati} />
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div className="col-sm-12 col-md-12">
                                        <div className="h6">
                                            <a href="/">PURPLE FITNESS TRACKER</a>
                                            <p><small>$89.00</small></p>
                                        </div>
                                        <p>Bulk Pricing</p>
                                    </div>
                                </td>
                                <td>
                                    <div className="col-sm-12 col-md-12">
                                        <div className="num">
                                            <div className="selectnumber">
                                                <button onClick={this.decrement} className="fa fa-minus dec"></button>
                                                <input type="text" className="number" value={this.state.counter}/>
                                                <button onClick={this.increment} className="fa fa-plus dec"></button>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                   {this.state.result}
                               </td>
                                <td><i className="fa fa-times fa-2x" aria-hidden="true"></i></td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="row">
                        <div className="col-sm-4 col-md-4">
                            <button className="updatebtn">
                                <i className="fa fa-arrow-left" aria-hidden="true"></i>&nbsp;Continue Shopping
                        </button>
                        </div>
                        <div className="col-sm-4 col-md-4">
                            <input type="text" id="Coupon code" name="Coupon code" placeholder="Coupon code" className="form-control" />
                        </div>
                        <div className="col-sm-4 col-md-4">
                            <button className="updatebtn">
                                Update cart &nbsp;<i className="fa fa-refresh" aria-hidden="true"></i>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="col-sm-4 col-md-4">
                    <h3 className="txt">Order Summary  </h3>
                    <p className="h6 info">SHIPPING COSTS AND TAXES WILL BE EVALUATED DURING CHECKOUT</p>
                    <ul className="list-group">
                        <li className="list-group-item"> Subtotal:
                        <span className="rupee" style={{float:"right"}}> ₹79.00</span>
                         </li>
                        <li className="list-group-item">Total:
                           <span className="rupee" style={{float:"right"}}> ₹79.00</span>
                        </li>
                    </ul>
                    <button className="c">Checkout</button>
                </div>
            </div>
            </div>
            </div>   
</div>
        );

    }
}
export default Shoppingcart;