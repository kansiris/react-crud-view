import React, { Component } from 'react';
import axios from 'axios';

// import './results.css';
import "font-awesome/css/font-awesome.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import Header from '../Results/Header';
import Adminsidebar from '../Adminsidebar/Adminsidebar';
import Productlist1 from './Productlist';


class Productlist  extends React.Component
{
constructor(){
super();
this.state={name:'',file: '',imagePreviewUrl: '',table:'',ProductID:'',Price:'',ProductName:'',ShortDescription:'',LongDescription:'',Quantity:'',Available:'',
CategoryID:'',DishTypeID:'',Tax:'',Discounts:'',xImage:'',  mode:'view',url :'http://localhost:3000/components/Productimages',fb:''};
this.state.name = localStorage.getItem('UserName');
this.handleInputChange = this.handleInputChange.bind(this);
this.handleEdit3 = this.handleEdit3.bind(this);
this.handleEdit2 = this.handleEdit2.bind(this);
this.handleEdit1 = this.handleEdit1.bind(this);
this._handleImageChange = this._handleImageChange.bind(this);
this._handleSubmit = this._handleSubmit.bind(this);
this.onChange = this.onChange.bind(this);
this.clearData = this.clearData.bind(this);
}
handleInputChange(event) {
  const target = event.target;
  const value = target.type === 'checkbox' ? target.checked : target.value;
  const name = target.name;
}
clearData(){
  this.setState({
    myValue: ''
  })
}
selectImages = (event) => {
  let images = []
  for (var i = 0; i < event.target.files.length; i++) {
  images[i] = event.target.files.item(i);
  }
  images = images.filter(image => image.name.match(/\.(jpg|jpeg|png|gif)$/))
  let message = `${images.length} valid image(s) selected`
  this.setState({ images, message })
  }
  
_handleImageChange(e) {
  e.preventDefault();
  const formData = new FormData();
  formData.append('myImage',this.state.file);
  const config = {
      headers: {
          'content-type': 'multipart/form-data'
      }
  };
  axios.post("../productimages",formData,config)
      .then((response) => {
          alert("The file is successfully uploaded");
      }).catch((error) => {
  });
//   e.preventDefault();

//   let reader = new FileReader();
//   let files = e.target.files[0];
// reader.readAsDataURL(files[0]);
// reader.onload=(e) =>{console.warn("img data",e.target.result) }
// const url = ""
// const FormData = {file:e.target.result}
// return post(url,FormData).then(response =>console.warn("result",response))


//   reader.onloadend = () => {
//     this.setState({
//       files: files,
//       imagePreviewUrl: reader.result
//     });
//   }

//   reader.readAsDataURL(files)
}

_handleSubmit(e) {
  e.preventDefault();
  // TODO: do something with -> this.state.file
  console.log('handle uploading-', this.state.file);
}
onChange(e){
  const state = this.state
  state[e.target.name] = e.target.value;
  this.setState(state);
}

handleEdit1(){
  this.setState({mode: 'edit'});
  this.clearData();
      }
handleEdit2(){
      const{username,username1,email,email1,password,password1,telphone} = this.state;
      fetch('http://localhost:/api/UseAuth/register?customerphoneno=' + telphone + '&&customername='+username1+ '&&password='+password1+ '&&email='+email)
      .then((result) =>{localStorage.setItem('jwktoken1',result.data);
      this.setState({message:'Registration failed'});this.props.history.push("/productlist")}).catch((error)=>{if(error.responce.status === 401){this.setState({message: "Registration failed"})}});
        }

handleEdit3(){
          const{username,username1,email,email1,password,password1,telphone} = this.state;
          fetch('http://localhost:/api/UseAuth/register?customerphoneno=' + telphone + '&&customername='+username1+ '&&password='+password1+ '&&email='+email)
          .then((result) =>{localStorage.setItem('jwktoken1',result.data);
          this.setState({message:'Registration failed'});this.props.history.push("/productlist")}).catch((error)=>{if(error.responce.status === 401){this.setState({message: "Registration failed"})}});
            }

