import React from 'react';
import { Button } from 'react-bootstrap';
// import { ReactComponent as PlayIcon } from './play-button.svg'; // Make sure the path is correct
import './Header.css';

function Header() {
  return (
    <div className="headers">
      <h1>Design System for React JS</h1>
      <p>
        Atomize React is a UI framework that helps developers collaborate with
        <br />
        designers and build consistent user interfaces effortlessly.
      </p>
      <div className="buttons">
        <Button variant="primary" className="custom-btn-primary">Get Started Now</Button>
        <Button variant="secondary" className="custom-btn-secondary">
           Watch Video
        </Button>
      </div>
      {/* Add SocialIcons component here if needed */}
    </div>
  );
}

export default Header;
