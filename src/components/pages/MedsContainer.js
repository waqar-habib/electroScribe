import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class MedsContainer extends Component {
    constructor() {
        super();
    }

    // Create a componentWillMount lifecycle method
    componentWillMount() {
    }

    // Render is a lifecyle method
    render() {
        return (
            <div className="dash-container">
                <p>Meds container.</p>
            </div>
        )
    }
}

export default MedsContainer;