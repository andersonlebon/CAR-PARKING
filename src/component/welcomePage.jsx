import React from "react";
import { Link } from "react-router-dom";

const WelcomePage = () => {
  return (
    <div className="welcome">
      <div className="w-container">
        <div className="image"></div>
        <div className="w-buttons">
          <Link to="/home/list">List of Cars</Link>
          <Link to="/home/registerNewCar/new">Rgesister a new Car</Link>
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;
