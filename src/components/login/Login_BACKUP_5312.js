import React, { Component } from 'react';
import './login.css';
class Login extends Component {
  render() {
    return (
      <div className="bg">
      <h1 className="heading">Sign In/Register</h1> 
      <div className="container" style={{backgroundColor:"white"}}>
      <section>
        <div className="row loginpage">
          <div className="col-sm-6 col-md-6">
            <form>
              <h2 className="txt">Sign In</h2>
              <div className="row">
                <div className="col-sm-12 col-md-12 form-group">
                  <input type="text" placeholder="Email" id="Email" name="Email" className="form-control" />
                </div>
                <div className="col-sm-12 col-md-12 form-group">
                  <input type="text" placeholder="Password" id="Password" name="Password" className="form-control" />
                </div>
                <div className="col-sm-12  col-md-12 form-group">
                  <button className="btntxt">
                    Forgot your password?
                  </button>
                  <button className="text">LOG IN <i className="fa fa-lock" aria-hidden="true"></i></button>
                </div>
              </div>
            </form>
          </div>
          <div className="col-sm-6 col-md-6">
            <form>
              <h2 className="txt">Register a New Account</h2>
              <div className="row">
                <div className="col-sm-12 col-md-12 form-group">
                  <input type="text" id="First Name" name="First Name" placeholder="First Name" className="form-control" />
                </div>
                <div className="col-sm-12 col-md-12 form-group">
                  <input type="text" id="Last Name" name="last Name" placeholder="Last Name" className="form-control" />
                </div>
                <div className="col-sm-12 col-md-12 form-group">
                  <input type="text" id="Email" name="Email" placeholder="Email" className="form-control" />
                </div>
                <div className="col-sm-12 col-md-12 form-group">
                  <input type="password" id="Password" name="Password" placeholder="Password" className="form-control" />
                </div>
                <div className="col-sm-12 col-md-12 form-group">
                  <input type="password" id="Confirm Password" name="Confirm Password" placeholder="Confirm Password" className="form-control" />
                </div>
                <div className="col-sm-12 col-md-12 form-group">
                  <input type="checkbox" /> &nbsp; Recieve promotional emails
                </div>
                <div className="col-sm-12 col-md-12 form-group">
                  <button className="submit">
                    Submit &nbsp;<i className="fa fa-arrow-right" aria-hidden="true"></i>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
      </div>
      <h1>sadadffdsf</h1>
      </div>
    );
  }
<<<<<<< HEAD





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
    />
    </div>
  </div>
    </div>
    </div>
</div> 





    </div>

);

}

=======
>>>>>>> 4dbae34f311a98b260147245f9866a86b5b18ab2
}
export default Login;