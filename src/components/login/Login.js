import React,{Component} from 'react';
import FaceBookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';
import {PostData} from './postdata';
import {Redirect} from 'react-router-dom';
import Header from '../Results/Header';
import './login.css'
class Welcome extends Component{
constructor(){
    super();
    this.state={
        redirect: false,
        datas:[],
        mode:'view',username:'',username1:'',email:'',email1:'',password:'',password1:'',telphone:''
    };
    
    this.handleSave = this.handleSave.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleEdit3 = this.handleEdit3.bind(this);
    this.handleEdit2 = this.handleEdit2.bind(this);
    this.handleEdit1 = this.handleEdit1.bind(this);
    this.onChange = this.onChange.bind(this);
}

onChange(e){
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState(state);
}

  
  handleSave() {
    this.setState({text: this.state.inputText, mode: 'view'});
  }

  handleEdit() {
    this.setState({mode: 'edit'});
  }
  handleEdit3() {
    const {username,username1,email,email1,password1,telphone,password} = this.state;

    this.setState({mode: 'edit1'});
  }
  handleEdit2(){
    var url = document.referrer;
    alert(url);
    var url1 = url.split('://')[1].split('/')[1]
    alert(url1)
    const {username,username1,email,email1,password1,telphone,password} = this.state;
fetch('http://localhost:49716/api/UseAuth/login?username=' + username + '&&password='+password)
.then((res) => res.json())
.then((res) => { // responseData = undefined
localStorage.setItem('UserName',res.UserName);
localStorage.setItem('UserID',res.UserLoginId);
  alert(res);
  this.props.history.push('/'+url1);

});

    }


  handleEdit1(){
const{username,username1,email,email1,password,password1,telphone} = this.state;
fetch('http://localhost:49716/api/UseAuth/register?customerphoneno=' + telphone + '&&customername='+username1+ '&&password='+password1+ '&&email='+email)
.then((result) =>{localStorage.setItem('jwktoken1',result.data);
this.setState({message:'Registration failed'});this.props.history.push("/login")}).catch((error)=>{if(error.responce.status === 401){this.setState({message: "Registration failed"})}});
  }

signup(res,type){
let postData;
if(type === 'facebook' && res.email){
    postData ={
name:res.name,
provider:type,
email:res.email,
provider_id:res.id,
token: res.accessToken,
provider_pic: res.picture.data.url
};
}
if(type === 'google' && res.w3.U3){
    postData ={
        name:res.w3.ig,
        provider:type,
        email:res.w3.U3,
        provider_id:res.El,
        token: res.access_token,
        provider_pic: res.w3.Paa
    };
}

if(postData){
PostData('signup',postData).then((result)=>{
    let responseJson = result;
    sessionStorage.setItem("userData",JSON.stringify(responseJson));
    this.setState({redirect:true});
});
}
else{}
}



renderButton() {
    const {username,username1,email,email1,password1,telphone,password} = this.state;
    if(this.state.mode === 'view') {
      return (
<div>
<div className="row">
<label>Please Login </label></div>
<div className="row">
       <label>username</label> <input type="text" value={username} id="username" name="username" placeholder ="username" onChange={this.onChange}/></div>
       <div className="row">     <label>password</label><input type="text" id="password" value={password} name="password" placeholder="password" onChange={this.onChange}/></div>
       <div className="row">
        <button onClick={this.handleEdit2}>
            login
          </button></div>
          <div className="row">    <a onClick={this.handleEdit}>
            Register
          </a></div>
          <div className="row"> <a onClick={this.handleEdit3}>
            forgot password
          </a>    </div>
          </div>
      );
    } else  if(this.state.mode === 'edit'){
      return (
        <div>
            <div className="row">    <label>Please Register </label>    </div>
            <div className="row">    <label>username</label> <input type="text" value={username1} name= "username1" placeholder="Username" onChange={this.onChange}/>    </div>
            <div className="row">    <label>password</label><input type="text" value={password1}  name= "password1" placeholder="Password" onChange={this.onChange}/>    </div>
            <div className="row">    <label>email ID</label> <input type="email" value={email} name="email" placeholder="Email" onChange={this.onChange}/>    </div>
            <div className="row">   <label>Phone No</label> <input type="tel" value={telphone} name="telphone" placeholder="telphone" onChange={this.onChange}/>    </div>

            <div className="row"> <button onClick={this.handleEdit1}>
            Register
          </button>    </div>
          <div className="row">  <a onClick={this.handleSave}>
            Login
          </a>    </div>
          <div className="row"> <a onClick={this.handleEdit3}>
            forgot password
          </a>    </div>
          </div>
      );
    } else if(this.state.mode === 'edit1'){
return(
<div>
<div className="row">    <label> request for new Password </label>    </div>

<div className="row">    <label>email ID</label> <input type="email" value= {email1} id="email1" name="email1" placeholder="Email" onChange={this.onChange} required />    </div>

<div className="row">  <a onClick={this.handleSave}>
            Login
          </a>    </div>
</div>
);

    }
  }





render(){
if(this.state.redirect || sessionStorage.getItem('userData'))
{
    return(<Redirect to={'/home'}/>)
}
const responseFacebook = (response) => {
console.log('facebook console');
console.log(response);
this.signup(response,'facebook');
}

const responseGoogle = (response) =>{
console.log("google console");
console.log(response);
this.signup(response,'google');
}
var shown = {
    display: this.state.shown ? "block" : "none"
    
};

var hidden = {
    display: this.state.hidden ? "block" : "none"
}
return(
<div>
    <Header/>
    <h2 id = "welcome"> </h2>
    <div className="container">
  <div className="row">
    <div className="col-md-3">
    <div  >
    {this.renderButton()}
  </div>

  <div className="row">
    <div className="col-md-12"><GoogleLogin
clientId="601498937999-b0hf70ivcp5vo9u10gkqqgneirnn6quq.apps.googleusercontent.com"
buttonText="Login with Google"
onSuccess={responseGoogle}
onFailure={responseGoogle}

/></div>
  </div>
  <div className="row">
    <div className="col-md-12"><FaceBookLogin style={{ position: "relative", fontsize: "50px", zindex: "3" }}
    appId="1210420135768170"
    autoLoad={false}
    fields="name,email,picture"
    callback = {responseFacebook}
    /></div>
  </div>
    </div>
    </div>
</div> 





    </div>

);

}

}

export default Welcome;