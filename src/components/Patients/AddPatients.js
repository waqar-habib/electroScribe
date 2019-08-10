import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Patients.css';
class AddPatient extends Component {
    // Creating an addPatient method to take in the newPatient object w/ the form data
    addPatient(newPatient) {
        //console.log(newPatient)
        // Making a POST request thru axios
        axios.request({
            method: 'POST',
            url: 'http://localhost:3000/api/patients',
            data: newPatient
        }).then(response => {
            // Redirecting to patients page
            this.props.history.push('/patients');
        }).catch(err => console.log(err));
    };

    // Creating an onSubmit method that takes in "e" or event which is the input from the form and stores it in newPatient object. 
    onSubmit(e) {
        //console.log(this.refs.name.value);
        // Making sure to create an array of object [{}] since this is the format the API accepts POST requests
        const newPatient = [{
            pt_name: this.refs.pt_name.value,
            pt_email: this.refs.pt_email.value,
            pt_cell: this.refs.pt_cell.value,
            pt_gender: this.refs.pt_gender.value,
            pt_dob: this.refs.pt_dob.value
        }]
        // Adds the newPatient object using the addPatient method created above. 
        this.addPatient(newPatient);
        e.preventDefault();
    }

    render() {
        return (
            <div>
                <br />
                <Link className="btn grey" to="/patients">Back</Link>
                <h1>Add Patient</h1>
                <form className="col s12" onSubmit={this.onSubmit.bind(this)}>
                    <div className="row">
                        <div className="input-field col s6">
                            <input name="pt_name" ref="pt_name" placeholder="John Doe" id="pt_name" type="text" className="validate" />
                            <label style={{ color: "black", fontWeight: 'bold' }} className="active" htmlFor="pt_name">Name</label>
                        </div>
                        <div className="input-field col s6">
                            <input name="pt_email" ref="pt_email" placeholder="john.doe@test.com" id="pt_email" type="text" className="validate" />
                            <label style={{ color: "black", fontWeight: 'bold' }} className="active" htmlFor="pt_email">Email</label>
                        </div>
                    </div>

                    <div className="row">
                        <div className="input-field col s6">
                            <input name="pt_cell" ref="pt_cell" placeholder="346-252-3365" id="pt_cell" type="text" className="validate" />
                            <label style={{ color: "black", fontWeight: 'bold' }} className="active" htmlFor="pt_cell">Cell</label>
                            <span className="helper-text">Cell number must be in XXX-XXX-XXXX format</span>
                        </div>
                        <div className="input-field col s6">
                            <input name="pt_gender" ref="pt_gender" placeholder="Male" id="pt_gender" type="text" className="validate" />
                            <label style={{ color: "black", fontWeight: 'bold' }} className="active" htmlFor="pt_gender">Gender</label>
                        </div>
                    </div>

                    <div className="row">
                        <div className="input-field col s6">
                            <input name="pt_dob" ref="pt_dob" placeholder="1994-01-01" id="pt_dob" type="text" className="validate" />
                            <label style={{ color: "black", fontWeight: 'bold' }} className="active" htmlFor="pt_dob">Date of Birth</label>
                            <span className="helper-text">Date must be in YYYY-MM-DD format</span>
                        </div>
                    </div>
                    <div className="row">
                        <button className="btn waves-effect waves-light" type="submit" value="Save" name="action">Add Patient</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default AddPatient;