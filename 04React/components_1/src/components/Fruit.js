import React, { Component } from 'react'

export default class Fruit extends Component {
  
  state = {
      color: 'red'
  }

  // task
  changeColor = () => {
    let colors = ['red', 'blue', 'green', 'yellow', 'purple'];
    let newColor = Math.floor(Math.random() * colors.length);

    this.setState({
      color: colors[newColor]
    })
  }

  render() {
    return (
      <div>
        {this.props.type}, color = {this.state.color} 
        {/* task: create a button that randomly changes the color to either red, blue, green, yellow or purple */}
        {' '}<button onClick={this.changeColor}>Change Color</button>
        {' '}<button onClick={this.props.deleteClickHandler.bind(this, this.props.type)}>Delete Me</button>
      </div>
    )
  }
}
