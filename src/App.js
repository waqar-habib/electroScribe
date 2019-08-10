import React from 'react';
import './App.css';
import Main from './components/pages/Main';
import Navbar from './components/Navbar/Navbar';

const App = () => (
  <div>
    <Navbar />
    <div className="container">
      <Main />
    </div>
  </div>
)

export default App;
