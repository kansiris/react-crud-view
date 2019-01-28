import React,{Component} from 'react';
import Header from '../Results/Header';
import './shipping.css';
class Shipping extends Component{
render(){
    return(
        <div>
            <Header/>
            <div className="bg">
                    <h1 className="heading">Checkout</h1> 
               <div className="container" style={{backgroundColor:"white"}}>
                   <div className="row checkpage">
                       <div className="col-sm-9 col-md-9">
                          <h3 className="txt">Shipping Method</h3>
                          <table className="table table-bordered">
                             <tbody>
                                 <tr>
                                    <td>
                                        <label className="h6" style={{color:"grey",fontSize:"14px"}}>TABLE RATE</label>
                                    </td>
                                    <td>
                                        <span className="h5" style={{color:"grey"}} >₹79.00</span>
                                    </td>
                                 </tr>
                             </tbody>
                          </table>
                          <div className="butons">
                             <a href="/" className="btn btn-sm pbtn">
                              <i className="fa fa-arrow-left fa-2x" aria-hidden="true"></i></a>
                             <a href="/" className="btn btn-sm rbtn" style={{float:"right"}}>
                             <i className="fa fa-arrow-right fa-2x" aria-hidden="true"></i></a>
                          </div>
                       </div>
                       <div className="col-sm-3 col-md-3">
                          <h5 className="txt">Order Summary</h5>
                          <ul className="list-group">
                             <li className="list-group-item"> Subtotal:
                                 <span className="rupee" style={{float:"right"}}> ₹79.00</span>
                             </li>
                              <li className="list-group-item">Shipping:
                                  <span className="rupee" style={{float:"right"}}> ₹10.00</span>
                               </li>
                              <li className="list-group-item">Tax:
                              <span className="rupee" style={{float:"right"}}> ₹00.00</span>
                              </li>                              
                         </ul>
                         <div>
                             <a href="/">
                                <li className="list-group-item checkbtn">Tax:
                                <span className="rupee" style={{float:"right"}}> ₹00.00</span>
                               </li>
                             </a>
                         </div>
                       </div>
                   </div>
               </div>
            </div>
        </div>
    );
}
}
export default Shipping;