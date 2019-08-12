import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class AddPatientCondition extends Component {
    // Creating an addPatient method to take in the newPatient object w/ the form data
    addPatientCondition(newPatientCondition) {
        let id = this.props.match.params.id;
        console.log(id)
        // Making a POST request thru axios
        axios.request({
            method: 'POST',
            url: `http://localhost:3000/api/patients/${id}/conditions`,
            data: newPatientCondition
        }).then(response => {
            // Redirecting to patients page
            this.props.history.push('/patients');
        }).catch(err => console.log(err));
    };

    // Creating an onSubmit method that takes in "e" or event which is the input from the form and stores it in newPatient object. 
    onSubmit(e) {
        //console.log(this.refs.name.value);
        // Making sure to create an array of object [{}] since this is the format the API accepts POST requests
        const newPatientCondition = [{
            icd_10: this.refs.icd_10.value
            condition_name: this.refs.condition_name.value,
            patientId: this.refs.patientId.value
        }]
        // Adds the newPatient object using the addPatient method created above. 
        this.addPatientCondition(newPatientCondition);
        e.preventDefault();
    }

    render() {
        return (
            <div>
                <br />
                <Link className="btn grey" to="/patients">Back</Link>
                <h1>Add Conditions for Patient</h1>
                <form className="col s12" onSubmit={this.onSubmit.bind(this)}>
                    <div className="row">
                        <div className="input-field col s6">
                            <input name="icd_10" ref="icd_10" placeholder="K21.0" id="icd_10" type="text" className="validate" />
                            <label style={{ color: "black", fontWeight: 'bold' }} className="active" htmlFor="icd_10">ICD-10</label>
                            <span className="helper-text">ICD-10 must be in XYY.Y format</span>                            
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s6">
                            <input name="condition_name" ref="condition_name" placeholder="GERD" id="condition_name" type="text" className="validate" />
                            <label style={{ color: "black", fontWeight: 'bold' }} className="active" htmlFor="condition_name">Condition Name</label>
                        </div>
                    </div>                    
                    <div className="row">
                        <div className="input-field col s6">
                            <input name="patientId" ref="patientId" placeholder="1" id="patientId" type="text" className="validate" />
                            <label style={{ color: "black", fontWeight: 'bold' }} className="active" htmlFor="patientId">Patient ID</label>
                        </div>
                    </div>
                    <div className="row">
                        <button className="btn waves-effect waves-light" type="submit" value="Save" name="action">Add Patient Condition</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default AddPatientCondition;