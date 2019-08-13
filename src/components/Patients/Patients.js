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
        axios.get('http://localhost:3000/api/patients')
            .then(response => {
                // Setting the patients state object to the response
                this.setState({ patients: response.data }, () => { })
            })
            .catch(err => console.log(err))
    }

    // Render is a lifecyle method
    render() {
        return (
            <div>
                <br />
                <br />
                <h1>Current Patients</h1>
                <br />
                <Link to="/patients/add" className="btn waves-effect waves-light">Add New Patient
                    </Link>
                <br />
                <br />
                <p>Click on a patient name to see their medical record</p>
                <table className="highlight">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Date of Birth</th>
                            <th>Cell Number</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.patients.map((patient, i) => {
                            return (
                                <tr key={i}>
                                    <td>
                                        <Link to={`/patients/${patient.id}`}>{patient.pt_name}</Link>
                                    </td>
                                    <td>{patient.pt_dob}</td>
                                    <td>{patient.pt_cell}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
                <br />
                <br />
                <br />
                <br />
            </div>
        )
    }
}

export default Patients;
