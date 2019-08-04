import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Patients from './Patients';
import Home from './Home';
import PatientDetails from './PatientDetails';

const Main = () => (
    <main>
        <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/patients' component={Patients} />
            {/* Any other pages you create, add a new Route tag and link that component by importing it up top and then adding it here */}
            <Route exact path='/patients/:id' component={PatientDetails} />
        </Switch>
    </main>
)

export default Main;