 renderButton() {
              const {username,username1,email,email1,password1,telphone,password} = this.state;
              if(this.state.mode === 'view') {
                return ( <div>
                    <button onClick={this.handleEdit2}>  update </button>
                    </div> );
              } else  if(this.state.mode === 'edit'){
                return (
                  <div>
                      <button onClick={this.handleEdit3}> save </button>
                    </div>                );
                }
              }



  render(){ 
const {ProductID,Price,ProductName,ShortDescription,LongDescription,Available,Quantity,CategoryID,DishTypeID,Tax,Discounts,xImage} = this.state;
let {imagePreviewUrl} = this.state;
let $imagePreview = null;
if (imagePreviewUrl) {
  $imagePreview = (<img src={imagePreviewUrl} />);
} else {
  $imagePreview = (<div className="previewText">Please select an Image for Preview</div>);
}
    return(
    <div>
      <Header/>

  <div className="row">
  <div className="col-sm-2"><Adminsidebar/></div>
  <div className="col-sm-6">   <table className="table">
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
  </div>
  <div className="col-sm-4">
  <button onClick={this.handleEdit1}>
            Add new product
          </button>   

  <div className="row">  <div className="col-sm-6">   <label>Please enter details </label> </div>   </div>
            <div className="row">   <div className="col-sm-6">  <label>ProductID</label></div> <div className="col-sm-6"> <input type="text" value={ProductID} name= "ProductID" placeholder="ProductID" onChange={this.onChange}/>  </div>  </div>
            <div className="row"> <div className="col-sm-6">   <label>ProductName</label></div><div className="col-sm-6"><input type="text" value={ProductName}  name= "ProductName" placeholder="ProductName" onChange={this.onChange}/> </div>   </div>
            <div className="row"> <div className="col-sm-6">   <label>ShortDescription</label> </div><div className="col-sm-6"><input type="email" value={ShortDescription} name="ShortDescription" placeholder="ShortDescription" onChange={this.onChange}/>  </div>  </div>
            <div className="row">  <div className="col-sm-6"> <label>LongDescription</label></div><div className="col-sm-6"> <input type="tel" value={LongDescription} name="LongDescription" placeholder="LongDescription" onChange={this.onChange}/>  </div>  </div>
            <div className="row"> <div className="col-sm-6">  <label>Price</label></div> <div className="col-sm-6"><input type="tel" value={Price} name="Price" placeholder="Price" onChange={this.onChange}/> </div>   </div>
            <div className="row">  <div className="col-sm-6"> <label>Available</label></div> <div className="col-sm-6">  <input name="Active" type="checkbox" onChange={this.handleInputChange} />  </div>  </div>
            <div className="row"> <div className="col-sm-6">  <label>Quantity</label></div> <div className="col-sm-6"> <input type="tel" value={Quantity} name="Quantity" placeholder="Quantity" onChange={this.onChange}/> </div>   </div>
            <div className="row"> <div className="col-sm-6">  <label>CategoryID</label></div> <div className="col-sm-6"> <input type="tel" value={CategoryID} name="CategoryID" placeholder="CategoryID" onChange={this.onChange}/>  </div>  </div>
            <div className="row"> <div className="col-sm-6">  <label>Tax</label> </div> <div className="col-sm-6"><input type="tel" value={Tax} name="Tax" placeholder="Tax" onChange={this.onChange}/>  </div>  </div>
            <div className="row"> <div className="col-sm-6">  <label>Discounts</label></div> <div className="col-sm-6"> <input type="tel" value={Discounts} name="Discounts" placeholder="Discounts" onChange={this.onChange}/>  </div>  </div>
            <div className="row"> <div className="col-sm-6">  <label>Image</label> </div> <div className="col-sm-6"> 
            <form onSubmit={(e)=>this._handleSubmit(e)}>
          <input className="fileInput" type="file"  
            onChange={(e)=>this._handleImageChange(e)} />
          <button className="submitButton"  type="submit" 
            onClick={(e)=>this._handleSubmit(e)}>Upload Image</button>
        </form>
        <div className="imgPreview">
          {$imagePreview}
        </div>  </div>
            <div className="row"> <div className="col-sm-6">  {this.renderButton()}        </div>
</div></div> </div> </div> </div>   )
  }
  }

  export default Productlist;