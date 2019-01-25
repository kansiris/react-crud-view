import React, { Component } from 'react';
// import './results.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import Header from '../Results/Header';
import Adminsidebar from '../Adminsidebar/Adminsidebar';
class Productlist1  extends React.Component
{
constructor(){
super();
this.state={name:'',table:'',ProductID:'',Price:'',ProductName:'',ShortDescription:'',LongDescription:'',Quantity:'',Available:'',
CategoryID:'',DishTypeID:'',Tax:'',Discounts:'',xImage:''};
this.state.name = localStorage.getItem('UserName');
}


  render(){ 
const {ProductID,Price,ProductName,ShortDescription,LongDescription,Available,Quantity,
CategoryID,DishTypeID,Tax,Discounts,xImage} = this.state;
  
    return(<div>
        <table className="table">
    <thead>
      <tr>
        <th>Firstname</th>
        <th>Lastname</th>
        <th>Email</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>John</td>
        <td>Doe</td>
        <td>john@example.com</td>
      </tr>
      <tr>
        <td>Mary</td>
        <td>Moe</td>
        <td>mary@example.com</td>
      </tr>
      <tr>
        <td>July</td>
        <td>Dooley</td>
        <td>july@example.com</td>
      </tr>
    </tbody>
  </table>

  </div>);}
  }

  export default Productlist1;