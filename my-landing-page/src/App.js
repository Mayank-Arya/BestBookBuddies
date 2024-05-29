// src/App.js
import React from 'react';
import CustomNavbar from './components/Navbar';
import Header from './components/Header';
import Profile from './components/profile';
import Card from './components/Card'
import Key from './components/Key'
import DDtools from './components/DDtools';
import Features from './components/Features';
import UItemplate from './components/UItemplate';
import Footer1 from './components/Footer1';
import './App.css';

function App() {
  return (
    <div className="App">
      <CustomNavbar />
      <Header />
      <Profile/>
      <Key/>
      <Card/>


      <DDtools/>
      <Features/>
      <UItemplate/>
      <Footer1/>
    </div>
  );
}

export default App;








