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
    this.state = {
      activePage: 'menu',
    };
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
      <Sound
      url={sound}
      playStatus={Sound.status.PLAYING}
      playFromPosition={300 /* in milliseconds */}
      onLoading={this.handleSongLoading}
      onPlaying={this.handleSongPlaying}
      onFinishedPlaying={this.handleSongPlaying}
    />
      {component}
      </div>
    );
  }
}

export default App;
