import React from 'react'

const Fruit = (props) => {
  return (
    <div>
      {props.type}, color = {props.color} 
      {/* task: create a button that randomly changes the color to either red, blue, green, yellow or purple */}
      {/* {' '}<button onClick={this.props.changeColor}>Change Color</button> */}
      {' '}<button onClick={props.deleteClickHandler.bind(this, props.type)}>Delete Me</button>
    </div>      
  )
}

export default Fruit;