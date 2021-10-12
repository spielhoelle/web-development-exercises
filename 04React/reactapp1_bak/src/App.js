import React, { Component } from 'react';
import Radium, { StyleRoot } from 'radium';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    persons: [
      {key: '123', name: 'Beate', age: 33},
      {key: '456', name: 'Manu', age: 30},
      {key: '789', name: 'Steffi', age: 28}
    ],
    showPersons: false
  };
  
  halloWorldHandler = () => {
    console.log('hallo world');
  }

  changeNameToHandler = (event, key) => {
    // what is the index position of the person with the key
    const personIndex = this.state.persons.findIndex(p => {
      return p.key === key;
    });

    const person = {
      ...this.state.persons[personIndex]
    }

    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({
      persons: persons
    });
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons: !doesShow
    });
  }

  removePersonHandler = (index) => {
    const persons = [...this.state.persons];
    persons.splice(index, 1);
    this.setState({persons: persons});
  }

  textChangeHandler = (event) => {
    this.setState({
      persons: [
        {name: event.target.value, age: 33},
        {name: 'Manu', age: 35},
        {name: 'Steffi', age: 28}     
      ]
    });
  }

  render() {    
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: '#60dbfb',
        color: 'black'
      }
    };

    let persons = null;
    if(this.state.showPersons) {
      persons = (
        <div style={style}>
          {this.state.persons.map((person, index) => {
            return <Person 
                      click={() => { this.removePersonHandler(index) }} 
                      name={person.name} 
                      age={person.age} 
                      key={person.key}
                      change={(event) => { this.changeNameToHandler(event, person.key)}}
                      />
          })}    
        </div>
      );
    
      style.backgroundColor = 'lightgreen';
      style[":hover"] = {
        backgroundColor: 'salmon',
        color: 'black'
      }
    }

    //const classes = ['red', 'bold'].join(' '); // 'red bold'
    // task: 
    //if 2 or less persons, then classes should contain of red
    //if 1 or less person, then classes should contain red and bold

    const classes = [];
    if(this.state.persons.length <= 2) {
      classes.push('red');
    }

    if(this.state.persons.length <= 1) {
      classes.push('bold');
    }

    return (
      <StyleRoot>
        <div className="App">
          <h1>Hallo World</h1>
          <p className={classes.join(' ')}>This is really working</p>
          <button onClick={this.halloWorldHandler}>Hallo World</button>    
          <button onClick={this.togglePersonsHandler}>Toggle Persons</button>
          <input type="text" onChange={this.textChangeHandler} value={this.state.persons[0].name}/>
          {persons}
        </div>
      </StyleRoot>
    );
  }
}

export default Radium(App);
