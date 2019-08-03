import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Patients extends Component {
    render(){
        return(
            <div>
                <h1>Patients</h1>
                <div className="fixed-action-button">
                <Link to="/patients/add" className="btn-floating btn-large red">
                    <i className="fa fa-plus"></i>
                </Link>
            </div>
            </div>

        )
    }
}

export default Patients;