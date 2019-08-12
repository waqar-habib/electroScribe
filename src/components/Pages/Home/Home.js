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
      <h1 style={{ textAlign: "center", fontFamily: 'Roboto', color: 'white', fontWeight: 'bold', fontSize: '56px' }}>Welcome to electroScribe</h1>
      <h4 style={{ textAlign: "center" }}>The One Stop App to Manage Your Practice</h4>
    </div>


  </div>
)

export default Home;