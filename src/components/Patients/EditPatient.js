import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class EditPatient extends Component {
    constructor(props){
        super(props);
        this.state = {
            pt_name: '',
            pt_email: '',
            pt_cell: '',
            pt_gender: '',
            pt_dob: '',
            id: ''
        }

        // Bind "this" to the handleInputChange method
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    componentWillMount(){
        this.getPatientDetails();
    }

    // Create a new method getPatientDetails to make an axios request to retrieve details of just ONE patient by pt_uuid
    getPatientDetails() {
        let id = this.props.match.params.id;
        axios.get(`http://localhost:3000/api/patients/${id}`)
            .then(response => {
                // Set state to the response that was fetched
                this.setState({
                    pt_name: response.data.pt_name,
                    pt_email: response.data.pt_email,
                    pt_cell: response.data.pt_cell,
                    pt_gender: response.data.pt_gender,
                    pt_dob: response.data.pt_dob
                }, () => {
                    console.log(this.state)
                });
            })
            .catch(err => console.log(err))
    }    

    editPatient(newPatient){
        //console.log(newPatient)
        // Making a PUT request thru axios
        axios.request({
            method: 'PUT',
            url: `http://localhost:3000/api/patients/${this.state.id}`,
            data: newPatient
        }).then(response => {
            // Redirecting to patients page
            this.props.history.push('/patients');
        }).catch(err => console.log(err));        
    }

    // Creating an onSubmit method that takes in "e" or event which is the input from the form and stores it in newPatient object. 
    onSubmit(e){
        //console.log(this.refs.name.value);
        // Making sure to create an array of object [{}] since this is the format the API accepts UPDATE requests
        const newPatient = [{
            pt_name: this.refs.pt_name.value,
            pt_email: this.refs.pt_email.value,
            pt_cell:  this.refs.pt_cell.value,
            pt_gender: this.refs.pt_gender.value,
            pt_dob: this.refs.pt_dob.value 
        }]
        // Adds the newPatient object using the addPatient method created above. 
        this.editPatient(newPatient);
        e.preventDefault();
    }

    handleInputChange(e){
        const target = e.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        })
    }

    render(){
        return(
            <div>
                <br />
                <Link className="btn grey" to="/patients">Back</Link>                
                <h1>Edit Patient</h1>
                <form className="col s12" onSubmit={this.onSubmit.bind(this)}>        
                    <div className="row">
                        <div className="input-field col s6">
                            <input name="pt_name" ref="pt_name" placeholder="John Doe" id="pt_name" type="text" className="validate" value={this.state.pt_name} onChange={this.handleInputChange} />
                            <label className="active" htmlFor="pt_name">Name</label>
                        </div>
                        <div className="input-field col s6">
                            <input name="pt_email" ref="pt_email" placeholder="john.doe@test.com" id="pt_email" type="text" className="validate" value={this.state.pt_email} onChange={this.handleInputChange}  />
                            <label className="active"  htmlFor="pt_email">Email</label>
                        </div>                        
                    </div>

                    <div className="row">
                        <div className="input-field col s6">
                            <input name="pt_cell" ref="pt_cell" placeholder="346-252-3365" id="pt_cell" type="text" className="validate" value={this.state.pt_cell} onChange={this.handleInputChange}  />
                            <label className="active"  htmlFor="pt_cell">Cell</label>
                            <span className="helper-text">Cell number must be in XXX-XXX-XXXX format</span>
                        </div>
                        <div className="input-field col s6">
                            <input name="pt_gender" ref="pt_gender" placeholder="Male" id="pt_gender" type="text" className="validate" value={this.state.pt_gender} onChange={this.handleInputChange}  />
                            <label className="active"  htmlFor="pt_gender">Gender</label>
                        </div>
                    </div>

                    <div className="row">
                        <div className="input-field col s6">
                            <input name="pt_dob" ref="pt_dob" placeholder="1994-01-01" id="pt_dob" type="text" className="validate" value={this.state.pt_dob} onChange={this.handleInputChange} />
                            <label className="active"  htmlFor="pt_dob">Date of Birth</label>
                            <span className="helper-text">Date must be in YYYY-MM-DD format</span>
                        </div>
                    </div>
                    <div className="row">
                        <button className="btn waves-effect waves-light" type="submit" value="Save" name="action">Save Patient Details</button> 
                    </div>                                                                                                    
                </form>
            </div>
        )
    }
}

export default EditPatient;