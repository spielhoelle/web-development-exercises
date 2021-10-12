import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// Prop Drilling -> Playing Hot Potatoe
// const Family = (props) => (
//   <div className="person">
//     <Person name={props.name} />
//   </div>
// );

// class Person extends Component {
//   render() {
//     return (
//       <div className="person">
//         <p>Hey I am a person {this.props.name}</p>
//       </div>
//     );
//   }
// }

// class App extends Component {
//   state = {
//     name: 'Jan',
//     age: 33,
//     city: 'Berlin'
//   };
  
//   render() {
//     return (
//       <div className="App">
//         <p>I am the app</p>

//         <Family name={this.state.name} />

//       </div>
//     );
//   }
// }

// 1st, make a new context
const MyContext = React.createContext();

// 2nd, create a provider component
class MyProvider extends Component {

  state = {
    name: 'Jan',
    age: 33,
    city: 'Berlin'
  };
  
  // we return a context provider
  render() {
    return (
      // <MyContext.Provider value="I am the value">
      <MyContext.Provider value={{ 
        state: this.state,
        growAYearOlder: () => this.setState({
          age: this.state.age + 1
        })
      }}>
        {this.props.children}
      </MyContext.Provider>
    )
  }
}

const Family = (props) => (
  <div className="person">
    <Person />
  </div>
);

class Person extends Component {
  render() {
    return (
      <div className="person">
      {/* <p>How do I access my data here??</p> */}
      <MyContext.Consumer>
        {/* child of consumer is always a function */}
        {
          (context) => (
            <React.Fragment>
            <p>Age: I am inside the {context.state.age}</p>
            <p>Name: I am inside the {context.state.name}</p>
            <button onClick={context.growAYearOlder}>increment age</button>
            </React.Fragment>
          )
        }
      </MyContext.Consumer>
      </div> 
    );
  }
}

class App extends Component {
  
  render() {
    return (
      <MyProvider>
        <div className="App">
          <p>I am the app</p>
          <Family />
        </div>
      </MyProvider>
    );
 }
}

export default App;
