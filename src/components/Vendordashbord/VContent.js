import React, { Component } from 'react';
import './vresults.css';
import VSidebar from './VSidebar';
import VResults from './VResults';
import VHeader from './VHeader';
import "font-awesome/css/font-awesome.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import { MDBCol, MDBContainer, MDBRow } from 'mdbreact';

class VContent extends React.Component {
  render() {
    
    return (
      <div>
        <VHeader/>
        <MDBContainer style={{ marginTop: "20px" }}>
          <MDBRow style={{ marginLeft: "-82px", marginRight: "-71px" }}>
            <MDBCol md="3" className="block-example border" style={{ padding: "20px 20px 15px", fontsize: "13px", fontweight: "500" }}>
              <div>
                <VSidebar />
              </div>
            </MDBCol>
            <MDBCol md="9" className="block-example border ">
              <VResults />
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    );
  }
}
export default VContent;