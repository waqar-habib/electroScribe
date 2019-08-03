import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'




class Navbar extends Component {
    render() {
        return (
            <Router>


                <nav className="navbar navbar-expand-sm navbar-primary bg-primary mb-4">
                    <div className="container">

                        <Link className="navbar-brand" style={{ color: "white" }} to="/">
                            electroScribe
          </Link>

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
                                    <Link className="nav-link" style={{ color: "white" }} to="/">
                                        Home
                </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" style={{ color: "white" }} to="/staff">
                                        Staff
                </Link>

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