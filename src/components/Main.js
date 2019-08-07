import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Patients from './Patients';
import Home from './Home';
import PatientDetails from './PatientDetails';
import AddPatient from './AddPatients';
import EditPatient from './EditPatient';
import Dashboard from './pages/Dashboard';
import Account from './pages/Account';
import MedRecords from './pages/Medical-records';

const Main = () => (
    <main>
        <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/patients' component={Patients} />
            {/* Any other pages you create, add a new Route tag and link that component by importing it up top and then adding it here */}
            <Route exact path='/patients/add' component={AddPatient} />
            <Route exact path='/patients/edit/:id' component={EditPatient} />
            <Route exact path='/patients/:id' component={PatientDetails} />
            <Route exact path='/dashboard' component={Dashboard} />
            <Route exact path='/account' component={Account} />
            <Route exact path='/medical-records' component={MedRecords} />
        </Switch>
    </main>
)

export default Main;