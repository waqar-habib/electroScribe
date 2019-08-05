import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'




class Navbar extends Component {
    render() {
        return (
            <Router>


                <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-4">
                    <div className="container">

                        <a className="brand-logo center" style={{ color: "white" }} href="/">
                            electroScribe
          </a>

                        <button
                            className="navbar-toggler"
                            type="button"
                            data-toggle="collapse"
                            data-target="#navbarNav"
                        >
                            <span className="navbar-toggler-icon" />
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <a className="nav-link" style={{ color: "white" }} href="/">
                                        <i className="fa fa-home"> </i> Home
                                    </a>
                                </li>

                            </ul>
                        </div>
                    </div>
                </nav>
            </Router >
        );
    }
}

export default Navbar;