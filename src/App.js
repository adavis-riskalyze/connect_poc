import React, { Component } from 'react';
import './App.css';

class App extends Component {
    componentWillMount() {
        var token = '... Quovo Generated UI token goes here ...';
        window.setupConnect(token);
    }

    handleClick() {
        window.openConnect();
    }

  render() {
    return (
      <div className="App">
        <header className="App-header">
            <button id="quovo-connect" onClick={ this.handleClick }>Connect Your Accounts</button>
        </header>
      </div>
    );
  }
}

export default App;
