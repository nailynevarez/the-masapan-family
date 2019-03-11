import React, { Component } from 'react';
import { PropTypes } from 'react';
import './App.css';
import './Seventh.css';
import still from './Fifth-Still.gif';
import making from './Fifth-Making.gif';
import pic8 from './Fifth-8.png';
import pic9 from './Seventh-9.png';
import pic10 from './Seventh-10.png';
import pic11 from './Seventh-11.png';
import pic12 from './Seventh-12.png';
import pic13 from './Seventh-13.png';
import pic14 from './Seventh-14.png';
import pic15 from './Seventh-15.png';
import pic16 from './Seventh-16.png';
import pressText from './Fifth-Text5.png';
import text1 from "./Seventh-Text1.png";
import text2 from "./Seventh-Text2.png";
import text3 from "./Seventh-Text3.png";
import text4 from "./Seventh-Text4.png";
import crackle from "./Seventh-Crackle.gif";
import crackleSound from './crackle.mp3';



class Seventh extends Component {
  constructor(props){
    super(props);
    this.myRef = React.createRef();
    this.state = {
      isPageActive: true,
      isHandsStill: true,
      isMaking: false,
      counter: 8,
      pic8: true,
      pic9: false,
      pic10: false,
      pic11: false,
      pic12: false,
      pic13: false,
      pic14: false,
      pic15: false,
      pic16: false,
      pressText: false,
      text1Active: true,
      text2Active: false,
      text3Active: false,
      text4Active: false,
      textCrackle: false,
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
     if(this.state.canPress == true) {
     this.setState({
       isMaking: true,


     });

     setTimeout(() => {
       this.setState({
         isHandsStill: false,
         pressText: false,

       });
     }, 50);

     setTimeout(() => {
       this.setState({

         isHandsStill: true,
         pressText: true,

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
     if(this.state.canPress == true) {
     let counter = this.state.counter + 1;
     this.setState({
       counter: counter,
     });
     if (counter == 9) {
       this.setState({
         pic9: true,
       });
     }

     if (counter == 10) {
       this.setState({
         pic9: false,
         pic10: true,
       });
     }

     if (counter == 11) {
       this.setState({
         pic10: false,
         pic11: true,
       });
     }

     if (counter == 12) {
       this.setState({
         pic11: false,
         pic12: true,
       });
     }

     if (counter == 13) {
       this.setState({
         pic12: false,
         pic13: true,
       });
     }

     if (counter == 14) {
       this.setState({
         pic13: false,
         pic14: true,
       });
     }

     if (counter == 15) {
       this.setState({
         pic14: false,
         pic15: true,
       });
     }

     if (counter == 16) {
       this.handleSwitchScene();
       this.setState({
         pic15: false,
         pic16: true,
         pressText: false,
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
       let pageName = "eighth";
       this.props.switchPageFunction(pageName);
     }, 1000);
     }


     handleText1Click = () => {
       console.log('hey');
       this.setState({
         text1Active: false,
         text2Active: true,
       });
     }

     handleText2Click = () => {
       this.setState({
         text2Active: false,
         text3Active: true,
       });
     }

     handleText3Click = () => {
       this.setState({
         text3Active: false,
         text4Active: true,
       });
     }

     handleText4Click = () => {
       this.setState({
         textCrackle: true,
       });

       setTimeout(() => {
         this.setState({
           text4Active: false,
         });
       }, 50);

       setTimeout(() => {
         this.setState({
           textCrackle: false,
           pressText: true,
           canPress: true,
         });
       }, 1000);
     }


  render() {

    return (
      <div className = {this.state.isPageActive ? 'fadeIn' : 'fadeOut'}>
      {this.state.textCrackle ? <audio id = "audioCrackle" src={crackleSound} controls autoPlay/> : null}
        {this.state.isHandsStill ?
          <img src={still} className="Fifth-Background" alt="background" onKeyDown = {this.onKeyPressed.bind(this)}/>
        : null}

        {this.state.isMaking ?
          <img src={making} className="Fifth-Making"/>
        : null}

        {this.state.pic8 ?
          <div className = {this.state.pic8 ? 'fadeIn' : 'fadeOut'}>
            <img src={pic8} className="Seventh-8"/>
          </div>
        : null}

        {this.state.pic9 ?
          <div className = {this.state.pic9 ? 'fadeIn' : 'fadeOut'}>
            <img src={pic9} className="Seventh-9"/>
          </div>
        : null}

        {this.state.pic10 ?
          <div className = {this.state.pic10 ? 'fadeIn' : 'fadeOut'}>
            <img src={pic10} className="Seventh-10"/>
          </div>
        : null}

        {this.state.pic11 ?
          <div className = {this.state.pic11 ? 'fadeIn' : 'fadeOut'}>
            <img src={pic11} className="Seventh-11"/>
          </div>
        : null}

        {this.state.pic12 ?
          <div className = {this.state.pic12 ? 'fadeIn' : 'fadeOut'}>
            <img src={pic12} className="Seventh-12"/>
          </div>
        : null}

        {this.state.pic13 ?
          <div className = {this.state.pic13 ? 'fadeIn' : 'fadeOut'}>
            <img src={pic13} className="Seventh-13"/>
          </div>
        : null}

        {this.state.pic14 ?
          <div className = {this.state.pic14 ? 'fadeIn' : 'fadeOut'}>
            <img src={pic14} className="Seventh-14"/>
          </div>
        : null}

        {this.state.pic15 ?
          <div className = {this.state.pic15 ? 'fadeIn' : 'fadeOut'}>
            <img src={pic15} className="Seventh-15"/>
          </div>
        : null}

        {this.state.pic16 ?
          <div className = {this.state.pic16 ? 'fadeIn' : 'fadeOut'}>
            <img src={pic16} className="Seventh-16"/>
          </div>
        : null}

        {this.state.pressText ?
          <div className = {this.state.pressText ? 'fadeIn' : 'fadeOut'}>
            <img src={pressText} className="Seventh-Press"/>
          </div>
        : null}



        {this.state.text1Active ?
          <div className = {this.state.text1Active ? 'fadeIn' : 'fadeOut'}>
            <img src={text1} className="Seventh-Text1" onClick = {this.handleText1Click.bind(this)}/>
          </div>
        : null}

        {this.state.text2Active ?
          <div className = {this.state.text2Active ? 'fadeIn' : 'fadeOut'}>
            <img src={text2} className="Seventh-Text2" onClick = {this.handleText2Click.bind(this)}/>
          </div>
        : null}

        {this.state.text3Active ?
          <div className = {this.state.text3Active ? 'fadeIn' : 'fadeOut'}>
            <img src={text3} className="Seventh-Text3" onClick = {this.handleText3Click.bind(this)}/>
          </div>
        : null}

        {this.state.text4Active ?
          <div className = {this.state.text4Active ? 'fadeIn' : 'fadeOut'}>
            <img src={text4} className="Seventh-Text4" onClick = {this.handleText4Click.bind(this)}/>
          </div>
        : null}

        {this.state.textCrackle ?
            <img src={crackle} className="Seventh-Crackle"/>
        : null}
      </div>
    );
  }
}



export default Seventh;
