import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Patients extends Component {
    constructor() {
        super();
        // Create a state object
        this.state = {
            // Set patients to an empty array. You will have to use the same method when you are pulling in drugs, conditions and providers as well.
            patients: []
        }
    }

    // Create a componentWillMount lifecycle method
    componentWillMount() {
        // This will go to the backend and retrieve the info from LB API
        this.getPatients();
    }

    // Create a new method getPatients to make an axios request
    getPatients() {
        axios.get('http://[::1]:3000/patients')
            .then(response => {
                // Since the API is set up to retrieve individiual patients as objects you can drill into the object and chain more things on the response.data to filter out the response
                console.log(response.data);
            })
    }

    // Render is a lifecyle method
    render() {
        return (
            <div>
                <h1>Patients</h1>
                <div className="fixed-action-button">
                    <Link to="/patients/add" className="btn-floating btn-large red">
                        <i className="fa fa-plus"></i>
                    </Link>
                </div>
            </div>

        )
    }
}

export default Patients;