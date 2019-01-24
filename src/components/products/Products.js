
import React,{Component} from 'react';
import Header from '../Results/Header';
import './products.css';
import logo from '../../images/logo.jpg';
import Basmati from '../../images/Basmati.jpg';
import matta from '../../images/matta.jpg';
import Ponni from '../../images/Ponni.jpg';
import Rice from '../../images/Rice.jpg';

class Products extends Component{
render(){
    return(
        <div>
         <Header/>
         <div className="bg">
              <h1 className="heading">All Products</h1>
              <div className="container" style={{backgroundColor:"white",paddingTop:"3%"}}>
        <div className="row">
          <div className="col-sm-3 col-md-3">
          
             <h5 className="txt">CATEGORIES</h5>
               <ul className="list-group">
                          <li className="list-group-item"><a href='\'><span className="badge">4</span></a>dfhsgf
                       </li>
                         <li className="list-group-item">
                          <a href='\'><span className="badge">4</span></a>dfhsgf</li>
                            <li className="list-group-item"> <a href='\'><span className="badge">4</span></a>dfhsgf</li>
             </ul>
            </div>
            <div className="col-sm-9 col-md-9">
                 <div className="row">
                      <div className="col-sm-4 col-md-4 cimg">
                          <a href='\'>
                           <img style={{ height: "130px" }} src={Basmati} />
                           </a>
                           <div className="details">
                              <div><a href='\'>Basmati</a></div> 
                               <div><span>$80.00</span></div>
                           </div>
                           <div>
                           <button className="btn btn-sm add" >Add To Cart</button>
                           </div>
                      </div>
                      <div className="col-sm-4 col-md-4">
                          <a href='\'>
                           <img style={{ height: "130px" }} src={matta} />
                           </a>
                           <div className="details">
                              <div><a href='\'>Matta</a></div> 
                               <div><span>$80.00</span></div>
                           </div>
                           <div><button className="btn btn-sm add" >Add To Cart</button></div>
                      </div>
                      <div className="col-sm-4 col-md-4">
                          <a href='\'>
                           <img style={{ height: "130px" }} src={Ponni} />
                           </a>
                           <div className="details">
                              <div><a href='\'>Ponni</a></div> 
                               <div><span>$80.00</span></div>
                           </div>
                           <div>
                           <button className="btn btn-sm add" >Add To Cart</button>
                           </div>
                      </div>
                 </div>
                 <div className="row">
                      <div className="col-sm-4 col-md-4">
                          <a href='\'>
                           <img style={{ height: "130px" }} src={Basmati} />
                           </a>
                           <div className="details">
                              <div><a href='\'>fdgfdgg</a></div> 
                               <div><span>$80.00</span></div>
                           </div>
                           <div>
                           <button className="btn btn-sm add" >Add To Cart</button>
                           </div>
                      </div>
                      <div className="col-sm-4 col-md-4">
                          <a href='\'>
                           <img style={{ height: "130px" }} src={Ponni} />
                           </a>
                           <div className="details">
                              <div><a href='\'>fdgfdgg</a></div> 
                               <div><span>$80.00</span></div>
                           </div>
                           <div>
                           <button className="btn btn-sm add" >Add To Cart</button>
                           </div>
                      </div>
                      <div className="col-sm-4 col-md-4">
                          <a href='\'>
                           <img style={{ height: "130px" }} src={Basmati} />
                           </a>
                           <div className="details">
                              <div><a href='\'>fdgfdgg</a></div> 
                               <div><span>$80.00</span></div>
                           </div>
                           <div>
                           <button className="btn btn-sm add" >Add To Cart</button>
                           </div>
                      </div>
                 </div>
                 <div className="row">
                      <div className="col-sm-4 col-md-4">
                          <a href='\'>
                           <img style={{ height: "130px" }} src={Rice} />
                           </a>
                           <div className="details">
                              <div><a href='\'>fdgfdgg</a></div> 
                               <div><span>$80.00</span></div>
                           </div>
                           <div>
                           <button className="btn btn-sm add" >Add To Cart</button>
                           </div>
                      </div>
                      <div className="col-sm-4 col-md-4">
                          <a href='\'>
                           <img style={{ height: "130px" }} src={Basmati} />
                           </a>
                           <div className="details">
                              <div><a href='\'>fdgfdgg</a></div> 
                               <div><span>$80.00</span></div>
                           </div>
                           <div>
                           <button className="btn btn-sm add" >Add To Cart</button>
                           </div>
                      </div>
                      <div className="col-sm-4 col-md-4">
                          <a href='\'>
                           <img style={{ height: "130px" }} src={Rice} />
                           </a>
                           <div className="details">
                              <div><a href='\'>fdgfdgg</a></div> 
                               <div><span>$80.00</span></div>
                           </div>
                           <div>
                           <button className="btn btn-sm add" >Add To Cart</button>
                           </div>
                         
                      </div>
                 </div>

            </div>
        </div>
       </div>
        </div>
        </div> 
    );
}
}
export default Products;
