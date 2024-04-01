import React from 'react';
import '../styles/CardInfoStyles.css'; // Import CSS file for styling

// Child component for individual cards
const Card = ({ title, info }) => {
  return (
    <div className="card">
      <h3>{title}</h3>
      <p>{info}</p>
    </div>
  );
};

// Parent component
const CardInfo = () => {
  return (
    <div className="container">
      <div className="center">
        <h1>What are our features</h1>
        <p>This are some of our features which makes us better car insurance company than other in this field. Having machine learning in our insurance claim dectection make our insurance more secure and easier for the customer to claim their insurance and less time</p>
      </div>
      <div className="cards">
        <Card title="Feature1" info="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                   Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                   Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
        <Card title="Feature2" info="Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                   Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                   Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
        <Card title="Feature3" info="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                                   nisi ut aliquip nisi ut aliquip nisi ut aliquip nisi ut aliquip nisi ut aliquip 
                                   ex ea commodo consequat.ex ea commodo consequat.ea commodo consequat." />
      </div>
    </div>
  );
};

export default CardInfo;
