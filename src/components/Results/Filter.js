import React, { Component } from 'react';
//import logo from './logo.svg';
import './results.css';
import "font-awesome/css/font-awesome.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
// this is kansiris

class Filter extends Component {
    constructor(props) {
      super(props);
      this.state = {
        isGoing: true,
        numberOfGuests: 2
      };
  
      this.handleInputChange = this.handleInputChange.bind(this);
    }
  
    handleInputChange(event) {
      const target = event.target;
      const value = target.type === 'checkbox' ? target.checked : target.value;
      const name = target.name;
  
      this.setState({
        [name]: value
      });
    }
    render() {
      return (
        <div>
          <div>Filter
  </div>
  <h6>Service Type</h6>
   <form>
          <label> 
          <input name="Hotel"      type="checkbox"      checked={this.state.isGoing}   onChange={this.handleInputChange} />
    Hotel
          </label>
        </form>
        <form>
          <label>
          <input name="isGoing"  type="checkbox" checked={this.state.isGoing} onChange={this.handleInputChange} />
         Banquet Hall
          </label>
        </form>
        <form>
          <label>
          <input name="isGoing"  type="checkbox" checked={this.state.isGoing} onChange={this.handleInputChange} />
         Resort
          </label>
        </form>
        <form>
          <label>
          <input name="isGoing"  type="checkbox" checked={this.state.isGoing} onChange={this.handleInputChange} />
         Convention Hall
          </label>
        </form>
        <form>
          <label>
          <input name="isGoing"  type="checkbox" checked={this.state.isGoing} onChange={this.handleInputChange} />
         Function Hall
          </label>
        </form>
        <form>
          <label>
          <input name="isGoing"  type="checkbox" checked={this.state.isGoing} onChange={this.handleInputChange} />
         Decoration
          </label>
        </form>
        <form>
          <label>
          <input name="isGoing"  type="checkbox" checked={this.state.isGoing} onChange={this.handleInputChange} />
        Photography
          </label>
        </form>
        <form>
          <label>
          <input name="isGoing"  type="checkbox" checked={this.state.isGoing} onChange={this.handleInputChange} />
         Catering
          </label>
        </form>
        <hr></hr>
        <h6>Budget</h6>
        <div className="my-5">
        <label htmlFor="customRange1">Example range</label>
        <input type="range" className="custom-range" id="customRange1" />
      </div>
      <h6>Food Type</h6>
        <form>
          <label>
          <input name="isGoing"  type="checkbox" checked={this.state.isGoing} onChange={this.handleInputChange} />
         Vegetarian
          </label>
        </form>
        <form>
          <label>
          <input name="isGoing"  type="checkbox" checked={this.state.isGoing} onChange={this.handleInputChange} />
         Non-Vegetarian        </label>
        </form>
        <hr></hr>
        <h6> Aminuties</h6>
        <form>
          <label>
          <input name="isGoing"  type="checkbox" checked={this.state.isGoing} onChange={this.handleInputChange} />
         AC
          </label>
        </form>
        <form>
          <label>
          <input name="isGoing"  type="checkbox" checked={this.state.isGoing} onChange={this.handleInputChange} />
         WIFI
          </label>
        </form>
  
    <form>
          <label>
          <input name="isGoing"  type="checkbox" checked={this.state.isGoing} onChange={this.handleInputChange} />
         TV
          </label>
        </form>
        <form>
          <label>
          <input name="isGoing"  type="checkbox" checked={this.state.isGoing} onChange={this.handleInputChange} />
         Parking
          </label>
        </form>
      
     </div>
      );
    }
  }

  export default Filter;