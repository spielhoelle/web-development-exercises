import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  state = {
    fruits: ['Apple', 'Banana', 'Lemon', 'Kiwi', 'Pineapple']   
  }

  removeFruit = (fruit) => {
    const fruitIndex = this.state.fruits.findIndex((f) => {
      return fruit === f;
    });

    if(fruitIndex === -1) return;

    const fruits = [...this.state.fruits];
    fruits.splice(fruitIndex, 1);

    this.setState({
      fruits: fruits
    });
  }

  // task
  addFruit = (fruit) => {
    const fruits = [...this.state.fruits];

    fruits.push(fruit);
    this.setState({
      fruits: fruits
    });
  }

  render() {
    
    return (
      <div className="App">
        <h1>Loops 1</h1>
        <button onClick={this.removeFruit.bind(this, 'Apple')}>Remove Apple</button>
        {/*
          task:
          add a new button "Add Mango" that adds a 'Mango' to the fruits!
        */}
        <button onClick={this.addFruit.bind(this, 'Mango')}>Add Mango</button>
        <ul>
        {this.state.fruits.map((fruit) => {
          return <li>{fruit}</li>
        })}
        </ul>
      </div>
    );
  }
}

export default App;
