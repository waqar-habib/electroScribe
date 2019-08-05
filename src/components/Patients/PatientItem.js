import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class PatientItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            item: props.item
        }
    }

    render() {
        return (
            <li className="collection-item">
                <Link to={`/patients/${this.state.item.pt_uuid}`}>
                    {this.state.item.pt_name}</Link>
            </li>
        )
    }
}

export default PatientItem;
