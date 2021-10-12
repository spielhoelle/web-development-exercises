// type rcc for quick component creation
import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Consumer } from '../../context';
import axios from 'axios';

class Contact extends Component {
  
  state = {
    showContactInfo: false
  };
  
  onDeleteClick = async (id, dispatch) => {
    // because it always throws an error
    try {
      await axios.delete(`http://jsonplaceholder.typicode.com/users/${id}`);
    }
    catch(e) {
      console.log('error ' + e);
    }
    dispatch({
      type: 'DELETE_CONTACT',
      payload: id
    });      
  }

  // also possible to put it here
  static propTypes = {
    contact: PropTypes.object.isRequired
  };

  render() {
    const { contact } = this.props;
    const { showContactInfo } = this.state;

    return (
      <Consumer>
        {value => {
            const { dispatch } = value;
            return (
              <div className="card card-body mb-3">
                <h4>{ contact.name } <i onClick={() => {
                      this.setState({
                        showContactInfo: !this.state.showContactInfo
                      });
                }} className="fas fa-sort-down" style={{ cursor: 'pointer '}}></i>
                <i className="fas fa-times" style={{ cursor: 'pointer', float: 'right', color: 'red' }} onClick={this.onDeleteClick.bind(this, contact.id, dispatch)}></i>
                </h4>
                
                <Link to={`contact/edit/${contact.id}`}>
                  <i className="fas fa-pencil-alt"
                     style={{
                       cursor: 'pointer',
                       float: 'right',
                       color: 'black',
                       marginRight: '1rem'
                     }}
                  ></i>
                </Link>

                {showContactInfo ? 

                <ul className="list-group">
                  <li className="list-group-item">Email: { contact.email }</li>          
                  <li className="list-group-item">Phone: { contact.phone }</li>          
                </ul>
                : null }
              </div>
            )
        }}
      </Consumer>

    )
  }
}

export default Contact;
