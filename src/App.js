import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Security, SecureRoute, ImplicitCallback } from '@okta/okta-react';
import Navbar from './components/layout/Navbar/Navbar';
import Sidebar from './components/layout/Sidebar/sidebar';
import Home from './components/pages/Home';
import Staff from './components/pages/Staff';
import Login from './components/auth/Login';
import './App.css';


function onAuthRequired({ history }) {
  history.push('/login');
}

class App extends Component {
  render() {
    return (
      <Router>
        <Security issuer='https://dev-502746.okta.com/oauth2/default'
          client_id='0oa10h5scn0ZMayGB357'
          redirect_uri={window.location.origin + '/implicit/callback'}
          onAuthRequired={onAuthRequired} >
          <div className="App">
            <Navbar />
            <Sidebar />
            <div className="container">
              <Route path="/" exact={true} component={Home} />
              <SecureRoute path="/staff" exact={true} component={Staff} />
              <Route path='/login' render={() => <Login baseUrl='https://dev-502746.okta.com' />} />
              <Route path='/implicit/callback' component={ImplicitCallback} />
            </div>

          </div>
        </Security>
      </Router>
    )
  }
}

export default App;