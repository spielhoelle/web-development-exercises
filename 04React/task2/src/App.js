import React, { Component } from 'react';
import Validation from './Validation/Validation';
import Char from './Char/Char';
import './App.css';

class App extends Component {
  
  state = {
    textArray: []
  }
  
  textLengthHandler = (event) => {
    let txtArray = event.target.value.split('');

    if(txtArray[txtArray.length-1] === ' ') 
      return;

    this.setState({
      textArray: txtArray
    })
  }
  
  removeHandler = (index) => {
    let txtArray = [...this.state.textArray];
    txtArray.splice(index, 1);

    this.setState({
      textArray: txtArray
    });
  }

  render() {
    return (
      <div className="App">
        <input type="text" onChange={this.textLengthHandler} />
        <p>
          {this.state.textArray.length}
        </p>
        <Validation textLength={this.state.textArray.length}/>
        {this.state.textArray.map( (c, index) => {
          return <Char letter={c} key={index} remove={() => {this.removeHandler(index)}} />
        })}
      </div>
    );
  }
}

export default App;
