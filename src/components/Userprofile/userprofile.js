
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
        Firstname:'',Lastname:'',Email:'',Password:'',confirmpassword:'',email:'',password:'',
  
      }
      this.state.Email=localStorage.getItem('Email');
      this.handleChange=this.handleChange.bind(this);
    //   this.Savedetails=this.Savedetails.bind(this);
    //   this.logindetails=this.logindetails.bind(this);
    }
    // getdetails(email){
    //    fetch('http://localhost:64017/api/Customer/getcustmerlst?email',+email).then((res)=>res.json)
    //    .then((res)=>{
    //      this.setState({

    //      })
    //    })
    // }
    componentWillMount()
    {
      this.getdetails();
    }
    getdetails()
    {
      const{Firstname,Lastname,Email,Password}=this.state

      if(this.state.Email!=null && this.state.Email!=" ")
      {
        
        alert(this.state.Email);
        fetch('http://localhost:64017/api/Customer/getcustmerlst?email='+ this.state.Email,{
          method:'POST',
          body:JSON.stringify({Firstname:Firstname,Lastname:Lastname,Email:Email,Password:Password}),
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
        }).then((res)=>res.json()).then((res)=>{
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
                  <input type="text" id="Firstname" name="Firstname" placeholder="First Name" className="form-control" onChange={this.handleChange} value={this.state.FirstName}  />
                </div>
                <div className="col-sm-12 col-md-12 form-group">
                  <input type="text" id="Lastname" name="Lastname" placeholder="Last Name" className="form-control" onChange={this.handleChange} value={this.state.LastName} />
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
export default Userdetails;
