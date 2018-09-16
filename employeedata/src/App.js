import React, { Component } from 'react';
import './App.css';
import sampleData from './sample-data.json';
class App extends Component {

  render() {
    console.log(sampleData);

    return (
      <div className="App">
      <header>
      <h2>{sampleData.companyInfo.companyName}</h2>
      <h4>{sampleData.companyInfo.companyMotto}</h4>
      </header>
      <p>
      <h3 style = {{padding: 10,fontSize: 30}}> Employees Data </h3>
      <div className="gridContainer">

        {sampleData.employees.map((data,i) => <div className="grid-item">
       <p><span>{data.firstName} {data.lastName} </span><span><img src={data.avatar} alt="employeeImg"/></span>

                     <p><b>Age:</b> {data.age} </p>
                     <p><b>JobDesc:</b> {data.jobTitle}</p>
                     <p>{data.bio}</p>

</p>
                        </div> )}
</div>
</p>
      </div>
    );
  }
}

export default App;
