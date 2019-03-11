import React, { Component } from 'react';
import { PropTypes } from 'react';
import './App.css';
import './Ninth.css';
import background from './Ninth-Background.png';

class Ninth extends Component {
  constructor(props){
    super(props);
    this.myRef = React.createRef();
    this.state = {
      isPageActive: true,
    };
  }

  componentWillMount() {
    this.handleSwitchScene();
   }

   handleSwitchScene = (event) => {
     setTimeout(() => {
       let pageName = "menu";
       this.props.switchPageFunction(pageName);
     }, 500);
     }




  render() {

    return (
      <div className = {this.state.isPageActive ? 'fadeIn' : 'fadeOut'}>
      <img src={background} className="Ninth-Background"/>
      </div>
    );
  }
}



export default Ninth;
