import React, { Component } from 'react';
import './App.css';

class App extends Component {
    componentWillMount() {
        var token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyZWFkX29ubHkiOm51bGwsImZpZCI6ODAwMzc2MCwiaXAiOiIyMDguMTg0LjIzMi4xNTAiLCJ1aWQiOjgwODEyNjcsInN5bmNfdHlwZSI6ImFnZyIsIm9uZV90aW1lX3VzZSI6dHJ1ZSwic3ViIjoiODA4MTI2NyIsInR5cGUiOiJpZnJhbWUiLCJqdGkiOiJhZTQ1OWE0OTZhMTgyMzM5ODQ1M2MwYmVlZmRlNTA2OGYzOGZkNWIwIiwiZXhwIjoxNTQ5NDAwMzI3LCJpYXQiOjE1NDkzOTY3MjcsImlwX3Jlc3RyaWN0ZWQiOmZhbHNlfQ.RDjkU1VWR5YIh4mmjcVXAc0H3-dOW7TADbQs4XHY_vY';
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
