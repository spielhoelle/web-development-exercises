import React from 'react';
import Radium from 'radium';
import './Person.css';

const person = (props) => {
    const style = {
        '@media (min-width: 500px)': {
            width: '450px'
        }
    };
    
    return (
        <div className="Person" style={style}>
            <div onClick={props.click} >My name is {props.name} and I am {props.age} yrs old.</div>
            <div><input type="text" onChange={props.change} value={props.name}/></div>
        </div>
    );
}

export default Radium(person);