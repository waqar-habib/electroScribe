import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Patients from '../Patients/Patients';
import Home from './Home/Home';
import PatientDetails from '../Patients/PatientDetails';
import AddPatient from '../Patients/AddPatients';
import EditPatient from '../Patients/EditPatient';
import ConditionItem from '../Conditions/ConditionItem';
import DrugItem from '../Drugs/DrugItem';
import AddPatientDrug from '../Drugs/AddPatientDrug';
import AddPatientCondition from '../Conditions/AddPatientCondition';
import Login from "../Login/login";
import Dashboard from '../Dashboard/dashboard'


const Main = () => (
    <main>
        <Switch>
            <Route exact path='/' component={Home} />
            <Route path="/login" exact component={Login} />
            <Route path="/dashboard" exact component={Dashboard} />
            <Route exact path='/patients' component={Patients} />
            <Route exact path='/patients/add' component={AddPatient} />
            <Route exact path='/patients/edit/:id' component={EditPatient} />
            <Route exact path='/patients/:id' component={PatientDetails} />
            <Route exact path='/patients/:id/drugs/add' component={AddPatientDrug} />
            <Route exact path='/patients/:id/conditions/add' component={AddPatientCondition} />
            <Route exact path='/patients/:id/conditions' component={ConditionItem} />
            <Route exact path='/patients/:id/drugs' component={DrugItem} />
        </Switch>
    </main>
)

export default Main;