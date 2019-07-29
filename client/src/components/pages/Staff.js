import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withAuth } from '@okta/okta-react';

class Staff extends Component {
  // Setting the initial state for user name and user email
  state = {
    currentUserName: '',
    currentUserEmail: ''
  };
  // Lifecycle method: When the component mounts, grab the idToken info from local storage
  componentDidMount() {
    const idToken = JSON.parse(localStorage.getItem('okta-token-storage'));
    // Setting the new state with the username and email obtained from the idToken
    this.setState({
      currentUserEmail: idToken.idToken.claims.email,
      currentUserName: idToken.idToken.claims.name
    });
  }

  render() {
    // Object destructuring used to retrieve the info from the state object
    const { currentUserEmail, currentUserName } = this.state;
    
    // Displaying the info from the idToken on the main page. 
    return (
      <div>
        <h1>Welcome {currentUserName}</h1>
        <p>Email: {currentUserEmail}</p>
        <p>You have reached the authorized staff area of the portal</p>
      </div>
    );
  }
}

export default Staff;