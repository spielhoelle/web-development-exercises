// New to React 16.3
// basically, our global state

import React, {Component} from 'react';
import axios from 'axios';

const Context = React.createContext();

const reducer = (state, action) => {
    switch(action.type) {
        case 'DELETE_CONTACT': 
            return {
                ...state,
                contacts: state.contacts.filter( contact => contact.id !== action.payload)
            };
        case 'ADD_CONTACT': 
        return {
            ...state,
            contacts: [ action.payload, ...state.contacts ]
        };
        case 'UPDATE_CONTACT': 
        return {
            ...state,        
            // var array1 = [1, 4, 9, 16];
            // // pass a function to map
            // const map1 = array1.map(x => x * 2);
            // console.log(map1);
            // // expected output: Array [2, 8, 18, 32]
            contacts: state.contacts.map(contact => contact.id === action.payload.id ? (contact = action.payload) : contact)
        };                     
        default:
            return state;
    }
}

export class Provider extends Component {
    state = {
        contacts: [],
        dispatch: action => {
            this.setState(state => reducer(state, action))
        }
    };    
    
    async componentDidMount() {
        console.log('componentDidMount...');
        const res = await axios.get('http://jsonplaceholder.typicode.com/users')

        this.setState({ 
            contacts: res.data
        });
    }

    componentDidUpdate() {
        console.log('componentDidUpdate...');
    }
    
    componentWillUpdate() {
        console.log('componentWillUpdate...');
    }

    render() {
        return (
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        );
    }
}

export const Consumer = Context.Consumer;
