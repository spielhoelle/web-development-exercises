import React, { Component } from 'react'

export default class C extends Component {
  render() {
    return (
      <div>
        <h2>C</h2>
        x = {this.props.x}
      </div>
    )
  }
}
