import React, { Component } from 'react'
import Fruit from '../layout/Fruit';

export default class Fruits extends Component {
  
  state = {
    fruits: [
        {type: 'Apple', color: 'red'}, 
        {type: 'Mango', color: 'red'},
        {type: 'Banana', color: 'red'},
        {type: 'Lemon', color: 'red'}
    ],
    newFruitType: ''
  }
    
  removeFruit = (fruit) => {
    const fruitIndex = this.state.fruits.findIndex((f) => {
      return fruit === f.type;
    });

    if(fruitIndex === -1) return;

    let fruits = [...this.state.fruits];
    fruits.splice(fruitIndex, 1);

    this.setState({
      fruits: fruits
    });
  }  

  onChangeAddFruitType = (event) => {
    this.setState({
      newFruitType: event.target.value
    });
  }

  // task
  addFruit = (fruit) => {
    let colors = ['red', 'blue', 'green', 'yellow', 'purple'];
    let newColor = Math.floor(Math.random() * colors.length);
    let fruits = [...this.state.fruits];
    
    fruits.push({
        type: this.state.newFruitType,
        color: colors[newColor]
    });

    this.setState({
      fruits: fruits
    });    
  }

  render() {
    return (
      <div>
        <h2>Fruits component</h2>

        {/* task */}
        <input onChange={this.onChangeAddFruitType} type="text"/><button onClick={this.addFruit}>Add Fruit</button>

        {this.state.fruits.map( (fruit) => {
            return <Fruit type={fruit.type} color={fruit.color} deleteClickHandler={this.removeFruit} />
        })};
      </div>
    )
  }
}
