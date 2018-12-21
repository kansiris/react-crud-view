import React, { Component } from 'react';
import './App.css';
import Routes from './routes';
class App extends Component {
  render() {
    return (
      <div>
        {/* <Header />
        <Content /> */}
        <Routes/>
      </div>
    );
  }
}
export default App;
