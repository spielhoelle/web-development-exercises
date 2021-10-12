import React, { Component } from 'react';
import './App.css';
import Fruit from './components/Fruit';

class App extends Component {

  state = {
    fruits: ['Apple', 'Mango', 'Banana', 'Lemon']
  }

  removeFruit = (fruit) => {
    const fruitIndex = this.state.fruits.findIndex((f) => {
      return fruit === f;
    });

    if(fruitIndex === -1) return;

    let fruits = [...this.state.fruits];
    fruits.splice(fruitIndex, 1);

    this.setState({
      fruits: fruits
    });
  }

  render() {
    return (
      <div className="App">
        <h1>Components 1</h1>
        {this.state.fruits.map((fruit) => {
          return <Fruit type={fruit} deleteClickHandler={this.removeFruit} />
        })}
      </div>
    );
  }
}

export default App;
