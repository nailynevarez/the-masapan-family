import React, { Component } from 'react';
import { PropTypes } from 'react';
import './App.css';
import './Fourth.css';
import background from './Fourth-Background.gif';
import flour from './Fourth-Flour.png';
import bags from './Fourth-Bags.png';
import rings from './Fourth-Rings.png';
import stacks from './Fourth-Stacks.png';
import boxes from './Fourth-Boxes.png';
import flourText from './Fourth-MixText.png';
import boxText from './Fourth-BoxText.png';
import ringText from './Fourth-CutOutText.png';
import stackText from './Fourth-SheetText.png';
import arrow from './Third-Arrow.gif';
import text from './Fourth-Text.png';
import textCrackle from './Fourth-Text.gif';

class Fourth extends Component {
  constructor(props){
    super(props);
    this.myRef = React.createRef();
    this.state = {
      isPageActive: true,
      isFlourActive: false,
      showFlour: false,
      flourClicked: false,
      isBoxActive: false,
      showBox: false,
      boxClicked: false,
      isStackActive: false,
      stackClicked: false,
      isRingActive: false,
      showRing: false,
      ringClicked: false,
      allClicked: false,
      showArrow: false,
      showCrackle: false,
      showText: true,
    };
  }

  checkClicked = () => {
    setTimeout(() => {
      if (
        this.state.flourClicked == true &&
        this.state.boxClicked == true &&
        this.state.ringClicked == true &&
        this.state.stackClicked == true
      )
      {
        this.setState({
          allClicked: true,
        });
      }
    }, 2000);
  }

  flourClick = () => {
    this.setState({
      isFlourActive: true,
      showFlour: true,
      flourClicked: true
    });

    setTimeout(() => {
      this.setState({
        isFlourActive: false,
      });
    }, 3000);

    setTimeout(() => {
      this.setState({
        showFlour: false,
      });
    }, 4000);

    this.checkClicked();
  }


  boxClick = () => {
    this.setState({
      isBoxActive: true,
      showBox: true,
      boxClicked: true,
    });

    setTimeout(() => {
      this.setState({
        isBoxActive: false,
      });
    }, 3000);

    setTimeout(() => {
      this.setState({
        showBox: false,
      });
    }, 4000);
    this.checkClicked();
  }

  ringClick = () => {

    this.setState({
      isRingActive: true,
      showRing: true,
      ringClicked: true,
    });


    setTimeout(() => {
      this.setState({
        isRingActive: false,
      });
    }, 3000);

    setTimeout(() => {
      this.setState({
        showRing: false,
      });
    }, 4000);
    this.checkClicked();
  }


    stackClick = () => {

      this.setState({
        isStackActive: true,
        showStack: true,
        stackClicked: true,
      });


      setTimeout(() => {
        this.setState({
          isStackActive: false,
        });
      }, 3000);

      setTimeout(() => {
        this.setState({
          showStack: false,
        });
      }, 4000);
      this.checkClicked();
    }

    handleSwitchScene = (event) => {
      setTimeout(() => {
        let pageName = "fifth";
        this.props.switchPageFunction(pageName);
      }, 2000);
      this.setState({
        isPageActive: false,
      });
      }

      textClick = () => {
        this.setState({
          showCrackle: true,
          showText: false,
        });

        setTimeout(() => {
          this.setState({
            showCrackle: false,
          });
        }, 1000);
      }

  render() {
    return (
      <div className = {this.state.isPageActive ? 'fadeIn' : 'fadeOut'}>

        <img src={background} className="Fourth-Background" alt="background"/>

        {this.state.showCrackle ? <img src={textCrackle} className="Fourth-TextCrackle"/> : null }
        {this.state.showText ? <img src={text} className="Fourth-Text" onClick = {this.textClick.bind(this)}/> : null}
        <img src={flour} className="Fourth-Flour" onClick = {this.flourClick.bind(this)}/>
        {this.state.showFlour ?
          <div className = {this.state.isFlourActive ? 'fadeIn' : 'fadeOut'}>
          <img src={flourText} className="Fourth-FlourText" />
          </div> : null}

        <img src={bags} className="Fourth-Bags" onClick = {this.flourClick.bind(this)}/>

        <img src={rings} className="Fourth-Rings" onClick = {this.ringClick.bind(this)}/>
        {this.state.showRing ?
          <div className = {this.state.isRingActive ? 'fadeIn' : 'fadeOut'}>
          <img src={ringText} className="Fourth-RingText" />
          </div> : null}


        <img src={boxes} className="Fourth-Boxes" onClick = {this.boxClick.bind(this)}/>
        {this.state.showBox ?
          <div className = {this.state.isBoxActive ? 'fadeIn' : 'fadeOut'}>
          <img src={boxText} className="Fourth-BoxText" />
          </div> : null}

        <img src={stacks} className="Fourth-Stacks" onClick = {this.stackClick.bind(this)}/>
        {this.state.showStack ?
          <div className = {this.state.isStackActive ? 'fadeIn' : 'fadeOut'}>
          <img src={stackText} className="Fourth-StackText" />
          </div> : null}

          {this.state.allClicked ?
            <div className = {this.state.allClicked ? 'fadeIn' : 'fadeOut'}>
            <img src={arrow} className="Fourth-Arrow" onClick = {this.handleSwitchScene.bind(this)} />
            </div> : null}

      </div>
    );
  }
}



export default Fourth;
