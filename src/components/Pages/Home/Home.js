import React from 'react';
import './Home.css';
import Bacteria from '../Views/Videos/Bacteria.mp4';
// import DNA from '../Views/Videos/DNA.mov';
// import Hd from '../Views/Videos/Hd.mov';
// import Komp from '../Views/Videos/Komp.mp4';
// import Magen from '../Views/Videos/Magen.mp4';
// import Sonp from '../Views/Videos/Sonp.mp4';


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
      <h1 style={{ textAlign: "center", fontFamily: 'fantasy', color: 'blue', fontWeight: 'bold', fontSize: '38px' }}>Welcome to electroScribe</h1>
      <h4 style={{ textAlign: "center" }}>The Electronic Medical Record management app of the future!</h4>
    </div>


  </div>
)

export default Home;