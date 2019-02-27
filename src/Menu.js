import React, { Component } from 'react';
import './App.css';
import Sound from 'react-sound';
import sound from './song.mp3';
import hand from './Menu-Hand.gif';
import circle from './Menu-Circle.png';
import button from './Menu-Button.png';


export default class Menu extends Component {
  constructor(props){
    super(props);
    this.state = {
      activePage: 'menu',
    };
  }

  handleButtonClick(e, {name}) {
      this.setState({
        activeItem: name,
      });
    }


  render() {
    return (
      <div className="Menu">
      <Sound
      url={sound}
      playStatus={Sound.status.PLAYING}
      playFromPosition={300 /* in milliseconds */}
      onLoading={this.handleSongLoading}
      onPlaying={this.handleSongPlaying}
      onFinishedPlaying={this.handleSongPlaying}
    />

          <img src={hand} className="Menu-Hand" alt="hand" />
          <img src={circle} className="Menu-Circle" alt="circle" />
        <div className = "Menu-Button-Div">
          <img src= {button} className = "Menu-Button"/>
        </div>
      </div>
    );
  }
}
