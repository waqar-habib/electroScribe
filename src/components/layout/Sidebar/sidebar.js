import React from 'react';
import { slide as Menu } from 'react-burger-menu';

export default props => {
    return (
        <Menu>
            <a className="menu-item" href="/">
                Dashboard
      </a>

            <a className="menu-item" href="/laravel">
                My Account
      </a>

            <a className="menu-item" href="/angular">
                Messages
      </a>

            <a className="menu-item" href="/react">
                Medical Records
      </a>

            <a className="menu-item" href="/vue">
                Appoinments
      </a>

            <a className="menu-item" href="/node">
                Questionnaires
      </a>
            <a className="menu-item" href="/node">
                Trackers
      </a>
        </Menu>
    );
};