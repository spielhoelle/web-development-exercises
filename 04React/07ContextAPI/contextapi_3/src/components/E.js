import React, { Component } from 'react'
import { MyContext } from '../context';

export default class E extends Component {
  render() {
    return (
        <div>
            <MyContext.Consumer>
            {
                (context) => {
                const { dispatch } = context;
                return (
                    <div>
                    <button onClick={dispatch.bind(this, {type: 'INCREMENT_X'})}>incrementX by 1</button>
                    </div>  
                )         
            }
            }       
            </MyContext.Consumer>
        </div> 
    )
  }
}
