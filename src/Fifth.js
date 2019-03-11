import React, { Component } from 'react';
import { PropTypes } from 'react';
import './App.css';
import './Fifth.css';
import still from './Fifth-Still.gif';
import making from './Fifth-Making.gif';
import text1 from './Fifth-Text1.png';
import text2 from './Fifth-Text2.png';
import text3 from './Fifth-Text3.png';
import text4 from './Fifth-Text4.png';
import textCrackle from './Fifth-Crackle.gif';
import text5 from './Fifth-Text5.png';
import pic1 from './Fifth-1.png';
import pic2 from './Fifth-2.png';
import pic3 from './Fifth-3.png';
import pic4 from './Fifth-4.png';
import pic5 from './Fifth-5.png';
import pic6 from './Fifth-6.png';
import pic7 from './Fifth-7.png';
import pic8 from './Fifth-8.png';
import crackle from './crackle.mp3';


class Fifth extends Component {
  constructor(props){
    super(props);
    this.state = {
      isPageActive: true,
      isHandsStill: true,
      isMaking: false,
      counter: 0,
      text1Active: true,
      text2Active: false,
      text3Active: false,
      text4Active: false,
      textCrackle: false,
      text5Active: false,
      pic1: false,
      pic2: false,
      pic3: false,
      pic4: false,
      pic5: false,
      pic6: false,
      pic7: false,
      pic8: false,
      canPress: false,
    };
  }

  componentWillMount() {
      document.addEventListener("keydown", this.onKeyPressed.bind(this));
      document.addEventListener("keyup", this.onKeyReleased.bind(this));
   }

   componentWillUnmount() {
      document.removeEventListener("keydown", this.onKeyPressed.bind(this));
      document.addEventListener("keyup", this.onKeyReleased.bind(this));
   }

  onKeyPressed = () => {
    if (this.state.canPress == true) {
    this.setState({
      isMaking: true,
    });

    setTimeout(() => {
      this.setState({
        isHandsStill: false,
        text5Active: false,
      });
    }, 50);

    setTimeout(() => {
      this.setState({
        isHandsStill: true,
        text5Active: true,
      });
    }, 3500);

    setTimeout(() => {
      this.setState({
        isMaking: false,
      });
    }, 3550);
  }
  }

  onKeyReleased = (e) => {
    if (this.state.canPress == true ) {
    let counter = this.state.counter + 1;
    this.setState({
      counter: counter,
    });
    if (counter == 1) {
      this.setState({
        pic1: true,
      });
    }

    if (counter == 2) {
      this.setState({
        pic1: false,
        pic2: true,
      });
    }

    if (counter == 3) {
      this.setState({
        pic2: false,
        pic3: true,
      });
    }

    if (counter == 4) {
      this.setState({
        pic3: false,
        pic4: true,
      });
    }

    if (counter == 5) {
      this.setState({
        pic4: false,
        pic5: true,
      });
    }

    if (counter == 6) {
      this.setState({
        pic5: false,
        pic6: true,
      });
    }

    if (counter == 7) {
      this.setState({
        pic6: false,
        pic7: true,
      });
    }

    if (counter == 8) {
      this.handleSwitchScene();
      this.setState({
        pic7: false,
        pic8: true,
      });
    }
  }
}

  handleSwitchScene = (event) => {
    setTimeout(() => {
      this.setState({
        isPageActive: false,
      });
    }, 2000);

    setTimeout(() => {
      let pageName = "sixth";
      this.props.switchPageFunction(pageName);
    }, 500);
    }

  handleText1Click = () => {
    console.log('hey');
    this.setState({
      text2Active: true,
    });
  }

  handleText2Click = () => {
    this.setState({
      text3Active: true,
    });
  }

  handleText3Click = () => {
    this.setState({
      text4Active: true,
    });
  }

  handleText4Click = () => {
    this.setState({
      textCrackle: true,
    });

    setTimeout(() => {
      this.setState({
        text1Active: false,
        text2Active: false,
        text3Active: false,
        text4Active: false,
      });
    }, 50);

    setTimeout(() => {
      this.setState({
        textCrackle: false,
        text5Active: true,
        canPress: true,
      });
    }, 1000);
  }


  render() {

    return (
      <div className = {this.state.isPageActive ? 'fadeIn' : 'fadeOut'}>

        {this.state.textCrackle ? <audio id = "audioCrackle" src={crackle} controls autoPlay/> : null}
        {this.state.isHandsStill ?
          <img src={still} className="Fifth-Background" alt="background" onKeyDown = {this.onKeyPressed.bind(this)}/>
        : null}
        {this.state.isMaking ?
          <img src={making} className="Fifth-Making"/>
        : null}



        {this.state.text1Active ?
          <div className = {this.state.text1Active ? 'fadeIn' : 'fadeOut'}>
            <img src={text1} className="Fifth-Text1" onClick = {this.handleText1Click.bind(this)}/>
          </div>
        : null}

        {this.state.text2Active ?
          <div className = {this.state.text2Active ? 'fadeIn' : 'fadeOut'}>
            <img src={text2} className="Fifth-Text2" onClick = {this.handleText2Click.bind(this)}/>
          </div>
        : null}
        {this.state.text3Active ?
          <div className = {this.state.text3Active ? 'fadeIn' : 'fadeOut'}>
            <img src={text3} className="Fifth-Text3" onClick = {this.handleText3Click.bind(this)}/>
          </div>
        : null}

        {this.state.text4Active ?
          <div className = {this.state.text4Active ? 'fadeIn' : 'fadeOut'}>
            <img src={text4} className="Fifth-Text4" onClick = {this.handleText4Click.bind(this)}/>
          </div>
        : null}

        {this.state.text5Active ?
          <div className = {this.state.text5Active ? 'fadeIn' : 'fadeOut'}>
            <img src={text5} className="Fifth-Text5"/>
          </div>
        : null}

        {this.state.textCrackle ?
            <img src={textCrackle} className="Fifth-TextCrackle"/>
        : null}

        {this.state.pic1 ?
          <div className = {this.state.pic1 ? 'fadeIn' : 'fadeOut'}>
            <img src={pic1} className="Fifth-1"/>
          </div>
        : null}

        {this.state.pic2 ?
          <div className = {this.state.pic2 ? 'fadeIn' : 'fadeOut'}>
            <img src={pic2} className="Fifth-2"/>
          </div>
        : null}

        {this.state.pic3 ?
          <div className = {this.state.pic3 ? 'fadeIn' : 'fadeOut'}>
            <img src={pic3} className="Fifth-3"/>
          </div>
        : null}

        {this.state.pic4 ?
          <div className = {this.state.pic4 ? 'fadeIn' : 'fadeOut'}>
            <img src={pic4} className="Fifth-4"/>
          </div>
        : null}

        {this.state.pic5 ?
          <div className = {this.state.pic5 ? 'fadeIn' : 'fadeOut'}>
            <img src={pic5} className="Fifth-5"/>
          </div>
        : null}

        {this.state.pic6 ?
          <div className = {this.state.pic6 ? 'fadeIn' : 'fadeOut'}>
            <img src={pic6} className="Fifth-6"/>
          </div>
        : null}

        {this.state.pic7 ?
          <div className = {this.state.pic7 ? 'fadeIn' : 'fadeOut'}>
            <img src={pic7} className="Fifth-7"/>
          </div>
        : null}

        {this.state.pic8 ?
          <div className = {this.state.pic8 ? 'fadeIn' : 'fadeOut'}>
            <img src={pic8} className="Fifth-8"/>
          </div>
        : null}


      </div>
    );
  }
}




export default Fifth;
