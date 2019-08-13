import React from 'react';
import './Home.css';
import Bacteria from '../Views/Videos/Bacteria.mp4';

const Home = () => (
  <div>
    <header className="v-header container">
      <div className="fullscreen-video-wrap">
        <video id='videoTag' autoPlay loop muted>
          <source src={Bacteria} type='video/mp4' />
        </video>
      </div>
    </header>

    <div className="homePage">
      <h1 style={{ textAlign: "center", textDecoration: "none", fontFamily: 'Roboto', color: 'white', fontWeight: 'bold', fontSize: '56px' }}>Welcome to electroScribe</h1>
      <h3 style={{ textAlign: "center" }}>The One Stop App to Manage Your Practice</h3>
      <br />
      <br />
      <h4 className="info" style={{ textAlign: "center", color: 'white' }}>Dear Doctor/Patient,
        With this application you will be able to see all of your information by just using this application anywhere anythime.
        The only thing you are supoosed to do is just downloading this app and entering your personal information.
        You will see you your personal records, medical records, messages, and etc. Login to see your madical information!
      </h4>
      <br />
      <a style={{ fontWeight: 'bold', color: "white", textDecoration: "none", fontSize: '16px' }} href="/login">Click to login</a>

    </div>


  </div>
)

export default Home;