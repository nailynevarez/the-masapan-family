import React, { Component } from 'react';
import { PropTypes } from 'react';
import './App.css';


class Sixth extends Component {
  constructor(props){
    super(props);
    this.state = {
      isPageActive: true,
    };
  }



  render() {

    return (
      <div className = {this.state.isPageActive ? 'fadeIn' : 'fadeOut'}>
        <h1>this is scene six</h1>
      </div>
    );
  }
}




export default Sixth;
