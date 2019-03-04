import React, { Component } from 'react';
import { PropTypes } from 'react';
import './Menu.css';
import './App.css';

import hand from './Menu-Hand.gif';
import circle from './Menu-Circle.png';
import button from './Menu-Button.gif';


export default class Menu extends Component {
  constructor(props){
    super(props);
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.state = {
      showMenu: true,
      showButtonHand: true,
    };
  }

  handleButtonClick = (event) => {
    this.setState({
      showButtonHand: false,
    });
    setTimeout(() => {
      this.setState({
        showMenu: false,
      });
    }, 1500);
    let pageName = "first";
    this.props.switchPageFunction(pageName);
    }


  render() {
    return (
      <div>
        <div className = {this.state.showMenu ? 'fadeIn' : 'fadeOut'}>
          <img src={circle} className="Menu-Circle" alt="circle" />
        </div>
        <div className = {this.state.showButtonHand ? 'fadeIn' : 'fadeOut'}>
        <img src={hand} className="Menu-Hand" alt="hand"/>
        <img src={button} className="Menu-Button" onClick={this.handleButtonClick.bind(this)}/>
        </div>
      </div>
    );
  }
}
