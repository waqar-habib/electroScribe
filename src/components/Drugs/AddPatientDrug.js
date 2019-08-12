import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class AddPatientDrug extends Component {
    // Creating an addPatient method to take in the newPatient object w/ the form data
    addPatientDrug(newPatientDrug) {
        let id = this.props.match.params.id;
        // Making a POST request thru axios
        axios.request({
            method: 'POST',
            url: `http://localhost:3000/api/patients/${id}/drugs`,
            data: newPatientDrug
        }).then(response => {
            // Redirecting to patients page
            this.props.history.push(`/patients/${id}/drugs`);
        }).catch(err => console.log(err));
    };

    // Creating an onSubmit method that takes in "e" or event which is the input from the form and stores it in newPatient object. 
    onSubmit(e) {
        //console.log(this.refs.name.value);
        // Making sure to create an array of object [{}] since this is the format the API accepts POST requests
        const newPatientDrug = [{
            drug_name: this.refs.drug_name.value,
            patientId: this.refs.patientId.value
        }]
        // Adds the newPatient object using the addPatient method created above. 
        this.addPatientDrug(newPatientDrug);
        e.preventDefault();
    }

    render() {
        return (
            <div>
                <br />
                <br />
                <Link className="btn grey" to="/patients">Back</Link>
                <br />
                <br />
                <h1>Add Drugs to Patient Record</h1>
                <br />
                <br />
                <form className="col s12" onSubmit={this.onSubmit.bind(this)}>
                    <div className="row">
                        <div className="input-field col s6">
                            <input name="drug_name" ref="drug_name" placeholder="Hydrocodone" id="drug_name" type="text" className="validate" />
                            <label style={{ color: "black", fontWeight: 'bold' }} className="active" htmlFor="drug_name">Drug Name</label>
                        </div>
                        <div className="input-field col s6">
                            <input name="patientId" ref="patientId" placeholder="1" id="patientId" type="text" className="validate" />
                            <label style={{ color: "black", fontWeight: 'bold' }} className="active" htmlFor="patientId">Patient ID</label>
                            <span className="helper-text">Patient ID must match the number in the URL</span>                            
                        </div>
                    </div>
                    <div className="row">
                        <button className="btn waves-effect waves-light" type="submit" value="Save" name="action">Submit</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default AddPatientDrug;