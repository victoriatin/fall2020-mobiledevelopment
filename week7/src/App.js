import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
    };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>Exercise Tracker Application - Running Laps</p>
          <p>Count: {this.state.counter}</p>
          <button
            onClick={() => {
              this.setState({ counter: this.state.counter + 1 });
            }}
          >
            Add Lap
          </button>
          <button
            onClick={() => {
              this.setState({ counter: 0 });
            }}
          >
            Reset
          </button>
        </header>
      </div>
    );
  }
}

export default App;
