import React, { Component } from 'react';
import { PropTypes } from 'react';
import './App.css';
import './Third.css';
import background from './Third-Background.png';
import bigBox from './Third-Box.gif';
import carton1 from './Third-Carton1.gif';
import carton2 from './Third-Carton2.gif';
import flour1 from './Third-Flour1.gif';
import flour2 from './Third-Flour2.gif';
import peanuts from './Third-Peanuts.gif';
import smallBox from './Third-SmallBox.gif';
import Draggable from 'react-draggable';




export default class Third extends Component {

  constructor(props){
    super(props);
    this.state = {
      isPageActive: true,
      isObjectsActive: true,
      activeDrags: 0,
      peanutPosition: {
        x: 0, y: 0
      },
      bigBoxPosition: {
        x: 0, y: 0
      },
      smallBoxPosition: {
        x: 0, y: 0
      },
      flour1Position: {
        x: 0, y: 0
      },
      flour2Position: {
        x: 0, y: 0
      },
      carton1Position: {
        x: 0, y: 0
      },
      carton2Position: {
        x: 0, y: 0
      },
      peanutTable: false,
      smallBoxTable: false,
      bigBoxTable: false,
      flour1Table: false,
      flour2Table: false,
      carton1: false,
      carton2: false,

    };
  }

  handlePeanutDrag = (e, ui) => {
    const {x, y} = this.state.peanutPosition;
    this.setState({
      peanutPosition: {
        x: x + ui.deltaX,
        y: y + ui.deltaY,
      }
    });
    this.checkPeanut();
  }

  checkPeanut = () => {
    if (
      this.state.peanutPosition.x.toFixed(0) > -40 && this.state.peanutPosition.x.toFixed(0) < 30 &&
      this.state.peanutPosition.x.toFixed(0) > -100 && this.state.peanutPosition.x.toFixed(0) < 100 &&
      this.state.peanutPosition.y.toFixed(0) > -400 && this.state.peanutPosition.y.toFixed(0) < -212
        ) {
      this.setState({
        peanutTable: true,
      });
    }

    else {
      this.setState({
        peanutTable: false,
      });
    }
    console.log(this.state.peanutTable);
    console.log(this.state.peanutPosition.x.toFixed(0));
    console.log(this.state.peanutPosition.y.toFixed(0));
  }

  onStart = () => {
    this.setState({activeDrags: ++this.state.activeDrags});
  }

  onStop = () => {
    this.setState({activeDrags: --this.state.activeDrags});
  }

  handleButtonClick = (event) => {
    let pageName = "fourth";
    this.props.switchPageFunction(pageName);
    }

    eventLogger = (e: MouseEvent, data: Object) => {
      console.log('Event: ', e);
      console.log('Data: ', data);
    };

  render() {
    const dragHandlers = {onStart: this.onStart.bind(this), onStop: this.onStop.bind(this)};
    return (
      <div className = {this.state.isPageActive ? 'fadeIn' : 'fadeOut'}>
        <img src={background} className="Third-Background" alt="background"/>

      <div className = {this.state.isObjectsActive ? 'fadeIn' : 'fadeOut'}>
        <Draggable onDrag={this.handlePeanutDrag} {...dragHandlers}>
          <img src={peanuts} className="Third-Peanuts"/>
        </Draggable>
        <Draggable {...dragHandlers}>
          <img src={bigBox} className="Third-BigBox"/>
        </Draggable>
        <Draggable {...dragHandlers}>
          <img src={smallBox} className="Third-SmallBox"/>
        </Draggable>
        <Draggable {...dragHandlers}>
          <img src={flour1} className="Third-Flour1"/>
        </Draggable>
        <Draggable {...dragHandlers}>
          <img src={flour2} className="Third-Flour2"/>
        </Draggable>
        <Draggable {...dragHandlers}>
          <img src={carton1} className="Third-Carton1"/>
        </Draggable>
        <Draggable {...dragHandlers}>
          <img src={carton2} className="Third-Carton2"/>
        </Draggable>
        </div>

      </div>

    );
  }
}
