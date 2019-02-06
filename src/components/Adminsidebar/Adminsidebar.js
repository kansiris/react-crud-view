import React, { Component } from 'react';
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import './admin.css';

class Adminsidebar extends Component {
    constructor(props) {
      super(props);
      this.handleInputChange = this.handleInputChange.bind(this);
    }
  
    handleInputChange(event) {
      const target = event.target;
      const value = target.type === 'checkbox' ? target.checked : target.value;
      const name = target.name;
    }
    render() {
      return (
        // <div  style={{  paddingTop: "4px",border:"1px solid gray"}}>
         
        //   <div className="col-sm-2 col-md-2">
        //     <label>
           
        //     <a href="/vProduct" style={{ float: "right", paddingTop: "4px" }}>Products</a>  
        //     </label>
        //     </div>
         
        //     <div className="col-sm-2 col-md-2">
        //     <label>         
        //     <a href="/vorder" style={{ float: "right", paddingTop: "4px" }}>Orders</a>  
        //     </label>
        //     </div>
        //     <div className="col-sm-2 col-md-2">
        //     <label>
           
        //     <a href="/vcustomer" style={{ float: "right", paddingTop: "4px" }}>CustomerDetails</a>  
        //     </label>
        //     </div>
        //     <div className="col-sm-2 col-md-2">
        //     <label>
           
        //     <a href="/productlist" style={{ float: "right", paddingTop: "4px" }}>OrderStatus</a>  
        //     </label>
        //     </div>
  
        // </div>

      <div className="row admin">
        <div className="col-sm-2 col-md-2">
        <ul className="list-group lst"> 
          <li className="list-group-item lst1">
          <a href="/vProduct" className="list2">Products</a>
          </li>
          <li className="list-group-item lst1">
            <a href="/vorder" className="list2">Orders</a>
          </li>
          <li className="list-group-item lst1">
            <a href="/vcustomer" className="list2">CustomerDetails</a>
          </li>
          <li className="list-group-item lst1">
          <a href="/productlist" className="list2">OrderStatus</a>
          </li>
        </ul>
        </div>
      </div>
      );
    }
  }
  
  export default Adminsidebar;