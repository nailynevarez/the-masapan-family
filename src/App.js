import React, { Component } from 'react';
import Menu from './Menu.js';
import First from './First.js';
import Second from './Second.js';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      activePage: 'menu',
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

      {component}
      </div>
    );
  }
}

export default App;
