import React from 'react';
import './dropdown.css';

class Logindropdown extends React.Component{
constructor(){
super();
this.state = {displayMenu:false,};
this.showDropdownMenu = this.showDropdownMenu.bind(this);
this.hideDropdownMenu = this.hideDropdownMenu.bind(this);
};
showDropdownMenu(event){
event.preventDefault();
this.setState({displayMenu:true},() => {
    document.addEventListener('click',this.hideDropdownMenu);
});
}
hideDropdownMenu(){
    this.setState({displayMenu:false},() => {
        document.removeEventListener('click',this.hideDropdownMenu);
    });
}

render(){
return(
    <div >
         <section class="navigation">
  <div class="nav-container">
    <div class="brand">
      <a href="#!">Logo</a>
    </div>
    <nav>
      <div class="nav-mobile"><a id="nav-toggle" href="#!"><span></span></a></div>
      <ul class="nav-list">
        <li>
          <a href="#!">Home</a>
        </li>
        <li>
          <a href="#!">About</a>
        </li>
        <li>
          <a href="#!">Services</a>
          <ul class="nav-dropdown">
            <li>
              <a href="#!">Web Design</a>
            </li>
            <li>
              <a href="#!">Web Development</a>
            </li>
            <li>
              <a href="#!">Graphic Design</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="#!">Pricing</a>
        </li>
        <li>
          <a href="#!">Portfolio</a>
          <ul class="nav-dropdown">
            <li>
              <a href="#!">Web Design</a>
            </li>
            <li>
              <a href="#!">Web Development</a>
            </li>
            <li>
              <a href="#!">Graphic Design</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="#!">Contact</a>
        </li>
      </ul>
    </nav>
  </div>
</section>
       </div>

    );


}

}

export default Logindropdown;