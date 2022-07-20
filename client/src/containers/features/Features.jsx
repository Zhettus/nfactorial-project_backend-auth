import React from 'react';
import Feature from '../../components/feature/Feature';
import './features.css';

const featuresData = [
  {
    title: 'Argument 1',
    text: 'Text of argument 1.',
  },
  {
    title: 'Argument 2',
    text: 'Text of argument 2.',
  },
  {
    title: 'Argument 3',
    text: 'Text of argument 3.',
  },
  {
    title: 'Argument 4',
    text: 'Text of argument 4.',
  },
];

const Features = () => (
  <div className="site__features section__padding" id="features">
    <div className="site__features-heading">
      <h1 className="gradient__text">About inclusive education</h1>
      <p>Some text about inclusive education and etc</p>
    </div>
    <div className="site__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;
