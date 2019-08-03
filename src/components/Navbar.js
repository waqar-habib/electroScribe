import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Navbar extends Component {
    render(){
        return(
            <div>
                <nav className="blue darken-3">
                    <div className="nav-wrapper">
                    <a href="/" className="brand-logo center">electroScribe</a>
                    <a data-target="main-menu" className="sidenav-trigger show-on-large">
                        <i className="fa fa-bars"></i></a>
                    <ul className="right hide-on-small-only">
                        <li><Link to="/"><i className="fa fa-home"></i> Home</Link></li>
                    </ul>
                    <ul className="sidenav" id="main-menu">
                        <li><Link to="/patients/add"><i className="fa fa-users"></i> Patients</Link></li>
                        <li><Link to="/dashboard"><i className="fa fa-h-square"></i> Dashboard</Link></li>
                        <li><Link to="/account"><i className="fa fa-address-card"></i> Account</Link></li>
                        <li><Link to="/messages"><i className="fa fa-envelope-o"></i> Messages</Link></li>
                        <li><Link to="/medical-records"><i className="fa fa-heartbeat"></i> Medical Records</Link></li> 
                    </ul>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Navbar;