import React, { Component } from 'react';
import './vresults.css';
import "font-awesome/css/font-awesome.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";


class VSidebar extends Component {
  constructor(props) {
    super(props);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
  }
  render() {
    return (
      <div>
        <h6>Filter Service Type</h6>
       
        <form>
          <label>
            <input name="Hotel" type="checkbox" onChange={this.handleInputChange} />
            Hotel
          </label>
        </form>
        <form>
          <label>
            <input name="isGoing" type="checkbox" onChange={this.handleInputChange} />
            Banquet Hall
          </label>
        </form>
        <form>
          <label>
            <input name="isGoing" type="checkbox" onChange={this.handleInputChange} />
            Resort
          </label>
        </form>
        <form>
          <label>
            <input name="isGoing" type="checkbox" onChange={this.handleInputChange} />
            Convention Hall
          </label>
        </form>
        <form>
          <label>
            <input name="isGoing" type="checkbox" onChange={this.handleInputChange} />
            Function Hall
          </label>
        </form>
        <form>
          <label>
            <input name="isGoing" type="checkbox" onChange={this.handleInputChange} />
            Decoration
          </label>
        </form>
        <form>
          <label>
            <input name="isGoing" type="checkbox" onChange={this.handleInputChange} />
            Photography
          </label>
        </form>
        <form>
          <label>
            <input name="isGoing" type="checkbox" onChange={this.handleInputChange} />
            Catering
          </label>
        </form>
        <hr></hr>
        <h6>Budget</h6>
        <div className="my-5">
          {/* <label htmlFor="customRange1">Example range</label> */}
          <input type="range" className="custom-range" id="customRange1" />
        </div>
        <h6>Food Type</h6>
        <form>
          <label>
            <input name="isGoing" type="checkbox" onChange={this.handleInputChange} />
            Vegetarian
          </label>
        </form>
        <form>
          <label>
            <input name="isGoing" type="checkbox" onChange={this.handleInputChange} />
            Non-Vegetarian        </label>
        </form>
        <hr></hr>
        <h6> Amenities</h6>
        <form>
          <label>
            <input name="isGoing" type="checkbox" onChange={this.handleInputChange} />
            AC
          </label>
        </form>
        <form>
          <input name="isGoing" type="checkbox" onChange={this.handleInputChange} />
          <label> WIFI </label>
        </form>

        <form>
          <label>
            <input name="isGoing" type="checkbox" onChange={this.handleInputChange} />
            TV
          </label>
        </form>
        <form>
          <label>
            <input name="isGoing" type="checkbox" onChange={this.handleInputChange} />
            Parking
          </label>
        </form>

      </div>
    );
  }
}

export default VSidebar;