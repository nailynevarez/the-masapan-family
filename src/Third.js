import React, { Component } from 'react';
import { PropTypes } from 'react';
import './App.css';
import './Third.css';
import background from './Third-Background.png';
import bigBox from './Third-Box.gif';
import carton1 from './Third-Carton1.gif';
import carton2 from './Third-Carton2.gif';
import flour1 from './Third-Flour1.gif';
import flour2 from './Third-Flour2.gif';
import peanuts from './Third-Peanuts.gif';
import smallBox from './Third-SmallBox.gif';
import Draggable from 'react-draggable';
import text1 from './Third-1.png';
import text2 from './Third-2.png';
import text3 from './Third-3.png';
import text4 from './Third-4.png';
import arrow from './Third-Arrow.gif';
import crackle from './Third-Text.gif';





export default class Third extends Component {

  constructor(props){
    super(props);
    this.state = {
      isPageActive: true,
      isObjectsActive: true,
      activeDrags: 0,
      isText1Active: true,
      isText2Active: false,
      isText3Active: false,
      isText4Active: false,
      arrow1: true,
      arrow2: false,
      arrow3: false,
      arrow4: false,
      arrow5: false,
      arrow6: false,
      isCrackle: false,
      peanutPosition: {
        x: 0, y: 0
      },
      bigBoxPosition: {
        x: 0, y: 0
      },
      smallBoxPosition: {
        x: 0, y: 0
      },
      flour1Position: {
        x: 0, y: 0
      },
      flour2Position: {
        x: 0, y: 0
      },
      carton1Position: {
        x: 0, y: 0
      },
      carton2Position: {
        x: 0, y: 0
      },
      peanutTable: false,
      smallBoxTable: false,
      bigBoxTable: false,
      flour1Table: false,
      flour2Table: false,
      carton1: false,
      carton2: false,
    };
  }

  handlePeanutDrag = (e, ui) => {
    const {x, y} = this.state.peanutPosition;
    this.setState({
      peanutPosition: {
        x: x + ui.deltaX,
        y: y + ui.deltaY,
      }
    });
    this.checkIfTable();
  }

  handleBigBoxDrag = (e, ui) => {
    const {x, y} = this.state.bigBoxPosition;
    this.setState({
      bigBoxPosition: {
        x: x + ui.deltaX,
        y: y + ui.deltaY,
      }
    });
    this.checkIfTable();
  }

  handleSmallBoxDrag = (e, ui) => {
    const {x, y} = this.state.smallBoxPosition;
    this.setState({
      smallBoxPosition: {
        x: x + ui.deltaX,
        y: y + ui.deltaY,
      }
    });
    this.checkIfTable();
  }

  handleFlour1Drag = (e, ui) => {
    const {x, y} = this.state.flour1Position;
    this.setState({
      flour1Position: {
        x: x + ui.deltaX,
        y: y + ui.deltaY,
      }
    });
    this.checkIfTable();
  }

  handleFlour2Drag = (e, ui) => {
    const {x, y} = this.state.flour2Position;
    this.setState({
      flour2Position: {
        x: x + ui.deltaX,
        y: y + ui.deltaY,
      }
    });
    this.checkIfTable();
  }

  handleCarton1Drag = (e, ui) => {
    const {x, y} = this.state.carton1Position;
    this.setState({
      carton1Position: {
        x: x + ui.deltaX,
        y: y + ui.deltaY,
      }
    });
    this.checkIfTable();
  }

  handleCarton2Drag = (e, ui) => {
    const {x, y} = this.state.carton2Position;
    this.setState({
      carton2Position: {
        x: x + ui.deltaX,
        y: y + ui.deltaY,
      }
    });
    this.checkIfTable();
  }

