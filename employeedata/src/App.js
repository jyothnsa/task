import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import sampleData from './sample-data.json';
class App extends Component {
constructor(props){
  super(props);
}
  render() {
    console.log(sampleData);

    return (
      <div>
      <h1>{sampleData.companyInfo.companyName}  </h1>
      </div>
    );
  }
}

export default App;
