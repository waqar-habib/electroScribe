import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Patients from '../Patients/Patients';
import Home from './Home/Home';
import PatientDetails from '../Patients/PatientDetails';
import AddPatient from '../Patients/AddPatients';
import EditPatient from '../Patients/EditPatient';
import Dashboard from '../Dashboard/Dashboard';
import Account from '../Account/Account';
import MedRecords from '../MedicalRecords/Medical-records';


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