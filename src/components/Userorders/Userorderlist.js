
import React,{Component} from 'react';
import Header from '../Results/Header';
// import './products.css';
import logo from '../../images/logo.jpg';
import Basmati from '../../images/Basmati.jpg';
import matta from '../../images/matta.jpg';
import Ponni from '../../images/Ponni.jpg';
import Rice from '../../images/Rice.jpg';
import Usersidebar from '../Usersidebar/Usersidebar';
import Productlist1 from '../Vproducts/Vproductlist'
class Userorderlist extends Component{
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
  <div class="col-sm-2"><Usersidebar/></div>
  <div class="col-sm-4">
  <table className="table">
    <thead>
      <tr>
        <th>OrderID</th>
        <th>OrderDate</th>
        <th>Orderstatus</th>
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
</div>
</div>


</div> 

              
        </div> 
    );
}
}
export default Userorderlist;
