import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class PatientDetails extends Component {
    constructor(props){
        super(props);
        this.state = {
            details: ''
        }
    }

    componentWillMount(){
        this.getPatient();
    }

    // Create a new method getPatient to make an axios request to retrieve details of just ONE patient by id
    getPatient() {
        let id = this.props.match.params.id;
        console.log(id)
        axios.get(`http://localhost:3000/api/patients/${id}`)
            .then(response => {
                // Setting the patients state object to the response
                this.setState({details: response.data}, () => {
                    //console.log(this.state);
                })
            })
            .catch(err => console.log(err))
    }

    // Creating a new onDelete method to execute when button in Ln 52 is clicked
    onDelete(){
        let id = this.state.details.id;
        axios.delete(`http://localhost:3000/api/patients/${id}`)
            .then(response => {
                this.props.history.push('/patients')
            }).catch(err => console.log(err))
    }

    render(){
        return(
            <div>
                <div>
                    <br />
                    <Link className="btn grey" to="/patients">Back</Link>
                    <h1>Patient Details</h1>
                </div>
                <div className="row">
                    <div className="col s12 m6">
                    <div className="card blue-grey darken-1">
                        <div className="card-content white-text">
                        <span className="card-title">{this.state.details.pt_name}</span>
                        <p>Gender: {this.state.details.pt_gender}</p>
                        <p>Date of Birth: {this.state.details.pt_dob}</p>
                        <p>Email: {this.state.details.pt_email}</p>
                        <p>Cell: {this.state.details.pt_cell}</p>
                        </div>
                        <div className="card-action">
                        <Link to={`/patients/${this.state.details.id}/conditions`}>Chart</Link>
                        <Link to={`/patients/edit/${this.state.details.id}`}>Edit</Link>
                        {/*Ln 52: Adding an onClick prop to the button tag so we can bind the click to the click handler above*/}
                        <button onClick={this.onDelete.bind(this)} className="btn waves-effect waves-light red" type="delete" name="action">Delete
                        </button>
                        </div>
                    </div>
                    </div>
                </div>                
            </div>
        )
    }
}

export default PatientDetails;