import React, { Component } from 'react';
import { PropTypes } from 'react';
import './App.css';
import './Eighth.css';
import background from './Eighth-Background.gif';
import backgroundColor from './Eighth-BackgroundColor.png';
import backgroundStill from './Eighth-BackgroundStill.png';
import text1 from './Eighth-Text1.png';
import text2 from './Eighth-Text2.png';
import text3 from './Eighth-Text3.png';
import houses from './First-Houses.png';
import trash from './Eighth-Trash.png';
import tree from './First-Tree.gif';
import light from './Eighth-BackgroundLight.gif';
import alarm from './alarm.mp3';
import clock from './First-Clock.gif';
import treeStill from './Eighth-Tree.png';


class Eighth extends Component {
  constructor(props){
    super(props);
    this.state = {
      isPageActive: true,
      isDark: false,
      isNight: false,
      text1Active: false,
      text2Active: false,
      text3Active: false,
      showLight: false,
      showAlarm: false,
      showText3: false,
    };
  }

  componentWillMount() {
    this.turnDark();
    this.showText();
   }

turnDark = () => {
  setTimeout(() => {
    this.setState({
      isDark: true,
    });
  }, 2000);

  setTimeout(() => {
    this.setState({

      isNight: true,
    });
  }, 3200);

  setTimeout(() => {
    this.setState({
      isDark: false,

    });
  }, 3500);
}


showText = () => {
  setTimeout(() => {
    this.setState({
      text1Active: true,
    });
  }, 5000);
}

handleText1Click = () => {
  this.setState({
    text1Active: false,
    text2Active: true,
  });
}

handleText2Click = () => {
  this.setState({
    text2Active: false,
    text3Active: true,
    showText3: true,
  });
}

handleText3Click = () => {
  this.setState({
    showLight: true,
  });

  setTimeout(() => {
    this.setState({
    isNight: false,
    });
  }, 500);


  setTimeout(() => {
    this.setState({
      showLight: false,
    });
  }, 1500);

  setTimeout(() => {
    this.setState({
      showAlarm: true,
    });
  }, 1500);
  setTimeout(() => {
    this.setState({
      soundAlarm: true,
    });
  }, 3000);

  setTimeout(() => {
    this.setState({
      text3Active: false,
    });
  }, 4000);

  setTimeout(() => {
    this.setState({
      showText3: false,
    });
  }, 4500);
}

handleSwitchScene = (event) => {
  setTimeout(() => {
    this.setState({
      isPageActive: false,
    });
  }, 4000);

  setTimeout(() => {
    let pageName = "ninth";
    this.props.switchPageFunction(pageName);
  }, 4000);
  }


  render() {

    return (

      <div className = {this.state.isPageActive ? 'fadeIn' : 'fadeOut'}>

        <img src={houses} className="Eighth-Houses"/>
        <img src={tree} className="Eighth-Tree"/>
        {this.state.isDark ?
          <img src={background} className="Eighth-Background"/>
          : null}



        {this.state.isNight ?
          <img src={backgroundStill} className="Eighth-BackgroundStill"/>
          : null}

          {this.state.showLight ?
            <img src={light} className="Eighth-BackgroundLight"/>
            : null}

          <img src={trash} className="Eighth-Trash"/>


        {this.state.isNight ?
            <img src={backgroundStill} className="Eighth-BackgroundStill"/>
            : null}

        {this.state.text1Active ?
          <div className = {this.state.text1Active ? 'fadeIn' : 'fadeOut'}>
            <img src={text1} className="Eighth-Text1" onClick = {this.handleText1Click.bind(this)}/>
          </div>
        : null}

        {this.state.text2Active ?
          <div className = {this.state.text2Active ? 'fadeIn' : 'fadeOut'}>
            <img src={text2} className="Eighth-Text2" onClick = {this.handleText2Click.bind(this)}/>
          </div>
        : null}

        {this.state.showText3 ?
          <div className = {this.state.text3Active ? 'fadeIn' : 'fadeOut'}>
            <img src={text3} className="Eighth-Text3" onClick = {this.handleText3Click.bind(this)}/>
          </div>
        : null}

          {this.state.soundAlarm ? <audio id = "audioAlarm" src={alarm} controls autoPlay/> : null}
          {this.state.showAlarm ? <div>{this.handleSwitchScene()}<img src={clock} className="Eighth-Clock"/></div> : null}

      </div>
    );
  }
}



export default Eighth;
