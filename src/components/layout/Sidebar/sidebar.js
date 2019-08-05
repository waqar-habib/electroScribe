import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import { Link } from 'react-router-dom';


export default props => {
    return (
        <Menu>
            <Link className="menu-item" to="/dashboard">
                <i className="fa fa-h-square" aria-hidden="true"></i>
                <br />
                Dashboard
      </Link>
            <Link className="menu-item" to="/patients/">
                <i className="fa fa-users" aria-hidden="true"></i>
                <br />
                Patients
      </Link>

            <Link className="menu-item" to="/myAccount">
                <i className="fa fa-address-card" aria-hidden="true"></i>
                <br />
                My Account
      </Link>

            <Link className="menu-item" to="/messages">
                <i className="fa fa-envelope-o" aria-hidden="true"></i>
                <br />
                Messages
      </Link>

            <Link className="menu-item" to="/medicalRecords">
                <i className="fa fa-heartbeat" aria-hidden="true"></i>
                <br />
                Medical Records
      </Link>

            <Link className="menu-item" to="/appoinments">
                <i className="fa fa-calendar" aria-hidden="true"></i>
                <br />
                Appoinments
      </Link>


            <Link className="menu-item" to="/trackers">
                <i className="fa fa-line-chart" aria-hidden="true"></i>
                <br />
                Trackers
      </Link>
        </Menu >
    );
};