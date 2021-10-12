import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  state = {
    x: 0,
    page: 'start' // task
  }

  incrementX = () => {
    // this.x++;
    this.setState({
      x: this.state.x + 1
    });
  }

  setXTo = (newX) => {
    this.setState({
      x: newX
    });
  }

  // task
  showPage = (page) => {
    this.setState({
      page: page
    });
  }

  render() {
    
    return (
      <div className="App">
        <h1>Conditional Rendering</h1>
        <button onClick={ this.incrementX }>Increment x</button>
        <button onClick={ this.setXTo.bind(this, 3) }>Set x to 3</button>
        <h2>{this.state.x}</h2>
        <h2>{this.state.x > 5 ? 'x is greater than 5' : 'x less or equal than 5' }</h2>
        { /* task 
            1. Create a navigation div with 3 links: Startpage, Products and About 
            2. When the user clicks on any of them, the component state member 'page' will be
               updated to 'start', 'products' or 'about'.
            3. Create 3 divs with classes 'start', 'products' and 'about' containing some dummy content
          
          <div className="header">
            <a style={{cursor: 'pointer'}} onClick={this.showPage.bind(this, 'start')}>Startpage</a>
            | <a style={{cursor: 'pointer'}} onClick={this.showPage.bind(this, 'products')}>Products</a>
            | <a style={{cursor: 'pointer'}} onClick={this.showPage.bind(this, 'about')}>About</a>
          </div>
          <div className="content">
            { this.state.page === 'start' ? <div className="startpage">Hi from startpage</div> : null }
            { this.state.page === 'products' ? <div className="products">Hi from products</div> : null }
            { this.state.page === 'about' ? <div className="about">Hi from about</div> : null }
          </div>
        */ }        
      </div>
    );
  }
}

export default App;
