
import React,{Component} from 'react';
import Header from '../Results/Header';
// import './products.css';
import logo from '../../images/logo.jpg';
import Basmati from '../../images/Basmati.jpg';
import matta from '../../images/matta.jpg';
import Ponni from '../../images/Ponni.jpg';
import Rice from '../../images/Rice.jpg';
import Adminsidebar from '../Adminsidebar/Adminsidebar';
import Productlist1 from '../Vproducts/Vproductlist'
class Products extends Component{
    constructor(props)
    {
      super(props);
      this.state={
        Firstname:'',Lastname:'',Email:'',Password:'',confirmpassword:'',email:'',password:''
  
      }
      this.handleChange=this.handleChange.bind(this);
    //   this.Savedetails=this.Savedetails.bind(this);
    //   this.logindetails=this.logindetails.bind(this);
    }
  
    handleChange(e) {
      const state=this.state
    state[e.target.id]=e.target.value;
    this.setState(state);
  }
render(){
    return(
        <div>
         <Header/>
         <div className="bg">
         <div className="container" style={{backgroundColor:"white"}}>
            <div className="row">
  <div class="col-sm-2"><Adminsidebar/></div>
  <div class="col-sm-4"><Productlist1/></div>
  <div class="col-sm-4"> <form>
              <h2 className="txt">Product Details</h2>
              <div className="row">
                <div className="col-sm-12 col-md-12 form-group">
                  <input type="text" id="Firstname" name="Firstname" placeholder="First Name" className="form-control" onChange={this.handleChange} value={this.state.FirstName}  />
                </div>
                <div className="col-sm-12 col-md-12 form-group">
                  <input type="text" id="Lastname" name="Lastname" placeholder="Last Name" className="form-control" onChange={this.handleChange} value={this.state.LastName} />
                </div>
                <div className="col-sm-12 col-md-12 form-group">
                  <input type="text" id="Email" name="Email" placeholder="Email" className="form-control" onChange={this.handleChange} value={this.state.Email} />
                </div>
                <div className="col-sm-12 col-md-12 form-group">
                  <input type="password" id="Password" name="Password" placeholder="Password" className="form-control" onChange={this.handleChange} value={this.state.Password} />
                </div>
                <div className="col-sm-12 col-md-12 form-group">
                  <input type="password" id="confirmpassword" name="confirmpassword" placeholder="Confirm Password" className="form-control" onChange={this.handleChange} value={this.state.ConfirmPassword} />
                </div>
                <div className="col-sm-12 col-md-12 form-group">
                  {/* <input type="checkbox" /> &nbsp; Recieve promotional emails */}
                </div>
                <div className="col-sm-12 col-md-12 form-group">
                  <button className="submit" onClick={this.Savedetails}>
                    Submit &nbsp;<i className="fa fa-arrow-right" aria-hidden="true"></i>
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
export default Products;
