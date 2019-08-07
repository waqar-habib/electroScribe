import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';



class AddPatient extends Component {
    // Creating an addPatient method to take in the newPatient object w/ the form data
    addPatient(newPatient) {
        //console.log(newPatient)
        // Making a POST request thru axios
        axios.request({
            method: 'POST',
            url: 'http://[::1]:3000/patients/',
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
            pt_uuid: this.refs.pt_uuid.value,
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
                <h1 style={{ textAlign: "center", backgroundColor: "#007bff", color: "White", fontFamily: 'Arial, Helvetica, sans-serif' }}>Add Patient</h1>
                <hr />
                <Link className="btn btn-secondary" to="/patients">Back</Link>
                <br />
                <br />


                <form className="col s12" onSubmit={this.onSubmit.bind(this)}>
                    <div class="form-row">
                        <div className="input-field col s12">
                            <label className="active" for="inputEmail4" htmlFor="pt_uuid">Patient ID:</label>
                            <input name="pt_uuid" ref="pt_uuid" type="text" className="form-control" id="pt_uuid" placeholder="166546c-e060-4bb4-a5ba-bb1af646f30" />
                            <span className="helper-text">Visit https://www.uuidgenerator.net/ to generate a unique patient ID number</span>
                        </div>
                        <div className="form-group col-md-6">
                            <label className="active" for="inputName" htmlFor="pt_uuid"> Name:</label>
                            <input name="pt_name" ref="pt_name" type="text" className="form-control" id="pt_name" placeholder="John Doe" />
                        </div>

                    </div>
                    <div class="form-row">

                        <div className="form-group col-md-6">
                            <label className="active" for="inputEmail4" htmlFor="pt_uuid"> Email:</label>
                            <input name="pt_email" ref="pt_email" type="text" className="form-control" id="pt_email" placeholder="john.doe@test.com" />
                        </div>
                        <div className="form-group  col-md-6">
                            <label className="active" for="inputGender" htmlFor="pt_gender"> Gender:</label>
                            <input name="pt_gender" ref="pt_gender" type="text" className="form-control" id="pt_gender" placeholder="Male" />
                        </div>
                    </div>

                    <div class="form-row">
                        <div className="form-group col-md-6">
                            <label className="active" for="inputCell" htmlFor="pt_cell"> Cell:</label>
                            <input name="pt_cell" ref="pt_cell" type="text" className="form-control" id="pt_cell" placeholder="346-252-3365" />
                            <span className="helper-text">Cell number must be in XXX-XXX-XXXX format</span>
                        </div>
                        <div className="form-group col-md-6">
                            <label className="active" for="inputBirth" htmlFor="pt_dob"> Date of Birth:</label>
                            <input name="pt_dob" ref="pt_dob" type="text" className="form-control" id="pt_dob" placeholder="1994-01-01" />
                            <span className="helper-text">Date must be in YYYY-MM-DD format</span>
                        </div>

                    </div>



                    <div className="row">
                        <button className="btn btn-secondary" type="submit" value="Save" name="action">Add Patient</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default AddPatient;