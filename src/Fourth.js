import React, { Component } from 'react';
import { PropTypes } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.myRef = React.createRef();
    this.state = {
      isPageActive: true,
    };
  }






  render() {

    return (
      <div className="App">

      <h1>this is the fourth scene. </h1>
      </div>
    );
  }
}



export default App;
