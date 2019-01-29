
import React, { Component } from 'react';
import Header from '../Results/Header';
// import './products.css';
import logo from '../../images/logo.jpg';
import Basmati from '../../images/Basmati.jpg';
import matta from '../../images/matta.jpg';
import Ponni from '../../images/Ponni.jpg';
import axios from 'axios';
import Adminsidebar from '../Adminsidebar/Adminsidebar';
import Productlist1 from './Vproductlist'
import './vproducts.css';
import { MDBIcon } from 'mdbreact';
class VProducts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: 'view', Firstname: '', Lastname: '', Email: '', Password: '', confirmpassword: '', email: '', password: '',
      name: '', details: [], id: '', ProductId: '', Productname: '', Price: '', Quantity: '', weight: '', ShortDescription: '', LongDescription: '',
      Remarks: '', Available: '', HSNcode: '', SGST: '', CGST: '', Discount: '', brand: '', Image: '', Manfacturedate: '', Expirydate: '', createdate: '', Updateddate: ''

    }
    this.state.name = localStorage.getItem('UserName');
    this.handleEdit = this.handleEdit.bind(this);
    // this.Getproducts = this.Getproducts.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleEdit3 = this.handleEdit3.bind(this);
    this.handleEdit2 = this.handleEdit2.bind(this);
    this.handleEdit1 = this.handleEdit1.bind(this);
    this.onChange = this.onChange.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.Updatedetails = this.Updatedetails.bind(this);
    this.Savedetails = this.Savedetails.bind(this);
    this.handledelete = this.handledelete.bind(this);
    this.handleCheck=this.handleCheck.bind(this);
    //   this.Savedetails=this.Savedetails.bind(this);
    //   this.logindetails=this.logindetails.bind(this);
  }
  getInitialState(){
    return {checked:true}
  }
  handleCheck(){
    this.setState({checked: !this.state.checked});
  }
  render(){
    var msg;
    if(this.state.checked){
      msg ="available"
    }
    else{
      msg ="not available"
    }
  }
  componentWillMount() {
    this.getproductlist();
  }
  // Getproducts(id) {
  // }
  getproductlist() {
    fetch('http://localhost:64017/api/Product/GetAllProducts').then((res) => res.json()).then((res) => {
      this.setState({
        details: res
      })
    })
  }
  Savedetails(e) {
    const { id, ProductId, Productname, Price, Quantity, weight, ShortDescription, LongDescription, Remarks,
      Available, HSNcode, SGST, CGST, Discount, brand, Image, Manfacturedate, Expirydate, createdate, Updateddate } = this.state;
    e.preventDefault();
    fetch('http://localhost:64017/api/Product/AddProduct', {
      method: 'Post',
      body: JSON.stringify({
        id: id, ProductId: ProductId, Productname: Productname, Price: Price, Quantity: Quantity, weight: weight,
        ShortDescription: ShortDescription, LongDescription: LongDescription, Remarks: Remarks, Available: Available, HSNcode: HSNcode,
        SGST: SGST, CGST: CGST, Discount: Discount, brand: brand, Image: Image, Manfacturedate: Manfacturedate, Expirydate: Expirydate,
        createdate: createdate, Updateddate: Updateddate
      }),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          id: '', ProductId: '', Productname: '', Price: '', Quantity: '', weight: '', ShortDescription: '', LongDescription: '',
          Remarks: '', Available: '', HSNcode: '', SGST: '', CGST: '', Discount: '', brand: '', Image: '', Manfacturedate: '', Expirydate: '', createdate: '', Updateddate: ''
        });
        this.getproductlist();
        return res.success;
      })
  }
  handleEdit2(id) {
    fetch('http://localhost:64017/api/Product/GetProductbyid?id=' + id).then((res) => res.json())
      .then((res) => {
        this.setState({
          id: res.id, ProductId: res.ProductId, Productname: res.Productname, Price: res.Price, Quantity: res.Quantity,
          weight: res.weight, ShortDescription: res.ShortDescription, LongDescription: res.LongDescription, Remarks: res.Remarks,
          Available: res.Available, HSNcode: res.HSNcode, SGST: res.SGST, Discount: res.Discount, brand: res.brand, Image: res.Image,
          Manfacturedate: res.Manfacturedate, Expirydate: res.Expirydate, createdate: res.createdate, Updateddate: res.Updateddate
        })
      })
  }
  Updatedetails(e) {
    e.preventDefault();
    const { id, ProductId, Productname, Price, Quantity, weight, ShortDescription, LongDescription, Remarks,
      Available, HSNcode, SGST, CGST, Discount, brand, Image, Manfacturedate, Expirydate, createdate, Updateddate } = this.state;
    fetch('http://localhost:64017/api/Product/UpdateProduct?id=' + id, {
      method: 'POST',
      body: JSON.stringify({
        id: id, ProductId: ProductId, Productname: Productname, Price: Price, Quantity: Quantity, weight: weight,
        ShortDescription: ShortDescription, LongDescription: LongDescription, Remarks: Remarks, Available: Available, HSNcode: HSNcode,
        SGST: SGST, CGST: CGST, Discount: Discount, brand: brand, Image: Image, Manfacturedate: Manfacturedate, Expirydate: Expirydate,
        createdate: createdate, Updateddate: Updateddate
      }),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }).then((res) => res.json())
      .then((responseJson) => {
        window.location.reload();
        this.getproductlist();
        this.setState({
          id: '', ProductId: '', Productname: '', Price: '', Quantity: '', weight: '', ShortDescription: '', LongDescription: '',
          Remarks: '', Available: '', HSNcode: '', SGST: '', CGST: '', Discount: '', brand: '', Image: '', Manfacturedate: '', Expirydate: '', createdate: '', Updateddate: ''
        });
        alert('sucess')
        return responseJson.success;
      })
      .catch((error) => {
        console.error(error);
        alert('failed');
      });

  }
  handledelete(id) {
    fetch('http://localhost:64017/api/Product/DeleteProduct?id=' + id, {
      method: 'Delete',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }).then((res) => res.json()).then(() => {
      this.getproductlist();
      alert('delete the product');
    })
  }

  handleChange(e) {
    const state = this.state
    state[e.target.id] = e.target.value;
    this.setState(state);
  }
  onFormSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append('myImage', this.state.file);
    const config = {
      headers: {
        'content-type': 'multipart/form-data'
      }
    };
    axios.post("/upload", formData, config)
      .then((response) => {
        alert("The file is successfully uploaded");
      }).catch((error) => {
      });
  }
  onChange(e) {
    this.setState({ file: e.target.files[0] });
  }
  handleSave() {
    this.setState({ text: this.state.inputText, mode: 'view' });
  }
  handleEdit() {
    this.setState({ mode: 'edit' });
  }
  handleEdit3() {

    this.setState({ mode: 'edit1' });
  }
  handleEdit1() {
    this.setState({ mode: 'edit' });

  }
  renderButton() {
    const { mode } = this.state;
    if (this.state.mode === 'view') {
      return (
        <div>
          <button onClick={this.handleEdit1}>
            Update
          </button></div>
      );
    } else if (this.state.mode === 'edit') {
      return (
        <div>
          <button onClick={this.handleEdit1}>
            save
          </button>
          <div className="row"><a onClick={this.Updatedetails}>
            Update
        </a></div>
        </div>
      );
    } else if (this.state.mode === 'edit1') {
      return (
        <div>
          <button onClick={this.handleEdit1}>
            save
          </button>
        </div>
      );

    }
  }
  render() {
    return (
      <div>
        <Header />
        <div className="bg">
          <div className="container" style={{ backgroundColor: "white" }}>
            <div className="row vproducts">
              <div className="col-sm-2 col-sm-2"><Adminsidebar /></div>
              <div className="col-sm-5 col-md-5"><div>
                <table className="table">
                  <thead>
                    <tr>
                      <th>Id</th>
                      <th>ProductID</th>
                      <th>ProductName</th>
                      <th>Price</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.details.map((list, index) => (
                      <tr key={index}>
                        <td>{list.id}</td>
                        <td>{list.ProductId}</td>
                        <td>{list.Productname}</td>
                        <td>{list.Price}</td>
                        <td><MDBIcon icon="pencil-alt" onClick={() => this.handleEdit2(list.id)} />

                        </td>
                        <td> <MDBIcon icon="times" onClick={() => this.handledelete(list.id)} /></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div></div>
              <div className="col-sm-5 col-md-5"> <form>
                <h2 className="txt">Product Details</h2>
                <div><button onClick={this.handleEdit3}>
                  Add new product
                 </button></div>
                <div className="row">
                  <div className="col-sm-12 col-md-12 form-group">
                    <input type="text" id="ProductId" name="ProductId" placeholder="Product Id" className="form-control" onChange={this.handleChange} value={this.state.ProductId} />
                  </div>
                  <div className="col-sm-12 col-md-12 form-group">
                    <input type="text" id="Productname" name="Productname" placeholder="Productname" className="form-control" onChange={this.handleChange} value={this.state.Productname} />
                  </div>
                  <div className="col-sm-12 col-md-12 form-group">
                    <input type="text" id="Price" name="Price" placeholder="Price" className="form-control" onChange={this.handleChange} value={this.state.Price} />
                  </div>
                  {/* <div className="col-sm-12 col-md-12 form-group">
                    <input type="password" id="Password" name="description" placeholder="description" className="form-control" onChange={this.handleChange} value={this.state.Password} />
                  </div>
                  <div className="col-sm-12 col-md-12 form-group">
                    <input type="password" id="confirmpassword" name="Shortdescription" placeholder="Shortdescription" className="form-control" onChange={this.handleChange} value={this.state.ConfirmPassword} />
                  </div> */}
                    <div className="col-sm-12 col-md-12 form-group">
                      <input type="checkbox" onChange={this.handleCheck} defaultChecked={this.state.checked}/> &nbsp; Check Availability
                        <p> {this.msg}</p>
                    </div>
                  <div className="col-sm-12 col-md-12 form-group">
                    <form onSubmit={this.onFormSubmit}>
                      <h1>File Upload</h1>
                      <input type="file" name="myImage" onChange={this.onChange} />
                      <button type="submit">Upload</button>
                    </form></div>
                  <div className="col-sm-12 col-md-12 form-group">
                    {/* {this.renderButton()} */}
                    <button onClick={this.Updatedetails}>
                      Update
                    </button>
                  </div>
                  <div className="col-sm-12 col-md-12 form-group">
                    <button onClick={this.Savedetails}>
                      save
                    </button>

                  </div>
                </div>
              </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default VProducts;
