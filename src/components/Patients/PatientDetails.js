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
        axios.get(`http://localhost:3000/api/patients/${id}`)
            .then(response => {
                // Setting the patients state object to the response
                this.setState({details: response.data}, () => {
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
                    <br />
                    <Link className="btn grey" to="/patients">Back</Link>
                    <br />
                    <br />
                    <h1><b>{this.state.details.pt_name}'s</b> Medical Record</h1>
                    <br />
                </div>
                <div className="row">
                    <div className="col s12 m6">
                    <div className="card blue-grey darken-1">
                        <div className="card-content white-text">
                        <p><b>Gender:</b> {this.state.details.pt_gender}</p>
                        <p><b>Date of Birth:</b> {this.state.details.pt_dob}</p>
                        <p><b>Email:</b> {this.state.details.pt_email}</p>
                        <p><b>Cell:</b> {this.state.details.pt_cell}</p>
                        </div>
                        <div className="card-action">
                        <Link to={`/patients/${this.state.details.id}/conditions`}>Conditions</Link>
                        <Link to={`/patients/${this.state.details.id}/drugs`}>Drugs</Link>
                        {/*Ln 52: Adding an onClick prop to the button tag so we can bind the click to the click handler above*/}
                        <button onClick={this.onDelete.bind(this)} className="btn waves-effect waves-light red" type="delete" name="action">Delete
                        </button>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col s12 m6">
                        <p>Click below to prescribe drugs to <b>{this.state.details.pt_name}</b></p>
                        <button className="btn waves-effect waves-light">
                            <Link to={`/patients/${this.state.details.id}/drugs/add`}>Prescribe New Drug</Link>
                        </button>
                    </div>
                </div>
                <div className="row">
                    <div className="col s12 m6">
                        <p>Click below to new conditions to <b>{this.state.details.pt_name}'s</b> medical record</p>
                        <button className="btn waves-effect waves-light">
                            <Link to={`/patients/${this.state.details.id}/conditions/add`}>Add New Condition</Link>
                        </button>                        
                    </div> 
                </div>                
            </div>
        )
    }
}

export default PatientDetails;