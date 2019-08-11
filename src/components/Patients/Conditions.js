import React, { Component } from 'react';
import axios from 'axios';

// Create different components for conditions, drugs. Each ConditionsItem and DrugsItem should have their own axios calls. These components will GET response by id. Once the object from the axios call is received and stored in the state (use map function - watch 16:53 in the video "MeetupItem") you will then create a separate Chart component and render ConditionsItem + DrugsItem in the Chart component's render function using keys <ConditionsItem key={}> 

class Conditions extends Component {
    constructor(props) {
        super(props);
        this.state = {
            conditions: ''
        }
    }

    componentDidMount() {
        this.getPatientConditions();
    }

    getPatientConditions() {
        let id = this.props.match.params.id;
        console.log(id);
        axios.get(`http://localhost:3000/api/patients/${id}/conditions`)
            .then(response => {
                this.setState({ conditions: response.data }, () => {
                    console.log(this.state);
                }) 
                           
        })        

    }

    render() {
        return (
            <div>
                <h1>Conditions</h1>
                <p>                        
                    Condition name:
                </p>
            </div>
        )
    }
}

export default Conditions;