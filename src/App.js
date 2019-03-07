import React, { Component } from 'react';
import { PropTypes } from 'react';
import Menu from './Menu.js';
import First from './First.js';
import Second from './Second.js';
import Third from './Third.js';
import Sound from 'react-sound';
import sound from './song.mp3';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.myRef = React.createRef();
    this.state = {
      activePage: 'second',
    };
  }

  // <Sound
  // url={sound}
  // playStatus={Sound.status.PLAYING}
  // playFromPosition={300 /* in milliseconds */}
  // onLoading={this.handleSongLoading}
  // onPlaying={this.handleSongPlaying}
  // onFinishedPlaying={this.handleReplay}
  // />



  // handleAudio = () => {
  //   console.log("it clicked.");
  //   let myAudio = new Audio('./song.mp3');
  //   myAudio.addEventListener('ended', function() {
  //   this.currentTime = 0;
  //   this.play();
  //   }, false);
  //   myAudio.play();
  // }



componentDidMount() {
    window.addEventListener('load', this.audioSettings);
 }

 audioSettings = () => {
   let backgroundAudio=document.getElementById("myaudio");
   backgroundAudio.volume=0.06;
   document.getElementById("myaudio").loop = true;
 }

  switchPage = (pageName) => {
    console.log(pageName);
    setTimeout(() => {
      this.setState({
        activePage: pageName,
      });
    }, 3000);
  }

  render() {
    let component = null;
      switch (this.state.activePage) {
        case 'menu':
          component = <Menu switchPageFunction = {this.switchPage}/>;
          break;
        case 'first':
          component = <First switchPageFunction = {this.switchPage}/>;
          break;
        case 'second':
          component = <Second switchPageFunction = {this.switchPage}/>;
          break;
        case 'third':
          component = <Third switchPageFunction = {this.switchPage}/>;
          break;
      }
    return (
      <div className="App">

      <audio id = "myaudio" src={sound} controls autoPlay/>

      {component}
      </div>
    );
  }
}



export default App;
