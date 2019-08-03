import React from 'react';
import { slide as Menu } from 'react-burger-menu';


export default props => {
    return (
        <Menu>
            <a className="menu-item" href="/dashboard">

                <i class="fa fa-h-square" aria-hidden="true"></i>


                <br />
                Dashboard
            </a>

            <a className="menu-item" href="/myAccount">
                <i class="fa fa-address-card" aria-hidden="true"></i>
                <br />
                My Account
      </a>

            <a className="menu-item" href="/messages">
                <i class="fa fa-envelope-o" aria-hidden="true"></i>
                <br />
                Messages
      </a>

            <a className="menu-item" href="/medicalRecords">
                <i class="fa fa-heartbeat" aria-hidden="true"></i>
                <br />
                Medical Records
      </a>

            <a className="menu-item" href="/appoinments">
                <i class="fa fa-calendar" aria-hidden="true"></i>
                <br />
                Appoinments
      </a>

            <a className="menu-item" href="/questionnaires">
                <i class="fa fa-question-circle-o" aria-hidden="true"></i>
                <br />
                Questionnaires
      </a>
            <a className="menu-item" href="/trackers">
                <i class="fa fa-line-chart" aria-hidden="true"></i>
                <br />
                Trackers
      </a>
        </Menu>
    );
};