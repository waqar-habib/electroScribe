import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class DashContainer extends Component {
    constructor() {
        super();
    }

    // Create a componentWillMount lifecycle method
    componentWillMount() {
    }

    // Render is a lifecyle method
    render() {
        return (
            <div>
                <p>Dash container.</p>
            </div>
        )
    }
}

export default DashContainer;