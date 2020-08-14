import React from 'react';
import { Link } from 'react-router-dom';
const HomePage = () => {
  return (
    <>
      <div className="container">
        <Link to="/frontendData">Table With FrontEnd Data</Link>
      </div>
      <div className="container">
        <Link to="/backendData">Table With FrontEnd Data</Link>
      </div>
      <div className="container">
        <Link to="/frontendDataInfineScroll">Table With FrontEnd Data</Link>
      </div>
      <div className="container">
        <Link to="/backendDataInfineScroll">Table With FrontEnd Data</Link>
      </div>
    </>
  );
};

export default HomePage;
