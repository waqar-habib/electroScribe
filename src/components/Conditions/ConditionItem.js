import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

// Create different components for conditions, drugs. Each ConditionsItem and DrugsItem should have their own axios calls. These components will GET response by id. Once the object from the axios call is received and stored in the state (use map function - watch 16:53 in the video "MeetupItem") you will then create a separate Chart component and render ConditionsItem + DrugsItem in the Chart component's render function using keys <ConditionsItem key={}> 

class ConditionItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            conditions: []
        }
    }

    componentDidMount() {
        this.getPatientConditions();
    }

    getPatientConditions() {
        let id = this.props.match.params.id;
        axios.get(`http://localhost:3000/api/patients/${id}/conditions`)
            .then(response => {
                this.setState({ conditions: response.data }, () => {
                })       
        })        
    }

    render() {
        return (
            <div>
                <br />
                <br />
                <Link className="btn grey" to="/patients">Back</Link>
                <br />          
                <br />            
                <h3>Patient Conditions</h3>
                <table className="highlight">
                    <thead>
                        <tr>
                            <th>ICD-10</th>
                            <th>Condition Name</th>
                        </tr>
                    </thead>
                        <tbody>
                            {this.state.conditions.map((condition, i) => {
                                return (
                                    <tr key={i}>
                                        <td>{condition.icd_10}</td>
                                        <td>{condition.condition_name}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                </table>
            </div>
        )
    }
}

export default ConditionItem;