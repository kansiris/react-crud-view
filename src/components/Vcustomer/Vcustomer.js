
import React,{Component} from 'react';
import Header from '../Results/Header';
// import './products.css';
import logo from '../../images/logo.jpg';
import Basmati from '../../images/Basmati.jpg';
import matta from '../../images/matta.jpg';
import Ponni from '../../images/Ponni.jpg';
import Rice from '../../images/Rice.jpg';
import Adminsidebar from '../Adminsidebar/Adminsidebar';
import Orderlist from '../Vorders/Vorderlist'
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
  <div class="col-sm-4"><div className="col-sm-12 col-md-12 form-group">
                  <input type="text" id="Firstname" name="Firstname" placeholder="First Name" className="form-control" onChange={this.handleChange} value={this.state.FirstName}  />
                </div></div>
  
</div>
</div>


</div> 

              
        </div> 
    );
}
}
export default Products;
