import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class MedRecords extends Component {
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
                <h1>Medical Records</h1>
                <ul className="collection">
                    
                </ul>
            </div>

        )
    }
}

export default MedRecords;