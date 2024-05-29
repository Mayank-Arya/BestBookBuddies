import React from 'react';
import './CSS/DDtools.css';

import diamond from './assets/diamond.svg';
import react from './assets/react.svg';

const ToolCard = ({ icon, title, description }) => {
  return (
    <div className="tool-card">
      <div className="tool-card-icon">
        <img src={icon} alt={title} />
      </div>
      <h3 className="tool-card-title">{title}</h3>
      <p className="tool-card-description">{description}</p>
      <a href="#" className="tool-card-link"><span class="arrow">Design Resources    →</span></a>
    </div>
  );
};

const DDTools = () => {
  const tools = [
    { icon: diamond, title: 'Design', description: 'Design your website by using Atomize sketch.' },
    { icon: react, title: 'Development', description: 'Bring your design for life by Atomize React JS.' },
  ];

  return (
    <div>
      <h2 className="common-heading">A combination of tools to design and develop <br/> modern applications at ease.</h2>
      <div className="tool-card-grid">
        {tools.map((tool, index) => (
          <ToolCard key={index} icon={tool.icon} title={tool.title} description={tool.description} />
        ))}
      </div>
    </div>
  );
};

export default DDTools;
