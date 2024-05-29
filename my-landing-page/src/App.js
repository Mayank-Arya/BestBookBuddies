// src/App.js
import React from 'react';
import CustomNavbar from './components/Navbar';
import Header from './components/Header';
import Profile from './components/profile';
import './App.css';

function App() {
  return (
    <div className="App">
      <CustomNavbar />
      <Header />
      <Profile/>
    </div>
  );
}

export default App;








