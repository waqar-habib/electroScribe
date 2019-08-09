import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Account extends Component {
    constructor() {
        super();
    }

    // Create a componentWillMount lifecycle method
    componentWillMount() {
        // This will go to the backend and retrieve the info from LB API
    }

    // Render is a lifecyle method
    render() {
        return (
            <div>
                <h1>Account</h1>
                <ul className="collection">
                    
                </ul>
            </div>

        )
    }
}

export default Account;