import React, { Component } from 'react'

export default class Test extends Component {
  
  state = {
    title: '',
    body: ''
  };

  // usually, the data fetching from an api happens here ...
  componentDidMount() {
    console.log('componentDidMount...');

    fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(response => response.json())
    .then(data => this.setState({
        title: data.title,
        body: data.body
    }));
  }

//   // deprecated, still with UNSAFE_ in R17
//   componentWillMount() {
//     console.log('componentWillMount...');
//   }
  
//   componentDidUpdate() {
//     console.log('componentDidUpdate...');
//   }

//   // deprecated, still with UNSAFE_ R17
//   componentWillUpdate() {
//     console.log('componentWillUpdate...');
//   }

//   componentWillReceiveProps(nextProps, nextState) {
//     console.log('componentWillReceiveProps...');
//   }

//   static getDerivedStateFromProps(nextProps, prevState) {
//     return null;      
//   }

//   getSnapshotBeforeUpdate(nextProps, prevState) {
//       console.log('getSnapshotBeforeUpdate...');
//   }

  render() {
    const {title, body} = this.state;

    return (
      <div>
        <h1>Test Component</h1>
        <h1>{title}</h1>
        <p>{body}</p>
      </div>
    )
  }
}
