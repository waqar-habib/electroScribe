import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css";

class Navbar extends Component {
    render() {
        return (
            <div>
                <nav className="blue lighter-3">
                    <div className="nav-wrapper">
                        <a href="/" className="brand-logo center" style={{ textDecoration: 'none' }}>electroScribe</a>
                        <a data-target="main-menu" className="sidenav-trigger show-on-large">
                            <i className="fa fa-bars"></i></a>
                    </div>
                </nav>
                <div>
                    <ul className="sidenav" id="main-menu">
                        <li>
                            <Link to="/">
                                <i className="fa fa-home"></i>electroScribe
                            </Link>
                        </li>
                        <br />
                        <li className="sideLinks">
                            <Link to="/dashboard">
                                <i className="fa fa-h-square"></i>Dashboard
                            </Link>
                        </li>
                        <li className="sideLinks">
                            <Link to="/patients/">
                                <i className="fa fa-users"></i>Patient Database
                            </Link>
                        </li>
                        {/* <li className="sideLinks">
                            <Link to="/chart">
                                <i className="fa fa-heartbeat"></i>Medical Records
                            </Link>
                        </li> */}
                    </ul>
                </div>
            </div>
        )
    }
}

export default Navbar;