
import React,{Component} from 'react';
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
class VProducts extends Component{
    constructor(props)
    {
      super(props);
      this.state={
        mode:'view', Firstname:'',Lastname:'',Email:'',Password:'',confirmpassword:'',email:'',password:''
  
      }
      this.handleSave = this.handleSave.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleEdit3 = this.handleEdit3.bind(this);
    this.handleEdit1 = this.handleEdit1.bind(this);
      this.onChange = this.onChange.bind(this);
      this.handleChange=this.handleChange.bind(this);
    //   this.Savedetails=this.Savedetails.bind(this);
    //   this.logindetails=this.logindetails.bind(this);
    }
  
    handleChange(e) {
      const state=this.state
    state[e.target.id]=e.target.value;
    this.setState(state);
  }
  onFormSubmit(e){
    e.preventDefault();
    const formData = new FormData();
    formData.append('myImage',this.state.file);
    const config = {
        headers: {
            'content-type': 'multipart/form-data'
        }
    };
    axios.post("/upload",formData,config)
        .then((response) => {
            alert("The file is successfully uploaded");
        }).catch((error) => {
    });
}
onChange(e) {
    this.setState({file:e.target.files[0]});
}


handleSave() {
  this.setState({text: this.state.inputText, mode: 'view'});
}

handleEdit() {
  this.setState({mode: 'edit'});
}
handleEdit3() {

  this.setState({mode: 'edit1'});
}



handleEdit1(){
  this.setState({mode: 'edit'});

}


renderButton() {
  const {mode} = this.state;
  if(this.state.mode === 'view') {
    return (
<div>
<button onClick={this.handleEdit1}>
            Update
          </button>        </div>
    );
  } else  if(this.state.mode === 'edit'){
    return (
      <div>
<button onClick={this.handleEdit1}>
            save
          </button>
        <div className="row">  <a onClick={this.handleSave}>
          Update
        </a>    </div>
       
      </div>
    );
  } else if(this.state.mode === 'edit1'){
return(
<div>
<button onClick={this.handleEdit1}>
            save
          </button>

</div>
);

  }
}









render(){
    return(
        <div>
         <Header/>
         <div className="bg">
         <div className="container" style={{backgroundColor:"white"}}>
            <div className="row vproducts">
  <div className="col-sm-2"><Adminsidebar/></div>
  <div className="col-sm-4"><Productlist1/></div>
  <div className="col-sm-4"> <form>
              <h2 className="txt">Product Details</h2>
              <button onClick={this.handleEdit3}>
            Add new product
          </button>  
              <div className="row">
                <div className="col-sm-12 col-md-12 form-group">
                  <input type="text" id="Firstname" name="Firstname" placeholder="Product Name" className="form-control" onChange={this.handleChange} value={this.state.FirstName}  />
                </div>
                <div className="col-sm-12 col-md-12 form-group">
                  <input type="text" id="Lastname" name="Lastname" placeholder="HSNcode Name" className="form-control" onChange={this.handleChange} value={this.state.LastName} />
                </div>
                <div className="col-sm-12 col-md-12 form-group">
                  <input type="text" id="Email" name="Email" placeholder="Price" className="form-control" onChange={this.handleChange} value={this.state.Email} />
                </div>
                <div className="col-sm-12 col-md-12 form-group">
                  <input type="password" id="Password" name="description" placeholder="description" className="form-control" onChange={this.handleChange} value={this.state.Password} />
                </div>
                <div className="col-sm-12 col-md-12 form-group">
                  <input type="password" id="confirmpassword" name="Shortdescription" placeholder="Shortdescription" className="form-control" onChange={this.handleChange} value={this.state.ConfirmPassword} />
                </div>
                <div className="col-sm-12 col-md-12 form-group">
                <form onSubmit={this.onFormSubmit}>
                <h1>File Upload</h1>
                <input type="file" name="myImage" onChange= {this.onChange} />
                <button type="submit">Upload</button>
            </form>                </div>
                <div className="col-sm-12 col-md-12 form-group">
                  
                  {this.renderButton()}
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
