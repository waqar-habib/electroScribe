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
// import AddPatientCondition from '../Conditions/AddPatientCondition';

const Main = () => (
    <main>
        <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/patients' component={Patients} />
            {/* Any other pages you create, add a new Route tag and link that component by importing it up top and then adding it here */}
            <Route exact path='/patients/add' component={AddPatient} />
            <Route exact path='/patients/edit/:id' component={EditPatient} />
            <Route exact path='/patients/:id' component={PatientDetails} />
            <Route exact path='/patients/:id/drugs/add' component={AddPatientDrug} />
            {/* <Route exact path='/patients/:id/conditions/add' component={AddPatientCondition} /> */}
            <Route exact path='/patients/:id/conditions' component={ConditionItem} />
            <Route exact path='/patients/:id/drugs' component={DrugItem} />
        </Switch>
    </main>
)

export default Main;