import React, { Component } from 'react';
import { PropTypes } from 'react';
import './App.css';
import './First.css';
import houses from './First-Houses.png';
import tree from './First-Tree.gif';
import dog from './First-Dog.gif';
import first1 from './First-1.png';
import first2 from './First-2.png';




export default class First extends Component {
  constructor(props){
    super(props);
    this.state = {
      showFirst: true,
      showDog: false,
      showFirst1: true,
      showFirst2: false,
      isActive: false,
    };
  }

  handleButtonClick = (event) => {
    let pageName = "second";
    this.props.switchPageFunction(pageName);
    }

  handleText1Click = (event) => {
    this.setState({
      showFirst1: false,
    });
    setTimeout(() => {
      this.setState({
        showFirst2: true,
      });
    }, 1000);
    }


  render() {
    return (
      <div>
      <div className = {this.state.showFirst ? 'fadeIn' : 'fadeOut'}>
        <img src={houses} className="First-Houses" alt="houses"/>
        <img src={tree} className="First-Tree" alt="tree"/>
      </div>
      <div className = {this.state.showDog ? 'fadeIn' : 'fadeOut'}>
        <img src={dog} className="First-Dog" alt="dog"/>
      </div>

      <div className = {this.state.showFirst1 ? 'fadeIn' : 'fadeOut'}>
        <img src={first1} className="First1" alt="text" onClick={this.handleText1Click.bind(this)}/>
      </div>
      <div className = {this.state.showFirst2 ? 'fadeIn' : 'fadeOut'}>
        <img src={first2} className="First2" alt="text"/>
      </div>
      </div>
    );
  }
}
