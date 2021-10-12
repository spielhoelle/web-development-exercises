import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  state = {
    sometext: '',
    username: '',
    password: '',
    loggedIn: -1 // task
  }

  // onChangeTextHandler = (event) => {
  //   this.setState({
  //     sometext: event.target.value
  //   });
  // }
  
  // onChangeUsernameHandler = (event) => {
  //   this.setState({
  //     username: event.target.value
  //   });
  // }
  
  // onChangePasswordHandler = (event) => {
  //   this.setState({
  //     password: event.target.value
  //   });
  // }

  onChange = e => this.setState({ [e.target.name] : e.target.value });
  
  // task
  login = () => {
    if(this.state.username === 'hallo' && this.state.password === 'world') {
      this.setState({
        loggedIn: 1
      });
    }
    else {
      this.setState({
        loggedIn: 0
      });      
    }
  }


  render() {

    /* 
      task: Create a button "login", that calls a function "login" and
      checks if the username is "hallo" and the password is "world". 
      If so, then display a div underneath the login button stating with
      green color that the login was successfull. Otherwise, state with
      red color, that the login failed.
    
    */

    return (
      <div className="App"> 
        <h1>Data Binding 1</h1>
          {/* <div>some text: <input onChange={this.onChangeTextHandler} type="text" /></div> */}
          <div>some text: <input name="sometext" onChange={this.onChange} type="text" /></div>          
          <div>you entered: {this.state.sometext}</div>
        <h1>Data Binding 2</h1>
          {/* <div>username: <input onChange={this.onChangeUsernameHandler} type="text" /></div> */}
          <div>username: <input name="username" onChange={this.onChange} type="text" /></div>          
          {/* <div>password: <input onChange={this.onChangePasswordHandler} type="text" /></div> */}
          <div>password: <input name="password" onChange={this.onChange}  type="text" /></div>          
          <button onClick={this.login}>Login</button>
          { this.state.loggedIn === 1 ? <div style={{ color: 'green' }}>Login Successful!</div> : null }
          { this.state.loggedIn === 0 ? <div style={{ color: 'red' }}>Login Failed!</div> : null }
      </div>
    );
  }
}

export default App;
