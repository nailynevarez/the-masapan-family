import React, { Component } from 'react';
import { PropTypes } from 'react';
import './App.css';
import './Second.css';
import hallway from './Second-Background.gif';
import legs from './Second-Legs.gif';
import leg1 from './Second-Leg-1.png';
import leg2 from './Second-Leg-2.png';
import leg3 from './Second-Leg-3.png';
import text1 from './Second-Text-1.png';
import text2 from './Second-Text-2.png';
import text3 from './Second-Text-3.png';
import door1 from './Second-Door1.png';
import door2 from './Second-Door2.png';
import door3 from './Second-Door3.png';
import door4 from './Second-Door4.png';
import door5 from './Second-Door5.png';
import door6 from './Second-Door6.png';
import door7 from './Second-Door7.png';
import door8 from './Second-Door8.png';
import door9 from './Second-Door9.png';
import door10 from './Second-Door10.png';
import doorClose from './doorClose.mp3';




export default class Second extends Component {
  constructor(props){
    super(props);
    this.state = {
      isPageActive: true,
      isSliderActive: false,
      sliderValue: 1,
      showText1: true,
      showText2: false,
      showText3: false,
      door1: true,
      door2: false,
      door3: false,
      door4: false,
      door5: false,
      door6: false,
      door7: false,
      door8: false,
      door9: false,
      door10: false,
    };
  }

  handleSwitchScene = (event) => {
    this.setState({
      isPageActive: false,
    });
    let pageName = "third";
    this.props.switchPageFunction(pageName);
    }

  changeSliderValue = (event) => {
      this.setState({
        sliderValue: event.target.value
      });
      console.log(this.state.sliderValue);

      if (this.state.sliderValue == 1) {
        this.setState({
          door1: true,

        });
        setTimeout(() => {
          this.setState({
            door2: false,
          });
        }, 50);
      }

      if (this.state.sliderValue == 2) {
        this.setState({

          door2: true,

        });

        setTimeout(() => {
          this.setState({
            door1: false,
            door3: false,
          });
        }, 50);
      }

      if (this.state.sliderValue == 3) {
        this.setState({

          door3: true,

        });

        setTimeout(() => {
          this.setState({
            door2: false,
            door4: false,
          });
        }, 50);
      }

      if (this.state.sliderValue == 4) {
        this.setState({
          door4: true,
        });

        setTimeout(() => {
          this.setState({
            door3: false,
            door5: false,
          });
        }, 50);
      }

      if (this.state.sliderValue == 5) {
        this.setState({

          door5: true,

        });
        setTimeout(() => {
          this.setState({
            door4: false,
            door6: false,
          });
        }, 50);

      }

      if (this.state.sliderValue == 6) {
        this.setState({

          door6: true,

        });

        setTimeout(() => {
          this.setState({
            door5: false,
            door7: false,
          });
        }, 50);
      }

      if (this.state.sliderValue == 7) {
        this.setState({

          door7: true,

        });

        setTimeout(() => {
          this.setState({
            door6: false,
            door8: false,
          });
        }, 50);
      }

      if (this.state.sliderValue == 8) {
        this.setState({

          door8: true,

        });

        setTimeout(() => {
          this.setState({
            door7: false,
            door9: false,
          });
        }, 50);
      }

      if (this.state.sliderValue == 9) {
        this.setState({

          door9: true,

        });

        setTimeout(() => {
          this.setState({
            door8: false,
            door10: false,
            isSliderActive: false,
          });
        }, 50);
        setTimeout(() => {
          this.handleSwitchScene();
        }, 2000);
      }

      if (this.state.sliderValue == 10) {
        this.setState({
          door10: true,
        });
        setTimeout(() => {
          this.setState({
            door9: false,

          });
        }, 50);

      }

  }



  handleText1Click = () => {
    this.setState({
      showText1: false,
      showText2: true,
    });
  }

  handleText2Click = () => {
    this.setState({
      showText2: false,
      showText3: true,
    });
  }

  handleText3Click = () => {
    this.setState({
      showText3: false,
      isSliderActive: true,
    });
  }


  render() {
    return (
      <div className = {this.state.isPageActive ? 'fadeIn' : 'fadeOut'}>
        <img src={hallway} className="Second-Hallway" alt="hallway"/>
        {this.state.door10 ? <img src={door1} className="Doors"/> : null}
        {this.state.door1 ? <img src={door1} className="Doors"/> : null}
        {this.state.door2 ? <img src={door2} className="Doors"/> : null}
        {this.state.door3 ? <img src={door3} className="Doors"/> : null}
        {this.state.door4 ? <img src={door4} className="Doors"/> : null}
        {this.state.door5 ? <img src={door5} className="Doors"/> : null}
        {this.state.door6 ? <img src={door6} className="Doors"/> : null}
        {this.state.door7 ? <img src={door7} className="Doors"/> : null}
        {this.state.door8 ? <img src={door8} className="Doors"/> : null}
        {this.state.door9 ? <img src={door9} className="Doors"/> : null}



        <img src={leg1} className="Second-Leg-1" alt="leg1"/>
        <img src={leg2} className="Second-Leg-2" alt="leg2"/>
        <img src={leg3} className="Second-Leg-3" alt="leg3"/>

        <div className = {this.state.showText1 ? 'fadeIn' : 'fadeOut'}>
        <img src={text1} className="Second-Text-1" alt="text1" onClick={this.handleText1Click.bind(this)}/>
        </div>

        {this.state.showText2 ?
        <div className = {this.state.showText2 ? 'fadeIn' : 'fadeOut'}>
        <img src={text2} className="Second-Text-2" alt="text2" onClick={this.handleText2Click.bind(this)}/>
        </div>
        : null}

        {this.state.showText3 ?
        <div className = {this.state.showText3 ? 'fadeIn' : 'fadeOut'}>
        <img src={text3} className="Second-Text-3" alt="text3" onClick={this.handleText3Click.bind(this)}/>
        </div>
        : null}

        <div className = {this.state.isSliderActive ? 'fadeIn' : 'fadeOut'}>
        {this.state.isSliderActive ? <input type="range" min="1" max="10" value={this.state.sliderValue} className="slider" id="myRange" onChange = {this.changeSliderValue.bind(this)}/> : null}
        </div>




      </div>
    );
  }
}
