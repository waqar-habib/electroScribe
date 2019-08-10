import React from 'react';
import './Home.css';

const Home = () => (
  <div>
    <div className="homePage">
      <h1 style={{ textAlign: "center", fontFamily: 'fantasy', color: 'blue', fontWeight: 'bold', fontSize: '34px' }}>ElectroScribe</h1>
      <h4 style={{ textAlign: "center" }}>Electronic Medical Records</h4>
    </div>
    <div>
      <h5>Mission Statement</h5>
      <p>ElectroScribe is a modern-day web application built around enabling health professionals and their patients to track and match their relatable data. Using ElectroScribe, individuals from each group can locate and identify where available skills can be found and best be applied, then save those destinations.</p>
    </div>
    <div>
      <h6>Team</h6>
      <p><span style={{ fontWeight: 'bold' }}>Waqar Habib</span></p>
      <p><span style={{ fontWeight: 'bold' }}>Fatih Ersoy</span></p>
      <p><span style={{ fontWeight: 'bold' }}>Andrew Bayles</span></p>
    </div>
  </div>
)

export default Home;