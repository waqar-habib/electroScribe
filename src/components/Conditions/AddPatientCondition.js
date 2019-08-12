import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class AddPatientCondition extends Component {
    addPatientCondition(newPatientCondition) {
        let id = this.props.match.params.id;
        axios.request({
            method: 'POST',
            url: `http://localhost:3000/api/patients/${id}/conditions`,
            data: newPatientCondition
        }).then(response => {
            this.props.history.push(`/patients/${id}/conditions`);
        }).catch(err => console.log(err))
    };

    onSubmit(e) {
        const newPatientCondition = [{
            icd_10: this.refs.icd_10.value,
            condition_name: this.refs.condition_name.value,
            patientId: this.refs.patientId.value
        }]
        this.addPatientCondition(newPatientCondition);
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
                <h1>Add Conditions to Patient Record</h1>
                <br />      
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

export default AddPatientCondition;