import React, { Component } from 'react';
import logo from './logo.svg';
import randomstring from 'randomstring';
import './App.css';

class App extends Component {

  state = {
    fruits: [
      {id: 1, name: 'Apple'}, 
      {id: 2, name: 'Banana'}, 
      {id: 3, name: 'Lemon'}, 
      {id: 4, name: 'Kiwi'}, 
      {id: 5, name: 'Pineapple'}
    ],
    fruitName: ''
  }

  removeFruitById = (id) => {
    const fruitIndex = this.state.fruits.findIndex((f) => {
      return id === f.id;
    });

    if(fruitIndex === -1) return;

    const fruits = [...this.state.fruits];
    fruits.splice(fruitIndex, 1);

    this.setState({
      fruits: fruits
    });
  }

  removeFruitByName = (name) => {
    const fruitIndex = this.state.fruits.findIndex((f) => {
      return this.state.fruitName === f.name;
    });

    if(fruitIndex === -1) return;

    const fruits = [...this.state.fruits];
    fruits.splice(fruitIndex, 1);

    this.setState({
      fruits: fruits
    });
  }

  addFruit = (fruit) => {
    const fruits = [...this.state.fruits];

    fruits.push({
      name: this.state.fruitName,
      id: randomstring.generate(5)
    });

    this.setState({
      fruits: fruits
    });
  }    

  onChangeFruitHandler = (event) => {
    this.setState({
      fruitName: event.target.value
    });
  }

  render() {
    return (
      <div className="App">
        <h1>Loops & Data-Binding</h1>
        <input type="text" onChange={this.onChangeFruitHandler} />
        <button onClick={this.addFruit}>Add</button>
        <button onClick={this.removeFruitByName}>Remove</button>
        <ul>
        {this.state.fruits.map((fruit) => {
          // task, add a remove button
          return <li>{fruit.name} - <button onClick={this.removeFruitById.bind(this, fruit.id)}>Remove me</button></li>
        })}
        </ul>
      </div>
    );
  }
}

export default App;
