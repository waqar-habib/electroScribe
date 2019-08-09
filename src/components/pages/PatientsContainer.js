import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class PatientsContainer extends Component {
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
        axios.get('http://[::1]:3000/Patients')
            .then(response => {
                // Setting the patients state object to the response
                this.setState({patients: response.data}, () => {
                    console.log(this.state);
                })
            })
            .catch(err => console.log(err))
    }

    // Render is a lifecyle method
    render() {
        return (
            <div>
                
                        {this.state.patients.map((patient, i) => {
                            return (
                                <ul key={i}>
                                    <li>
                                        <Link to={`/patients/${patient.pt_uuid}`}>
                                        {patient.pt_name}</Link>
                                    </li>
                                    <li>{patient.pt_dob}</li>
                                    <li>{patient.pt_cell}</li>
                                </ul>
                            )
                        })}
                    
                

                <div className="fixed-action-button">
                    <Link to="/patients/add" className="btn-floating btn-large red">
                        <i className="fa fa-plus"></i>
                    </Link>
                </div>
            </div>
        )
    }
}

export default PatientsContainer;