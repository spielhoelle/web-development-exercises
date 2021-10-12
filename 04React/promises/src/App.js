import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  
  state = {
    numbers: [1],
    error: null
  }

  addNumber = () => {
    const numbers = [...this.state.numbers];
    numbers.push(numbers.length + 1);
    this.setState({
      numbers: numbers
    })
  }

  addSomeNumbersDelayedCallback = () => {
    setTimeout(() => {
      this.addNumber();
      setTimeout(() => {
        this.addNumber();
        setTimeout(() => {
          this.addNumber();
          setTimeout(() => {
            this.addNumber();
          }, 1000);          
        }, 1000);        
      }, 1000);      
    }, 1000);
  }  

  addSomeNumbersDelayedPromise = () => {
    this.addNumberDelayedPromise()
    .then(this.addNumberDelayedPromise)
    .then(this.addNumberDelayedPromise)
    .then(this.addNumberDelayedPromise)
    .catch((err) => {
      this.setState({
        error: 'Error happened!'
      })
    })          
  }

  addSomeNumbersDelayedAsyncAwait = async () => {
    try {
      await this.addNumberDelayedPromise();
      await this.addNumberDelayedPromise();
      await this.addNumberDelayedPromise();
      await this.addNumberDelayedPromise();
    }
    catch(err) {
      this.setState({
        error: 'Error happened!'
      })
    }
  }

  addNumberDelayedPromise = () => {
    return new Promise((resolve, reject) => {
      setTimeout( () => {
        this.addNumber();
        if(Math.random() > 0.5) {
          reject();
        }
        else {
          resolve();
        }
      }, 1000)
    });
  }

  clear = () => {
    this.setState({
      numbers: [1]
    })
  }

  render() {
    return (
      <div className="App">
          <div>
            <button onClick={this.addNumber}>Add Number</button>
            <button onClick={this.addSomeNumbersDelayedCallback}>Add Numbers CB</button>
            <button onClick={this.addSomeNumbersDelayedPromise}>Add Numbers P</button>            
            <button onClick={this.addSomeNumbersDelayedAsyncAwait}>Add Numbers AA</button>            
            <button onClick={this.clear}>Clear</button>
          </div>
          <div>
            {this.state.numbers.map( (n) => {
              return <h3>{n}</h3>;  
            })}
          </div>
          <div>
            <h1>{this.state.error}</h1>
          </div>
      </div>
    );
  }
}

export default App;
