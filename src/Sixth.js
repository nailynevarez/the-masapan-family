import React, { Component } from 'react';
import { PropTypes } from 'react';
import './App.css';
import './Sixth.css';
import background from './Sixth-Background.gif';
import mom from './Sixth-Mom.png';
import boys from './Sixth-Boys.png';
import kids from './Sixth-Kids.png';
import paletero from './Sixth-Paletero.png';
import bike from './Sixth-Bike.png';
import chicken from './Sixth-Chicken.png';
import text1 from './Sixth-Text1.png';
import text2 from './Sixth-Text2.png';
import text3 from './Sixth-Text3.png';
import text4 from './Sixth-Text4.png';
import pic1 from './Sixth-1.png';
import pic2 from './Sixth-2.png';
import pic3 from './Sixth-3.png';
import pic4 from './Sixth-4.png';
import pic5 from './Sixth-5.png';
import crackle from './Sixth-Crackle.gif';
import crackleSound from './crackle.mp3';


class Sixth extends Component {
  constructor(props){
    super(props);
    this.state = {
      isPageActive: true,
      isKids: false,
      isBoys: false,
      isPaletero: false,
      isBike: true,
      isChicken: false,
      pic1: true,
      pic2: false,
      pic3: false,
      pic4: false,
      pic5: false,
      text1: true,
      text2: false,
      text3: false,
      text4: false,
      isCrackle: false,
    };
  }

  handleText1Click = () => {
    this.setState({
      text1: false,
      text2: true,
      pic1: false,
      pic2: true,
      isBike: false,
      isChicken: true,
    });
  }

  handleText2Click = () => {
    this.setState({
      text2: false,
      text3: true,
      pic2: false,
      pic3: true,
      isChicken: false,
      isBoys: true,
    });
  }

  handleText3Click = () => {
    this.setState({
      text3: false,
      text4: true,
      pic3: false,
      pic4: true,
      isBoys: false,
      isPaletero: true,
    });
  }

  handleText4Click = () => {
    this.setState({
      pic4: false,
      pic5: true,
      isPaletero: false,
      isKids: true,
      isCrackle: true,
    });

    setTimeout(() => {
      this.setState({
        text4: false,
      });
    }, 50);

    setTimeout(() => {
      this.setState({
        isCrackle: false,
      });
    }, 1000);

    this.handleSwitchScene();
  }


  handleSwitchScene = (event) => {
    setTimeout(() => {
      this.setState({
        isPageActive: false,
      });
    }, 2000);

    setTimeout(() => {
      let pageName = "seventh";
      this.props.switchPageFunction(pageName);
    }, 500);
    }


  render() {

    return (
      <div className = {this.state.isPageActive ? 'fadeIn' : 'fadeOut'}>
        {this.state.isCrackle ? <audio id = "audioCrackle" src={crackleSound} controls autoPlay/> : null}
        <img src={background} className="Sixth-Background" alt="background"/>


        {this.state.isKids ?
          <div className = {this.state.isKids ? 'fadeIn' : 'fadeOut'}>
            <img src={kids} className="Sixth-Kids"/>
          </div>
        : null}

        {this.state.isBoys ?
          <div className = {this.state.isBoys ? 'fadeIn' : 'fadeOut'}>
            <img src={boys} className="Sixth-Boys"/>
          </div>
        : null}

        {this.state.isPaletero ?
          <div className = {this.state.isPaletero ? 'fadeIn' : 'fadeOut'}>
            <img src={paletero} className="Sixth-Paletero"/>
          </div>
        : null}

        {this.state.isBike ?
          <div className = {this.state.isBike ? 'fadeIn' : 'fadeOut'}>
            <img src={bike} className="Sixth-Bike"/>
          </div>
        : null}

        {this.state.isChicken ?
          <div className = {this.state.isChicken ? 'fadeIn' : 'fadeOut'}>
            <img src={chicken} className="Sixth-Chicken"/>
          </div>
        : null}

        {this.state.pic1 ?
          <div className = {this.state.pic1 ? 'fadeIn' : 'fadeOut'}>
            <img src={pic1} className="Sixth-1"/>
          </div>
        : null}

        {this.state.pic2 ?
          <div className = {this.state.pic2 ? 'fadeIn' : 'fadeOut'}>
            <img src={pic2} className="Sixth-2"/>
          </div>
        : null}


        {this.state.pic3 ?
          <div className = {this.state.pic3 ? 'fadeIn' : 'fadeOut'}>
            <img src={pic3} className="Sixth-3"/>
          </div>
        : null}


        {this.state.pic4 ?
          <div className = {this.state.pic4 ? 'fadeIn' : 'fadeOut'}>
            <img src={pic4} className="Sixth-4"/>
          </div>
        : null}


        {this.state.pic5 ?
          <div className = {this.state.pic5 ? 'fadeIn' : 'fadeOut'}>
            <img src={pic5} className="Sixth-5"/>
          </div>
        : null}

        <img src={mom} className="Sixth-Mom"/>

        {this.state.text1 ?
          <div className = {this.state.text1 ? 'fadeIn' : 'fadeOut'}>
            <img src={text1} className="Sixth-Text1" onClick = {this.handleText1Click.bind(this)}/>
          </div>
        : null}

        {this.state.text2 ?
          <div className = {this.state.text2 ? 'fadeIn' : 'fadeOut'}>
            <img src={text2} className="Sixth-Text2" onClick = {this.handleText2Click.bind(this)}/>
          </div>
        : null}

        {this.state.text3 ?
          <div className = {this.state.text3 ? 'fadeIn' : 'fadeOut'}>
            <img src={text3} className="Sixth-Text3" onClick = {this.handleText3Click.bind(this)}/>
          </div>
        : null}

        {this.state.text4 ?
          <div className = {this.state.text4 ? 'fadeIn' : 'fadeOut'}>
            <img src={text4} className="Sixth-Text4" onClick = {this.handleText4Click.bind(this)}/>
          </div>
        : null}

        {this.state.isCrackle ?
            <img src={crackle} className="Sixth-Crackle"/>
        : null}

      </div>
    );
  }
}




export default Sixth;
