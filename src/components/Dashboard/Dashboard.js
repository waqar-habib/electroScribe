import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import DashContainer from './DashContainer';

class Dashboard extends Component {
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
                <h1>Dashboard</h1>
                <ul className="collection">
                    <DashContainer />
                </ul>
            </div>

        )
    }
}

export default Dashboard;