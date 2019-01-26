
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
import './vcustomer.css';
class Products extends Component{
    constructor(props)
    {
      super(props);
      this.state={
        custdetails:[],
        CustomerId:'', Firstname:'',Lastname:'',Email:'',Password:'',confirmpassword:'',password:'',email:'',Billing_Address:'',
        Delivery_Address:'',Land_Mark:'',mobile1:'',mobile2:'',CustomerType:'',DeliveryLocationLattitude:'',DeliveryLocationLongitude:'',
        CreateDate:'',modifieddate:'',Status:'',ProfileImage:'',ProfilePic:''
  
      }
      this.handleChange=this.handleChange.bind(this);
    //   this.Savedetails=this.Savedetails.bind(this);
    //   this.logindetails=this.logindetails.bind(this);
    this.getcustomeremail=this.getcustomeremail.bind(this);
    }
    getcustomeremail(e){
      const{email}=this.state;
      e.preventDefault();
      alert(email);
      fetch('http://localhost:64017/api/Customer/getcustmerlst?email='+email,
      {
        method:'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      }
      ).then((res)=>res.json())
      .then((res)=>{
        console.log(res);
        this.setState({
          custdetails:res
        });
       
        // return res.success;
      })
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
            <div className="row vcustomer">
           <div class="col-sm-2"><Adminsidebar/></div>
              <div class="col-sm-4"><div className="col-sm-12 col-md-12 form-group"> 
              <input type="text" placeholder="Email" id="email" name="email" className="form-control" onChange={this.handleChange} value={this.state.email} /> 
             <div className="sbtn">  <button onClick={this.getcustomeremail}>submit</button></div>
                </div>
                
                
                <table className="table">
    <thead>
   
      <tr>
        <th>CustomerName</th>
        <th>CustomerEmail</th>
        <th>LastName</th>
      </tr>
     
    </thead>
    <tbody>
    {
      this.state.custdetails.map((item, index) =>
      (<tr key={index}>
        <td>{item.Firstname}</td>
        <td>{item.Email}</td>
        <td>{item.Lastname}</td>
      </tr>
       ))}
     
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
export default Products;
