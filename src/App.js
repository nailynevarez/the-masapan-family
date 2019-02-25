import React, { Component } from 'react';
import hand from './Menu-Hand.gif';
import Menu from './Menu.js';
import First from './First.js';
import Second from './Second.js';
import './App.css';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      activePage: 'app',
    };
  }

  handlePageChange(e, {page}) {
    this.setState({
      activePage: page,
    });
  }


  render() {
    let component = null;
      switch (this.state.activePage) {
        case 'menu':
          component = <Menu />;
          break;
        case 'first':
          component = <First />;
          break;
        case 'second':
          component = <Second />;
          break;
      }
    return (
      <div className="App">
        <header className="App-header">
          <img src={hand} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
