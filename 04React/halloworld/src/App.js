import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    
    const name = 'Larry';
    const showHalloWorld = true;
    const showMath = true;
    const num1 = 40;
    const num2 = 23;

    let math;
    if(showMath) {
      math = <h4>{num1} + {num2} = {num1 + num2}</h4>;
    } else {
      math = null;
    }

    return (
      <div className="App">
        <h1>The App Component</h1>
        <h4>Hallo { name.toLocaleUpperCase() }</h4>
        <h4>1 + 1 = {1 + 1}</h4> {/* any js statement */}
        <h4>{ showHalloWorld ? <h4>Hallo World</h4> : null }</h4>
        {math}
      </div>
    );
  }
}

export default App;