  checkIfTable = () => {

    if (
      this.state.bigBoxTable == true &&
      this.state.smallBoxTable == true &&
      this.state.flour1Table == true &&
      this.state.flour2Table == true &&
      this.state.carton1Table == true &&
      this.state.carton2Table == true
    ) {
      setTimeout(() => {
        this.handleSwitchScene();
      }, 2000);
    }

    //peanut
    if (this.state.peanutPosition.x.toFixed(0) > -40 && this.state.peanutPosition.x.toFixed(0) < 30 &&
        this.state.peanutPosition.x.toFixed(0) > -100 && this.state.peanutPosition.x.toFixed(0) < 100 &&
        this.state.peanutPosition.y.toFixed(0) > -400 && this.state.peanutPosition.y.toFixed(0) < -212
        ) {
      this.setState({
        peanutTable: true,
      });
    }
    else {
      this.setState({
        peanutTable: false,
      });
    }

    //big Box
    if (this.state.bigBoxPosition.x.toFixed(0) > -80 && this.state.bigBoxPosition.x.toFixed(0) < -15 &&
        this.state.bigBoxPosition.y.toFixed(0) > -400 && this.state.bigBoxPosition.y.toFixed(0) < -230 ||
        this.state.bigBoxPosition.x.toFixed(0) > -140 && this.state.bigBoxPosition.x.toFixed(0) < 30 &&
        this.state.bigBoxPosition.y.toFixed(0) > -400 && this.state.bigBoxPosition.y.toFixed(0) < -230
        ) {
      this.setState({
        bigBoxTable: true,
      });
    }
    else {
      this.setState({
        bigBoxTable: false,
      });
    }

    //small Box
    if (this.state.smallBoxPosition.x.toFixed(0) > -100 && this.state.smallBoxPosition.x.toFixed(0) < -30 &&
        this.state.smallBoxPosition.y.toFixed(0) > -420 && this.state.smallBoxPosition.y.toFixed(0) < -250 ||
        this.state.smallBoxPosition.x.toFixed(0) > -160 && this.state.smallBoxPosition.x.toFixed(0) < 25 &&
        this.state.smallBoxPosition.y.toFixed(0) > -420 && this.state.smallBoxPosition.y.toFixed(0) < -250
        ) {
      this.setState({
        smallBoxTable: true,
      });
    }
    else {
      this.setState({
        smallBoxTable: false,
      });
    }

    //flour 1
    if (this.state.flour1Position.x.toFixed(0) > 30 && this.state.flour1Position.x.toFixed(0) < 90 &&
        this.state.flour1Position.y.toFixed(0) > -420 && this.state.flour1Position.y.toFixed(0) < -240 ||
        this.state.flour1Position.x.toFixed(0) > -30 && this.state.flour1Position.x.toFixed(0) < 150 &&
        this.state.flour1Position.y.toFixed(0) > -420 && this.state.flour1Position.y.toFixed(0) < -240
        ) {
      this.setState({
        flour1Table: true,
      });
    }
    else {
      this.setState({
        flour1Table: false,
      });
    }

    //flour 2
    if (this.state.flour2Position.x.toFixed(0) > 18 && this.state.flour2Position.x.toFixed(0) < 80 &&
        this.state.flour2Position.y.toFixed(0) > -430 && this.state.flour2Position.y.toFixed(0) < -260 ||
        this.state.flour2Position.x.toFixed(0) > -44 && this.state.flour2Position.x.toFixed(0) < 140 &&
        this.state.flour2Position.y.toFixed(0) > -430 && this.state.flour2Position.y.toFixed(0) < -260
        ) {
      this.setState({
        flour2Table: true,
      });
    }
    else {
      this.setState({
        flour2Table: false,
      });
    }

    //carton 1
    if (this.state.carton1Position.x.toFixed(0) > -30 && this.state.carton1Position.x.toFixed(0) < 30 &&
        this.state.carton1Position.y.toFixed(0) > -420 && this.state.carton1Position.y.toFixed(0) < -230 ||
        this.state.carton1Position.x.toFixed(0) > -80 && this.state.carton1Position.x.toFixed(0) < 70 &&
        this.state.carton1Position.y.toFixed(0) > -420 && this.state.carton1Position.y.toFixed(0) < -230
        ) {
      this.setState({
        carton1Table: true,
      });
    }
    else {
      this.setState({
        carton1Table: false,
      });
    }

    //carton 2
    if (this.state.carton2Position.x.toFixed(0) > -50 && this.state.carton2Position.x.toFixed(0) < 20 &&
        this.state.carton2Position.y.toFixed(0) > -430 && this.state.carton2Position.y.toFixed(0) < -230 ||
        this.state.carton2Position.x.toFixed(0) > -100 && this.state.carton2Position.x.toFixed(0) < 50 &&
        this.state.carton2Position.y.toFixed(0) > -430 && this.state.carton2Position.y.toFixed(0) < -230
        ) {
      this.setState({
        carton2Table: true,
      });
    }
    else {
      this.setState({
        carton2Table: false,
      });
    }
    console.log(this.state.carton2Table);
    console.log(this.state.carton2Position.x.toFixed(0));
    console.log(this.state.carton2Position.y.toFixed(0));
  }

