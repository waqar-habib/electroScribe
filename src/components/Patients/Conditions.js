import React, { Component } from 'react';
import axios from 'axios';

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