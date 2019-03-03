import React, { Component } from 'react';
import { PropTypes } from 'react';
import './App.css';




export default class Third extends Component {
  constructor(props){
    super(props);
    this.state = {
    };
  }

  handleButtonClick = (event) => {
    let pageName = "fourth";
    this.props.switchPageFunction(pageName);
    }


  render() {
    return (
      <div className="Third">
  <button onClick = {this.handleButtonClick.bind(this)}>This is the third scene.</button>
      </div>
    );
  }
}