  handleSwitchScene = (event) => {
    this.setState({
      isPageActive: false,
    });
    let pageName = "fourth";
    this.props.switchPageFunction(pageName);
    }

  onStart = () => {
    this.setState({activeDrags: ++this.state.activeDrags});
  }

  onStop = () => {
    this.setState({activeDrags: --this.state.activeDrags});
  }

  handleButtonClick = (event) => {
    let pageName = "fourth";
    this.props.switchPageFunction(pageName);
    }

  handleText1Click = () => {
    this.setState({
      isText2Active: true,
      arrow2: true,
      arrow1: false,
    });
  }

  handleText2Click = () => {
    this.setState({
      isText3Active: true,
      arrow2: false,
      arrow3: true,
    });
  }

  handleText3Click = () => {
    this.setState({
      isText4Active: true,
      arrow3: false,
    });
  }

  handleText4Click = () => {
    this.setState({
      isText1Active: false,
      isText2Active: false,
      isText3Active: false,
      isText4Active: false,
      isCrackle: true,
    });

    setTimeout(() => {
      this.setState({
        isCrackle: false,
      });
    }, 1000);
  }

  render() {
    const dragHandlers = {onStart: this.onStart.bind(this), onStop: this.onStop.bind(this)};
    return (
      <div className = {this.state.isPageActive ? 'fadeIn' : 'fadeOut'}>
        <img src={background} className="Third-Background" alt="background"/>

        {this.state.isText1Active ?
          <div className = {this.state.isText1Active ? 'fadeIn' : 'fadeOut'}>
           <img src={text1} className="Third-Text1" onClick = {this.handleText1Click.bind(this)}/>
           {this.state.arrow1 ? <img src={arrow} className="Third-Arrow1"/> : null}
         </div> : null}

        {this.state.isText2Active ?
          <div className = {this.state.isText2Active ? 'fadeIn' : 'fadeOut'}>
            <img src={text2} className="Third-Text2" onClick = {this.handleText2Click.bind(this)}/>
            {this.state.arrow2 ? <div>
              <img src={arrow} className="Third-Arrow2"/>
              <img src={arrow} className="Third-Arrow3"/>
              <img src={arrow} className="Third-Arrow4"/>
              <img src={arrow} className="Third-Arrow5"/>
              </div>
            : null}
          </div> : null}
        {this.state.isText3Active ?
          <div className = {this.state.isText3Active ? 'fadeIn' : 'fadeOut'}>
           <img src={text3} className="Third-Text3" onClick = {this.handleText3Click.bind(this)}/>
           {this.state.arrow3 ? <div>
             <img src={arrow} className="Third-Arrow6"/>
             <img src={arrow} className="Third-Arrow7"/>
             </div>
           : null}
         </div> : null}
        {this.state.isText4Active ? <div className = {this.state.isText4Active ? 'fadeIn' : 'fadeOut'}> <img src={text4} className="Third-Text4" onClick = {this.handleText4Click.bind(this)}/></div> : null}

        {this.state.isCrackle ? <img src={crackle} className="Third-Crackle"/> : null}

      <div className = {this.state.isObjectsActive ? 'fadeIn' : 'fadeOut'}>
        <Draggable onDrag={this.handlePeanutDrag} {...dragHandlers}>
          <img src={peanuts} className="Third-Peanuts"/>
        </Draggable>
        <Draggable onDrag={this.handleBigBoxDrag} {...dragHandlers}>
          <img src={bigBox} className="Third-BigBox"/>
        </Draggable>
        <Draggable onDrag={this.handleSmallBoxDrag} {...dragHandlers}>
          <img src={smallBox} className="Third-SmallBox"/>
        </Draggable>
        <Draggable onDrag={this.handleFlour1Drag} {...dragHandlers}>
          <img src={flour1} className="Third-Flour1"/>
        </Draggable>
        <Draggable onDrag={this.handleFlour2Drag} {...dragHandlers}>
          <img src={flour2} className="Third-Flour2"/>
        </Draggable>
        <Draggable onDrag={this.handleCarton1Drag} {...dragHandlers}>
          <img src={carton1} className="Third-Carton1"/>
        </Draggable>
        <Draggable onDrag={this.handleCarton2Drag} {...dragHandlers}>
          <img src={carton2} className="Third-Carton2"/>
        </Draggable>
        </div>

      </div>

    );
  }
}
