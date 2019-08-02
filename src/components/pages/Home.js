import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withAuth } from '@okta/okta-react';

export default withAuth(
    class Home extends Component {
        state = { authenticated: null };

        checkAuthentication = async () => {
            const authenticated = await this.props.auth.isAuthenticated();
            if (authenticated !== this.state.authenticated) {
                this.setState({ authenticated });
            }
        };

        async componentDidMount() {
            this.checkAuthentication();
        }

        async componentDidUpdate() {
            this.checkAuthentication();
        }

        login = async () => {
            this.props.auth.login('/');
        };

        logout = async () => {
            this.props.auth.logout('/');
        };

        render() {

            // Check state.authenticated to see if the user is authenicated
            if (this.state.authenticated === null) return null;

            // Ln 41: IF the user is authenticated they'll be taken to the staff portal
            // Ln 50: IF NOT then they will see the jumbotron with a button to take them to the login page 
            const mainContent = this.state.authenticated ? (
                <div>
                    <p className="lead">
                        You have entered the staff portal,{' '}
                        <Link to="/staff">click here</Link>
                    </p>
                    <button className="btn btn-light btn-lg" onClick={this.logout}>
                        Logout
          </button>
                </div>
            ) : ( // ternary 
                    <div>
                        <p className="lead">
                            If you are an authorized provider, please use your credentials to login to the portal.
          </p>
                        <button className="btn btn-dark btn-lg" onClick={this.login}>
                            Login
          </button>
                    </div>
                );

            return (
                <div className="jumbotron">
                    <h1 className="display-4">electroScribe</h1>
                    {mainContent}
                </div>
            );
        }
    }
);