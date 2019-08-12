import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

// Create different components for conditions, drugs. Each ConditionsItem and DrugsItem should have their own axios calls. These components will GET response by id. Once the object from the axios call is received and stored in the state (use map function - watch 16:53 in the video "MeetupItem") you will then create a separate Chart component and render ConditionsItem + DrugsItem in the Chart component's render function using keys <ConditionsItem key={}> 

class DrugItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            drugs: []
        }
    }

    componentDidMount() {
        this.getPatientDrugs();
    }

    getPatientDrugs() {
        let id = this.props.match.params.id;
        axios.get(`http://localhost:3000/api/patients/${id}/drugs`)
            .then(response => {
                this.setState({ drugs: response.data }, () => {})              
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
                <h3>Drugs</h3>
                <table className="highlight">
                    <thead>
                        <tr>
                            <th>Drug Name</th>
                        </tr>
                    </thead>
                            <tbody>
                                {this.state.drugs.map((drug, i) => {
                                    return (
                                        <tr key={i}>
                                            <td>{drug.drug_name}</td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                </table>
            </div>
        )
    }
}

export default DrugItem;