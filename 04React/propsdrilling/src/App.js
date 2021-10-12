import React, { Component } from 'react';
import B from './components/B';

class App extends Component {
  
  state = {
    x: 0
  }
  
  incrementX = () => {
    this.setState({
      x: this.state.x + 1
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Props Drilling</h1>
        <button onClick={this.incrementX}>IncrementX</button>
        <B x={this.state.x} />
      </div>
    );
  }
}

export default App;
