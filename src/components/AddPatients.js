import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class AddPatient extends Component {
    onSubmit(){
        return 1;
    }

    render(){
        return(
            <div>
                <br />
                <Link className="btn grey" to="/patients">Back</Link>                
                <h1>Add Patient</h1>
                <form className="col s12" onSubmit={this.onSubmit.bind(this)}>
                    <div className="row">
                        <div className="input-field col s12">
                            <input name="pt_uuid" ref="pt_uuid" placeholder="1688546c-e060-4bb4-a5ba-bb1af8846f30" id="pt_uuid" type="text" className="validate" />
                            <label class="active" htmlFor="pt_uuid">Patient ID</label>
                            <span class="helper-text">Visit https://www.uuidgenerator.net/ to generate a unique patient ID number</span>
                        </div>
                    </div>                    
                    <div className="row">
                        <div className="input-field col s6">
                            <input name="name" ref="name" placeholder="John Doe" id="name" type="text" className="validate" />
                            <label class="active" htmlFor="name">Name</label>
                        </div>
                        <div className="input-field col s6">
                            <input name="email" ref="email" placeholder="john.doe@test.com" id="email" type="text" className="validate" />
                            <label class="active"  htmlFor="email">Email</label>
                        </div>                        
                    </div>

                    <div className="row">
                        <div className="input-field col s6">
                            <input name="cell" ref="cell" placeholder="346-252-3365" id="cell" type="text" className="validate" />
                            <label class="active"  htmlFor="cell">Cell</label>
                        </div>
                        <div className="input-field col s6">
                            <input name="gender" ref="gender" placeholder="Male" id="gender" type="text" className="validate" />
                            <label class="active"  htmlFor="gender">Gender</label>
                        </div>
                    </div>

                    <div className="row">
                        <div className="input-field col s6">
                            <input name="dob" ref="dob" placeholder="1994-01-01" id="dob" type="text" className="validate" />
                            <label class="active"  htmlFor="dob">Date of Birth</label>
                            <span class="helper-text">Date must be in YYYY-MM-DD format</span>
                        </div>
                    </div>
                    <div className="row">
                        <button class="btn waves-effect waves-light" type="submit" value="Save" name="action">Add Patient</button> 
                    </div>                                                                                                    
                </form>
            </div>
        )
    }
}

export default AddPatient;