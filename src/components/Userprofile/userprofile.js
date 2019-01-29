
import React,{Component} from 'react';
import Header from '../Results/Header';
import './userprofile.css';
// import './products.css';
import logo from '../../images/logo.jpg';
import Basmati from '../../images/Basmati.jpg';
import matta from '../../images/matta.jpg';
import Ponni from '../../images/Ponni.jpg';
import Rice from '../../images/Rice.jpg';
import Usersidebar from '../Usersidebar/Usersidebar';
import Productlist1 from '../Vproducts/Vproductlist'
class Userdetails extends Component{
    constructor(props)
    {
      super(props);
      this.state={
        // Firstname:'',Lastname:'',EmailId:'',Password:'',confirmpassword:'',email:'',password:'',Email:''
        EmailId:'', id: '', CustomerId: '', Firstname: '', Lastname: '', Billing_Address: '', Delivery_Address: '', Land_Mark: '', mobile1: '',
        mobile2: '', CustomerType: '', DeliveryLocationLattitude: '', DeliveryLocationLongitude: '', CreateDate: '', modifieddate: '', Password: '', Email: '', OTP: '', Status: '', ProfileImage: '', ProfilePic: '',
        City:'',State:'',Country:'',Zipecode:'',email:'',password:''
      }
      this.state.EmailId=localStorage.getItem('Email');
      this.handleChange=this.handleChange.bind(this);
      this.Updatedetails=this.Updatedetails.bind(this);
    //   this.Savedetails=this.Savedetails.bind(this);
    //   this.logindetails=this.logindetails.bind(this);
    }
   
    componentWillMount()
    {
      this.getdetails();
    }
    getdetails()
    {
      if(this.state.EmailId!=null && this.state.EmailId!=" ")
      {
        const{Firstname,Lastname,Email,Password}=this.state;
        alert(this.state.EmailId);
        var mail=this.state.EmailId
        alert(mail);
        fetch('http://localhost:64017/api/Customer/getcustmer?email='+mail,{
          method:'GET',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
        }).then((res)=>res.json()).then((res)=>{
         alert(res);
          this.setState({Firstname:res.Firstname,Lastname:res.Lastname,Email:res.Email,Password:res.Password
          });
          alert('success')
          return res.success;
        }).catch((error) => {
          console.error(error);
          alert('failed');
        });
      }
    }
    Updatedetails(e) {
      e.preventDefault();
      const {id,CustomerId,Firstname,Lastname,Billing_Address,Delivery_Address,Land_Mark,mobile1,mobile2,
        CustomerType, DeliveryLocationLattitude, DeliveryLocationLongitude, CreateDate, modifieddate, Password, Email, OTP, Status, ProfileImage, ProfilePic,
        City,State,Country,Zipecode } = this.state;
      fetch('http://localhost:64017/api/Customer/updatecustomer?id='+id, {
        method: 'POST',
        body: JSON.stringify({
          id: id, CustomerId: CustomerId, Firstname: Firstname, Lastname: Lastname, Billing_Address: Billing_Address, Delivery_Address: Delivery_Address,
          Land_Mark: Land_Mark, mobile1: mobile1, mobile2: mobile2, CustomerType: CustomerType, DeliveryLocationLattitude: DeliveryLocationLattitude,
          DeliveryLocationLongitude: DeliveryLocationLongitude, CreateDate: CreateDate, modifieddate: modifieddate, Password: Password, Email: Email, OTP: OTP, Status: Status,
          ProfileImage: ProfileImage, ProfilePic: ProfilePic,City:City,State:State,Country:Country,Zipecode:Zipecode
        }),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      }).then((res) => res.json())
        .then((res) => {
          window.location.reload();
          this.getdetails();
          this.setState({
            id: '', CustomerId: '', Firstname: '', Lastname: '', Billing_Address: '', Delivery_Address: '', Land_Mark: '', mobile1: '',
            mobile2: '', CustomerType: '', DeliveryLocationLattitude: '', DeliveryLocationLongitude: '', CreateDate: '', modifieddate: '', Password: '', Email: '', OTP: '', Status: '', ProfileImage: '', ProfilePic: '',
            City:'',State:'',Country:'',Zipecode:''
          });
          alert('sucess')
          return res.success;
        })
        .catch((error) => {
          console.error(error);
          alert('failed');
        });
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
            <div className="row user">
             <div className="col-sm-2"><Usersidebar/></div>
              <div className="col-sm-4"> <form>
              <h2 className="txt">User Details</h2>
              <div className="row">
                <div className="col-sm-12 col-md-12 form-group">
                  <input type="text" id="Firstname" name="Firstname" placeholder="First Name" className="form-control" onChange={this.handleChange} value={this.state.Firstname}  />
                </div>
                <div className="col-sm-12 col-md-12 form-group">
                  <input type="text" id="Lastname" name="Lastname" placeholder="Last Name" className="form-control" onChange={this.handleChange} value={this.state.Lastname} />
                </div>
                <div className="col-sm-12 col-md-12 form-group">
                  <input type="text" id="Email" name="Email" placeholder="Email" className="form-control" onChange={this.handleChange} value={this.state.Email} readOnly />
                </div>
                <div className="col-sm-12 col-md-12 form-group">
                  <input type="password" id="Password" name="Password" placeholder="Password" className="form-control" onChange={this.handleChange} value={this.state.Password} />
                </div>
               
                <div className="col-sm-12 col-md-12 form-group">
                  {/* <input type="checkbox" /> &nbsp; Recieve promotional emails */}
                </div>
                <div className="col-sm-12 col-md-12 form-group">
                  <button className="submit" onClick={this.Updatedetails}>
                    Update &nbsp;<i className="fa fa-arrow-right" aria-hidden="true"></i>
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
export default Userdetails;
