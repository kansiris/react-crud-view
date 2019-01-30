import React,{Component} from 'react';
import Header from '../Results/Header';
class Thankyou extends Component{
render(){
    return(
        <div>
            <Header/>
            <div className="bg">
               <h1 className="heading">ThankYou For Your Purchase</h1>
               <div className="container" style={{backgroundColor:"white"}}>
                   <div className="row">
                      <div className="icon"><i className="fa fa-check-circle fa-3x" aria-hidden="true" ></i></div>
                      <h5></h5>
                   </div>
               </div>
            </div>
        </div>
    );
}
}
export default Thankyou;