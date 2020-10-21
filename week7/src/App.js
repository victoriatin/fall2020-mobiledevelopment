import React, { Component } from "react";
import "./App.css";


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      countera: 0,
      counterb:0
    };
  }

  render() {
    return (
      <div className="App">
          <h1>Exercise Tracker</h1>
          <div className="wrkout">
          <h2>Lap Counter</h2>
          <h3>Count: {this.state.countera}</h3>
          <button class="button"
            onClick={() => {
              this.setState({ countera: this.state.countera + 1 });
            }}
          >
            Add Lap
          </button>
          <button class="button"
            onClick={() => {
              this.setState({ countera: 0 });
            }}
          >
            Reset
          </button>
        </div>
        <div className="wrkout">
          <h2>Rep Counter</h2>
          <h3>Count: {this.state.counterb}</h3>
          <button class="button"
            onClick={() => {
              this.setState({ counterb: this.state.counterb + 1 });
            }}
          >
            Add Rep
          </button>
          <button class="button"
            onClick={() => {
              this.setState({ counterb: 0 });
            }}
          >
            Reset
          </button>
        </div>
      </div>
    );
  }
}

export default App;
