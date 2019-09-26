import React, { Component } from 'react';
import { PropTypes } from 'react';
import './App.css';
import './First.css';
import houses from './First-Houses.png';
import tree from './First-Tree.gif';
import dog from './First-Dog.gif';
import first1 from './First-1.png';
import first1GIF from './First-1.gif';
import first2GIF from './First-2.gif';
import first2 from './First-2.png';
import space from './First-Spacebar.png';
import load from './First-Load.gif';
import clock from './First-Clock.gif';
import crackle from './crackle.mp3';
import alarm from './alarm.mp3';
import loadPic from './First-Load.png';


let loadingTimeout;

export default class First extends Component {
  constructor(props){
    super(props);
    this.state = {
      isPageActive: true,
      showFirst: true,
      showDog: false,
      showFirst1: true,
      showFirst2: false,
      isDogActive: false,
      isText2Active: false,
      textGIF1: false,
      textGIF2: false,
      showSpace: false,
      load: false,
      loadPic: false,
      didSpace: false,
      showAlarm: false,
    };
  }

  componentDidMount() {
      window.addEventListener('load', this.audioSettings);
   }

   audioSettings = () => {
     if (this.state.textGIF1 == true ) {
     let audioCrackle=document.getElementById("audioCrackle");
     audioCrackle.volume=0.01;
   }
   }


  handleButtonClick = (event) => {
    let pageName = "second";
    this.props.switchPageFunction(pageName);
    }

  handleText1Click = (event) => {

    this.setState({

      textGIF1: true,
    });

    setTimeout(() => {
      this.setState({
        showFirst1: false,
      });
    }, 50);

    setTimeout(() => {
      this.setState({
        textGIF1: false,
      });
    }, 1000);

    setTimeout(() => {
      this.setState({
        isDogActive:true,
        showDog: true,
      });
    }, 1000);

    setTimeout(() => {
      this.setState({
        isText2Active: true,
        showFirst2: true,
      });
    }, 3000);
    }

    handleText2Click = (event) => {
      this.setState({

        textGIF2: true,
      });

      setTimeout(() => {
        this.setState({
          showFirst2: false,
        });
      }, 50);

      setTimeout(() => {
        this.setState({
          textGIF2: false,
          showSpace: true,
        });
      }, 1000);
      }


  componentWillMount() {
      document.addEventListener("keydown", this.onKeyPressed.bind(this));
      document.addEventListener("keyup", this.onKeyReleased.bind(this));
   }

   componentWillUnmount() {
      document.removeEventListener("keydown", this.onKeyPressed.bind(this));
      document.addEventListener("keyup", this.onKeyReleased.bind(this));
   }



   onKeyPressed(e) {
     console.log(e.keyCode);
     console.log("the key is pressed");
     this.setState({
       load: true,
       showSpace: false,
     });

     loadingTimeout = setTimeout(() => {
       this.setState({
         load: false,
         loadPic: true,
         didSpace: true,
         showAlarm: true,
       });
     }, 2950);
   }

   onKeyReleased(e) {
     clearTimeout(loadingTimeout);
     if (this.state.didSpace == false) {
       console.log("the key is released");
       this.setState({
         load: false,
         showSpace: true,
       });
     }
   }


   handleSwitchScene = (event) => {
     setTimeout(() => {
       this.setState({
         isPageActive: false,
       });
     }, 2000);

     setTimeout(() => {
       let pageName = "second";
       this.props.switchPageFunction(pageName);
     }, 500);
     }

  render() {
    return (
      <div className = {this.state.isPageActive ? 'fadeIn' : 'fadeOut'}>

      {this.state.textGIF1 ? <audio id = "audioCrackle" src={crackle} controls autoPlay/> : null}
      {this.state.textGIF2 ? <audio id = "audioCrackle" src={crackle} controls autoPlay/> : null}
      {this.state.loadPic ? <audio id = "audioAlarm" src={alarm} controls autoPlay/> : null}

      <div className = {this.state.showFirst ? 'fadeIn' : 'fadeOut'}>
        <img src={houses} className="First-Houses" alt="houses"/>
        <img src={tree} className="First-Tree" alt="tree"/>
      </div>


      <div className = {this.state.showFirst1 ? 'fadeIn' : 'fadeOut'}>
        <img src={first1} className="First1" alt="text1" onClick={this.handleText1Click.bind(this)}/>
      </div>

      {this.state.textGIF1 ? <img src={first1GIF} className="First1GIF"/> : null}
      {this.state.textGIF2 ? <img src={first2GIF} className="First2GIF"/> : null}
      {this.state.showSpace ? <img src={space} className="FirstSpace"/> : null}
      {this.state.load ? <img src={load} className="FirstLoad"/> : null}
      {this.state.loadPic ? <img src={loadPic} className="FirstLoad"/> : null}
      {this.state.showAlarm ? <div>{this.handleSwitchScene()}<img src={clock} className="FirstClock"/></div> : null}

      <div tabIndex="0" onKeyDown={this.onKeyPressed} onKeyUp={this.onKeyReleased}>
      </div>

      {this.state.isDogActive ?
      <div className = {this.state.showDog ? 'fadeIn' : 'fadeOut'}>
        <img src={dog} className="First-Dog" alt="dog"/>
      </div>
      : null}

      {this.state.isText2Active ?
      <div className = {this.state.showFirst2 ? 'fadeIn' : 'fadeOut'}>
        <img src={first2} className="First2" alt="text2"onClick={this.handleText2Click.bind(this)}/>
      </div>
      : null}
      </div>
    );
  }
}
