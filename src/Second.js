import React, { Component } from 'react';
import { PropTypes } from 'react';
import './App.css';




export default class Second extends Component {
  constructor(props){
    super(props);
    this.state = {
    };
  }

  handleButtonClick = (event) => {
    let pageName = "third";
    this.props.switchPageFunction(pageName);
    }


  render() {
    return (
      <div className="Second">
  <button onClick = {this.handleButtonClick.bind(this)}>This is the second scene.</button>
      </div>
    );
  }
}
