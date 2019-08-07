import React from 'react';
import './App.css';
import Main from './components/pages/Main';
import Navbar from './components/layout/Navbar/Navbar';
import Sidebar from './components/layout/Sidebar/sidebar'
const App = () => (
  <div>
    <Navbar />
    <Sidebar />
    <div className="container">
      <Main />
    </div>
  </div>
)

export default App;
