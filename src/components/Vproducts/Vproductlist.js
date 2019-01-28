import React, { Component } from 'react';
// import './results.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import { MDBIcon } from 'mdbreact';
import Header from '../Results/Header';
import Adminsidebar from '../Adminsidebar/Adminsidebar';
class Productlist1 extends React.Component {
  constructor() {
    super();
    // this.state={name:'',table:'',ProductID:'',Price:'',ProductName:'',ShortDescription:'',LongDescription:'',Quantity:'',Available:'',
    // CategoryID:'',DishTypeID:'',Tax:'',Discounts:'',xImage:''};
    this.state = {
      name: '', details: [], id: '', ProductId: '', Productname: '', Price: '', Quantity: '', weight: '', ShortDescription: '', LongDescription: '',
      Remarks: '', Available: '', HSNcode: '', SGST: '', CGST: '', Discount: '', brand: '', Image: '', Manfacturedate: '', Expirydate: '', createdate: '', Updateddate: ''
    }
    this.state.name = localStorage.getItem('UserName');
    this.handleEdit=this.handleEdit.bind(this);
    this.Getproducts=this.Getproducts.bind(this);
   
  }
  componentWillMount() {
    this.getproductlist();
  }
Getproducts(id){

}
//  handleChange(e){
//   this.setState({
//     details:e.target.value
//   })
// }
// handleClick(){
//   console.log(this.state.details);
// }
  getproductlist() {
    fetch('http://localhost:64017/api/Product/GetAllProducts').then((res) => res.json()).then((res) => {
      this.setState({
        details: res
      })
    })
  }
  handleEdit(id){
    fetch('http://localhost:64017/api/Product/GetProductbyid?id='+id).then((res)=>res.json())
    .then((res)=>{
      this.setState({id:res.id,ProductId:res.ProductId,Productname:res.Productname,Price:res.Price,Quantity:res.Quantity,
        weight:res.weight,ShortDescription:res.ShortDescription,LongDescription:res.LongDescription, Remarks:res. Remarks,
        Available:res. Available,HSNcode:res.HSNcode,SGST:res.SGST,Discount:res.Discount,brand:res.brand,Image:res.Image,
        Manfacturedate:res.Manfacturedate,Expirydate:res.Expirydate,createdate:res.createdate,Updateddate:res.Updateddate
      })
    })
  }
  render() {
    const { ProductID, Price, ProductName, ShortDescription, LongDescription, Available, Quantity,
      CategoryID, DishTypeID, Tax, Discounts, xImage } = this.state;

    return (<div>
      <table className="table">
        <thead>
          <tr>
            <th>ProductID</th>
            <th>ProductName</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {this.state.details.map((list, index) => (
            <tr key={index}>
              <td>{list.ProductId}</td>
              <td>{list.Productname}</td>
              <td>{list.Price}</td>
              <td><MDBIcon icon="pencil-alt" onClick={(e) => this.Getproducts(list.id)}/></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>);
  }
}

export default Productlist1;