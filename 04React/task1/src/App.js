import React, { Component } from 'react';
import logo from './logo.svg';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';
import './App.css';

class App extends Component {
  
  state = {
    username: 'Jan'
  }
  
  changeUsername = (event) => {
    this.setState({
      username: event.target.value
    })
  }

  render() {
    const style = {
      backgroundColor: '#eee'
    }

    return (
      <div style={style} className="App">
        <UserInput change={this.changeUsername} username={this.state.username}/>
        <UserOutput username={this.state.username}/>
      </div>
    );
  }
}

export default App;
