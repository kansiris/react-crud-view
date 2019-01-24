
// import React,{Component} from 'react';
// import Header from '../Results/Header';
// import './products.css';
// import logo from '../../images/logo.jpg';
// class Products extends Component{
// render(){
//     return(
//         <div>
//          <Header/>
//          <div className="bg">
//               <h1 className="heading">All Products</h1>
//               <div className="container" style={{backgroundColor:"white",paddingTop:"3%"}}>
//         <div className="row">
//           <div className="col-sm-3 col-md-3">
          
//              <h5 className="txt">CATEGORIES</h5>
//                <ul className="list-group">
//                           <li className="list-group-item"><a href='\'><span className="badge">4</span></a>dfhsgf
//                        </li>
//                          <li className="list-group-item">
//                           <a href='\'><span className="badge">4</span></a>dfhsgf</li>
//                             <li className="list-group-item"> <a href='\'><span className="badge">4</span></a>dfhsgf</li>
//              </ul>
//             </div>
//             <div className="col-sm-9 col-md-9">
//                  <div className="row">
//                       <div className="col-sm-4 col-md-4 cimg">
//                           <a href='\'>
//                            <img style={{ height: "100px" }} src={logo} />
//                            </a>
//                            <div className="details">
//                               <div><a href='\'>fdgfdgg</a></div> 
//                                <div><span>$80.00</span></div>
//                            </div>
//                            <div><a href='\' className="btn addbtn">Add to cart</a></div>
//                       </div>
//                       <div className="col-sm-4 col-md-4">
//                           <a href='\'>
//                            <img style={{ height: "100px" }} src={logo} />
//                            </a>
//                            <div className="details">
//                               <div><a href='\'>fdgfdgg</a></div> 
//                                <div><span>$80.00</span></div>
//                            </div>
//                            <div><a href='\' className="btn addbtn">Add to cart</a></div>
//                       </div>
//                       <div className="col-sm-4 col-md-4">
//                           <a href='\'>
//                            <img style={{ height: "100px" }} src={logo} />
//                            </a>
//                            <div className="details">
//                               <div><a href='\'>fdgfdgg</a></div> 
//                                <div><span>$80.00</span></div>
//                            </div>
//                            <div><a href='\' className="btn addbtn">Add to cart</a></div>
//                       </div>
//                  </div>
//                  <div className="row">
//                       <div className="col-sm-4 col-md-4">
//                           <a href='\'>
//                            <img style={{ height: "100px" }} src={logo} />
//                            </a>
//                            <div className="details">
//                               <div><a href='\'>fdgfdgg</a></div> 
//                                <div><span>$80.00</span></div>
//                            </div>
//                            <div><a href='\' className="btn addbtn">Add to cart</a></div>
//                       </div>
//                       <div className="col-sm-4 col-md-4">
//                           <a href='\'>
//                            <img style={{ height: "100px" }} src={logo} />
//                            </a>
//                            <div className="details">
//                               <div><a href='\'>fdgfdgg</a></div> 
//                                <div><span>$80.00</span></div>
//                            </div>
//                            <div><a href='\' className="btn addbtn">Add to cart</a></div>
//                       </div>
//                       <div className="col-sm-4 col-md-4">
//                           <a href='\'>
//                            <img style={{ height: "100px" }} src={logo} />
//                            </a>
//                            <div className="details">
//                               <div><a href='\'>fdgfdgg</a></div> 
//                                <div><span>$80.00</span></div>
//                            </div>
//                            <div><a href='\' className="btn addbtn">Add to cart</a></div>
//                       </div>
//                  </div>
//                  <div className="row">
//                       <div className="col-sm-4 col-md-4">
//                           <a href='\'>
//                            <img style={{ height: "100px" }} src={logo} />
//                            </a>
//                            <div className="details">
//                               <div><a href='\'>fdgfdgg</a></div> 
//                                <div><span>$80.00</span></div>
//                            </div>
//                            <div><a href='\' className="btn addbtn">Add to cart</a></div>
//                       </div>
//                       <div className="col-sm-4 col-md-4">
//                           <a href='\'>
//                            <img style={{ height: "100px" }} src={logo} />
//                            </a>
//                            <div className="details">
//                               <div><a href='\'>fdgfdgg</a></div> 
//                                <div><span>$80.00</span></div>
//                            </div>
//                            <div><a href='\' className="btn addbtn">Add to cart</a></div>
//                       </div>
//                       <div className="col-sm-4 col-md-4">
//                           <a href='\'>
//                            <img style={{ height: "100px" }} src={logo} />
//                            </a>
//                            <div className="details">
//                               <div><a href='\'>fdgfdgg</a></div> 
//                                <div><span>$80.00</span></div>
//                            </div>
//                            <div><a href='\' className="btn addbtn">Add to cart</a></div>
//                       </div>
//                  </div>

//             </div>
//         </div>
//        </div>
//         <h1>gfhthgtht</h1>
//         </div>
//         </div> 
//     );
// }
// }
// export default Products;


import React,{Component} from 'react';
import Header from '../Results/Header';
import './products.css';
import logo from '../../images/logo.jpg';

import Basmati from '../../images/Basmati.jpg';
import matta from '../../images/matta.jpg';
import Ponni from '../../images/Ponni.jpg';
import Rice from '../../images/Rice.jpg';

class Products extends Component{

    constructor(props)
    {
        super(props);
        this.state={
            productdetails:[],
            id:'',ProductId:'', Productname:'',Price:'',Quantity:'',weight:'',ShortDescription:'',LongDescription:'',Remarks:'',Available:'',HSNcode:'',SGST:'',CGST:'',Discount:'',
            brand:'',Image:'',Manfacturedate:'',Expirydate:'',createdate:'',Updateddate:''

        }
    }

    componentWillMount()
    {
       this.getproductdetails();
    } 
    getproductdetails()
    {
        fetch('http://localhost:64017/api/Product/GetAllProducts').then(res=>res.json()).then(details=>{
         this.setState({
            productdetails:details
         });
      })
    }
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
            <div className="row" >
            {
              this.state.productdetails.map(item=>( <div className="col-sm-4 col-md-4 cimg" key={item.id}>
                          <a href='\'>
                           <img style={{ height: "130px" }} src={Basmati} />
                           </a>
                           <div className="details">

                           </div>
                           <div>
                           <button className="btn btn-sm add" >Add To Cart</button>
                           </div>
                      </div>
              ))}
                    
                 </div>

</div></div></div></div></div>
    );
}
}
export default Products;

