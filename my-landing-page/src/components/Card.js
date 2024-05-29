import React from 'react';
import './CSS/Card.css';

import flexible from './assets/flexibleGrid.svg';
import style from './assets/styleGrid.svg';
import spacing from './assets/spacing.svg';
import responsive from './assets/responsive.svg';

const Card = ({ icon, title, description }) => {
  return (
    <div className="card">
      <div className="card-icon">
        <img src={icon} alt={title} />
      </div>
      <h3 className="card-title">{title}</h3>
      <p className="card-description">{description}</p>
      <a href="#" className="card-link">See How</a>
    </div>
  );
};

const CardGrid = () => {
  const cards = [
    { icon: flexible, title: 'Flexible Grid', description: 'Change grid variables or give decimal column size.' },
    { icon: style, title: 'Style guide', description: 'Update theme throughout the application easily.' },
    { icon: spacing, title: 'Spacing', description: 'A better and controlled way of update spacing.' },
    { icon: responsive, title: 'Responsive', description: 'Better control to make the app responsive.' },
  ];

  return (
    <div className="card-grid">
      {cards.map((card, index) => (
        <Card key={index} icon={card.icon} title={card.title} description={card.description} />
      ))}
    </div>
  );
};

export default CardGrid;
